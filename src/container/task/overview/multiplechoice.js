import React from 'react';
import { Radio, notification } from 'antd';
import { useLocation } from 'react-router-dom';
import { TaskListWrap } from '../style';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';

function MultipleChoice() {
  const location = useLocation();
  const assignment = location.state.assignment;
  const submit = (event) => {
    notification['success']({
      message: 'Answer Submitted',
      description: 'Please proceed to next question',
    });
    event.currentTarget.disabled = true;
  };

  return (
    <TaskListWrap className="mb-30">
      <Cards headless>
        <div>
          <b dangerouslySetInnerHTML={{ __html: assignment.qyestionDescription }} />
        </div>
        <Radio.Group>
          <div className="ant-radio-vertical">
            {assignment.choices.map((choice) => (
              <Radio value={choice}>{choice}</Radio>
            ))}
          </div>
          <div style={{ paddingTop: '20px' }}>
            <Button onClick={submit} size="default" shape="circle" type="primary">
              Submit
            </Button>
          </div>
        </Radio.Group>
      </Cards>
    </TaskListWrap>
  );
}

export default MultipleChoice;
