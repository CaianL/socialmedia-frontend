import React, { useState, useEffect } from 'react';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

  useEffect(() => {
    fetch(, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newComment }),
      })
        .then((response) => response.json())
        .then((data) => {
          setComments([...comments, data]);
          setNewComment('');
          setIsCommentModalOpen(false);
        })
        .catch((error) => console.error('Erro ao adicionar comentário:', error));
  }, []);

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      fetch(, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newComment }),
      })
        .then((response) => response.json())
        .then((data) => {
          setComments([...comments, data]);
          setNewComment('');
          setIsCommentModalOpen(false);
        })
        .catch((error) => console.error('Erro ao adicionar comentário:', error));
    }
  };

  const handleDeleteComment = () => {
    
  };

  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>{comment.text}</div>
      ))}
      <button onClick={() => setIsCommentModalOpen(true)}>Add Comment</button>
      {isCommentModalOpen && (
        <div>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>Add</button>
        </div>
      )}
    </div>
  );
};

export default Comments;