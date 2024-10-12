//@ts-nocheck
import hcjImg from "@site/static/img/about/hcj.png";
import vrImg from "@site/static/img/about/vue_react.png";
import tsImg from "@site/static/img/about/typescript.png";
import flowImg from "@site/static/img/about/flow.png";
import miniImg from "@site/static/img/about/mini.png";
import otherImg from "@site/static/img/about/other.png";
import React from "react";

export const skill = [
  {
    title: "三剑客",
    icon: hcjImg,
    description: "熟练使用html、css和javaScript",
  },
  ,
  {
    id: "ts",
    title: "Ts",
    icon: tsImg,
    description: "熟练使用typeScript",
  },
  {
    id: "vr",
    title: "框架",
    icon: vrImg,
    description: "熟练使用vue和react 及其周边生态",
  },
  {
    id: "flow",
    title: "架构",
    icon: flowImg,
    description: "熟练搭建前端项目，封装基础工具，以及集成各种工具如：eslint、prettier、babel、rollup等。",
  },
  {
    id: "otherFe",
    title: "其它前端技术",
    icon: miniImg,
    description: "熟练掌握小程序，混合应用开发如uniapp、cordova、taro，了解和使用了webRTC、jssip",
  },
  {
    id: "other",
    title: "不重要技能",
    icon: otherImg,
    description: "为更好服务前端，也会些其它技术，并已应用，不仅限于：java、springBoot、node、nestjs、mysql、redist、android、centos、jenkins等。",
  },
];

export const bodys = [
  [
    {
      key: "求职意向",
      desc: "前端开发",
    },
 
    {
      key: "经　　验",
      desc: "8年",
    },
  ], [
    {
      key: "学历",
      desc: "本科",
    },
    {
      key: "专业",
      desc: "计算机科学与技术",
    },
  ]
  , [
    {
      key: "电话",
      desc: "18211109905",
    },
    {
      key: "邮箱",
      desc: "960423114@qq.com",
    },
  ],
  , [
    {
      key: "个人网站",
      desc: (
        <a href="https://dingshaohua.cn" target="_blank">
          dingshaohua.cn
        </a>
      ),
    },
    {
      key: "博 客 园",
      desc: (
        <a href="https://www.cnblogs.com/dingshaohua" target="_blank">
          cnblogs.com/dingshaohua
        </a>
      ),
    }
  ]
];

export const works = [
  {
    key: (
      <a href="https://taro-ext.jd.com/plugin/view/630343427a7801f3c634664b" target="_blank">
        taro-swiper-week
      </a>
    ),
    desc: "小程序插件日期选择插件",
  },
  {
    key: (
      <a href="https://tiptap.dingshaohua.com" target="_blank">
        tiptap编辑器中文网
      </a>
    ),
    desc: (
      <span>
        站长，目前
        <a href="https://www.baidu.com/s?wd=tiptap" target="_blank">
          百度搜索排名的位置在第一
        </a>
      </span>
    ),
  },
  {
    key: (
      <a href="https://www.npmjs.com/package/vue3-infinite-scroll-good" target="_blank">
        vue3-infinite-scroll-good
      </a>
    ),
    desc: "vue3版本的上拉刷新下拉加载插件",
  },
  {
    key: (
      <a href="https://www.npmjs.com/package/vuepress-plugin-anchor-right" target="_blank">
        vuepress-plugin-anchor-right
      </a>
    ),
    desc: (
      <span>
        {" "}
        vuepress插件，已经被收录在
        <a href="https://github.com/vuepress/awesome-vuepress/blob/main/v2.md" target="_blank">
          官网中
        </a>
      </span>
    ),
  },
  {
    key: (
      <a href="https://han96.com" target="_blank">
        han96.com后端开发
      </a>
    ),
    desc: (
      <a href="https://gitee.com/dingshaohua-cn/blog-server" target="_blank">
        编写后端服务，数据存储，登录鉴权，评论通知等
      </a>
    ),
  },
  {}
];
