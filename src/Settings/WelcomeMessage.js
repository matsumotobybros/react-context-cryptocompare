import React from "react";
import { AppContext } from "../App/AppProvider";

export default function Welcome(props) {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <div>
            Welcome toCryptoDash, please select your favorite coins to begin.{" "}
          </div>
        ) : null
      }
    </AppContext.Consumer>
  );
}
