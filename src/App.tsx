import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home";
import Wiki, { wikiLoader } from "./pages/Wiki";
import About from "./pages/About";
import Error404 from "./pages/Error404";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Styles
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/base.css";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route path="/" element={<Home />} />

			<Route path="/wiki" element={<Wiki />} loader={wikiLoader} />

			<Route path="/about" element={<About />} />
			<Route path="*" element={<Error404 />} />,
		</Route>,
	),
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
