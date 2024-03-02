import { Outlet } from "react-router-dom";
import {
	Header
} from "./components/index";

export default function App() {
	return (
		<>
			<div className="flex flex-col h-full">
				<Header />
				<Outlet/>
			</div>
		</>
	);
}
