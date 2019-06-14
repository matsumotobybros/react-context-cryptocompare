import React from "react";
import { AppContext } from "../App/AppProvider";
import { SelectableTile, DeletableTile, DisableTile } from "../Shared/Title";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
  return topSection
    ? () => {
        removeCoin(coinKey);
      }
    : () => {
        addCoin(coinKey);
      };
}

export default function({ coinKey, topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, addCoin, removeCoin, isInfavorites }) => {
        let coin = coinList[coinKey];

        let TitleClass = SelectableTile;
        if (topSection) {
          TitleClass = DeletableTile;
        } else if (isInfavorites(coinKey)) {
          TitleClass = DisableTile;
        }
        return (
          <TitleClass
            onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
          >
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
