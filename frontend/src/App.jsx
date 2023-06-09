import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [post, setPosts] = useState([]);

	const getPost = async () => {
		try {
			const response = await fetch("http://127.0.0.1:3333/api/v1/posts");

			if (!response.ok) {
				throw new Error("Error fetching posts");
			}

			const data = await response.json();
			setPosts(data);
		} catch (error) {
			console.error(error);
		}
	};
	const savePost = async () => {
		const data = await fetch("http://127.0.0.1:3333/api/v1/posts", {
			method: "POST",
			body: JSON.stringify({ title, description }),
		});
	};
	// console.log(post);
	return (
		<>
			<div style={{ display: "flex" }}>
				<input
					placeholder="title"
					type={"text"}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<textarea
					placeholder="Description"
					type={"text"}
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<button onClick={savePost}>Save</button>
				<button onClick={getPost}>Fetch Data</button>
			</div>
			<div>
				{post && post.isCached && (
					<p>Cache: {post.isCached ? "true" : "false"}</p>
				)}
				{post && post.data ? (
					post.data.map((row, key) => {
						return (
							<>
								<div key={key} style={{ background: "#fdfdfd", padding: 4 }}>
									<p>Post Id: {row.id}</p>
									<p>{row.title}</p>
									<p>{row.description}</p>
								</div>
							</>
						);
					})
				) : (
					<></>
				)}
			</div>
		</>
	);
}

export default App;
