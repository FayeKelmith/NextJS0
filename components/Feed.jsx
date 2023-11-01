"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};
const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResults] = useState([]);
  const [timeout, setTimeOut] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
    };

    fetchPost();
  }, []);

  const filterPrompts = (searchText) => {
    let regex = new RegExp(searchText, "i");

    return posts.filter(
      (text) =>
        regex.test(text.creator.username) ||
        regex.test(text.prompt) ||
        regex.test(text.tag) ||
        regex.test(text.creator.email)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);
    setSearchResults(filterPrompts(tagName));
  };

  const handleSearchChange = (e) => {
    clearTimeout(timeout);
    setSearchText(e.target.value);

    setTimeOut(
      setTimeout(() => {
        setSearchResults(filterPrompts(e.target.value));
      }, 300)
    );
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {searchText ? (
        <PromptCardList data={searchResult} handleTagClick={handleTagClick} />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
