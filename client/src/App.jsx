import React from 'react';
import Header from './components/Header/Header';
import { Route, Redirect } from 'react-router-dom';
import DownloadPage from './components/DownloadPage/DownloadPage';
import FilesPage from './components/FilesPage/FilesPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Route path='/download' render={() => <DownloadPage />} />
      <Route path='/files' render={() => <FilesPage />} />
      <Redirect from='/' to='/files' />
    </div>
  );
}

export default App;
