import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InstantPotInput from '../components/instantPotInput';
import InstantPotResults from '../views/instantPotResults';

export default function MyRoutes() {
  return (
        <Routes>
            <Route exact path="/" element={<InstantPotInput />} />
            <Route exact path="/results" element={<InstantPotResults />} />
        </Routes>
  );
}
