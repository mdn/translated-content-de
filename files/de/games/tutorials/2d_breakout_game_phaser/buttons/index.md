---
title: Buttons
slug: Games/Tutorials/2D_breakout_game_Phaser/Buttons
l10n:
  sourceCommit: 6eae35bc64a49865a469ca29bc40e6993b9cb8cc
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens", "Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay")}}

Dies ist der **15. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Anstatt das Spiel sofort zu starten, können wir diese Entscheidung dem Spieler überlassen, indem wir einen Start-Button hinzufügen, den er drücken kann. Lassen Sie uns untersuchen, wie das geht.

## Neue Eigenschaften

Wir benötigen eine Eigenschaft, um einen booleschen Wert zu speichern, der darstellt, ob das Spiel gerade gespielt wird oder nicht, und eine weitere, um unseren Button darzustellen. Fügen Sie diese Zeilen unter Ihren anderen Eigenschaftsdefinitionen hinzu:

```js
class ExampleScene extends Phaser.Scene {
  // ... previous property definitions ...
  playing = false;
  startButton;
  // ... rest of the class ...
}
```

## Laden des Button-Spritesheets

Wir können das Button-Spritesheet laden, genau wie wir die Wobble-Animation des Balls geladen haben. Fügen Sie Folgendes am Ende der `preload()`-Methode hinzu:

```js
this.load.spritesheet("button", "img/button.png", {
  frameWidth: 120,
  frameHeight: 40,
});
```

Ein einzelner Button-Rahmen ist 120 Pixel breit und 40 Pixel hoch.

Sie müssen auch das [Button-Spritesheet herunterladen](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/button.png) und es in Ihrem `/img` Verzeichnis speichern.

## Hinzufügen des Buttons zum Spiel

Das Hinzufügen des neuen Buttons zum Spiel erfolgt durch die Verwendung der `add.sprite` Methode. Fügen Sie die folgenden Zeilen am Ende Ihrer `create()` Methode hinzu:

```js
this.startButton = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height * 0.5,
  "button",
  0,
);
```

Zusätzlich zu den Parametern, die wir bei den anderen `add.sprite`-Aufrufen übergeben haben (wie beim Hinzufügen des Balls und des Paddels), geben wir diesmal auch die Rahmennummer an, die in diesem Fall `0` ist. Das bedeutet, dass der erste Rahmen des Spritesheets für das anfängliche Erscheinungsbild des Buttons verwendet wird.

Um den Button auf verschiedene Eingaben wie Mausklicks reagieren zu lassen, müssen wir die folgenden Zeilen direkt nach dem vorherigen `add.sprite`-Aufruf hinzufügen:

```js
this.startButton.setInteractive();
this.startButton.on(
  "pointerover",
  () => {
    this.startButton.setFrame(1);
  },
  this,
);
this.startButton.on(
  "pointerdown",
  () => {
    this.startButton.setFrame(2);
  },
  this,
);
this.startButton.on(
  "pointerout",
  () => {
    this.startButton.setFrame(0);
  },
  this,
);
this.startButton.on(
  "pointerup",
  () => {
    this.startGame();
  },
  this,
);
```

Zuerst rufen wir `setInteractive` auf dem Button auf, um ihn auf Zeigerereignisse reagieren zu lassen. Dann fügen wir dem Button die vier Ereignislistener hinzu:

- `pointerover`: Wenn sich der Zeiger über dem Button befindet, ändern wir den Button-Rahmen auf `1`, den zweiten Rahmen des Spritesheets.
- `pointerdown`: Wenn der Button gedrückt wird, ändern wir den Button-Rahmen auf `2`, den dritten Rahmen des Spritesheets.
- `pointerout`: Wenn der Zeiger den Button verlässt, ändern wir den Button-Rahmen zurück auf `0`, den ersten Rahmen des Spritesheets.
- `pointerup`: Wenn der Button losgelassen wird, rufen wir die `startGame`-Methode auf, um das Spiel zu starten.

Nun müssen wir die oben im Code erwähnte `startGame()` Methode definieren:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  startGame() {
    this.startButton.destroy();
    this.ball.body.setVelocity(150, -150);
    this.playing = true;
  }
}
```

Wenn der Button gedrückt wird, entfernen wir den Button, setzen die Anfangsgeschwindigkeit des Balls und setzen die `playing` Eigenschaft auf `true`.

Abschließend für diesen Abschnitt, gehen Sie zurück in Ihre `create` Methode, finden Sie die Zeile `this.ball.body.setVelocity(150, -150);` und entfernen Sie sie. Der Ball soll sich erst bewegen, wenn der Button gedrückt wurde, nicht vorher!

## Das Paddle unbeweglich halten, bevor das Spiel startet

Es funktioniert wie erwartet, aber wir können das Paddle noch bewegen, wenn das Spiel noch nicht gestartet wurde, was etwas albern aussieht. Um dies zu verhindern, können wir die `playing` Eigenschaft nutzen und das Paddle nur beweglich machen, wenn das Spiel gestartet wurde. Dafür passen Sie die `update()` Methode folgendermaßen an:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    // ...
    if (this.playing) {
      this.paddle.x = this.input.x || this.scale.width * 0.5;
    }
    // ...
  }
  // ...
}
```

