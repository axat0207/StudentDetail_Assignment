import React from "react";
import { Link } from "react-router-dom";


const Student = (props) => {
  return (
    <div style={styles.container}>
      <h2>Student Portal</h2>
      
      <form>
        {/* Taking Name as input and passing it to App with function props.SetName */}
        <label style={styles.formLabel} htmlFor="name">Name:</label>
        <input
          style={styles.formInput}
          type="text"
          id="name"
          onChange={(e) => props.setName(e.target.value)}
        />

        {/* Taking Contact No. as input and passing it to App with function props.SetNum */}
        <label style={styles.formLabel} htmlFor="contact">Contact No.:</label>
        <input
          style={styles.formInput}
          type="number"
          id="contact"
          onChange={(e) => props.setNum(e.target.value)}
        />

        <br />
        
        {/* Submit button with Link to redirect Home to show details */}
        <Link to="/home">
          <button>Submit and redirect to Home page</button>
        </Link>
      </form>
    </div>
  );
};

export default Student;

// CSS styles for the Student component
const styles = {
    container: {
      textAlign: 'center',
      margin: 'auto',
      marginTop: '50px',
      width: '300px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
    },
    formLabel: {
      marginBottom: '5px',
    },
    formInput: {
      width: '100%',
      padding: '5px',
      marginBottom: '10px',
    },
  };
