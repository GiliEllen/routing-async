const express = require('express');
const { Interface } = require('readline');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

interface Picture {
	name: string;
	src: string;
}

const memeArray = [
	{
		name: 'meme1',
		src: 'https://miro.medium.com/max/500/0*UpfsvduyJxP9_0lT.jpg'
	},
	{
		name: 'meme2',
		src: 'https://www.freecodecamp.org/news/content/images/2019/07/panel-3-1.png'
	},
	{
		name: 'meme3',
		src:
			'https://res.cloudinary.com/practicaldev/image/fetch/s--ij_hqKUb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/damiancipolat/js_vs_memes/blob/master/doc/mind_js.jpg%3Fraw%3Dtrue'
	}
];

const jokeArray = [
	{
		name: 'joke1',
		src: "Why was the JavaScript developer sad? a. Because they didn't Node how to Express himself"
	},
	{
		name: 'joke2',
		src: 'q. How do you comfort a JavaScript bug? a. You console it'
	},
	{
		name: 'joke3',
		src: "Why do JavaScripters wear glasses? Because they don't C#"
	}
];

app.listen(port, () => {
	console.log(`server is listening on port ${port}`);
});

function getRandomArbitrary() {
	return Math.round(Math.random());
}

function memeOrJoke() {
	if (getRandomArbitrary()) {
		const arr = jokeArray;
		return arr;
	} else {
		const arr = memeArray;
		return arr;
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
  }

app.get('/api/randomImage', (req, res) => {
	try {
		const arr = memeOrJoke();
		res.send({ DOMElement: arr[getRandomInt(3)] });
	} catch (error) {
		res.send({ error: error.message });
	}
});
