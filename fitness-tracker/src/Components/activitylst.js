import React from 'react';

const ActivityList = ({ activities }) => {
  return (
    <ul>
      {activities.map((activity, index) => (
        <li key={index}>{activity}</li>
      ))}
    </ul>
  );
}

export default ActivityList;
