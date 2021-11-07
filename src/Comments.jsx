import React from 'react';
import { observer } from 'mobx-react';
import { useCommentsStore } from './stores/hooks';

const Comments = () => {
  const { comments, removeComment } = useCommentsStore();

  const handleOnClick = (e) => {
    const id = Number(e.target.dataset.id);

    removeComment(id);
  };
  const commentsElements = comments.map((comment) => {
    console.log(comments)
    return (
    <li key={comment.id}>
      <p> {comment.comment}</p>
      <button data-id={comment.id} onClick={handleOnClick}>
        usuń
      </button>
    </li>
  )});
  return (
  <ul>
    {commentsElements}
  </ul>);
};

export default observer(Comments);
