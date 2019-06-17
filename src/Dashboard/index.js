import React from 'react';
import Page from '../Shared/index';
import PriceGrid from './PirceGrid';
import CoinSpotlight from './CoinSpotlight';
import styled from 'styled-components';
import PriceChart from './PriceChart';

const ChartGrid = styled.div`
  display: grid;
  margin-top: 20px;
  grid-gap: 15px;
  grid-template-columns: 1fr 3fr;
`;

export default function() {
  return (
    <Page name="dashboard">
      <PriceGrid />
      <ChartGrid>
        <CoinSpotlight />
        <PriceChart />
      </ChartGrid>
    </Page>
  );
}