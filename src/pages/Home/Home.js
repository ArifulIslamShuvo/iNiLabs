import React from 'react';
import Accounts from '../Accounts/Accounts';
import AllCards from '../AllCards/AllCards';
import AllInOneBank from '../AllInOneBank/AllInOneBank';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Transaction from '../Transaction/Transaction';

const Home = () => {
    return (
        <div>
            <Features />
            <Transaction />
            <AllCards />
            <AllInOneBank />
            <Accounts />
            <Footer />
        </div>
    );
};

export default Home;