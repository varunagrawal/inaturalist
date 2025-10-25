import { connect } from "react-redux";
import LanguageSearchApp from "../components/language_search_app";
import {
  languageSearch,
  nextPage,
  previousPage,
  viewInIdentify,
  acknowledgeSubmission,
  resetState
} from "../reducers/language_search_reducer";

const mapStateToProps = state => ( {
  ...state.languageSearch,
  config: state.config
} );

const mapDispatchToProps = dispatch => ( {
  languageSearch: ( searchTerm, searchTaxon ) => {
    dispatch( languageSearch( searchTerm, searchTaxon ) );
  },
  nextPage: options => {
    dispatch( nextPage( options ) );
  },
  previousPage: options => {
    dispatch( previousPage( options ) );
  },
  viewInIdentify: ( ) => {
    dispatch( viewInIdentify( ) );
  },
  acknowledgeSubmission: ( ) => {
    dispatch( acknowledgeSubmission( ) );
  },
  resetState: ( ) => {
    dispatch( resetState( ) );
  }
} );

const LanguageSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( LanguageSearchApp );

export default LanguageSearchContainer;
