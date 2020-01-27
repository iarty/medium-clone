import React from "react";
import { Route, Switch } from "react-router-dom";
import GlobalFeed from "./GlobalFeed/GlobalFeed";
import Authentication from "./Authentication/Authentication";
import Articles from "./Articles/Articles";
import TagFeed from "./TagFeed/TagFeed";
import YourFeed from "./YourFeed/YourFeed";
import CreateArticle from "./CreateArticle/CreateArticle";
import EditArticle from "./EditArticle/EditArticle";
import Settings from "./Settings/Settings";
import UserProfile from "./UserProfile/UserProfile";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={GlobalFeed} />
        <Route path="/profiles/:slug" component={UserProfile} />
        <Route path="/profiles/:slug/favorites" component={UserProfile} />
        <Route path="/settings" component={Settings} />
        <Route path="/articles/new" component={CreateArticle} />
        <Route path="/articles/:slug/edit" component={EditArticle} />
        <Route path="/tags/:slug" component={TagFeed} />
        <Route path="/feed" component={YourFeed} />
        <Route path="/login" component={Authentication} />
        <Route path="/register" component={Authentication} />
        <Route path="/articles/:slug" component={Articles} />
      </Switch>
    </div>
  );
};

export default Routes;
