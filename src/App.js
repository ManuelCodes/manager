import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        var config = {
            apiKey: "AIzaSyB8IzyQxhwjv8gAvCd156PpG8zSNIh8QDQ",
            authDomain: "manager-27cb0.firebaseapp.com",
            databaseURL: "https://manager-27cb0.firebaseio.com",
            projectId: "manager-27cb0",
            storageBucket: "manager-27cb0.appspot.com",
            messagingSenderId: "888694979261"
          };
          firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk) );
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;