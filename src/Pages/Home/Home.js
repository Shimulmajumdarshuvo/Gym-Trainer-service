import React from 'react';
import BestTrainer from '../BestTrainer/BestTrainer';
import Contact from '../Contact/Contact';
import FirstPage from '../FirstPage/FirstPage';
import GoogleMap from '../GoogleMap/GoogleMap';

import Plan from '../Plan/Plan';
import SecoundPage from '../SecoundPage/SecoundPage';
import SpecialDiet from '../SpecialDiet/SpecialDiet';
import WorkSection from '../WorkSection/WorkSection';

const Home = () => {
    return (
        <div>
            <FirstPage></FirstPage>
            <SecoundPage></SecoundPage>
            <WorkSection></WorkSection>
            <BestTrainer></BestTrainer>
            <SpecialDiet></SpecialDiet>
            <Plan></Plan>
            <GoogleMap></GoogleMap>
            <Contact></Contact>


        </div>
    );
};

export default Home;