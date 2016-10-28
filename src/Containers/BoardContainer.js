import { connect } from 'react-redux';
import Board from '../Components/Board';

const mapStateToProps = ({board}) => ({
  board
});

export default connect(
  mapStateToProps
)(Board);
