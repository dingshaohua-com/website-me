//@ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
// import qrImg from "@site/static/img/about/qr.png";
import ZpImg from "@site/static/img/about/作品.png";
import JnImg from "@site/static/img/about/技能.png";

import meImg from "@site/static/img/home/me.jpg";
import { skill, bodys, works } from "./helper";
import cs from 'classnames'



const CodeSandbox = (props) => {
  return (
    <div className={styles.PesonInfo}>
      <div className={styles.top}>
        <div className={styles.head}>
        <img className={styles.img} src={meImg} />

          <div className={styles.tag}>
            <div className={styles.name}>丁少华</div>
            <p>
              15年毕业 即入行前端，至今8年有余。一开始单纯开发，随着技术的进步，便开始项目搭建、工具封装、技术支撑、代码质量把控，慢慢就做了前端的管理层。
              热爱生活，热爱技术，喜欢专研，不断追求技术的广度和深度！</p>
          </div>
        </div>
        <div className={styles.body}>
          {bodys.map((it,index) => (
            <div className={styles.skip} key={index}>
              {it.map((i,ind) => (
                <div className={styles.opts} key={ind}>
                  <div>{i.key}</div>：<div>{i.desc}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <h2 className={styles.skillsLable}><img className="type-icon" src={ZpImg}/>一些作品</h2>
        <div className={styles.skills}>
          {works.map((it,index) => (
            <div className={cs(styles.skill, it.key?'':styles.hidden)} key={index}>
              <div className={styles.title}>{it.key}</div>
              <div className={styles.description}>{it.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <h2 className={styles.skillsLable}><img className="type-icon" src={JnImg}/>专业技能</h2>
        <div className={styles.skills}>
          {skill.map((it) => (
            <div className={styles.skill} key={it.title}>
              <div className={styles.img}>
                <img alt={styles.title} src={it.icon} className={styles[it.id]} />
              </div>
              <div className={styles.title}>{it.title}</div>
              <div className={styles.description}>{it.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom} style={{ display: 'none' }}>
        <div className={styles.skillsLable}>👩‍🎓学历</div>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <div className={styles.img}>
              <div>
                黄河水利职业技术学院
                <div className={styles.imgdesc}>计算机应用技术</div>
              </div>
            </div>
            <div className={styles.title}>专科</div>
            <div className={styles.description}>2013.9-2015.7</div>
          </div>
          <div className={styles.skill}>
            <div className={styles.img}>
              <div>
                华北水利水电大学
                <div className={styles.imgdesc}>计算机科学与技术</div>
              </div>
            </div>
            <div className={styles.title}>本科</div>
            <div className={styles.description}>2016.3-2018.7</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CodeSandbox;
