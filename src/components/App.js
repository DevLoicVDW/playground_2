import React from "react";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="ui container">
      <h1 class="ui huge center aligned icon blue header">
        <i class="coffee huge icon"></i>
        Blog Viewer
      </h1>
      <PostList />
    </div>
  );
};

export default App;
