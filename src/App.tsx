import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Main } from './components/Main'

import { HomePage } from './pages/HomePage'
import { Details } from './pages/Details'
import { NotFound } from './pages/NotFound'

function App() {
	return (
		<>
			<Header />
			<Main>
				<Routes>
					<Route path='/countries-flags/' element={<HomePage />} />
					<Route path='/countries-flags/country/:name' element={<Details />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Main>
		</>
	)
}

export default App
