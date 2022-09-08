import React from 'react';

import {
  CodeProvider,
} from '../code-provider';
import CodeEditor from '../code-editor';
import CodeViewer from '../code-viewer';
import HtmlPreview from '../html-preview';

import styles from './index.module.scss';

function MainFrame() {
  return (
    <div
        className={ styles.frame }>
      <CodeProvider>
        <CodeEditor />
        <CodeViewer />
        <HtmlPreview />
      </CodeProvider>
    </div>
  );
}

export default MainFrame;
