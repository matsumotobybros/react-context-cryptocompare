import React from "react";
import { AppContext } from "../App/AppProvider";
import { SelectableTile, DeletableTile, DisableTile } from "../Shared/Title";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

export default function({ coinKey, topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[coinKey];

        let TitleClass = SelectableTile;
        if (topSection) {
          TitleClass = DeletableTile;
        }
        return (
          <TitleClass>
            <CoinHeaderGrid
              topSection={topSection}
              name={coin.CoinName}
              symbol={coin.Symbol}
            >
              {coin.CoinName}
            </CoinHeaderGrid>
            <CoinImage coin={coin} />
          </TitleClass>
        );
      }}
    </AppContext.Consumer>
  );
}
