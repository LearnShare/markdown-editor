import React, {
  useContext,
} from 'react';

import {
  CodeContext,
} from '../code-provider';

import styles from './index.module.scss';

function CodeEditor() {
  const {
    code,
    codeOnChange,
  } = useContext(CodeContext);

  const codeChanged = (event) => {
    codeOnChange(event.target.value);
  };

  return (
    <textarea
        className={ styles.editor }
        value={ code }
        onChange={ (event) => codeChanged(event) } />
  );
}

export default CodeEditor;
