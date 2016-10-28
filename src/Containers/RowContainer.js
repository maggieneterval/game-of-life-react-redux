import { connect } from 'react-redux';
import Row from '../Components/Row';

const mapStateToProps = (state, ownProps) => ({
  board: state.board,
  x: ownProps.x
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Row);
