import useId from "../hooks/useId";
import HomePage from "../pages/Home/index";
import PropertiesPage from "../pages/Properties/index";
export const navbar = [
    {
        id: useId,
        element: <HomePage />,
        title: 'Home',
        path: '/home',
        private: false,
        hidden: false,
    },
    {
        id: useId,
        element: <PropertiesPage />,
        title: 'Properties',
        path: '/properties',
        private: false,
        hidden: false,
    },
    {
        id: useId,
        element: <h1>Generic Sign In</h1>,
        title: 'Sign In',
        path: '/signin',
        private: false,
        hidden: true,
    },
]; 