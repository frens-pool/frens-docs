import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://app.frens.fun/">
            Pool with Frens (goerli testnet)
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/frens-docs">
            How to Frens - 5 min ⏱️
          </Link>
        </div>
      </div>

      <section className={styles.features}>
        <div className="container" style={{ textAlign: 'center' }}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ceTEZGGXCRo?si=f3tn6KSaeB3iSEM5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </section>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
        <html lang="en-US">
      <head>
        <meta charset="UTF-8" />
        <meta
          http-equiv="refresh"
          content="0; url=docs/intro.html"
        />
        <script type="text/javascript">
          window.location.href = 'docs/intro.html';
        </script>
        <title>Your Site Title Here</title>
      </head>
      <body>
        If you are not redirected automatically, follow this
        <a href="docs/intro.html">link</a>.
      </body>
    </html>
  );
}
