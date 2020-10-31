/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Shell from '../components/shell';

const features = [
  {
    title: '愿景',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        成为全球最优秀IT服务商
      </>
    ),
  },
  {
    title: '使命',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        服务于以信息化推动进步
      </>
    ),
  },
  {
    title: '核心价值',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        率真存厚 立志有恒
        <br />
        奋斗为本 成就客户
        <br />
        创造分享 共同成长
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <Shell style={{margin: '5.5rem 0 2rem 0'}} />
          <div className={styles.buttons}>
            <Link
              style={{color:"#fff"}}
              className={clsx(
                'button button--outline button--secondary button--lg',
              )}
              to={useBaseUrl('docs/service/service-service')}>
              看看你都能服务什么
            </Link>
          </div>
        </div>
      </header>
      <main>

        {features && features.length > 0 && (
          <section className={styles.features}>

            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
