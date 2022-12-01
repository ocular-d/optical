import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Hero from "../theme/sections/hero/hero";
// import HomeCallouts from "../theme/sections/home-callouts/home-callouts";
import HomeEcosystem from "../theme/sections/home-ecosystem/home-ecosystem";
//import HomeLearnWithUs from "../theme/sections/home-learn-with-us/home-learn-with-us";
import HomeGetInvolved from "../theme/sections/home-get-involved/home-get-involved";
// import HomePlaygroundEmbed from '../theme/sections/home-playground-embed/home-playground-embed';


function Home() {
    const context = useDocusaurusContext();
    const { siteConfig: { customFields = {}, tagline } = {} } = context;
    const title = "Optical"
    return (
        <Layout
            permalink="/"
            title={tagline}
            description={customFields.description}>
            <main>
                <Hero title={title} />
                {/* <HomeCallouts /> */}
                <HomeEcosystem />
                {/* <HomePlaygroundEmbed />
                <HomeLearnWithUs /> */}
                {/* <HomeGetInvolved /> */}
            </main>
        </Layout>
    );
}

export default Home;
