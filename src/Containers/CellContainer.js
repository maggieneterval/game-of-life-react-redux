import { connect } from 'react-redux';
import Cell from '../Components/Cell';
import { createToggleAction } from '../actions/action-creators';

const mapStateToProps = (state, ownProps) => ({
  board: state.board,
  x: ownProps.x,
  y: ownProps.y
});

const mapDispatchToProps = (dispatch) => ({
  toggleCell: (x, y) => {
    dispatch(createToggleAction(x,y));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);
