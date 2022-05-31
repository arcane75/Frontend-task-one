import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import AvailableForEveryOne from '../AvailableForEveryOne/AvailableForEveryOne';
import Banner from '../banner/Banner';
import Records from '../Records/Records';
import Slider from '../Slider/Slider';
import VersatileAdFormat from '../VersatileAdFormat/VersatileAdFormat';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Banner />
            <AvailableForEveryOne />
            <VersatileAdFormat />
            <Records />
            <Slider />
            <Footer />
        </div>
    );
};

export default HomePage;