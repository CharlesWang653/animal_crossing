import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class HelpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <>
            <Modal
              title="如何使用本网站"
              visible={this.props.visible}
              onOk={this.props.handleClick}
              onCancel={this.props.handleClick}
              width={"50%"}
              footer={[
                <Button key="ok" type="primary" onClick={this.props.handleClick}>OK</Button>
              ]}
            >
              <h5>查询信息</h5>
              <p>请使用主页表格筛选，排序筛选合适的大头菜信息,数据库会删除价格有效时长到期的数据</p>
              <h5>添加新纪录</h5>
              <p>请使用添加按钮添加新的大头菜记录信息</p>
              <h6>岛名</h6>
              <p>选填项，添加岛名信息方便小伙伴确认即将连接的岛是否正确</p>
              <h6>大头菜价格</h6>
              <p><b>必填项</b>，请填写0~1000以内的数字，岛上大头菜超过1000铃钱的小伙伴请直接联系我 ：）</p>
              <h6>价格有效时长</h6>
              <p><b>必填项</b>，请选择数据发布时长，可以选择你想要开岛的时长，最长不能超过商店关门时间</p>
              <h6>上岛密码</h6>
              <p>选填项，方便小伙伴上岛，单纯的想分享高价大头菜的快乐我们也欢迎 :(</p>
              <h6>水果类型和南/北半球</h6>
              <p>选填项，勾搭不同特产/半球的小伙伴，万一有小伙伴想来倾销本地水果/钓鱼呢</p>
              <h6>好友码</h6>
              <p>选填项，如填写请正确输入11位数字</p>
              <h6>备注</h6>
              <p>选填项，方便留言勾搭小伙伴，备注流星/骆驼/虫商人/鱼商人等信息，最长不超过300字</p>
            </Modal>
        </>
    );
  } 
}

export default HelpModal;
