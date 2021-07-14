import React from 'react';
import ReactDOM from 'react-dom';
import { EventComponent } from './state/events/EventComponent';

import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

const App = () => {
  return (
    <div>
      <GuestList />
      <hr />
      <UserSearch />
      <hr />
      <EventComponent />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);