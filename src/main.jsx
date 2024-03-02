import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./context/contextApi.jsx";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Feed from "./components/Feed.jsx";
import SearchResult from "./components/SearchResult.jsx";
import VideoDetails from "./components/VideoDetails.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path='/'
			element={<App />}
		>
			<Route
				path='/'
				exact
				element={<Feed />}
			/>
			<Route
				path='/searchResult/:searchQuery'
				element={<SearchResult />}
			/>
			<Route
				path='/video/:id'
				element={<VideoDetails />}
			/>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider>
			<RouterProvider router={router}>
				<App />
			</RouterProvider>
		</ContextProvider>
	</React.StrictMode>
);
