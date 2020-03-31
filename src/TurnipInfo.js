import React, { Component } from 'react';
import { Table, Row, Col, Button, Tooltip, PageHeader, Space } from 'antd';
import { QuestionOutlined, InfoOutlined, PlusOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

import CreateModal from "./components/CreateModal";
import HelpModal from "./components/HelpModal";
import InfoModal from "./components/InfoModal";

class TurnipInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreateModalOpen: false,
      isHelpModalOpen: false,
      isInfoModalOpen: false
    }
  }

  handleCreateClick = () => {
    this.setState({isCreateModalOpen: !this.state.isCreateModalOpen});
  }

  handleHelpClick = () => {
    this.setState({isHelpModalOpen: !this.state.isHelpModalOpen});
  }

  handleInfoClick = () => {
    this.setState({isInfoModalOpen: !this.state.isInfoModalOpen});
  }

  render() {
    const columns = [
      {
        title: '岛名',
        dataIndex: 'IslandName',
      },
      {
        title: '大头菜价格',
        dataIndex: 'TurnipPrice',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.TurnipPrice - b.TurnipPrice,
      },
      {
        title: '上岛密码',
        dataIndex: 'Password',
      },
      {
        title: '本地水果',
        dataIndex: 'FruitType',
        filters: [
          {
            text: '桃子',
            value: 'PEACH',
          },
          {
            text: '梨',
            value: 'PEAR',
          },
          {
            text: '苹果',
            value: 'APPLE',
          },
          {
            text: '橘子',
            value: 'ORANGE',
          },
          {
            text: '樱桃',
            value: 'CHERRY',
          }
        ],
        filterMultiple: true,
        onFilter: (value, record) => record.FruitType.indexOf(value) === 0,
      },
      {
        title: '好友码',
        dataIndex: 'FriendID'
      },
      {
        title: '地理位置',
        dataIndex: 'NorthSouth',
        filters: [
          {
            text: '南半球',
            value: 'North',
          },
          {
            text: '北半球',
            value: 'South',
          }
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.NorthSouth.indexOf(value) === 0,
      }
    ];

    const data = [
      {
        IslandName: 'Mia',
        TurnipPrice: 600,
        Password: 'SWJ5D',
        FruitType: 'PEACH',
        FriendID: '1111-1111-1111',
        NorthSouth: 'North',
        Period: '3600',
      },
      {
        IslandName: 'Mia',
        TurnipPrice: 500,
        Password: 'SWJ5D',
        FruitType: 'PEAR',
        FriendID: '1111-1111-1111',
        NorthSouth: 'North',
        Period: '3600',
      },
      {
        IslandName: 'Mia',
        TurnipPrice: 600,
        Password: 'SWJ5D',
        FruitType: 'PEACH',
        FriendID: '1111-1111-1111',
        NorthSouth: 'North',
        Period: '3600',
      },
      {
        IslandName: 'Mia',
        TurnipPrice: 600,
        Password: 'SWJ5D',
        FruitType: 'PEACH',
        FriendID: '1111-1111-1111',
        NorthSouth: 'North',
        Period: '3600',
      },
      {
        IslandName: 'Mia',
        TurnipPrice: 600,
        Password: 'SWJ5D',
        FruitType: 'PEACH',
        FriendID: '1111-1111-1111',
        NorthSouth: 'North',
        Period: '3600',
      },
      {
        IslandName: 'Mia',
        TurnipPrice: 600,
        Password: 'SWJ5D',
        FruitType: 'PEACH',
        FriendID: '1111-1111-1111',
        NorthSouth: 'North',
        Period: '3600',
      },{
        IslandName: 'Mia',
        TurnipPrice: 600,
        Password: 'SWJ5D',
        FruitType: 'PEACH',
        FriendID: '1111-1111-1111',
        NorthSouth: 'North',
        Period: '3600',
      },
      {
        IslandName: 'Mia',
        TurnipPrice: 600,
        Password: 'SWJ5D',
        FruitType: 'PEACH',
        FriendID: '1111-1111-1111',
        NorthSouth: 'North',
        Period: '3600',
      },
      {
        IslandName: 'Mia',
        TurnipPrice: 600,
        Password: 'SWJ5D',
        FruitType: 'PEACH',
        FriendID: '1111-1111-1111',
        NorthSouth: 'North',
        Period: '3600',
      },
      {
        IslandName: 'Mia',
        TurnipPrice: 600,
        Password: 'SWJ5D',
        FruitType: 'PEACH',
        FriendID: '1111-1111-1111',
        NorthSouth: 'North',
        Period: '3600',
      },
      {
        IslandName: 'Mia',
        TurnipPrice: 600,
        Password: 'SWJ5D',
        FruitType: 'PEACH',
        FriendID: '1111-1111-1111',
        NorthSouth: 'North',
        Period: '3600',
      },
      {
        IslandName: 'Mia',
        TurnipPrice: 600,
        Password: 'SWJ5D',
        FruitType: 'PEACH',
        FriendID: '1111-1111-1111',
        NorthSouth: 'North',
        Period: '3600',
      }
    ]

    return (
      <>
        <Row>
          <PageHeader
            title="动森大头菜高价交易"
            subTitle="Beta 1.0"
            />
        </Row>
        <Row>
          <Col span={2} offset={18}>
            <Tooltip title="add new record">
              <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={this.handleCreateClick} />
            </Tooltip>
          </Col>
          <Col span={4}>
            <Space>
              <Tooltip title="help">
                <Button type="primary" shape="circle" icon={<QuestionOutlined />} onClick={this.handleHelpClick} />
              </Tooltip>
              <Tooltip title="contact">
                <Button type="primary" shape="circle" icon={<InfoOutlined />} onClick={this.handleInfoClick} />
              </Tooltip>
              <CreateModal visible={this.state.isCreateModalOpen} handleClick={this.handleCreateClick} />
              <HelpModal visible={this.state.isHelpModalOpen} handleClick={this.handleHelpClick} />
              <InfoModal visible={this.state.isInfoModalOpen} handleClick={this.handleInfoClick} />
            </Space>
          </Col>
        </Row>
        <Row>
          <Col span={16} offset={4}>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 25 }} />
          </Col>
        </Row>
      </>
    );
  } 
}

export default TurnipInfo;
