import { Route, Switch } from "react-router-dom";
import Layout from './components/layout/Layout';
import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpsPage from "./pages/NewMeetUps";
import FavoritesPage from "./pages/Favorites";


const App = () => {
  //localhost:3000
  // my-page.com/
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUpsPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
