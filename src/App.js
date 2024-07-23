import React from 'react'
import ReactDOM from 'react-dom/client'
import '../style.css'
import Header from './Components/Header';
import Body from './Components/Body';



const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
        </React.Fragment>
    );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
