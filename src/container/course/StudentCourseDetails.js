import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Collapse, Badge } from 'antd';
import UilPlay from '@iconscout/react-unicons/icons/uil-play';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilMinus from '@iconscout/react-unicons/icons/uil-minus';
import ModalVideo from 'react-modal-video';
import { CourseDetailsWrap } from './Style';
import courseresponse from './courseresponse.json';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CollapseStyleWrap } from '../styled';
import '../profile/myProfile/overview/video-modal.css';

const { Panel } = Collapse;
const PageRoutes = [
  {
    path: 'index',
    breadcrumbName: 'Dashboard',
  },
  {
    path: 'course',
    breadcrumbName: 'Courses',
  },
];

function CourseDetails() {
  const path = '/student';
  const [isOpen, setOpen] = useState(false);

  return (
    <CourseDetailsWrap>
      <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
      <PageHeader className="ninjadash-page-header-main" title="Course " routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col lg={12} xs={24}>
            <div className="ninjadash-course-details-wrap">
              <div className="ninjadash-course-content">
                <h2 className="ninjadash-course-content-top-title">{courseresponse.name}</h2>
                <h2 className="ninjadash-course-content__title">About This Course </h2>
                <span dangerouslySetInnerHTML={{ __html: courseresponse.description }} />
                <h2 className="ninjadash-course-content__title">Course content </h2>
                <div className="ninjadash-course-content__lectures">
                  <CollapseStyleWrap>
                    <Collapse
                      bordered={false}
                      defaultActiveKey={['1']}
                      expandIcon={({ isActive }) => (isActive ? <UilMinus /> : <UilPlus />)}
                    >
                      {courseresponse.modules.map((module) => (
                        <Panel
                          header={module.name}
                          key={module.id}
                          extra={
                            <>
                              <Badge
                                className={
                                  module.status === 'Completed'
                                    ? 'badge-success'
                                    : module.status === 'Inprogress'
                                    ? 'badge-warning'
                                    : 'error'
                                }
                                count={module.status}
                              />
                            </>
                          }
                        >
                          <ul>
                            {module.classes.map((singleClass, index) => (
                              <li key={index}>
                                <Link
                                  className="ninjadash-course-content__lecture--single"
                                  to={`${path}/class`}
                                  state={{ singleClass }}
                                >
                                  <UilPlay />
                                  <span className="ninjadash-course-content__lecture--title">
                                    {singleClass.classTitle}
                                  </span>
                                  <div className="ninjadash-course-content__lecture--extra">
                                    <p style={{ color: singleClass.isAssignmentCompleted ? 'green' : 'red' }}>
                                      Assignment({singleClass.assignmentCompleted}/{singleClass.totalAssignments})
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </Panel>
                      ))}
                    </Collapse>
                  </CollapseStyleWrap>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Main>
    </CourseDetailsWrap>
  );
}

export default CourseDetails;
