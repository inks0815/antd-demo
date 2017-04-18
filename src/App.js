import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class CommentList extends Component {
  render() {
    return(
           <div>CommentList</div>

    );
  }
}


class CommentForm extends Component {
  render() {
    return(
             <div>CommentForm</div>

    );
  }
}






class App extends Component {

  render() {
    return (
      <div className="comment-box">
        <h1>Comments</h1>
        <CommentList/>
        <CommentForm/>

      </div>
    );
  }
}

export default App;
