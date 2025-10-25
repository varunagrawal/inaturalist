import { connect } from "react-redux";
import Observation from "../components/observation";

const mapStateToProps = state => ({
  votes: state.languageSearch.votes,
  votingEnabled: state.languageSearch.votingEnabled,
  config: state.config
});

const mapDispatchToProps = dispatch => ({

});

const PhotoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Observation);

export default PhotoContainer;
