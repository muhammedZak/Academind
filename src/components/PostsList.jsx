import Post from './Post';
import classes from './PostsList.module.css';

const PostsList = () => {
  return (
    <ul className={classes.posts}>
      <Post author="Maximialian" body="React.js is awesome" />
      <Post author="Manual" body="Checkout the course" />
    </ul>
  );
};

export default PostsList;
