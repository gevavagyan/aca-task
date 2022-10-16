import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { get } from './server/requests/customer';
import { load } from './store/actions/customer';

import AdminPage from './pages/Admin';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const { success, data } = await get();

      if (success) {
        dispatch(load(data));
      }
    })();
  }, [])

  return (
    <div style={{ backgroundColor: '#343e48', height: '100vh'}}>
      <AdminPage />
    </div>
  );
}

export default App;
