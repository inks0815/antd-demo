import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button, Layout, Menu,Tree} from 'antd';
import {getgongwenItems,getlistReadRole,getlistperson,chuanyuePost} from '../actions/gongwenitem.js'
import "../styles/gongwen.css"
import $ from 'jquery'

const {Content} = Layout;
const TreeNode = Tree.TreeNode;

class Chuanyue extends React.Component {

  state = { visible: false,text1:[],text2:[],current: '', value: undefined,treeData:[],selectedKeys: [],selectbutton:null}

  componentWillMount=function(){
    const {dispatch} = this.props;
    dispatch(getgongwenItems());

  }

  componentWillReceiveProps(nextProps) {
      //console.log("----------------22222222222");
      //console.log(nextProps.alltext1);
       //if(this.state.text1.length!==nextProps.text1){
        //  this.componentWillMount();
       //}else {
         if (nextProps.text1.length!==0) {
           this.setState({
               //current: e.key,
               text1:nextProps.text1,
               text2:nextProps.text2,
               treeData:[]
             });
         }else {

             if (nextProps.alltext1.length!==0) {
             //console.log(nextProps.alltext1);
             //console.log(DepDataDel(nextProps.alltext1));
             let newtext2=[];
             for(var i=0;i<nextProps.alltext1.length;i++){
                newtext2.push(nextProps.alltext1[i])
             }
             newtext2=DepDataDel(newtext2);
             this.setState({
                 //current: e.key,
                 treeData:TreeData(nextProps.alltext1,nextProps.alltext1[0].orgid),
                 text2:newtext2,
                 text1:nextProps.alltext1
               });
           }
           //console.log(nextProps.alltext1)
            // this.setState({
                 //current: e.key,
                // text1:nextProps.alltext1,
                 //text2:nextProps.alltext2,
              // });

         }
      // }





      //console.log("11111111111111111122222222222");
      //console.log(this.state.text1);
  }




  showModal = () => {
    const {dispatch} = this.props;

    this.setState({
      visible: true,
      current: '',
      text1:[],
      text2:[],
      treeData:[],
      selectedKeys: []
    });
   this.props.text1.splice(0,this.props.text1.length)
   this.props.alltext1.splice(0,this.props.alltext1.length)

    let argsData={
        curOrgCode:this.props.forminfo.hiddenobject.curUnitCode,
        curDeptCode:this.props.forminfo.hiddenobject.curDeptCode,
        curUserId:this.props.forminfo.hiddenobject.curEmpId
    }
    //console.log(argsData);
  dispatch(getlistReadRole(argsData));




  }
  handleOk = () => {
    //console.log(this.state.text2);
    const {dispatch,forminfo} = this.props;
    //console.log(this.props.forminfo);
    let condition={"docmWorkitemReadTds":[]};
    this.state.text2.map(function(id){

      condition.docmWorkitemReadTds.push({
                        title:forminfo.documentobject.title,
                        sourcePersonId:forminfo.hiddenobject.sourcePersonId,
                        sourcePersonName:forminfo.hiddenobject.sourcePersonName,
                        sourceDeptCode:forminfo.hiddenobject.sourceDeptCode,
                        sourceDeptName:forminfo.hiddenobject.sourceDeptName,
                        workitemPersonId:id.userid,
                        workitemPersonName:id.empname,
                        workitemDeptCode:'00'+id.orgid,
                        workitemDeptName:id.orgname,
                        documentId:forminfo.documentobject.documentId,
                        activityId:forminfo.hiddenobject.activityDefId,
                        activityName:forminfo.hiddenobject.activityDefName,
                        parProInstId:forminfo.hiddenobject.parProInstId,
                        proInstId:forminfo.hiddenobject.currentProInstId,
                        typeTaskId:forminfo.documentobject.typeTaskId,
                        typeTaskName:forminfo.documentobject.draftTitle,
                        unitCode:forminfo.hiddenobject.curUnitCode,
                        unitName:forminfo.hiddenobject.curUnitName,
                        slowFast:forminfo.documentobject.slowOrFast,
                        docReplaceid:forminfo.documentobject.docReplaceid,
                        sendType:0
                      })
  });

    dispatch(chuanyuePost(condition));
    this.setState({
      visible: false,

    });
  }
  handleCancel = (e) => {
    //console.log(e);
    this.setState({
      visible: false,

    });

  }

  handleClick = (e) =>{

  //  this.props.readrole.map(function(list,index){
    // return (<Menu.Item key={index}>{list.config_name}</Menu.Item>)
  //  })

    const {dispatch,personlist} = this.props;
    let argsparams={
      create_dept_code:this.props.forminfo.documentobject.createDeptCode,
      create_person_id:this.props.forminfo.documentobject.createPersonId,
      cur_dept_code:this.props.forminfo.hiddenobject.curDeptCode,
      cur_person_id:this.props.forminfo.hiddenobject.curPersonId,
      document_id:this.props.forminfo.documentobject.documentId,
      proInstId:this.props.forminfo.hiddenobject.currentProInstId,
      formula_id:this.props.readrole[e.key].formula_id
    }

    dispatch(getlistperson(argsparams));
    //console.log(this.state.text1);



  //  if(this.props.text1.length== 0){
    //  alert("无数据")
    //} else {
      this.setState({
          current: e.key,
        //  text1:this.props.personlist.myObject.notAllPerson,
        //  text2:this.props.personlist.myObject.notAllPerson,
        });
    //}

  }


  onChange = (value) => {
      //console.log(arguments);
      this.setState({ value });
    }



