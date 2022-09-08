import React, {
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from 'react';

import MD from '@/lib/md';

const CodeContext = React.createContext({
  code: '',
  html: '',
  codeOnChange: () => {},
});

CodeContext.displayName = 'CodeContext';

const defaultCode = `
# Markdown Editor

Build with:

1. Vite
2. React
3. remark
`;

const CodeProvider = ({
  children,
}: {
  children: ReactNode,
}) => {
  const [
    code,
    setCode,
  ] = useState(defaultCode.trim());
  const [
    html,
    setHtml,
  ] = useState('');
  useEffect(() => {
    MD.parse(defaultCode.trim())
      .then((text) => setHtml(text));
  }, []);

  const codeOnChange = async (value) => {
    setCode(value);
    setHtml(await MD.parse(value));
  };

  const contextValue = useMemo(() => ({
    code,
    html,
    codeOnChange,
  }), [
    code,
    html,
  ]);

  return (
    <CodeContext.Provider
        value={ contextValue }>
      { children }
    </CodeContext.Provider>
  );
};

export {
  CodeContext,
  CodeProvider,
};
