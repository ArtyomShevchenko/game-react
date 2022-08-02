import React from "react";
import './App.css';

function App() {
	const [field, setField] = React.useState([
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
		[0, 0, 0, 0, 1, 0, 0, 0, 0, 0,],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
	]);

	const handleClick = (e, index, i) => {
		const arr = [...field]
		arr[index][i] === 1 ? arr[index][i] = 0 : arr[index][i] = 1;
		setField(arr)
	}

	return (
		<div className="App">
			<div className="field">
				{field.map((elements, index) => {
					return (
						<div className="field-row">
							{elements.map((element, i) => {
								switch (element) {
									case 1:
										return (
											<span style={{ backgroundColor: "lime" }}
												onMouseDown={e => handleClick(e, index, i)}
											// onMouseMoveCapture={e => handleClick(e, index, i)}
											>
												{element}
											</span>
										)
										break

									case 2:
										return (
											<span style={{ backgroundColor: "yellow" }}>
												{element}
											</span>)
										break

									default:
										return (
											<span
												onMouseDown={e => handleClick(e, index, i)}
												onMouseOver={e => {
													e.target.style.backgroundColor = "rgba(255,255,255,0.2)";
												}}
												onMouseLeave={e => {
													e.target.style.backgroundColor = "transparent";
												}}
											>
												{element}
											</span>
										)
										break
								}
							})}
						</div>
					)
				})}
			</div>
		</div>
	);
}

export default App;
