import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
//import { connect } from 'dva';
import { Menu, Icon } from 'antd';
//import getPersTopmenu from '../actions/menu/topmenuAction';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Topmenu extends React.Component {

  state = {
    current: 'menu1',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
  return (

          <div>

            <h2 style={{ lineHeight: '64px' }}>管理决策支持平台</h2>
            <div>ceshi</div>
             <span></span>
            <Menu

                  theme="dark"
                  mode="horizontal"
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  style={{ lineHeight: '64px' }}
               >


                 <Menu.Item key="menu1">
                   <a href="#/">体系机制</a>
                 </Menu.Item>

                 <Menu.Item key="menu2">
                   <a href="#/mechanism">组织效能</a>
                 </Menu.Item>
                 <Menu.Item key="menu3">
                   <a href="#/products" >报表中心</a>
                 </Menu.Item>
               </Menu>
          </div>
);
}
}

export default connect()(Topmenu);
