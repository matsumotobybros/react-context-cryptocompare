import hightChartsConfig from './HightChartsConfig';
import React from 'react';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import ReactHightcharts from 'react-highcharts';

export default function() {
  return (
    <AppContext.Consumer>
      {({}) => (
        <Tile>
          <ReactHightcharts config={hightChartsConfig()} />
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
