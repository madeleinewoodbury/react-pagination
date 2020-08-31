import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './Posts';
import Pagination from './Pagination';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [postsOnPage, setPostsOnPage] = useState([]);
  const [currentPage, setCurrenPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [numOfPages, setNumOfPages] = useState(0);

  // const updatePages = () => {

  // };
  useEffect(() => {
    posts.length < 1 && getPosts();
    numOfPages === 0 && setNumOfPages(posts.length / postsPerPage);

    // Update pages
    let sliceIndex =
      currentPage === 0 ? currentPage : currentPage * postsPerPage;
    let postSlice = posts.slice(sliceIndex, sliceIndex + postsPerPage);
    setPostsOnPage(postSlice);
  }, [posts.length, postsPerPage, currentPage, numOfPages, posts]);

  const getPosts = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(res.data);
  };

  const nextPage = () => {
    currentPage === numOfPages - 1
      ? setCurrenPage(0)
      : setCurrenPage(currentPage + 1);
  };

  const prevPage = () => {
    currentPage === 0
      ? setCurrenPage(numOfPages - 1)
      : setCurrenPage(currentPage - 1);
  };

  return (
    <div className="container">
      <Posts posts={postsOnPage} />
      <Pagination
        currentPage={currentPage}
        pages={numOfPages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};

export default App;
