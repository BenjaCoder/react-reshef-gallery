import React from "react"
import Card from './Card';
import data from "./data";

function App() {

	const [cardList, setCardList] = React.useState([])

	React.useEffect(() => {
		setCardList(data)
	}, [])
	
	const cards = cardList.map(card =>  
		<Card key={card.id} {...card} />
	);

	return (
		<>
		<h1>"Reshef of Destruction"<br />Card Gallery</h1>
		<div className="card-grid">
			{cards}
		</div>
		</>
	)
}

export default App;
