import React, { Component } from "react";
import { Table, Button } from 'antd';

export default class Fauna extends Component {
  
  render() {
    const dataSource = [{
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    }, {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    }];
    
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }];
    return (
      <div className="inventory">
        <h2>Fauna</h2>
        <Button type="primary">Button</Button>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}