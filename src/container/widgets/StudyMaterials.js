import React from 'react';
import { Row, Col } from 'antd';
import { FileCardWrapper } from '../styled';
import FileListCard from '../project/overview/FileListCard';

function StudyMaterials() {
  return (
    <>
      <Row gutter="25">
        <Col lg={8} xs={24}>
          <FileCardWrapper>
            <FileListCard />
          </FileCardWrapper>
        </Col>
      </Row>
    </>
  );
}

export default StudyMaterials;
