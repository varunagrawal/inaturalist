import React from "react";
import moment from "moment";
import { render } from "react-dom";
import { Provider } from "react-redux";
import inatjs from "inaturalistjs";

import languageSearchReducer, {
  fetchIconicTaxa,
  matchBrowserState,
  loadFromURL
} from "./reducers/language_search_reducer";
import LanguageSearchContainer from "./containers/language_search_container";
import confirmModalReducer from "../../shared/ducks/confirm_modal";
import { setConfig } from "../../shared/ducks/config";
import sharedStore from "../../shared/shared_store";

moment.locale( I18n.locale );

sharedStore.injectReducers( {
  languageSearch: languageSearchReducer,
  confirmModal: confirmModalReducer
} );

const element = document.querySelector( "meta[name=\"config:inaturalist_api_url\"]" );
const defaultApiUrl = element && element.getAttribute( "content" );
inatjs.setConfig( {
  apiURL: defaultApiUrl.replace( "/v1", "/v2" ),
  writeApiURL: defaultApiUrl.replace( "/v1", "/v2" )
} );
sharedStore.dispatch( setConfig( { testingApiV2: true } ) );

sharedStore.dispatch( fetchIconicTaxa( ) );

render(
  <Provider store={sharedStore}>
    <LanguageSearchContainer />
  </Provider>,
  document.getElementById( "app" )
);

sharedStore.dispatch( loadFromURL( ) );

window.onpopstate = e => {
  sharedStore.dispatch( matchBrowserState( e.state || { } ) );
};
