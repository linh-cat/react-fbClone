import React from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import "./Feed.css";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      {/* MessageSender */}
      <MessageSender />
      <Post
        profilePic="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
        message="WOW! i love you"
        timestamp="this is the timestamp"
        username="ssshangha"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7O7inbRE_ietvmYg7GaM64TIIX9N4p4Bzpw&usqp=CAU"
      />
      <Post
        profilePic="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
        message="WOW! i love you"
        timestamp="this is the timestamp"
        username="ssshangha"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7O7inbRE_ietvmYg7GaM64TIIX9N4p4Bzpw&usqp=CAU"
      />
    </div>
  );
}

export default Feed;
