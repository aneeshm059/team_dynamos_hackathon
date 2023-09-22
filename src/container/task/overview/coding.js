import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Select, notification } from 'antd';
import { TaskListWrap } from '../style';
import { defineTheme } from './defineTheme';
import { Cards } from '../../../components/cards/frame/cards-frame';
import CodeEditorWindow from './CodeEditorWindow';
import { languageOptions } from './languageOptions';
import { Button } from '../../../components/buttons/buttons';
import axios from 'axios';

const javascriptDefault = `/**
* Please type your code here
*/
`;

function Coding() {
  const location = useLocation();
  const assignment = location.state.assignment;
  const [code, setCode] = useState(javascriptDefault);
  const [customInput, setCustomInput] = useState('');
  const [language, setLanguage] = useState(languageOptions[0].value);
  const [theme, setTheme] = useState('cobalt');
  const children = [];
  languageOptions.map((languageObj) => children.push(<Option key={languageObj.value}>{languageObj.name}</Option>));
  const onSelectChange = (sl) => {
    console.log('selected Option...', sl);
    setLanguage(sl);
  };
  const findLanguageId = (value) => {
    var langId;
    languageOptions.map((languageObj) => {
      if (languageObj.value === value) {
        langId = languageObj.id;
      }
    });
    return langId;
  };
  const handleCompile = (event) => {
    event.currentTarget.disabled = true;
    const formData = {
      language_id: findLanguageId(language),
      source_code: btoa(code),
      stdin: btoa(customInput),
    };
    const options = {
      method: 'POST',
      url: 'https://judge0-ce.p.rapidapi.com/submissions',
      params: { base64_encoded: 'true', fields: '*', wait: true },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        'X-RapidAPI-Key': '600d046ef4msh1c8f1c0ab256eb4p1dfa9ejsndbef161b775d',
      },
      data: formData,
    };
    axios
      .request(options)
      .then(function (response) {
        console.log('res.data', response.data);
        const outputDetails = response.data;
        handleOutput(outputDetails);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        console.log('catch block...', error);
      });
  };
  const onChange = (action, data) => {
    switch (action) {
      case 'code': {
        setCode(data);
        break;
      }
      default: {
        console.warn('case not handled!', action, data);
      }
    }
  };
  useEffect(() => {
    defineTheme('oceanic-next').then((_) => setTheme({ value: 'oceanic-next', label: 'Oceanic Next' }));
  }, []);

  const handleOutput = (outputDetails) => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      notification['error']({
        message: 'Compilation Error',
        description: atob(outputDetails?.compile_output),
      });
    } else if (statusId === 3) {
      notification['success']({
        message: 'Exection Success',
        description: 'Output : ' + atob(outputDetails.stdout) !== null ? `${atob(outputDetails.stdout)}` : null,
      });
    } else if (statusId === 5) {
      notification['error']({
        message: 'Time Limit Exceeded',
        description: '',
      });
    } else {
      notification['error']({
        message: 'Time Limit Exceeded',
        description: atob(outputDetails?.stderr),
      });
    }
  };

  return (
    <TaskListWrap className="mb-30">
      <Cards headless>
        <div>
          <p>
            <b dangerouslySetInnerHTML={{ __html: assignment.qyestionDescription }} />
          </p>
        </div>
        <Select defaultValue={language} onChange={onSelectChange} style={{ width: 200, paddingBottom: '20px' }}>
          {children}
        </Select>
        <CodeEditorWindow code={code} language={language} onChange={onChange} />
        <div style={{ paddingTop: '20px' }}>
          <Button onClick={handleCompile} disabled={!code} size="default" shape="circle" type="primary">
            Submit
          </Button>
        </div>
      </Cards>
    </TaskListWrap>
  );
}

export default Coding;
