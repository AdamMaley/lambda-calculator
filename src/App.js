import React, { useState } from 'react';
import Header from './components/Header.js';
import Calculator from './components/Calculator/Calculator';
function App() {
	return (
		<div className='wrapper'>
			<div className='container'>
				<div className='App' />
				<Header />
				<Calculator />
			</div>
		</div>
	);
}

export default App;
