import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import Modal from './Modal';
import { useState } from 'react';

const PostsList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} addPost={addPostHandler} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
