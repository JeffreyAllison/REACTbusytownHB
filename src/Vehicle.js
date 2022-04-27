import React from 'react';

export default function Vehicle({ vehicles }) {
  return <div className="vehicle">
    {/* the Vehicle component has a prop called vehicle. Check to see what string is in this vehicle prop */}
    {/* if the vehicle props is a car, render a '🚗' emoji */}
    {/* if the vehicle props is a truck, render a '🚚' emoji */}
    {/* if the vehicle props is a bus, render a '🚌' emoji */}
    {/* if the vehicle props is a motorcycle, render a '🏍️' emoji */}
    {vehicles.vehicle === 'car' && '🚗'}
    {vehicles.vehicle === 'truck' && '🚚'}
    {vehicles.vehicle === 'bus' && '🚌'}
    {vehicles.vehicle === 'motorcycle' && '🏍️'}
  </div>;
}