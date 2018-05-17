export const getshops = async zip => {
  let shopResults = [];
  const shopArray = await fetchShops(zip);
  if (shopArray) {
    if (shopArray[0] === "error") {
      return "error";
    } else {
      shopResults = shopAvailable(shopArray);
    }
  } else {
    return;
  }
  return shopResults;
};

// fetches from the API 
const fetchShops = async zip => {
  let results = await fetch(
    `https://shipt-zip-code-test-api.herokuapp.com/api/zip_codes/${zip}`
  );
  let data = await results.json();

  if (data.hasOwnProperty("error")) {
    return ["error"];
  } else {
    return data.stores;
  }
};

// checks the opened date of each shop with today's date
// outputs a formatted array with an object of strings ready for display
const shopAvailable = shopArray => {
  let today = new Date();

  const resultsArray = [];

  for (let i = 0; i < shopArray.length; i++) {
    let obj = {};
    let shopDate = new Date(shopArray[i]["launch_date"]);
    let open = openYet(today, shopDate);

    obj["name"] = shopArray[i]["name"];

    if (open) {
      obj["available"] = "Now Available";
    } else {
      obj["available"] = "Coming " + convertDateToString(shopDate);
    }

    resultsArray.push(obj);
  }
  return resultsArray.sort((a, b) => (a.name > b.name ? 1 : -1));
};

// returns true if the shop is already open
const openYet = (today, shopDate) => {
  if (today - shopDate >= 0) {
    return true;
  } else {
    return false;
  }
};

const convertDateToString = date => {
  let month = (date.getMonth() + 1).toString();
  let year = date
    .getFullYear()
    .toString()
    .slice(2);
  let dateString = month + "/" + year;
  return dateString;
};
