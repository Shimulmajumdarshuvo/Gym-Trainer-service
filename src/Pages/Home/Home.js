import React from 'react';
import Review from '../About/Review/Review';
import BestTrainer from '../BestTrainer/BestTrainer';
import Contact from '../Contact/Contact';
import FirstPage from '../FirstPage/FirstPage';


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
            <Review></Review>

            <Contact></Contact>


        </div>
    );
};

export default Home;