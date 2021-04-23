import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions'
import {Redirect} from 'react-router-dom'

 class CreateProject extends Component {
     state= {

        title:'',
        content:''

     }
     handleChange =(e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
     }
     handleSubmit =(e)=>{
       e.preventDefault();
      // console.log(this.state);
      this.props.createProject(this.state)
      this.props.history.push('/')
    }
    render() {

        const {auth} = this.props;
        if(!auth.uid)return  <Redirect to='/signin'/>
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className="white">

                   <h5 className="grey-text grey-darken-3">Create new project</h5>

                   <div className="input-field">
                       <label htmlFor="title">title</label>
                       <input onChange = {this.handleChange} type="text" id='title'/>
                   </div>
                   <div className="input-field">
                       <label htmlFor="content">Content Project</label>
                      <textarea onChange = {this.handleChange} id="content" className="materialize-textarea"></textarea>
                   </div>
                   <div className="input-field">
                       <button className="btn pink darken-1 z-depth-0">Create</button>
                   </div>

                </form>
            </div>
        )
    }
    
}
const mapStateToProps = (state)=>{
    console.log(state);
    return{
        projects:state.firestore.ordered.projects,
        auth:state.firebase.auth
    }
}
const mapDispatchToProps=(dispatch) =>{
    return {

        createProject : (project)=>{
            dispatch(createProject(project))
        }


    }
}

export default connect(mapStateToProps,(mapDispatchToProps)) (CreateProject)
