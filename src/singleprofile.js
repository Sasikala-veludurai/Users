import React from 'react';
import Querystring from 'query-string'
import axios from 'axios'

import "./single.css"

import ClipLoader from "react-spinners/ClipLoader";


class SinglePro extends React.Component{
    constructor(){
        super();
        this.state={
            id:undefined,
            avatar:undefined,
            first_name:undefined,
            last_name:undefined,
           userdata:{},
           filterdata:{},
           loading:true,
           color:"rgb(235, 171, 52)"
        }
    }
  
    componentDidMount(){
        axios({
            method:"GET",
            url:'https://reqres.in/api/users?delay=3',
            headers:{ 'content-Type': 'application/json'}
        }
  
        ).then(res=>{
            this.setState({userdata:res.data});
            this.setState({loading:false})
        }
  
        ).catch(err=>console.log(err));
  
    }
    
    render(){
        const qs=Querystring.parse(this.props.location.search);
        const {Id}=qs;
        const {userdata,loading,color}=this.state;
     const filterdata = userdata.data? userdata.data.find(i=>(i.id==Id )):null;
     
      return  (
      (loading ? <center style={{marginTop:'30vh'}}><ClipLoader color={color} size={80} /></center>:
        <div className="wrapper">
             
             <h1>User</h1>
        { filterdata ? <div>
            <img src={filterdata.avatar}/>
            <div className="name">{filterdata.first_name}</div>
            <div className="name">{filterdata.last_name}</div>
            </div>:null }
        
           
         </div>
      ) 
        
        )
    }
}

export default SinglePro;