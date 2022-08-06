import React from 'react';
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
            <SpecialDiet></SpecialDiet>
            <Plan></Plan>


        </div>
    );
};

export default Home;