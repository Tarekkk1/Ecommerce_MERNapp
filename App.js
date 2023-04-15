
import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './Pages/AllMeetups';
import NewMeetupPage from './Pages/NewMeetup';
import FavoritesPage from './Pages/Favorites';
import Layout from './Components/layout/Layout';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />

      </Routes>

    </Layout>
  );

}

export default App;
