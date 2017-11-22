import React from "react";
import Header from "./Header";
import LeftColumn from "./LeftColumn";
import NewsFeed from "./NewsFeed";
import FriendsList from "./FriendsList";

function App(props){
  return (
    <div>
      <Header/>
      <LeftColumn/>
      <NewsFeed/>
      <FriendsList/>
    </div>
  );
}

export default App;
