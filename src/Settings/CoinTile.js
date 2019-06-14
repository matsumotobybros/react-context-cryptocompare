import React from "react";
import { AppContext } from "../App/AppProvider";
import { SelectableTile } from "../Shared/Title";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

export default function({ coinKey }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[coinKey];

        const TitleClass = SelectableTile;
        return (
          <TitleClass>
            <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol}>
              {coin.CoinName}
            </CoinHeaderGrid>
            <CoinImage coin={coin} />
          </TitleClass>
        );
      }}
    </AppContext.Consumer>
  );
}
