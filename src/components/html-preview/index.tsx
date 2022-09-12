import React, {
  useContext,
} from 'react';

import {
  CodeContext,
} from '../code-provider';

import styles from './index.module.scss';
import '@/styles/markdown.css';

function HtmlPreview() {
  const {
    html,
  } = useContext(CodeContext);

  return (
    <div
        className={ styles.preview }
        dangerouslySetInnerHTML={ {
          __html: html,
        } } />
  );
}

export default HtmlPreview;
