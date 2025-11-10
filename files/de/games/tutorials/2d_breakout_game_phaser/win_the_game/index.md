---
title: Gewinnen Sie das Spiel
slug: Games/Tutorials/2D_breakout_game_Phaser/Win_the_game
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/The_score", "Games/Tutorials/2D_breakout_game_Phaser/Extra_lives")}}

Dies ist der **12. Schritt** von insgesamt 16 im [Gamedev Phaser Leitfaden](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Das Implementieren des Gewinnens in unserem Spiel ist ziemlich einfach: Wenn Sie alle Steine zerstören, gewinnen Sie.

## Wie gewinnt man?

Fügen Sie den folgenden neuen Code in Ihre `update()`-Methode ein:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    // ...
    if (this.bricks.countActive() === 0) {
      alert("You won the game, congratulations!");
      location.reload();
    }
  }
  // ...
}
```

Wir zählen die Anzahl der Steine, die noch leben, indem wir die `countAlive()`-Methode auf `this.bricks` anwenden. Wenn keine Steine mehr lebendig sind, zeigen wir die Gewinnmeldung an und starten das Spiel neu, sobald die Benachrichtigung geschlossen wird.

## Vergleichen Sie Ihren Code

Hier sehen Sie, was Sie bisher haben sollten, live ausgeführt. Um den Quellcode anzuzeigen, klicken Sie auf die Schaltfläche "Abspielen".

```html hidden
<script src="https://cdnjs.cloudflare.com/ajax/libs/phaser/3.90.0/phaser.js"></script>
```

```css hidden
* {
  padding: 0;
  margin: 0;
}
```

```js hidden
class ExampleScene extends Phaser.Scene {
  ball;
  paddle;
  bricks;
  scoreText;
  score = 0;

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
    this.load.image("paddle", "paddle.png");
    this.load.image("brick", "brick.png");
  }
  create() {
    this.physics.world.checkCollision.down = false;

    this.ball = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height - 25,
      "ball",
    );
    this.physics.add.existing(this.ball);
    this.ball.body.setVelocity(150, -150);
    this.ball.body.setCollideWorldBounds(true, 1, 1);
    this.ball.body.setBounce(1);

    this.paddle = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height - 5,
      "paddle",
    );
    this.paddle.setOrigin(0.5, 1);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);

    this.initBricks();

    this.scoreText = this.add.text(5, 5, "Points: 0", {
      font: "18px Arial",
      color: "#0095dd",
    });
  }
  update() {
    this.physics.collide(this.ball, this.paddle);
    this.physics.collide(this.ball, this.bricks, (ball, brick) =>
      this.hitBrick(ball, brick),
    );

    this.paddle.x = this.input.x || this.scale.width * 0.5;
    const ballIsOutOfBounds = !Phaser.Geom.Rectangle.Overlaps(
      this.physics.world.bounds,
      this.ball.getBounds(),
    );
    if (ballIsOutOfBounds) {
      // Game over logic
      location.reload();
    }
    if (this.bricks.countActive() === 0) {
      alert("You won the game, congratulations!");
      location.reload();
    }
  }

  initBricks() {
    const bricksLayout = {
      width: 50,
      height: 20,
      count: {
        row: 3,
        col: 7,
      },
      offset: {
        top: 50,
        left: 60,
      },
      padding: 10,
    };

    this.bricks = this.add.group();
    for (let c = 0; c < bricksLayout.count.col; c++) {
      for (let r = 0; r < bricksLayout.count.row; r++) {
        const brickX =
          c * (bricksLayout.width + bricksLayout.padding) +
          bricksLayout.offset.left;
        const brickY =
          r * (bricksLayout.height + bricksLayout.padding) +
          bricksLayout.offset.top;

        const newBrick = this.add.sprite(brickX, brickY, "brick");
        this.physics.add.existing(newBrick);
        newBrick.body.setImmovable(true);
        this.bricks.add(newBrick);
      }
    }
  }

  hitBrick(ball, brick) {
    brick.destroy();
    this.score += 10;
    this.scoreText.setText(`Points: ${this.score}`);
  }
}

const config = {
  type: Phaser.CANVAS,
  width: 480,
  height: 320,
  scene: ExampleScene,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: "#eeeeee",
  physics: {
    default: "arcade",
  },
};

const game = new Phaser.Game(config);
```

{{EmbedLiveSample("vergleichen Sie Ihren Code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Sowohl Verlieren als auch Gewinnen sind implementiert, sodass das Kerngameplay unseres Spiels abgeschlossen ist. Fügen wir nun etwas Extra hinzu—wir geben dem Spieler drei [Leben](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives) anstelle von einem.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/The_score", "Games/Tutorials/2D_breakout_game_Phaser/Extra_lives")}}
