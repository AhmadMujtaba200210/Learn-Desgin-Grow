import React from 'react';

class AddContact extends React.Component {
    state={
        name:"",
        email:""
    }
    add=(e)=>{
        e.preventDefault();
        if(this.state.name===""&&this.state.email===""){
            alert("These fields are mandatory");
            return;
        }
        console.log(this.state);
    }
    render () {
        return (
            <div className="ui main">
                <h2> Add Contact
                    <form className="ui form" onSubmit={this.add}>
                        <div className="field">
                            <label>Name</label>
                            <input type="text" 
                            name="name" 
                            placeholder="Name" 
                            value={this.state.name}
                            onChange={(e)=>this.setState({name:e.target.value})}
                            ></input>
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="email"
                             name="email"
                             placeholder="Email"
                             value={this.state.value}
                             onChange={(e)=>this.setState({email: e.target.value})}
                             ></input>
                        </div>
                        <button className="ui button blue">Add</button>
                    </form>
                </h2>
            </div>
        );
    }
}

export default AddContact;