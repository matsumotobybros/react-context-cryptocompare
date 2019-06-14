import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import { SelectableTile } from "../Shared/Title";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 14px;
`;

export default function(props) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridStyled>
          {Object.keys(coinList).map(coinKey => (
            <SelectableTile>{coinKey}</SelectableTile>
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
