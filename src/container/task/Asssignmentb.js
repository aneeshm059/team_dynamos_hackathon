import React, { useState, lazy, Suspense, useLayoutEffect } from 'react';
import { NavLink, Link, Routes, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Spin } from 'antd';
import UilAngleLeft from '@iconscout/react-unicons/icons/uil-angle-left';
import UilAngleRight from '@iconscout/react-unicons/icons/uil-angle-right';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { FixedSidebar, SidebarWrap } from './style';
import { Main } from '../styled';
import { Button } from '../../components/buttons/buttons';

const AssignmentTable = lazy(() => import('../pages/overview/AssignmentTable'));
const MultipleChoice = lazy(() => import('./overview/multiplechoice'));
const Passage = lazy(() => import('./overview/passage'));
const Coding = lazy(() => import('./overview/coding'));

function Assignmentsb() {
  const location = useLocation();
  const singleClass = location.state.singleClass;

  const [state, setState] = useState({
    responsive: 0,
    collapsed: false,
    visible: false,
    modalType: 'primary',
  });

  const handleCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  const { responsive, collapsed } = state;

  useLayoutEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      setState({ responsive: width });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const toggleCollapsed = () => {
    setState({
      ...state,
      collapsed: !collapsed,
    });
  };

  return (
    <>
      <Main>
        <Row gutter={25}>
          <Col xxl={2} lg={2} md={2} xs={24}>
            {responsive > 767 ? (
              <>
                <SidebarWrap className="mb-30">
                  <div className="ninjadash-taskApp-sidebar">
                    <ul className="ninjadash-taskApp-sidebar__nav">
                      <li className="ninjadash-taskApp-sidebar__nav--item">
                        <NavLink className="ninjadash-taskApp-sidebar__nav--link" to="./" state={{ singleClass }}>
                          <span className="nav-item-text">All</span>
                        </NavLink>
                      </li>
                      <li className="ninjadash-taskApp-sidebar__nav--item">
                        <NavLink className="ninjadash-taskApp-sidebar__nav--link" to="./MCQ" state={{ singleClass }}>
                          <span className="nav-item-text">Q1</span>
                        </NavLink>
                      </li>
                      <li className="ninjadash-taskApp-sidebar__nav--item">
                        <NavLink
                          className="ninjadash-taskApp-sidebar__nav--link"
                          to="./Descriptive"
                          state={{ singleClass }}
                        >
                          <span className="nav-item-text">Q2</span>
                        </NavLink>
                      </li>
                      <li className="ninjadash-taskApp-sidebar__nav--item">
                        <NavLink className="ninjadash-taskApp-sidebar__nav--link" to="./Coding" state={{ singleClass }}>
                          <span className="nav-item-text">Q3</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </SidebarWrap>
              </>
            ) : (
              <FixedSidebar className={collapsed ? 'show' : 'hide'}>
                <Link to="#" type="link" className="trigger-close" onClick={toggleCollapsed}>
                  <UilTimes />
                </Link>
                <SidebarWrap className="mb-30">
                  <div className="ninjadash-taskApp-sidebar">
                    <ul className="ninjadash-taskApp-sidebar__nav">
                      <li className="ninjadash-taskApp-sidebar__nav--item">
                        <NavLink className="ninjadash-taskApp-sidebar__nav--link" to="/" state={{ singleClass }}>
                          <span className="nav-item-text">All</span>
                        </NavLink>
                      </li>
                      <li className="ninjadash-taskApp-sidebar__nav--item">
                        <NavLink className="ninjadash-taskApp-sidebar__nav--link" to="./MCQ" state={{ singleClass }}>
                          <span className="nav-item-text">Q1</span>
                        </NavLink>
                      </li>
                      <li className="ninjadash-taskApp-sidebar__nav--item">
                        <NavLink
                          className="ninjadash-taskApp-sidebar__nav--link"
                          to="./Descriptive"
                          state={{ singleClass }}
                        >
                          <span className="nav-item-text">Q2</span>
                        </NavLink>
                      </li>
                      <li className="ninjadash-taskApp-sidebar__nav--item">
                        <NavLink className="ninjadash-taskApp-sidebar__nav--link" to="./Coding" state={{ singleClass }}>
                          <span className="nav-item-text">Q3</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </SidebarWrap>
              </FixedSidebar>
            )}
          </Col>
          <Col xxl={20} lg={20} md={20} xs={24}>
            {responsive <= 767 && (
              <div className="sidebar-trier-wrap text-center mb-30">
                <Button type="link" className="sidebar-trigger" style={{ marginTop: 0 }} onClick={toggleCollapsed}>
                  {collapsed ? <UilAngleLeft /> : <UilAngleRight />}
                </Button>
              </div>
            )}
            <Suspense
              fallback={
                <div className="spin">
                  <Spin />
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<AssignmentTable />} />
                <Route path="MCQ" element={<MultipleChoice />} />
                <Route path="Descriptive" element={<Passage />} />
                <Route path="Coding" element={<Coding />} />
              </Routes>
            </Suspense>
          </Col>
        </Row>
        <span
          onKeyPress={() => {}}
          role="button"
          tabIndex="0"
          className={collapsed ? 'overlay-dark show' : 'overlay-dark'}
          onClick={toggleCollapsed}
        />
      </Main>
    </>
  );
}

export default Assignmentsb;
