"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState("");
  const pathName = usePathname();
  const { data: session } = useSession();
  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  };
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
            <p className="font-inter text-sm text-gray-500 ">
              {post.creator.email}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={() => handleCopy()}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/link.svg"
                : "/assets/icons/copy.svg"
            }
            width={24}
            height={24}
            alt="Profile"
          />
        </div>
      </div>
      <p className="font-satoshi my-4 text-sm text-gray-700">{post.prompt}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>

      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-8 border-t border-gray-1 00 pt-3">
          <p
            className="green_gradient font-inter text-sm cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="orange_gradient font-inter text-sm cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
