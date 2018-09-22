import React, { Component } from 'react';
import AgencyRegisterForm from '../Forms/AgencyRegisterForm';
// import VolunteerRegisterForm from '../Forms/VolunteerRegisterForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { registerUser } from '../../../actions/authActions';
import { withRouter } from 'react-router'
class Register extends Component {
    constructor(props){
      super(props)
      this.registerAgency = this.registerAgency.bind(this);
    }

    registerAgency(values) {
        console.log('values', values);
        
        this.props.registerUser({
            type: 'agency',
            ...values
        }).then(ret => {
            if(ret && ret.payload && !ret.payload.error) {
                this.props.history.push('/dashboard')
            }
        })
    }
    
    render() {
        return (
            <section>
                <h1>Agency Registration </h1>
                <AgencyRegisterForm onSubmit={this.registerAgency} />
            </section>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        registerUser
    }, dispatch);
}

function mapStateToProps(state) {
    return { };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
