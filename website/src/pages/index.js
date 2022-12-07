import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Hero from "../theme/sections/hero/hero";
import HomeEcosystem from "../theme/sections/home-ecosystem/home-ecosystem";

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
                <HomeEcosystem />
            </main>
        </Layout>
    );
}

export default Home;
