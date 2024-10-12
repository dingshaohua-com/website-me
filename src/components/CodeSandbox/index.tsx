//@ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import styles from "./index.module.scss";
import {evalScripts} from '../../utils'


const CodeSandbox = (props) => {
  const [html, setHtml] = useState();

  useEffect(async () => {
    const htmlStr = (await import(`!!raw-loader!/src/components${props.file}.html`)).default;
    setHtml(htmlStr);
    evalScripts(htmlStr)
  }, []);

  return (
    <div className={styles.CodeSandbox}>
      <Tabs>
        <TabItem value="preview" label="预览" default>
          <div className={styles.SandboxHtml} dangerouslySetInnerHTML={{ __html: html }} />
        </TabItem>

        <TabItem value="code" label="代码">
          <CodeBlock language="html">
            {html}
          </CodeBlock>
        </TabItem>
      </Tabs>
    </div>
  );
};
export default CodeSandbox;
