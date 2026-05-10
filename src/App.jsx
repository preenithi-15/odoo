import React, { useState } from 'react';
import './index.css';
import AuthContainer from './Auth';
import OceanLayout from './OceanViews/OceanLayout';
import MyTrips from './OceanViews/MyTrips';
import CreateTrip from './OceanViews/CreateTrip';
import CitySearch from './OceanViews/CitySearch';
import ActivitySearch from './OceanViews/ActivitySearch';
import TripItinerary from './OceanViews/TripItinerary';
import TripBudget from './OceanViews/TripBudget';
import SharedItinerary from './OceanViews/SharedItinerary';
import ProfileSettings from './OceanViews/ProfileSettings';
import TravelNotes from './OceanViews/TravelNotes';
import AdminDashboard from './OceanViews/AdminDashboard';

export default function App() {
  // Routes: 'login', 'signup', 'forgot', 'my-trips', 'create', 'city-search', 'activity-search', 'trip-itinerary'
  const [authState, setAuthState] = useState('login');

  return (
    <div className="app-container">
      {['login', 'signup', 'forgot'].includes(authState) && (
        <AuthContainer view={authState} setView={setAuthState} onComplete={() => setAuthState('my-trips')} />
      )}
      
      {['my-trips', 'create', 'city-search', 'activity-search', 'trip-itinerary', 'trip-budget', 'packing-checklist', 'shared-itinerary', 'profile', 'travel-notes', 'admin-dashboard'].includes(authState) && (
        <OceanLayout navigate={setAuthState} hideNavbar={authState === 'create'}>
          {authState === 'my-trips' && <MyTrips navigate={setAuthState} />}
          {authState === 'create' && <CreateTrip navigate={setAuthState} />}
          {authState === 'city-search' && <CitySearch navigate={setAuthState} />}
          {authState === 'activity-search' && <ActivitySearch navigate={setAuthState} />}
          {authState === 'trip-itinerary' && <TripItinerary navigate={setAuthState} />}
          {authState === 'trip-budget' && <TripBudget navigate={setAuthState} />}
          {authState === 'packing-checklist' && <PackingChecklist navigate={setAuthState} />}
          {authState === 'shared-itinerary' && <SharedItinerary navigate={setAuthState} />}
          {authState === 'profile' && <ProfileSettings navigate={setAuthState} />}
          {authState === 'travel-notes' && <TravelNotes navigate={setAuthState} />}
          {authState === 'admin-dashboard' && <AdminDashboard navigate={setAuthState} />}
        </OceanLayout>
      )}
    </div>
  );
}
