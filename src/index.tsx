import * as _ from 'lodash';
import * as React from "react";
import * as ReactDOM from 'react-dom'
import BookList from './containers/book-list'
import BookDetail from './containers/book-detail'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

interface AppProps {};
interface AppState {};

class App extends React.Component<AppProps,AppState> {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

    return ( 
    <div>
     <BookList />
     <BookDetail />
    </div>
    );
    }
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
     <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    ,document.querySelector('.container'));