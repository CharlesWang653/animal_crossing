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
              title="感谢使用本网站"
              visible={this.props.visible}
              onOk={this.props.handleClick}
              onCancel={this.props.handleClick}
              footer={[
                <Button key="ok" type="primary" onClick={this.props.handleClick}>OK</Button>
              ]}
            >
              <p>其他功能还在设计开发中， 如果对网站功能有任何疑问或建议， 欢迎在Github提出建议 <a href="https://github.com/CharlesWang653/animal_crossing/issues">Github项目Issue专区</a></p>
            </Modal>
        </>
    );
  } 
}

export default InfoModal;
