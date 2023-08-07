import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './containers/App';
import GlobalStyles from './components/GlobalStyles';

const renderApp = () => {
    ReactDOM.render(
        <React.StrictMode>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </React.StrictMode>,
        document.getElementById('root'),
    );
};

renderApp();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
