import React, {
  useContext,
} from 'react';

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
      { html }
    </div>
  );
}

export default CodeViewer;
