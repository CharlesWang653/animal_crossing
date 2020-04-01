import React, { Component } from 'react';
<<<<<<< HEAD
import { Modal, Button, Form, Input, Select, InputNumber } from 'antd';
import { addOne } from "../../RESTfulAPI"
=======
import { Modal, Button } from 'antd';
>>>>>>> 05cae47f9466c952b0b3ccd3f3f0d72fbaf30d7c

class CreateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      userInput:{ name:"", price:0, password:"", fruit:"", friendCode:"", northSouth:"", hour:0, minute:0 }
=======

>>>>>>> 05cae47f9466c952b0b3ccd3f3f0d72fbaf30d7c
    }
  }

  handleSubmit = () => {
<<<<<<< HEAD
    const{name, price, password, fruit, friendCode, northSouth, hour, minute} = this.state.userInput;
    var totalmin = Number(hour)*60 + Number(minute);
    var user = {IslandName:name,
      TurnipPrice:price,
      Password:password,
      FruitType:fruit,
      FriendID:friendCode,
      NorthSouth:northSouth,
      Period:totalmin}
    addOne(user);
    this.props.handleClick();
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
=======
      alert("clicked submit!");
  }

>>>>>>> 05cae47f9466c952b0b3ccd3f3f0d72fbaf30d7c
  render() {
    return (
        <>
            <Modal
<<<<<<< HEAD
              maskClosable={false}
=======
>>>>>>> 05cae47f9466c952b0b3ccd3f3f0d72fbaf30d7c
              title="Create New Record"
              visible={this.props.visible}
              onOk={this.props.handleClick}
              onCancel={this.props.handleClick}
              footer={[
                  <Button key="goBack" onClick={this.props.handleClick}>Cancel</Button>,
                  <Button key="submit" type="primary" onClick={this.handleSubmit}>Submit</Button>
              ]}
            >
<<<<<<< HEAD
              <Form
                labelCol={{
                  span: 4,
                }}
                wrapperCol={{
                  span: 14,
                }}
                layout="horizontal"
              >
                <Form.Item label="岛名">
                  <Input name="name" onChange={this.handleChange} value={this.state.userInput.name}/>
                </Form.Item>
                <Form.Item label="大头菜价格">
                  <Input name="price" onChange={this.handleChange} value={this.state.userInput.price}/>
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
                <Form.Item label="好友码">
                  <Input name="friendCode" onChange={this.handleChange} value={this.state.userInput.friendCode}/>
                </Form.Item>
                <Form.Item label="南/北半球">
                  <Select name="northSouth" onChange={this.handleNSChange} value={this.state.userInput.northSouth}>
                    <Select.Option value="North">北半球</Select.Option>
                    <Select.Option value="South">南半球</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="开岛时长">
                  <InputNumber min="0" name="hour" onChange={this.handleHourChange} value={this.state.userInput.hour}/>
                  小时
                  <Select name="minute" onChange={this.handleMinuteChange} value={this.state.userInput.minute}>
                    <Select.Option value="0">0</Select.Option>
                    <Select.Option value="30">30</Select.Option>
                  </Select>
                  分钟
                </Form.Item>
              </Form>
=======
              <p>some form</p>
>>>>>>> 05cae47f9466c952b0b3ccd3f3f0d72fbaf30d7c
            </Modal>
        </>
    );
  } 
}

export default CreateModal;
