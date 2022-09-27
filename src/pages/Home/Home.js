import React from 'react';
import AllCards from '../AllCards/AllCards';
import Features from '../Features/Features';
import Transaction from '../Transaction/Transaction';

const Home = () => {
    return (
        <div>
            <Features />
            <Transaction />
            <AllCards />
        </div>
    );
};

export default Home;