import { Outlet } from 'react-router-dom';
import MainHeader from '../components/MainHeader';

const RouteLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default RouteLayout;