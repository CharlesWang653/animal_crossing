import React, { Component } from 'react';
import { Table, Row, Col, Button, Tooltip, PageHeader, Space, Spin, Alert } from 'antd';
import { QuestionOutlined, InfoOutlined, PlusOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

import CreateModal from "./components/CreateModal";
import HelpModal from "./components/HelpModal";
import InfoModal from "./components/InfoModal";
import { getAll } from "./RESTfulAPI";

class TurnipInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreateModalOpen: false,
      isHelpModalOpen: false,
      isInfoModalOpen: false,
      data: [],
      pending: true,
      messageHolder: "",
    }
  }

  componentDidMount() {
    getAll
      .then((res) => {
        this.setState({data: res, pending: false});
      })
      .catch(err => {
        this.setState({
          pending: false,
          messageHolder: <Alert 
                        message="警告"
                        description="访问后台数据出错，请稍后再试"
                        type="error"
                        closable
                        showIcon />
        })
      })
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

  handleSuccess = () => {
    this.setState({
      messageHolder: <Alert
                      message="新建成功"
                      description="新建数据成功！请刷新页面查看。"
                      type="success"
                      closable
                      showIcon />
    });
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
            value: '桃子',
          },
          {
            text: '梨',
            value: '梨',
          },
          {
            text: '苹果',
            value: '苹果',
          },
          {
            text: '橘子',
            value: '橘子',
          },
          {
            text: '樱桃',
            value: '樱桃',
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
            value: '南半球',
          },
          {
            text: '北半球',
            value: '北半球',
          }
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.NorthSouth.indexOf(value) === 0,
      }
    ];

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
            <Tooltip title="添加">
              <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={this.handleCreateClick} />
            </Tooltip>
          </Col>
          <Col span={4}>
            <Space>
              <Tooltip title="使用说明">
                <Button type="primary" shape="circle" icon={<QuestionOutlined />} onClick={this.handleHelpClick} />
              </Tooltip>
              <Tooltip title="联系我们">
                <Button type="primary" shape="circle" icon={<InfoOutlined />} onClick={this.handleInfoClick} />
              </Tooltip>
              <CreateModal visible={this.state.isCreateModalOpen} handleClick={this.handleCreateClick} handleSuccess={this.handleSuccess} />
              <HelpModal visible={this.state.isHelpModalOpen} handleClick={this.handleHelpClick} />
              <InfoModal visible={this.state.isInfoModalOpen} handleClick={this.handleInfoClick} />
            </Space>
          </Col>
        </Row>
        <Row>
          <Col span={16} offset={4}>
            {this.state.messageHolder}
            {this.state.pending ?
              <div style={{textAlign: "center"}}>
                <Spin size="large" />
              </div>
              : <Table columns={columns} dataSource={this.state.data} pagination={{ pageSize: 25 }} />
          }            
          </Col>
        </Row>
      </>
    );
  } 
}

export default TurnipInfo;
