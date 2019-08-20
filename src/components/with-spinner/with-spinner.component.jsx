import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

//HOC
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

/*
This code below does the same thing.

const WithSpinner = wrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <wrappedComponent {...otherProps} />
    );
  };
  return Spinner
}
*/

export default WithSpinner;
