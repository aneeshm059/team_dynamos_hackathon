import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Popover } from '../../components/popup/popup';
import { Steps, Step } from '../../components/steps/steps';

function Asssignmentb() {
  const [state, setState] = useState({
    current: 0,
    next: 0,
    prev: 0,
  });

  const next = (currentValue) => {
    setState({ ...state, next: currentValue });
  };

  const prev = (currentValue) => {
    setState({ ...state, prev: currentValue });
  };

  return (
    <>
      <Main>
        <Row gutter={25}>
          <Col md={24} sm={24} xs={24}>
            <Cards title="Basic Step" caption="The simplest use of Steps">
              <Steps size="small" onNext={next} onPrev={prev}>
                <Step title="Finished" />
                <Step title="In Progress" />
                <Step title="Waiting" />
              </Steps>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Asssignmentb;
