import React from 'react'
import axios from 'axios'
import './App.css'

import ClipLoader from "react-spinners/ClipLoader";


class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            userdata:[],
            color:"rgb(235, 171, 52)",
            loading:true

        }
    }

    handleClick=(id)=>{
        this.props.history.push(`/singleprofile/?Id=${id}`);
    }
    handleChange=(event)=>{
      const id=event.target.value;
        this.props.history.push(`/singleprofile/?Id=${id}`);
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
        const {userdata,color,loading}=this.state
        
        return(
            
    <div className="App">
        {loading?<center style={{marginTop:'30vh'}}><ClipLoader color={color} size={80} /></center>:
      
    <section className="content-wrapper">
     
       <div >
           
      <h1 className="heading">User</h1>
      <div className="select-wrapper">
          <select onChange={this.handleChange}>
          {userdata.data ? userdata.data.map(i=>(<option value={i.id} >{i.first_name} {i.last_name}</option> )):null
          }
          </select>
    </div>
        { userdata.data ? userdata.data.map(i=>{

      return( 
          
              
           <div key={i.id} className="inside-wrapper" onClick={()=>{this.handleClick(i.id)}}>

         <img src={i.avatar} alt="can't found"/>
         <div >{i.first_name}</div>
         <div >{i.last_name}</div>
       
       </div>
      )
    }) : null }</div>
  
</section>
    }
  </div>
        )
    }
}

export default Profile;