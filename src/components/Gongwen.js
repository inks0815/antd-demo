import React from 'react'
import { Layout } from 'antd';
import Chuanyue from './Chuanyue'
import "../styles/gongwen.css"

const {Content} = Layout;

const Gongwen = () => (
  <div>

      <h1 className="titleG">联通软件研究院测试公文</h1>

    <Content>
      <div className="boxG">

          <Chuanyue className="buttonG"/>

      </div>

    </Content>
  </div>
)

export default Gongwen
