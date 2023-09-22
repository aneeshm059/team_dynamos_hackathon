import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useLocation } from 'react-router-dom';
import { notification } from 'antd';
import { TaskListWrap } from '../style';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';

function Passage() {
  const location = useLocation();
  const assignment = location.state.assignment;
  const submit = (event) => {
    notification['success']({
      message: 'Answer Submitted',
      description: 'Please proceed to next question',
    });
    event.currentTarget.disabled = true;
  };
  const handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  };
  return (
    <TaskListWrap className="mb-30">
      <Cards headless>
        <div>
          <p>
            <b dangerouslySetInnerHTML={{ __html: assignment.qyestionDescription }} />
          </p>
        </div>
        <div className="editor-compose">
          <Editor
            apiKey="a2wzs54av0zgzp7l9a4so499zs2pvi3cld7ra9jwy300r2zv"
            initialValue="<p>This is the initial content of the editor</p>"
            init={{
              plugins:
                'mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
              toolbar:
                'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
            }}
            onChange={handleEditorChange}
          />
        </div>
        <div style={{ paddingTop: '20px' }}>
          <Button onClick={submit} size="default" shape="circle" type="primary">
            Submit
          </Button>
        </div>
      </Cards>
    </TaskListWrap>
  );
}

export default Passage;
