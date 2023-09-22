import React, { useState } from 'react';
import { Row, Col, Radio } from 'antd';
import Countdown from 'react-countdown';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, ComingsoonStyleWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Steps } from '../../components/steps/steps';

function AssessmentPage() {
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
  function Completionist() {
    return <span>Time out !!!</span>;
  }
  function renderer({ hours, minutes, seconds, completed }) {
    if (completed) {
      return <Completionist />;
    }
    return (
      <div className="countdwon-data">
        <span>
          <div className="countdown-time">{hours}</div>
          <span className="countdown-title">Hours</span>
        </span>
        <span>
          <div className="countdown-time">{minutes}</div>
          <span className="countdown-title">Minutes</span>
        </span>
        <span>
          <div className="countdown-time">{seconds}</div> <span className="countdown-title">Seconds</span>
        </span>
      </div>
    );
  }

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Assessment" />
      <Main>
        <Row gutter={25}>
          <Col md={10} sm={10} xs={10}>
            <ComingsoonStyleWrapper>
              <div className="strikingDash-countdown">
                <Countdown date={Date.now() + 2700000} renderer={renderer} />
              </div>
            </ComingsoonStyleWrapper>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col md={24} sm={24} xs={24}>
            <Cards headless>
              <Steps
                isswitch
                steps={[
                  {
                    content: (
                      <div>
                        <p>
                          <h3>What does the term digital literacy refer to?</h3>
                        </p>
                        <p>
                          <Radio.Group>
                            <Radio value={1}>The ability to use a typewriter</Radio>
                            <br />
                            <Radio value={2}>The ability to read and write in binary code</Radio>
                            <br />
                            <Radio value={3}>The ability to use digital devices and technology effectively</Radio>
                            <br />
                            <Radio value={4}>The ability to repair computer hardware</Radio>
                          </Radio.Group>
                        </p>
                      </div>
                    ),
                  },
                  {
                    content: 'Second-content',
                  },
                  {
                    content: 'Last-content',
                  },
                  {
                    content: 'First-content',
                  },
                  {
                    content: 'Second-content',
                  },
                  {
                    content: 'Last-content',
                  },
                  {
                    content: 'First-content',
                  },
                  {
                    content: 'Second-content',
                  },
                  {
                    content: 'Last-content',
                  },
                  {
                    content: 'First-content',
                  },
                  {
                    content: 'Second-content',
                  },
                  {
                    content: 'Last-content',
                  },
                  {
                    content: 'First-content',
                  },
                  {
                    content: 'Second-content',
                  },
                  {
                    content: 'Last-content',
                  },
                ]}
                onNext={next}
                onPrev={prev}
              />
            </Cards>
          </Col>
          <Col md={24} sm={24} xs={24}></Col>
        </Row>
      </Main>
    </>
  );
}

export default AssessmentPage;
