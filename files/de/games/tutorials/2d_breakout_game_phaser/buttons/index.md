---
title: Schaltflächen
slug: Games/Tutorials/2D_breakout_game_Phaser/Buttons
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens", "Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay")}}

Dies ist der **11. von 12 Schritten** im [Tutorial zum Erstellen eines Breakout-Spiels mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Anstatt das Spiel sofort zu starten, können wir die Entscheidung den Spielenden überlassen, indem wir eine Startschaltfläche hinzufügen. Sehen wir uns an, wie das geht.

## Neue Eigenschaften

Wir benötigen eine Eigenschaft für einen booleschen Wert, der angibt, ob das Spiel gerade läuft, und eine weitere für die Schaltfläche. Fügen Sie diese Zeilen unter Ihren anderen Eigenschaftsdefinitionen hinzu:

```js
class ExampleScene extends Phaser.Scene {
  // ... previous property definitions ...
  playing = false;
  startButton;
  // ... rest of the class ...
}
```

## Das Spritesheet der Schaltfläche laden

Wir können das Spritesheet der Schaltfläche genauso laden wie die Wackelanimation des Balls. Fügen Sie Folgendes am Ende der Methode `preload()` hinzu:

```js
this.load.spritesheet("button", "img/button.png", {
  frameWidth: 120,
  frameHeight: 40,
});
```

Ein einzelner Frame der Schaltfläche ist 120 Pixel breit und 40 Pixel hoch.

Sie müssen außerdem [das Spritesheet der Schaltfläche herunterladen](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/button.png) und in Ihrem Verzeichnis `/img` speichern.

## Die Schaltfläche zum Spiel hinzufügen

Die neue Schaltfläche wird mit der Methode `add.sprite` zum Spiel hinzugefügt. Fügen Sie die folgenden Zeilen am Ende Ihrer Methode `create()` hinzu:

```js
this.startButton = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height * 0.5,
  "button",
  0,
);
```

Zusätzlich zu den Parametern, die wir bei den anderen Aufrufen von `add.sprite` übergeben haben (etwa beim Hinzufügen von Ball und Schläger), übergeben wir diesmal auch die Frame-Nummer, in diesem Fall `0`. Dadurch wird der erste Frame des Spritesheets für das anfängliche Aussehen der Schaltfläche verwendet.

## Eingaben über die Schaltfläche verarbeiten

Damit die Schaltfläche auf verschiedene Eingaben wie Mausklicks reagiert, fügen Sie direkt nach dem vorherigen Aufruf von `add.sprite` die folgenden Zeilen hinzu:

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

Zunächst rufen wir `setInteractive` für die Schaltfläche auf, damit sie auf Pointer-Ereignisse reagiert. Anschließend fügen wir der Schaltfläche vier Event-Listener hinzu:

- `pointerover` – Wenn sich der Pointer über der Schaltfläche befindet, wechseln wir zum Frame `1`, dem zweiten Frame des Spritesheets.
- `pointerdown` – Wenn die Schaltfläche gedrückt wird, wechseln wir zum Frame `2`, dem dritten Frame des Spritesheets.
- `pointerout` – Wenn der Pointer die Schaltfläche verlässt, wechseln wir zurück zum Frame `0`, dem ersten Frame des Spritesheets.
- `pointerup` – Wenn die Schaltfläche losgelassen wird, rufen wir die Methode `startGame` auf, um das Spiel zu starten.

## Das Spiel starten

Jetzt müssen wir die oben referenzierte Methode `startGame()` definieren:

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

Wenn die Schaltfläche gedrückt wird, entfernen wir sie, legen die Anfangsgeschwindigkeit des Balls fest und setzen die Eigenschaft `playing` auf `true`.

Kehren Sie zum Abschluss dieses Abschnitts zu Ihrer Methode `create` zurück, suchen Sie die Zeile `this.ball.body.setVelocity(150, -150);` und entfernen Sie sie. Der Ball soll sich erst bewegen, wenn die Schaltfläche gedrückt wurde!

## Den Schläger vor Spielbeginn stillhalten

Das funktioniert wie erwartet, aber wir können den Schläger auch dann noch bewegen, wenn das Spiel noch nicht begonnen hat. Das wirkt etwas seltsam. Um das zu verhindern, können wir die Eigenschaft `playing` nutzen und den Schläger nur dann beweglich machen, wenn das Spiel begonnen hat. Passen Sie dazu die Methode `update()` wie folgt an:

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

So bleibt der Schläger unbeweglich, nachdem alles geladen und vorbereitet wurde, aber bevor das eigentliche Spiel beginnt.

## Vergleichen Sie Ihren Code

So sollte Ihr bisheriger Stand aussehen. Das Beispiel ist direkt ausführbar. Um den Quellcode anzuzeigen, klicken Sie auf die Schaltfläche „Play“.

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

  playing = false;
  startButton;

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

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Als Letztes werden wir in dieser Artikelserie das Spiel noch interessanter gestalten, indem wir etwas [Zufälligkeit](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay) in die Art bringen, wie der Ball vom Schläger abprallt.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens", "Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay")}}
