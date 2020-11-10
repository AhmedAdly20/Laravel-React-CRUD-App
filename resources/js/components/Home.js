import Axios from 'axios';
import { event } from 'jquery';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts : []
        }
    }

    componentDidMount(){
        Axios.get('/api/contacts').then(response => {
            this.setState({
                contacts : response.data
            });
        }).catch(err => console.log(err));
    }

    handleDeleteSubmit(id,e){
        alert(id);
        alert(e);
        Axios.delete(`/api/contacts/${id}/delete`).then(response => {
            const contacts = this.state.contacts.filter(item => item.id !== id);
            this.setState({ contacts });
        }).catch(err => console.log(err));
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">All Contacts</div>
                            <div className="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.contacts !== null
                                                ? this.state.contacts.map(contact => (
                                                <tr key={contact.id}>
                                                    <td>{contact.name}</td>
                                                    <td>{contact.number}</td>
                                                    <td>
                                                        <Link to={`${contact.id}/edit`} className="btn btn-secondary mr-2">Update</Link>
                                                        <span className="btn btn-danger" onClick={(e) => this.handleDeleteSubmit(contact.id, e)} id={contact.id}>Delete</span>
                                                    </td>
                                                </tr>
                                                ))
                                                : null
                                        }

                                    </tbody>
                                </table>
                                <Link to="/add" className="btn btn-primary col-md-3 m-2 btn-sm mr-2 ">Add New Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    }

export default Home;
