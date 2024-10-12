import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.scss";
import fmBoyImg from "@site/static/img/home/fm-boy.png";
import searchImg from "@site/static/img/home/search.gif";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className={styles.chome}>
          <div className={styles.bg}>
            <img className={styles.fmBoy} src={fmBoyImg} />
          </div>
          <div className={styles.content}>
            <div>
              <div className={styles.img}>
                <img src={searchImg} />
              </div>
              <div className={styles.btn}>
                <Link to="/about">
                  <button type="primary">开始阅读</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.webid}><a href="https://beian.miit.gov.cn" target="_blank">京ICP备2021029278号</a></div>
        </div>
      </main>
    </Layout>
  );
}
