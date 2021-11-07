import React from 'react';
import './style.css';
import StoreProvider from './stores/StoreProvider';
import Form from './Form';
import Comments from './Comments';

export default function App() {
  return (
    <StoreProvider>
      <div>
        <Comments />
        <h1>Opinie</h1>
        <Form />
      </div>
    </StoreProvider>
  );
}
