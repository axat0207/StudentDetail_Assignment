import React from 'react';



// Home component
const Home = (props) => {
  return (
    <div style={styles.container}>
      {/* Display the heading */}
      <h1 style={styles.heading}>Home page</h1>
      <div style={styles.info}>
        {/* Display the name prop */}
        Name: {props.name}
        <br />
        {/* Display the contact prop */}
        Contact No.: {props.contact}
      </div>
    </div>
  );
}

export default Home;
// CSS styles for the Home component
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
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    info: {
      fontSize: '18px',
      marginBottom: '10px',
    },
  };
