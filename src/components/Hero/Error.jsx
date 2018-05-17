import React from "react";

const ErrorMessage = props => {
  if (!props.isError) {
    return null;
  } else {
    return (
      <p className="error-message">THIS ZIP IS INVALID! PLEASE TRY AGAIN</p>
    );
  }
};

export default ErrorMessage;
