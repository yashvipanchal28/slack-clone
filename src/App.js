//import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import React from "react";
import Chat from "./Chat";
import Login from "./Login";
import {useStateValue} from "./StateProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	
	const [{user }, dispatch] = useStateValue();

	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login/>
				) : (
					<>
						<Header />
						<div className="app_body">
							<Sidebar />
							<Routes>
								<Route path="/room/:roomId" element={<Chat />} />
								<Route path="/" element={<h1>Welcome</h1>} />
							</Routes>
						</div>
					</>
				)}
			</Router>
		</div>
	);
}

export default App;
