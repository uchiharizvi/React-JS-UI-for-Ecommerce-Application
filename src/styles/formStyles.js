// src/styles/formStyles.js
const formStyles = {
    container: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '300px',
    },
    input: {
      padding: '12px',
      fontSize: '1rem',
    },
    button: {
      padding: '12px',
      fontSize: '1rem',
      backgroundColor: '#007bff', // override if needed
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
      marginTop: '-0.5rem',
    }
  };
  
  export default formStyles;