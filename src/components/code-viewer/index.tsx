import React, {
  useContext,
} from 'react';
import prettier from 'prettier/standalone';
import htmlParser from 'prettier/parser-html';

import {
  CodeContext,
} from '../code-provider';

import styles from './index.module.scss';

function CodeViewer() {
  const {
    html,
  } = useContext(CodeContext);

  return (
    <div
        className={ styles.viewer }>
      { prettier.format(html, {
        parser: 'html',
        plugins: [
          htmlParser,
        ],
      }) }
    </div>
  );
}

export default CodeViewer;
