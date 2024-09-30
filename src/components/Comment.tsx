"use client";

import { CommentProps } from "@/libs/types";
import Reply from "./Reply";

export default function Comment({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}:CommentProps) {
  return (
    <div>
      <div className="d-flex gap-2 my-2">
          <img
            src={userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
            alt="Profile picture"
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              {username}
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>{commentText}</span>
            {likeNum != 0 && <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>{likeNum} คน</span>
            </div>}
          </div>
        </div>
      {/* You can use map-loop to render Reply component here */}
      {replies.map((x : any )=><Reply key={x.username} userImagePath={x.userImagePath} username={x.username} replyText={x.replyText} likeNum={x.likeNum}/>)}
    </div>
  );
}