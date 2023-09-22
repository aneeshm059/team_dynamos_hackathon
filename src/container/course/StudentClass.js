import React, { useState } from 'react';
import { Row, Col } from 'antd';
import ModalVideo from 'react-modal-video';
import { CourseDetailsWrap } from './Style';
import { Main } from '../styled';
import { Button } from '../../components/buttons/buttons';
import '../profile/myProfile/overview/video-modal.css';

function StudentClass() {
  const [isOpen, setOpen] = useState(false);

  return (
    <CourseDetailsWrap>
      <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
      <Main>
        <Row gutter={25}>
          <Col lg={25} xs={24}>
            <div className="ninjadash-course-infobox">
              <div className="ninjadash-course-infobox__video">
                <iframe
                  height="315"
                  src="https://www.youtube.com/embed/dBd1j6x2HOo"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="ninjadash-course-infobox__action">
                <Button size="default" type="primary" onClick={() => setOpen(true)}>
                  Watch Recording
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Main>
    </CourseDetailsWrap>
  );
}

export default StudentClass;
