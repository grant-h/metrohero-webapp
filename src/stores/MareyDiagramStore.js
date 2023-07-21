import Reflux from 'reflux';
import ImmutableStoreMixin from 'reflux-immutable';
import _ from 'lodash';
import request from 'superagent';

import MareyDiagramActions from '../actions/MareyDiagramActions';

import Utilities from '../utilities/Utilities';

import standardRoutes from '../standard-routes';

export default Reflux.createStore({

  listenables: MareyDiagramActions,

  mixins: [
    ImmutableStoreMixin
  ],

  _defaultState: {
    stationToStationDistances: {
      'A01_A02': 3535,
      'A01_B01': 905,
      'A02_A01': 3535,
      'A02_A03': 2105,
      'A03_A02': 2105,
      'A03_A04': 5660,
      'A04_A03': 5660,
      'A04_A05': 3140,
      'A05_A04': 3140,
      'A05_A06': 2720,
      'A06_A05': 2720,
      'A06_A07': 5240,
      'A07_A06': 5240,
      'A07_A08': 3515,
      'A08_A07': 3515,
      'A08_A09': 8492,
      'A09_A08': 8492,
      'A09_A10': 4923,
      'A10_A09': 4923,
      'A10_A11': 11242,
      'A11_A10': 11242,
      'A11_A12': 6673,
      'A12_A11': 6673,
      'A12_A13': 5295,
      'A13_A12': 5295,
      'A13_A14': 9985,
      'A14_A13': 9985,
      'A14_A15': 13555,
      'A15_A14': 13555,
      'B01_A01': 905,
      'B01_B02': 1365,
      'B02_B01': 1365,
      'B02_B03': 2838,
      'B03_B02': 2838,
      'B03_B35': 2949,
      'B04_B05': 3953,
      'B04_B35': 5163,
      'B05_B04': 3953,
      'B05_B06': 6503,
      'B06_B05': 6503,
      'B06_B07': 9435,
      'B07_B06': 9435,
      'B07_B08': 6889,
      'B08_B07': 6889,
      'B08_B09': 8332,
      'B09_B08': 8332,
      'B09_B10': 7950,
      'B10_B09': 7950,
      'B10_B11': 8730,
      'B11_B10': 8730,
      'B35_B03': 2949,
      'B35_B04': 5163,
      'C01_C02': 1825,
      'C01_D01': 961,
      'C02_C01': 1825,
      'C02_C03': 1401,
      'C03_C02': 1401,
      'C03_C04': 2166,
      'C04_C03': 2166,
      'C04_C05': 6458,
      'C05_C04': 6458,
      'C05_C06': 4354,
      'C05_K01': 5148,
      'C06_C05': 4354,
      'C06_C07': 6404,
      'C07_C06': 6404,
      'C07_C08': 2637,
      'C07_F03': 11612,
      'C08_C07': 2637,
      'C08_C09': 3468,
      'C09_C08': 3468,
      'C09_C10': 2509,
      'C10_C09': 2509,
      'C10_C11': 9137,
      'C11_C10': 8703,
      'C11_C12': 6814,
      'C12_C11': 7579,
      'C12_C13': 2845,
      'C13_C12': 2845,
      'C13_C14': 3125,
      'C13_J02': 19765,
      'C14_C13': 3125,
      'C14_C15': 2189,
      'C15_C14': 2189,
      'D01_C01': 961,
      'D01_D02': 1416,
      'D02_D01': 1416,
      'D02_D03': 2044,
      'D03_D02': 2044,
      'D03_D04': 1156,
      'D04_D03': 1156,
      'D04_D05': 2452,
      'D05_D04': 2452,
      'D05_D06': 2103,
      'D06_D05': 2103,
      'D06_D07': 2689,
      'D07_D06': 2689,
      'D07_D08': 3150,
      'D08_D07': 3150,
      'D08_D09': 10424,
      'D08_G01': 12795,
      'D09_D08': 10424,
      'D09_D10': 4063,
      'D10_D09': 4063,
      'D10_D11': 5196,
      'D11_D10': 5196,
      'D11_D12': 9070,
      'D12_D11': 9070,
      'D12_D13': 7051,
      'D13_D12': 7051,
      'E01_E02': 1927,
      'E01_F01': 2385,
      'E02_E01': 1927,
      'E02_E03': 1956,
      'E03_E02': 1956,
      'E03_E04': 4115,
      'E04_E03': 4115,
      'E04_E05': 4139,
      'E05_E04': 4139,
      'E05_E06': 7981,
      'E06_E05': 7981,
      'E06_E07': 9808,
      'E07_E06': 9808,
      'E07_E08': 6075,
      'E08_E07': 6075,
      'E08_E09': 9432,
      'E09_E08': 9432,
      'E09_E10': 12678,
      'E10_E09': 12678,
      'F01_E01': 2385,
      'F01_F02': 1279,
      'F02_F01': 1279,
      'F02_F03': 2351,
      'F03_C07': 11612,
      'F03_F02': 2351,
      'F03_F04': 3607,
      'F04_F03': 3607,
      'F04_F05': 2726,
      'F05_F04': 2726,
      'F05_F06': 5575,
      'F06_F05': 5575,
      'F06_F07': 6236,
      'F07_F06': 6236,
      'F07_F08': 4945,
      'F08_F07': 4945,
      'F08_F09': 6000,
      'F09_F08': 6000,
      'F09_F10': 7035,
      'F10_F09': 7035,
      'F10_F11': 8550,
      'F11_F10': 8550,
      'G01_D08': 12795,
      'G01_G02': 7179,
      'G02_G01': 7179,
      'G02_G03': 4615,
      'G03_G02': 4615,
      'G03_G04': 7565,
      'G04_G03': 7565,
      'G04_G05': 6600,
      'G05_G04': 6600,
      'J02_C13': 19765,
      'J02_J03': 18092,
      'J03_J02': 18092,
      'K01_C05': 5148,
      'K01_K02': 2086,
      'K02_K01': 2086,
      'K02_K03': 1872,
      'K03_K02': 1872,
      'K03_K04': 2374,
      'K04_K03': 2374,
      'K04_K05': 12549,
      'K05_K04': 12549,
      'K05_K06': 10339,
      'K05_N01': 24031,
      'K06_K05': 10339,
      'K06_K07': 12081,
      'K07_K06': 12081,
      'K07_K08': 12564,
      'K08_K07': 12564,
      'N01_K05': 24031,
      'N01_N02': 2840,
      'N02_N01': 2840,
      'N02_N03': 3302,
      'N03_N02': 3302,
      'N03_N04': 3034,
      'N04_N03': 3034,
      'N04_N06': 30257,
      'N06_N04': 30257,
      'N06_N07': 4050,
      'N07_N06': 4050,
      'N07_N08': 6524,
      'N08_N07': 6524,
      'N08_N09': 8503,
      'N09_N08': 8503,
      'N09_N10': 10417,
      'N10_N09': 10417,
      'N10_N11': 14441,
      'N11_N10': 14441,
      'N11_N12': 9755,
      'N12_N11': 9755
    },
    standardRouteByLineAndDirection: null,
    maxDistanceByLineAndDirection: null,
    distanceToLastStationByLineAndDirectionAndStationPair: null,
    stationNameByLineAndDirectionAndDistanceToLastStation: null,

    isLoading: false,
    error: null,
    trainStatuses: null,

    selectedLineCode: 'RD',
    selectedDirectionNumber: '1'
  },

  init() {
    this.onResetState();

    // construct an array of station-to-station data points for each pair of neighboring stations along the standard route for each line and direction of travel

    const standardRouteByLineAndDirection = {};

    const stationNameByCode = Utilities.getStationCodeNameMap();
    let previousStationCode = null;
    standardRoutes['StandardRoutes'].forEach((standardRoute) => {
      previousStationCode = null;

      const lineCode = standardRoute['LineCode'];
      if (lineCode === "YLRP") {
        return;
      }

      const directionNumber = standardRoute['TrackNum'];
      if (directionNumber === 2) {
        // the standard routes WMATA provides to us for track 2 need to be inverted
        _.reverse(standardRoute['TrackCircuits']);
      }

      standardRoute['TrackCircuits'].forEach((trackCircuit) => {
        const stationCode = trackCircuit['StationCode'];
        if (!stationCode) {
          return;
        }

        if (previousStationCode) {
          const previousStationName = stationNameByCode[previousStationCode];
          if (!previousStationName) {
            console.error("No station name for: " + previousStationCode);
            return;
          }

          const nextStationName = stationNameByCode[stationCode];
          if (!nextStationName) {
            console.error("No station name for: " + stationCode);
            return;
          }

          const key = `${previousStationCode}_${stationCode}`;
          const distance = this.state.get('stationToStationDistances').get(key);
          if (!distance) {
            console.error("No station-to-station distance for: " + key);
            return;
          }

          const entry = {
            key: key,
            stationCode: previousStationCode,
            stationName: previousStationName,
            nextStationName: nextStationName,
            distanceToNextStation: distance
          };

          if (!standardRouteByLineAndDirection[lineCode]) {
            standardRouteByLineAndDirection[lineCode] = {};
          }

          const directionNumber = standardRoute['TrackNum'];
          if (!standardRouteByLineAndDirection[lineCode][directionNumber]) {
            standardRouteByLineAndDirection[lineCode][directionNumber] = [entry];
          } else {
            standardRouteByLineAndDirection[lineCode][directionNumber].push(entry);
          }
        }

        previousStationCode = stationCode;
      });
    });

    // use the arrays we just constructed to compute the total distance from one end of each standard route to the other

    const maxDistanceByLineAndDirection = {};

    Object.keys(standardRouteByLineAndDirection).forEach(function(lineCode) {
      const standardRouteForLineByDirection = standardRouteByLineAndDirection[lineCode];
      Object.keys(standardRouteForLineByDirection).forEach(function(directionNumber) {
        const standardRouteForLineAndDirection = standardRouteForLineByDirection[directionNumber];

        if (!maxDistanceByLineAndDirection[lineCode]) {
          maxDistanceByLineAndDirection[lineCode] = {};
        }

        maxDistanceByLineAndDirection[lineCode][directionNumber] = _.sumBy(standardRouteForLineAndDirection, entry => entry.distanceToNextStation);
      });
    });

    // pre-compute the distances from each station in each standard route to the last station in that route

    const distanceToLastStationByLineAndDirectionAndStationPair = {};
    const stationNameByLineAndDirectionAndDistanceToLastStation = {};

    Object.keys(standardRouteByLineAndDirection).forEach(function(lineCode) {
      const standardRouteForLineByDirection = standardRouteByLineAndDirection[lineCode];
      Object.keys(standardRouteForLineByDirection).forEach(function(directionNumber) {
        const standardRouteForLineAndDirection = standardRouteForLineByDirection[directionNumber];

        if (!distanceToLastStationByLineAndDirectionAndStationPair[lineCode]) {
          distanceToLastStationByLineAndDirectionAndStationPair[lineCode] = {};
          stationNameByLineAndDirectionAndDistanceToLastStation[lineCode] = {};
        }

        if (!distanceToLastStationByLineAndDirectionAndStationPair[lineCode][directionNumber]) {
          distanceToLastStationByLineAndDirectionAndStationPair[lineCode][directionNumber] = {};
          stationNameByLineAndDirectionAndDistanceToLastStation[lineCode][directionNumber] = {};
        }

        standardRouteForLineAndDirection.forEach((startEntry, startIndex) => {
          let totalDistance = 0;
          for (let index = startIndex; index < standardRouteForLineAndDirection.length; index++) {
            const entry = standardRouteForLineAndDirection[index];
            totalDistance += entry.distanceToNextStation;
          }
          distanceToLastStationByLineAndDirectionAndStationPair[lineCode][directionNumber][startEntry.key] = totalDistance;
          stationNameByLineAndDirectionAndDistanceToLastStation[lineCode][directionNumber][totalDistance] = startEntry.stationName;
        });
        stationNameByLineAndDirectionAndDistanceToLastStation[lineCode][directionNumber][0] = standardRouteForLineAndDirection[standardRouteForLineAndDirection.length - 1].nextStationName;
      });
    });

    this.setState({
      standardRouteByLineAndDirection: standardRouteByLineAndDirection,
      maxDistanceByLineAndDirection: maxDistanceByLineAndDirection,
      distanceToLastStationByLineAndDirectionAndStationPair: distanceToLastStationByLineAndDirectionAndStationPair,
      stationNameByLineAndDirectionAndDistanceToLastStation: stationNameByLineAndDirectionAndDistanceToLastStation
    });
  },

  onSetState(obj) {
    this.setState(obj);
  },

  onResetState() {
    this.setState(this._defaultState);
  },

  onGetTrainData() {
    this.setState({
      isLoading: true,
      error: null,
      trainStatuses: null
    });

    request
      .get('%BASE_URL%/trains/mareydiagram')
      .set({
        Accept: 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: 0
      })
      .end((err, res) => {
        if (err) {
          MareyDiagramActions.getTrainData.failed(err);
        } else {
          MareyDiagramActions.getTrainData.completed(res.body);
        }
      });
  },

  onGetTrainDataFailed(err) {
    this.setState({
      isLoading: false,
      error: err
    });
  },

  onGetTrainDataCompleted(data) {
    this.setState({
      isLoading: false,
      error: null,
      trainStatuses: data
    });
  },
});
