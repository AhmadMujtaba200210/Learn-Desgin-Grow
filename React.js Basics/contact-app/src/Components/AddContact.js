import React from 'react';

class AddContact extends React.Component {
    render () {
        return (
            <div className="ui main">
                <h2> Add Contact
                    <form className="ui form">
                        <div className="field">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Name"></input>
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Email"></input>
                        </div>
                        <button className="ui button blue">Add</button>
                    </form>
                </h2>
            </div>
        );
    }
}

export default AddContact;