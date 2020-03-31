import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class InfoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <>
            <Modal
              title="Contact Us"
              visible={this.props.visible}
              onOk={this.props.handleClick}
              onCancel={this.props.handleClick}
              footer={[
                <Button key="ok" type="primary" onClick={this.props.handleClick}>OK</Button>
              ]}
            >
              <p>some contact info</p>
            </Modal>
        </>
    );
  } 
}

export default InfoModal;
