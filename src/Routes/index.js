import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';



const Index = () => {
    return (
      
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home />
                    }
                    exact={true}
                />
            </Routes>
        
    );
};

export default Index;