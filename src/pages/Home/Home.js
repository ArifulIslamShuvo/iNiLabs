import React from 'react';
import AllCards from '../AllCards/AllCards';
import AllInOneBank from '../AllInOneBank/AllInOneBank';
import Features from '../Features/Features';
import Transaction from '../Transaction/Transaction';

const Home = () => {
    return (
        <div>
            <Features />
            <Transaction />
            <AllCards />
            <AllInOneBank />
        </div>
    );
};

export default Home;