---
title: Zufällige Spielmechanik
slug: Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay
l10n:
  sourceCommit: 6eae35bc64a49865a469ca29bc40e6993b9cb8cc
---

{{Previous("Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}

Dies ist der **16. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Unser Spiel scheint vollständig zu sein, aber wenn Sie genau hinschauen, werden Sie feststellen, dass der Ball während des gesamten Spiels im gleichen Winkel vom Schläger abprallt. Dies bedeutet, dass jedes Spiel ziemlich ähnlich ist. Um dies zu beheben und die Spielbarkeit zu verbessern, sollten wir die Abprallwinkel zufälliger gestalten, und in diesem Artikel werden wir uns ansehen, wie das geht.

## Abprallwinkel zufälliger gestalten

Wir können die Geschwindigkeit des Balls je nach der genauen Stelle, an der er den Schläger trifft, ändern, indem wir die `x`-Geschwindigkeit jedes Mal, wenn die Methode `hitPaddle()` ausgeführt wird, mit einer Zeile wie der unten stehenden modifizieren. Fügen Sie diese neue Zeile jetzt Ihrem Code hinzu und probieren Sie es aus.

```js
class ExampleScene extends Phaser.Scene {
  // ...
  hitPaddle(ball, paddle) {
    this.ball.anims.play("wobble");
    ball.body.velocity.x = -5 * (paddle.x - ball.x);
  }
  // ...
}
```

Es ist ein kleines bisschen Magie—die neue Geschwindigkeit ist höher, je größer der Abstand zwischen der Mitte des Schlägers und dem Punkt, an dem der Ball ihn trifft. Auch die Richtung (links oder rechts) wird durch diesen Wert bestimmt—wenn der Ball die linke Seite des Schlägers trifft, prallt er nach links ab, wohingegen er bei einem Treffer auf der rechten Seite nach rechts abprallt. Es ist so geworden durch ein wenig Experimentieren mit den gegebenen Werten; Sie können Ihre eigenen Experimente machen und sehen, was passiert. Es ist natürlich nicht vollständig zufällig, aber es macht das Spiel ein wenig unvorhersehbarer und damit interessanter.

## Vergleichen Sie Ihren Code

Hier sehen Sie, was Sie bisher haben sollten, in Aktion. Um den Quellcode zu sehen, klicken Sie auf die Schaltfläche "Play".

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
    ball.body.velocity.x = -5 * (paddle.x - ball.x);
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

## Zusammenfassung

Sie haben alle Lektionen abgeschlossen—Glückwunsch! Bis zu diesem Punkt sollten Sie die Grundlagen von Phaser und die Logik hinter einfachen 2D-Spielen gelernt haben.

### Übungen zum Weiterführen

Sie können im Spiel noch viel mehr tun—fügen Sie hinzu, was immer Sie für am besten halten, um es unterhaltsamer und interessanter zu machen. Es ist ein grundlegender Einstieg, der an der Oberfläche der zahllosen hilfreichen Methoden, die Phaser bietet, kratzt. Im Folgenden sind einige Vorschläge, wie Sie unser kleines Spiel erweitern könnten, um Ihnen den Einstieg zu erleichtern:

- Fügen Sie einen zweiten Ball oder einen zweiten Schläger hinzu.
- Ändern Sie die Farbe des Hintergrunds bei jedem Treffer.
- Ändern Sie die Bilder und verwenden Sie Ihre eigenen.
- Gewähren Sie zusätzliche Bonuspunkte, wenn Ziegel schnell nacheinander zerstört werden (oder andere Boni Ihrer Wahl).
- Erstellen Sie Levels mit verschiedenen Ziegel-Layouts.

Stellen Sie sicher, dass Sie sich die ständig wachsende Liste von [Beispielen](https://labs.phaser.io/) und die [offizielle Dokumentation](https://phaser.io/docs/) ansehen und besuchen Sie das [Phaser Discourse Forum](https://phaser.discourse.group/), wenn Sie jemals Hilfe benötigen.

Sie könnten auch zur [Indexseite dieser Tutorial-Serie](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) zurückkehren.

{{Previous("Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}
