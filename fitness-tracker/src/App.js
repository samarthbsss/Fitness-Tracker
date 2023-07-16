import React, { useState } from 'react';
import Header from './Components/header';
import ActivityForm from './Components/activityform';
import ActivityList from './Components/activitylst';

const App = () => {
  const [activities, setActivities] = useState([]);

  const handleAddActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  return (
    <div className="App">
      <Header />
      <ActivityForm onAddActivity={handleAddActivity} />
      <ActivityList activities={activities} />
    </div>
  );
}

export default App;
