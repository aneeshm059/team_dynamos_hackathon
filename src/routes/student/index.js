import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './dashboard';
import withStudentLayout from '../../layout/withStudentLayout';
import Assessments from '../../container/table/Assessments';
import AssessmentPage from '../../container/ui-elements/AssessmentPage';

const NotFound = lazy(() => import('../../container/pages/404'));
const StudentCourse = lazy(() => import('../../container/course/StudentCourseDetails'));
const StudentClassGallerya = lazy(() => import('../../container/pages/StudentClassGallerya'));

const Student = React.memo(() => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Suspense
      fallback={
        <div className="spin">
          <Spin />
        </div>
      }
    >
      <Routes>
        <Route index path="/*" element={<Dashboard />} />
        <Route path="course" element={<StudentCourse />} />
        <Route path="class/*" element={<StudentClassGallerya />} />
        <Route path="assessment/*" element={<Assessments />} />
        <Route path="takeAssessment/*" element={<AssessmentPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});

export default withStudentLayout(Student);
