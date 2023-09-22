import React, { useState } from 'react';

import Editor from '@monaco-editor/react';

const CodeEditorWindow = ({ onChange, language, code }) => {
  const [value, setValue] = useState(code || '');
  console.log('language received ' + language);
  const handleEditorChange = (value) => {
    setValue(value);
    onChange('code', value);
  };

  return (
    <Editor
      height="85vh"
      width={`100%`}
      language={language || 'javascript'}
      value={value}
      theme="oceanic-next"
      defaultValue="// some comment"
      onChange={handleEditorChange}
    />
  );
};
export default CodeEditorWindow;
