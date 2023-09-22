/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import { CSS } from '@dnd-kit/utilities';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { NoteCardWrap } from '../style';
import NoteCard from '../../../components/note/Card';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { noteDragData } from '../../../redux/note/actionCreator';

function SortableItem(value) {
  const item = value.value;
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Col xxl={8} xl={12} lg={12} sm={12} xs={24}>
      <div ref={setNodeRef} style={style} {...attributes}>
        <NoteCard data={item} listeners={listeners} />
      </div>
    </Col>
  );
}

function All() {
  const dispatch = useDispatch();
  const { noteData } = useSelector((state) => {
    return {
      noteData: state.Note.data,
    };
  });

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      const activeIndex = noteData.indexOf(active.id);
      const overIndex = noteData.indexOf(over.id);
      dispatch(noteDragData(arrayMove(noteData, activeIndex, overIndex)));
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Cards title="Note Lists">
        <NoteCardWrap>
          <Row gutter={24}>
            <SortableContext items={noteData} strategy={rectSortingStrategy}>
              {noteData.map((value, index) => (
                <SortableItem key={value.key} index={index} value={value} />
              ))}
            </SortableContext>
          </Row>
        </NoteCardWrap>
      </Cards>
    </DndContext>
  );
}

export default All;
