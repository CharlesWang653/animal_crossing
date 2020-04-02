import React, { Component } from 'react';
import { Modal, Button, Form, Input, Select, InputNumber, Alert, Space } from 'antd';
import { addOne } from "../../RESTfulAPI"

class CreateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput:{ name:"", price:0, password:"", fruit:"", friendCode:"", northSouth:"", hour:0, minute:0, comment: "" },
      errMessage: []
    }
  }

  handleSubmit = () => {
    const {name, price, password, fruit, friendCode, northSouth, hour, minute, comment} = this.state.userInput;
    var totalmin = Number(hour)*60 + Number(minute);
    var user = { IslandName:name, TurnipPrice:price, Password:password.toUpperCase(), FruitType:fruit, FriendID:friendCode, NorthSouth:northSouth, Period:totalmin, Comment:comment};
    
    let checkErr = [];

    if (name.length > 15) {
      checkErr.push(<Alert message="岛名过长" type="warning" showIcon/>);
    }
    
    if (Number(price) <= 0 || Number(price) > 1000 || isNaN(Number(price))) {
      checkErr.push(<Alert message="价格过低或过高" type="warning" showIcon/>);
    }
    
    let pwRegEx = /([0-9A-Z]){5}/g;
    if (password.length !== 5 || !pwRegEx.test(password.toUpperCase())) {
      if (password.length !== 0) {
        checkErr.push(<Alert message="上岛密码错误" type="warning" showIcon/>);
      }
    }

    let fcRegEx = /[0-9]{12}/g;
    if (friendCode.length !== 12 || !fcRegEx.test(friendCode)) {
      if (friendCode.length !== 0) {
        checkErr.push(<Alert message="好友码错误" type="warning" showIcon/>);
      }
    }

    if (isNaN(totalmin) || totalmin === 0) {
      checkErr.push(<Alert message="时长不能为0" type="warning" showIcon/>);
    }

    if (comment.length > 200) {
      checkErr.push(<Alert message="备注文字超过200" type="warning" showIcon/>);
    }

    this.setState({errMessage: checkErr});

    if (!checkErr.length) {
      addOne(user)
      .then(res => {
        this.props.handleSuccess();
        this.props.handleClick();
      })
      .catch(err => {
        this.setState({
          errMessage: <Alert 
                        message="警告"
                        description="访问后台数据出错，请稍后再试"
                        type="error"
                        closable
                        showIcon />
        })
      });
    }
  }

  handleChange = (e) => {
    this.setState({userInput:{...this.state.userInput,[e.target.name]: e.target.value}});
  }
  handleFruitChange = (e) => {
    this.setState({userInput:{...this.state.userInput,fruit: e}});
  }
  handleNSChange = (e) => {
    this.setState({userInput:{...this.state.userInput,northSouth: e}});
  }
  handleHourChange = (e) => {
    this.setState({userInput:{...this.state.userInput,hour: e}})
  }
  handleMinuteChange = (e) => {
    this.setState({userInput:{...this.state.userInput,minute: e}});
  }
  render() {
    return (
        <>
            <Modal
              maskClosable={false}
              title="添加新记录"
              visible={this.props.visible}
              onOk={this.props.handleClick}
              onCancel={this.props.handleClick}
              width={600}
              footer={[
                  <Button key="goBack" onClick={this.props.handleClick}>Cancel</Button>,
                  <Button key="submit" type="primary" onClick={this.handleSubmit}>Submit</Button>
              ]}
            >
              <Form
                labelCol={{
                  span: 7,
                }}
                wrapperCol={{
                  span: 14,
                }}
                layout="horizontal"
              >
                <Form.Item label="岛名">
                  <Input name="name" onChange={this.handleChange} value={this.state.userInput.name}/>
                </Form.Item>
                <Form.Item required={true} label="大头菜价格">
                  <Input name="price" onChange={this.handleChange} value={this.state.userInput.price}/>
                </Form.Item>
                <Form.Item required={true} label="价格有效时长">
                  <Space>
                    <InputNumber min="0" max="10" name="hour" onChange={this.handleHourChange} value={this.state.userInput.hour}/>
                    小时
                    <Select name="minute" style={{width: 120}} onChange={this.handleMinuteChange} value={this.state.userInput.minute}>
                      <Select.Option value="0">0</Select.Option>
                      <Select.Option value="30">30</Select.Option>
                    </Select>
                    分钟
                  </Space>
                </Form.Item>
                <Form.Item label="上岛密码">
                  <Input name="password" onChange={this.handleChange} value={this.state.userInput.password}/>
                </Form.Item>
                <Form.Item label="水果类型">
                <Select onChange={this.handleFruitChange} value={this.state.userInput.fruit}>
                  <Select.Option value="PEACH">桃子</Select.Option>
                  <Select.Option value="PEAR">梨</Select.Option>
                  <Select.Option value="APPLE">苹果</Select.Option>
                  <Select.Option value="ORANGE">橘子</Select.Option>
                  <Select.Option value="CHERRY">樱桃</Select.Option>
                </Select>
                </Form.Item>
                <Form.Item label="南/北半球">
                  <Select name="northSouth" onChange={this.handleNSChange} value={this.state.userInput.northSouth}>
                    <Select.Option value="North">北半球</Select.Option>
                    <Select.Option value="South">南半球</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="好友码">
                  <Input name="friendCode" addonBefore="SW -" onChange={this.handleChange} value={this.state.userInput.friendCode}/>
                </Form.Item>
                <Form.Item label="备注">
                  <Input.TextArea row={4} name="comment" onChange={this.handleChange} value={this.state.userInput.comment} />
                </Form.Item>
              </Form>
              {this.state.errMessage}
            </Modal>
        </>
    );
  } 
}

export default CreateModal;
