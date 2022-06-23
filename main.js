// STARSHIP
// // Create a new pixi app and append to body
// let app = new PIXI.Application({ width: 640, height: 360 });
// document.body.appendChild(app.view);

// // Create sprite and add it to the stage
// let sprite = PIXI.Sprite.from(
// 	'https://cdn.devdojo.com/images/june2022/sample.png'
// );
// app.stage.addChild(sprite);

// // Add a ticker that moves the spaceship back and forth
// // elapsed counts the seconds the demo has been running
// let elapsed = 0.0;
// // app will run the callback on every frame, passing in the amount of time that has passed since the last tick
// app.ticker.add((delta) => {
// 	elapsed += delta;
// 	// update sprite's position based on cosine of elapsed time. divide by 50 to slow the animation
// 	sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
// });

// TINTING
const app = new PIXI.Application();
document.body.appendChild(app.view);

const aliens = [];
const totalDudes = 20;

for (let i = 0; i < totalDudes; i++) {
	const dude = PIXI.Sprite.from('examples/assets/eggHead.png');
	dude.anchor.set(0.5);
	dude.scale.set(0.8 + Math.random() * 0.3);
	dude.x = Math.random() * app.screen.width;
	dude.y = Math.random() * app.screen.height;
	dude.tint = Math.random() * 0xffffff;
	dude.direction = Math.random() * Math.PI * 2;
	dude.turningSpeed = 2 + Math.random() * 2;

	aliens.push(dude);

	app.stage.addChild(dude);
}

const dudeBoundsPadding = 100;
const dudeBounds = new PIXI.Rectangle(
	-dudeBoundsPadding,
	-dudeBoundsPadding,
	app.screen.width + dudeBoundsPadding * 2,
	app.screen.height + dudeBoundsPadding * 2
);

app.ticker.add(() => {
	for (let i = 0; i < aliens.length; i++) {
		const dude = aliens[i];
		dude.direction += dude.turningSpeed * 0.01;
		dude.x += Math.sin(dude.directoin) * dude.speed;
		dude.y += Math.cos(dude.direction) * dude.speed;
		dude.rotation = -dude.direction - Math.PI / 2;

		if (dude.x < dudeBounds.x) {
			dude.x += dudeBounds.width;
		} else if (dude.x > dudeBounds.x + dudeBounds.width) {
			dude.x -= dudeBounds.width;
		}

		if (dude.y < dudeBounds.y) {
			dude.y += dudeBounds.height;
		} else if (dude.y > dudeBounds.y + dudeBounds.height) {
			dude.y -= dudeBounds.height;
		}
	}
});