Auf diese Weise ist das Paddle unbeweglich, nachdem alles geladen und vorbereitet wurde, aber bevor das eigentliche Spiel beginnt.

## Vergleichen Sie Ihren Code

Hier ist, was Sie bisher haben sollten, live laufend. Um den Quellcode anzusehen, klicken Sie auf den "Play" Button.

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

  lives = 3;
  livesText;
  lifeLostText;

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
    this.load.image("paddle", "paddle.png");
    this.load.image("brick", "brick.png");
    this.load.spritesheet("wobble", "wobble.png", {
      frameWidth: 20,
      frameHeight: 20,
    });
    this.load.spritesheet("button", "button.png", {
      frameWidth: 120,
      frameHeight: 40,
    });
  }
  create() {
    this.physics.world.checkCollision.down = false;

    this.ball = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height - 25,
      "ball",
    );
    this.physics.add.existing(this.ball);
    this.ball.body.setCollideWorldBounds(true, 1, 1);
    this.ball.body.setBounce(1);
    this.ball.anims.create({
      key: "wobble",
      frameRate: 24,
      frames: this.anims.generateFrameNumbers("wobble", {
        frames: [0, 1, 0, 2, 0, 1, 0, 2, 0],
      }),
    });

    this.paddle = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height - 5,
      "paddle",
    );
    this.paddle.setOrigin(0.5, 1);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);

    this.initBricks();

    const textStyle = { font: "18px Arial", fill: "#0095dd" };
    this.scoreText = this.add.text(5, 5, "Points: 0", textStyle);

    this.livesText = this.add.text(
      this.scale.width - 5,
      5,
      `Lives: ${this.lives}`,
      textStyle,
    );
    this.livesText.setOrigin(1, 0);
    this.lifeLostText = this.add.text(
      this.scale.width * 0.5,
      this.scale.height * 0.5,
      "Life lost, click to continue",
      textStyle,
    );
    this.lifeLostText.setOrigin(0.5, 0.5);
    this.lifeLostText.visible = false;

    this.startButton = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height * 0.5,
      "button",
      0,
    );
    this.startButton.setInteractive();
    this.startButton.on(
      "pointerover",
      () => {
        this.startButton.setFrame(1);
      },
      this,
    );
    this.startButton.on(
      "pointerdown",
      () => {
        this.startButton.setFrame(2);
      },
      this,
    );
    this.startButton.on(
      "pointerout",
      () => {
        this.startButton.setFrame(0);
      },
      this,
    );
    this.startButton.on(
      "pointerup",
      () => {
        this.startGame();
      },
      this,
    );
  }
  update() {
    this.physics.collide(this.ball, this.paddle, (ball, paddle) =>
      this.hitPaddle(ball, paddle),
    );
    this.physics.collide(this.ball, this.bricks, (ball, brick) =>
      this.hitBrick(ball, brick),
    );

    if (this.playing) {
      this.paddle.x = this.input.x || this.scale.width * 0.5;
    }

    const ballIsOutOfBounds = !Phaser.Geom.Rectangle.Overlaps(
      this.physics.world.bounds,
      this.ball.getBounds(),
    );
    if (ballIsOutOfBounds) {
      this.ballLeaveScreen();
    }
    if (this.bricks.countActive() === 0) {
      alert("You won the game, congratulations!");
      location.reload();
    }
  }

  startGame() {
    this.startButton.destroy();
    this.ball.body.setVelocity(150, -150);
    this.playing = true;
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

  hitPaddle(ball, paddle) {
    this.ball.anims.play("wobble");
  }

  hitBrick(ball, brick) {
    const destroyTween = this.tweens.add({
      targets: brick,
      ease: "Linear",
      repeat: 0,
      duration: 200,
      props: {
        scaleX: 0,
        scaleY: 0,
      },
      onComplete() {
        brick.destroy();
      },
    });
    destroyTween.play();
    this.score += 10;
    this.scoreText.setText(`Points: ${this.score}`);
  }

  ballLeaveScreen() {
    this.lives--;
    if (this.lives > 0) {
      this.livesText.setText(`Lives: ${this.lives}`);
      this.lifeLostText.visible = true;
      this.ball.body.reset(this.scale.width * 0.5, this.scale.height - 25);
      this.input.once(
        "pointerdown",
        () => {
          this.lifeLostText.visible = false;
          this.ball.body.setVelocity(150, -150);
        },
        this,
      );
    } else {
      // Game over logic
      location.reload();
    }
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

Das Letzte, was wir in dieser Artikelreihe tun werden, ist, das Gameplay noch interessanter zu machen, indem wir etwas [Randomisierung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay) in die Art und Weise einfügen, wie der Ball vom Paddle abprallt.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens", "Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay")}}
