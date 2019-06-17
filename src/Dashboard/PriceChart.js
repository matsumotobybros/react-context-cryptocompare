import hightChartsConfig from './HightChartsConfig';
import React from 'react';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import ReactHightcharts from 'react-highcharts';
import HightChartTheme from './HighChartTheme';

ReactHightcharts.Highcharts.setOptions(HightChartTheme);

export default function() {
  return (
    <AppContext.Consumer>
      {({ historical }) => (
        <Tile>
          {historical ? (
            <ReactHightcharts config={hightChartsConfig(historical)} />
          ) : (
            <div> Loading Historical Data </div>
          )}
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
