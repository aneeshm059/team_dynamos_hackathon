import React from 'react';
import { Table } from 'antd';
import { useLocation, Link } from 'react-router-dom';
import assignmentDetails from './assignmentDetails.json';
import { UserTableStyleWrapper } from '../style';
import { TableWrapper } from '../../styled';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';

function AssignmentTable() {
  const location = useLocation();
  const singleClass = location.state.singleClass;
  const assignmentData = [];
  assignmentDetails.assignments.map((assignment) => {
    return assignmentData.push({
      key: assignment.id,
      title: (
        <div className="user-info">
          <Heading className="user-name" as="h6">
            {assignment.questionTitle}
          </Heading>
        </div>
      ),
      description: assignment.qyestionDescription,
      type: assignment.type,
      difficulty: assignment.difficulty,
      studentScore: assignment.studentScore,
      status: (
        <>
          <span className={`status-text ${assignment.status === 'Solved' ? 'activate' : 'deactivate'}`}>
            {assignment.status}
          </span>
        </>
      ),
      action: (
        <Link to={`./${assignment.type}`} state={{ singleClass, assignment }}>
          Solve
        </Link>
      ),
      solvedBy: assignment.solvedBy,
    });
  });

  const assignmentColumns = [
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Difficulty',
      dataIndex: 'difficulty',
      key: 'difficulty',
    },
    {
      title: 'Score',
      dataIndex: 'studentScore',
      key: 'studentScore',
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
    {
      title: 'Solved By',
      dataIndex: 'solvedBy',
      key: 'solvedBy',
    },
  ];

  return (
    <Cards headless>
      <UserTableStyleWrapper>
        <TableWrapper className="table-responsive">
          <Table dataSource={assignmentData} columns={assignmentColumns} />
        </TableWrapper>
      </UserTableStyleWrapper>
    </Cards>
  );
}

export default AssignmentTable;
