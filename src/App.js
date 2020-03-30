import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Table } from 'antd';

function App() {
  return (
    <div>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}

export default App;
