import { connect } from 'react-redux';
import App from '../Components/App';
import { createToggleAction,
         createStepAction,
         createSetRandomBoardAction,
         createClearBoardAction,
         createStartAutoplayActionAsync,
         createStopAutoplayActionAsync } from '../actions/action-creators';

const mapStateToProps = ({board, isAutoPlaying}) => ({
  board,
  isAutoPlaying
});

const mapDispatchToProps = (dispatch) => ({
  toggleCell: (x, y) => {
    dispatch(createToggleAction(x,y));
  },
  step: () => {
    dispatch(createStepAction());
  },
  setRandomBoard: () => {
    dispatch(createSetRandomBoardAction());
  },
  startAutoplay: () => {
    dispatch(createStartAutoplayActionAsync());
  },
  stopAutoplay: () => {
    dispatch(createStopAutoplayActionAsync());
  },
  clearBoard: () => {
    dispatch(createClearBoardAction());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
