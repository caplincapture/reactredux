// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// if (module.hot) {
//   module.hot.accept();
// };

// Create a react component

const App = () => {
	return <div> Hi there! </div>;
};



ReactDOM.render(<App />, document.querySelector('#root')
);