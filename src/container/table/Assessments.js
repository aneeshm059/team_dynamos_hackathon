/* eslint-disable react/jsx-no-bind */
import React from 'react';
import assignmentDetails from './assessmentDetails.json';
import { UserTableStyleWrapper } from './style';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import DataTable from '../../components/table/DataTable';
import Heading from '../../components/heading/heading';
import { Main, BorderLessHeading } from '../styled';

function Assessments() {
  const assessmentData = [];

  const dataTableColumn = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Module',
      dataIndex: 'module',
      key: 'module',
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  assignmentDetails.assessments.map((assessment) => {
    return assessmentData.push({
      key: assessment.id,
      name: (
        <div className="user-info">
          <Heading className="user-name" as="h6">
            {assessment.name}
          </Heading>
        </div>
      ),
      module: assessment.module,
      dueDate: assessment.dueDate,
      status: (
        <>
          <span className={`status-text ${assessment.status === 'Completed' ? 'active' : 'deactivate'}`}>
            {assessment.status}
          </span>
        </>
      ),
      action: (
        <Link to="/student/takeAssessment" disabled={assessment.status === 'Completed' ? true : false}>
          Start
        </Link>
      ),
    });
  });

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" />
      <Main>
        <Row gutter={15}>
          <Col xs={2}></Col>
          <Col xs={20}>
            <BorderLessHeading>
              <Cards title="Assessments">
                <UserTableStyleWrapper>
                  <DataTable
                    filterOption
                    filterOnchange
                    tableData={assessmentData}
                    columns={dataTableColumn}
                    rowSelection={false}
                  />
                </UserTableStyleWrapper>
              </Cards>
            </BorderLessHeading>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Assessments;
