"use client";

import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import { comments } from "@/libs/comments";
import {CommentProps, ReplyProps} from "@/libs/types";
export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        <PostOwnner
         key="post" 
         picture="/profileImages/myphoto.jpg" 
         name="Thanchanok Naensin 660610763" 
         text="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207" 
         like={100}
         />
        {/* map-loop render Comment component here */}
        {comments.map((x) => (
        <Comment 
            key={x.username} 
            userImagePath={x.userImagePath} 
            username={x.username} 
            commentText={x.commentText} 
            likeNum={x.likeNum} 
            replies={x.replies } 
        />))}
      </div>
    </div>
  );
}