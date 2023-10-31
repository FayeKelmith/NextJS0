"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex flex-1 justify-start items-center cursor-pointer gap-3">
          <Image
            src={post.creator.image}
            alt="user_name"
            width={40}
            height={40}
            className="rounded-full object-contain "
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p>{post.creator.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
