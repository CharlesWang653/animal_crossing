import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class CreateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleSubmit = () => {
      alert("clicked submit!");
  }

  render() {
    return (
        <>
            <Modal
              title="Create New Record"
              visible={this.props.visible}
              onOk={this.props.handleClick}
              onCancel={this.props.handleClick}
              footer={[
                  <Button key="goBack" onClick={this.props.handleClick}>Cancel</Button>,
                  <Button key="submit" type="primary" onClick={this.handleSubmit}>Submit</Button>
              ]}
            >
              <p>some form</p>
            </Modal>
        </>
    );
  } 
}

export default CreateModal;
