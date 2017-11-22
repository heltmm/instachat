import React from "react";
import Header from "./Header";
import LeftColumn from "./LeftColumn";
import NewsFeed from "./NewsFeed";
import FriendList from "./FriendList";

function App(props){
  return (
    <div>
      <Header/>
      <LeftColumn/>
      <NewsFeed/>
      <FriendList/>
    </div>
  );
}

export default App;
