import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Layout>
        <Routes>
          <Route path="/" element={<ShowCreators />} />
          <Route path="/view/:id" element={<ViewCreator />} />
          <Route path="/edit/:id" element={<EditCreator />} />
          <Route path="/add" element={<AddCreator />} />
        </Routes>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
