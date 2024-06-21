import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import Modal from './Modal';

const PostsList = ({ isPosting, onStopPosting }) => {
  const [enteredBody, setEnteredBody] = useState('');
  const [author, setAuthor] = useState('');

  const changeBodyHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const changeAuthorHandler = (event) => {
    setAuthor(event.target.value);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            bodyChangeHandler={changeBodyHandler}
            authorChangeHandler={changeAuthorHandler}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author={author} body={enteredBody} />
        {/* <Post author={author} body={enteredBody} /> */}
      </ul>
    </>
  );
};

export default PostsList;
