import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Skeleton, Progress } from 'antd';
import { DemoFourStyle } from './Style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { StudentBanner } from '../../components/banners/Banners';

const StudentAttendanceOverview = lazy(() => import('./overview/demoFour/StudentAttendanceOverview'));

function StudentDashBoard() {
  const rtl = useSelector((state) => state.ChangeLayoutMode.rtlData);
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'StudentDashBoard',
    },
    {
      path: 'first',
      breadcrumbName: 'StudentDashBoard',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" ghost title="" routes={PageRoutes} />
      <Main>
        <DemoFourStyle>
          <Row justify="center" gutter={25}>
            <Col xxl={8} xl={12} lg={12} xs={24}>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <StudentBanner />
              </Suspense>
            </Col>
            <Col xxl={8} xl={12} lg={12} xs={24}>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <StudentAttendanceOverview />
              </Suspense>
            </Col>
            <Col xxl={8} xl={12} lg={12} xs={24}>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <Row gutter={15}>
                  <Col xs={12}>
                    <Cards title="Assignment" caption="The simplest use of Progress bar">
                      <Progress
                        type="circle"
                        percent={30}
                        width={80}
                        style={{ [!rtl ? 'marginRight' : 'marginLeft']: '50px' }}
                      />
                    </Cards>
                  </Col>
                  <Col xs={12}>
                    <Cards title="Assesment" caption="The simplest use of Progress bar">
                      <Progress
                        type="circle"
                        percent={10}
                        width={80}
                        style={{ [!rtl ? 'marginRight' : 'marginLeft']: '50px' }}
                      />
                    </Cards>
                  </Col>
                </Row>
              </Suspense>
            </Col>
          </Row>
        </DemoFourStyle>
      </Main>
    </>
  );
}

export default StudentDashBoard;
