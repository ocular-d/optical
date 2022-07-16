import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--6", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img
            className={classnames("padding-vert--md", styles.featureImage)}
            src={imgUrl}
            alt={title}
          />
        </div>
      )}
      <h3>{title}</h3>
      {description}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Things"
      keywords={[
        "ocular-d",
      ]}
    >
      <header className={classnames("hero", styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={classnames("col col--5 col--offset-1")}>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <p>
                How guidelines and tools can help!
              </p>
              <div className={styles.buttons}>
                <Link
                  className={classnames(
                    "button button--outline button--primary button--lg",
                    styles.getStarted
                  )}
                  to={useBaseUrl("main-intro")}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className={classnames("col col--5")}>
              <img
                className={styles.heroImg}
                src="img/pngegg.png"
                class="onna-home-animation"
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="box-wrapper" markdown="1">
            <div className="box box1 card">
              <div className="container">
                <h2>Guides</h2>
                <p>Getting started, guides and tutorials.</p>
                <ul>
                  <li>
                    <a href="https://styleguide.mailchimp.com/">Mailchimp</a>
                  </li>
                  <li>
                    <a href="https://developers.google.com/style">Google</a>
                  </li>
                  <li>
                    <a href="https://docs.microsoft.com/en-gb/style-guide/welcome/">Microsoft Style Guide</a>
                  </li>
                  <li>
                    <a href="https://github.com/testthedocs/awesome-docs#style-guides">TestTheDocs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box box2 card">
              <div className="container">
                <h2>Tools</h2>
                <p>Tools that can help</p>
                <ul>
                  <li>
                    <a href="https://docs.errata.ai/">Vale</a>
                  </li>
                  <li>
                    <a href="https://languagetool.org/">LanguageTool</a>
                  </li>
                  <li>
                    <a href="https://github.com/textlint/textlint">Text Lint</a>
                  </li>
                </ul>
                <p>And many more!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container"><p></p></div>
      </main>
    </Layout>
  );
}

export default Home;
