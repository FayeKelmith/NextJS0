"use client";

import { useEffect, useState } from "react";

import Profile from "@components/Profile";

const MyProfile = ({ params }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    if (params?.id) fetchPost();
  }, [params.id]);

  return (
    <Profile
      name="Yo"
      desc={`Welcome to Yo's custom designed profile page. `}
      data={posts}
    />
  );
};

export default MyProfile;
