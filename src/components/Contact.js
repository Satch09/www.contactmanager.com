import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };
  render() { // You can use this keyword since this it is being used inside of a class which has 'this'
  const {name, phone, email} = this.props;
    return (
      <div className="card card-body mb-3">
      <h4>{name}</h4>
      <ul className="list-group">
        <li className="list-group-item">Email: {email}</li>
        <li className="list-group-item">Phone: {phone}</li>
      </ul>
      </div>
    )
  }
}

export default Contact;