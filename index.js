// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

appDiv.innerHTML = `
  <h1>JS Starter?</h1>
  <p>Current path: <code>${document.location.pathname}</code></p>
`;
