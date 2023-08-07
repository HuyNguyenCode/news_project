import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '../routes';
import DefaultLayout from '../components/Layout/DefaultLayout';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBlJ9AcR-LKRoIwXv648IU4Kj3i9VEe2KQ',
    authDomain: 'worldkeys-demo-c243b.firebaseapp.com',
    projectId: 'worldkeys-demo-c243b',
    storageBucket: 'worldkeys-demo-c243b.appspot.com',
    messagingSenderId: '771415649801',
    appId: '1:771415649801:web:33c45f026262272cb592d8',
    measurementId: 'G-M4EREVC3Y1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
    let Layout = DefaultLayout;
    return (
        <Router history={history}>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}
export default App;
