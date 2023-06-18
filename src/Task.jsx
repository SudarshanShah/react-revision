import PropTypes from "prop-types";

export const Task = (props) => {
    return (
        <div>
          <h1>{props.taskName}</h1>
          <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
      );
};

Task.propTypes = {
    taskName : PropTypes.string,
    id : PropTypes.number,
    deleteTask : PropTypes.any
}