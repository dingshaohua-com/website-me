//@ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import meImg from "@site/static/img/home/me.jpg";
import { skill } from "./helper";
import talkImg from "@site/static/img/about/talk.png";

const CodeSandbox = (props) => {
  return (
    <div className={styles.PesonInfo}>
      <Card title="我的博客园" style={{ width: 300 }}>
        <img src={useBaseUrl("/img/about/cnblogs.png")} width="100" />
        <p></p>
      </Card>
      <Card title="我的开源仓库" style={{ width: 300 }}>
        <img src={useBaseUrl("/img/about/github.png")} width="100" />
        <p></p>
      </Card>
    </div>
  );
};
export default CodeSandbox;
