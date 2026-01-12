import type { FC } from "react";
import { Routes, Route } from 'react-router-dom'
import { HomePage } from "../../Pages/HomePage";

export const AppRoutes:FC = () => {
    return (
        <Routes>
           <Route index element={<HomePage />} />
        </Routes>
    )
}