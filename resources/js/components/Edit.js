import Axios from 'axios';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            number: '',
        }
        this.handleNameInputChange = this.handleNameInputChange.bind(this);
        this.handlePhoneInputChange = this.handlePhoneInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount(){
        const id = this.props.match.params.id
        Axios.get(`/api/contacts/${id}/edit`).then(response => {
            this.setState({
                name: response.data.name,
                number: response.data.number
            }).catch(err => console.log(err));
        });
    }

    handleNameInputChange(event){
        this.setState({
            name : event.target.value
        });
    }

    handlePhoneInputChange(event){
        this.setState({
            number : event.target.value
        });
    }

    handleFormSubmit(event){
        event.preventDefault();
        const id = this.props.match.params.id
        Axios.put(`/api/contacts/${id}/update`,{
            name: this.state.name,
            number: this.state.number
        }).then(response => {
            this.setState({
                name: '',
                number: '',
            });
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Edit Component</div>

                            <div className="card-body">
                            <form onSubmit={this.handleFormSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Name"
                                            required
                                            onChange={this.handleNameInputChange}
                                            value={this.state.name}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Phone"
                                            required
                                            onChange={this.handlePhoneInputChange}
                                            value={this.state.number}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;
