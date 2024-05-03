import React from 'react';
import Home from './components/Home';
import Header from './components/Header';

function App() {

	return (
		<>
			<Header />
			<main className='bg-white-200'>
				<Home />
			</main>
		</>
	)
}

export default App;
