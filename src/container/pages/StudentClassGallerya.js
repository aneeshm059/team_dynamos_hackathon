import React, { useState, Suspense, lazy } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { Link, useLocation, Routes, Route } from 'react-router-dom';
import { GalleryNav } from './style';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';

const StudentClass = lazy(() => import('../course/StudentClass'));
const Assignmentb = lazy(() => import('../task/Asssignmentb'));
const StudyMaterials = lazy(() => import('../widgets/StudyMaterials'));

function StudentClassGallerya() {
  const location = useLocation();
  const singleClass = location.state.singleClass;

  const [state, setState] = useState({
    activeClass: '',
  });

  const handleChange = (value) => {
    setState({
      ...state,
      activeClass: value,
    });
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title={singleClass.classTitle} />
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <GalleryNav>
              <ul>
                <li>
                  <Link
                    className={state.activeClass === '' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('')}
                    to="./content"
                    state={{ singleClass }}
                  >
                    Class
                  </Link>
                </li>
                <li>
                  <Link
                    className={state.activeClass === 'uiDesign' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('uiDesign')}
                    to="./assignment"
                    state={{ singleClass }}
                  >
                    Assignment
                  </Link>
                </li>
                <li>
                  <Link
                    className={state.activeClass === 'wireframe' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('wireframe')}
                    to="./studymaterials"
                    state={{ singleClass }}
                  >
                    Study Material
                  </Link>
                </li>
              </ul>
            </GalleryNav>
          </Col>
          <Col xxl={24} lg={24} sm={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Routes>
                <Route path="/" element={<StudentClass />} />
                <Route path="preassignment/*" element={<Assignmentb />} />
                <Route path="content" element={<StudentClass />} />
                <Route path="assignment/*" element={<Assignmentb />} />
                <Route path="studymaterials" element={<StudyMaterials />} />
              </Routes>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default StudentClassGallerya;
