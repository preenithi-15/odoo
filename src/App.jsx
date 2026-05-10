import React, { useState } from 'react';
import './index.css';
import AuthContainer from './Auth';
import OceanLayout from './OceanViews/OceanLayout';
import MyTrips from './OceanViews/MyTrips';
import CreateTrip from './OceanViews/CreateTrip';
import CitySearch from './OceanViews/CitySearch';
import ActivitySearch from './OceanViews/ActivitySearch';
import TripItinerary from './OceanViews/TripItinerary';

export default function App() {
  // Routes: 'login', 'signup', 'forgot', 'my-trips', 'create', 'city-search', 'activity-search', 'trip-itinerary'
  const [authState, setAuthState] = useState('login');

  return (
    <div className="app-container">
      {['login', 'signup', 'forgot'].includes(authState) && (
        <AuthContainer view={authState} setView={setAuthState} onComplete={() => setAuthState('my-trips')} />
      )}
      
      {['my-trips', 'create', 'city-search', 'activity-search', 'trip-itinerary'].includes(authState) && (
        <OceanLayout navigate={setAuthState} hideNavbar={authState === 'create'}>
          {authState === 'my-trips' && <MyTrips navigate={setAuthState} />}
          {authState === 'create' && <CreateTrip navigate={setAuthState} />}
          {authState === 'city-search' && <CitySearch navigate={setAuthState} />}
          {authState === 'activity-search' && <ActivitySearch navigate={setAuthState} />}
          {authState === 'trip-itinerary' && <TripItinerary navigate={setAuthState} />}
        </OceanLayout>
      )}
    </div>
  );
}