    onSelect = (selectedKeys, info) => {
      //console.log('onSelect', info);
      this.setState({ selectedKeys });
    }
  addClick=(e)=>{

    let midtext1=[]
    midtext1=DepDataDel(this.props.alltext1);
    //console.log($('#leftIdList option:selected').text());
    //console.log(this.state.selectedKeys);
    if(this.state.treeData.length==0){
      if(IsContain(this.state.text2,$('#leftIdList option:selected').text())==false)
      {
        this.state.text2.push(this.state.text1[$('#leftIdList option:selected').val()]);

        this.setState({text2:this.state.text2});
      }

    }else {

        if(IsContain(this.state.text2,this.state.selectedKeys)==false){
          this.state.text2.push(midtext1[findindex(midtext1,this.state.selectedKeys)]);
          this.setState({text2:this.state.text2});
        }


    }





  }

  addAllClick=(e)=>{
    //$('#rightIdList option:selected').append($('#leftIdList option:selected'));

    // $('#leftIdList option').appendTo('#rightIdList');
    let dataSource =DepDataDel(this.state.text1);
    let newtext2=this.state.text2;
    for(var i=0;i<dataSource.length;i++){
       if(IsContain(this.state.text2,dataSource[i])==false)
        newtext2.push(dataSource[i]);
    }

    this.setState({text2:newtext2});
  }

  deleteClick=(e)=>{
    //$('#rightIdList option:selected').remove();
    //console.log($('#rightIdList option:selected').text());
    let dataSource2 =this.state.text2;
    let testtext1=[];
    for(var i=0;i<this.state.text1.length;i++){
       testtext1.push(this.state.text1[i])
    }

          for(var i=0;i<dataSource2.length;i++){
              if($('#rightIdList option:selected').text()==dataSource2[i].empname)
                { dataSource2.splice(i,1);
                  break;
                  }
          }



    //dataSource=newtext2;
    //console.log("111111111111122222222222");
    //console.log(this.props.text1);
    this.setState({
      text1:testtext1,
       text2:dataSource2});
  }

  deleteAllClick=(e)=>{

    this.setState({text2:[]});
  }

  render(){
    const {readrole,forminfo,text1,text2} =this.props;
    const loop = data => data.map((item) => {
      if (item.children) {
        return (
          <TreeNode key={item.key} title={item.label}>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} title={item.label} />;
    });

    if(this.state.treeData.length==0){
       this.state.selectbutton=<select className="chuanyG" id="leftIdList" multiple="multiple">
         {
             this.state.text1.map(function(id,index){
              return (<option key={id.empid} value={index}>{id.empname}</option>)
           })
         }
       </select>
    } else {
      //alert(this.state.treeData.children)
      this.state.selectbutton=<Tree className="chuanyG" defaultExpandAll={true} selectedKeys={this.state.selectedKeys} onSelect={this.onSelect}>
          {loop(this.state.treeData)}
        </Tree>
    }

    return (
      <div>

        <Button onClick={this.showModal}>传阅</Button>






        <Modal title="选择传阅方式" width="80%" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
        >
        <Content className="boxChuany">
          <div>
            <p className="chuanyP">传阅方式</p>
            <p className="chuanyP">传阅人员选择</p>
          </div>
          <div className="clear">
            <div className="chuanyG">
                <Menu
                   onClick={this.handleClick}
                   style={{ width: 180 }}
                   defaultSelectedKeys={[]}
                   selectedKeys={[this.state.current]}
                   mode="vertical"
                 >
                   {
                       readrole.map(function(list,index){
                        return (<Menu.Item key={index}>{list.config_name}</Menu.Item>)
                     })
                   }

                </Menu>
            </div>
            {this.state.selectbutton}

            <div className="chuanyB">
              <Button onClick={this.addAllClick}>&gt;&gt;</Button>
              <Button onClick={this.addClick}>&gt;</Button>
              <Button onClick={this.deleteClick}>&lt;</Button>
              <Button onClick={this.deleteAllClick}>&lt;&lt;</Button>
            </div>
            <select className="chuanyG" id="rightIdList" multiple="multiple">
            {
                this.state.text2.map(function(id,index){
                 return (<option key={index} value={index}>{id.empname}</option>)
              })
            }


            </select>
          </div>
        </Content>
        </Modal>
      </div>
    )
  }

}
function mapStateToProps(state) {

  //console.log(state.listperson.allpersonlist);

  return {
    readrole:state.readrole.readrolelist||[],
    forminfo:state.gongwenInfo.formG||[],
    text1:state.listperson.personlist||[],
    text2:state.listperson.personlist||[],
    alltext1:state.listperson.allpersonlist||[],
    alltext2:state.listperson.allpersonlist||[]
  }


}


  function IsContain(arr,value)
  {
    for(var i=0;i<arr.length;i++)
    {
       if(arr[i].empname==value)
        return true;
    }
    return false;
  }


  function TreeData(data,pid) {
      var result = [], temp;
      for (var i in data) {
          if (data[i].orgid == pid) {
              var option = {};
              option.label = data[i].empname;
              option.value = data[i].empname;
              option.key = data[i].empname;
              option.empid = data[i].empid;
              option.empname= data[i].empname;
              option.nodeType = data[i].nodeType;
              option.orgid = data[i].orgid;
              option.orgname = data[i].orgname;
              option.userid = data[i].userid;
              result.push(option);
              temp = TreeData(data, data[i].empid);
              if (temp.length > 0) {
                  option.children = temp;
                  option.spread = true;
              }
          }
      }
      return result;
  }



  function findindex(data,name) {

      for (var i=0;i<data.length;i++) {
          if (data[i].empname == name)
            return i;

      }

  }

  function DepDataDel(data) {
    let newdata=[]
    for(var i in data) {
          if (data[i].nodeType !== "ORG")
           newdata.push(data[i]);
            //console.log(i);

      }
      //console.log(data);
      return newdata;
  }

Chuanyue=connect(mapStateToProps)(Chuanyue)
export default Chuanyue
