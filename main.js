// Create a new pixi app and append to body
let app = new PIXI.Application({ width: 640, height: 360 });
document.body.appendChild(app.view);

// Create sprite and add it to the stage
let sprite = PIXI.Sprite.from(
	'https://cdn.devdojo.com/images/june2022/sample.png'
);
app.stage.addChild(sprite);

// Add a ticker that moves the spaceship back and forth
let elapsed = 0.0;
app.ticker.add((delta) => {
	elapsed += delta;
	sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
});
