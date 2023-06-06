import PropTypes from "prop-types";

export const User = (props) => {
    return (
      <div>
        <h1>Name : {props.name}</h1>
        <h2>Age : {props.age}</h2>
        <h2>Email : {props.email}</h2>
      </div>
    );
  };
  
  // validation for props field in User component
  User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
  };
  