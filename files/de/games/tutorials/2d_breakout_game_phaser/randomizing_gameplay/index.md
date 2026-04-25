---
title: Zufällige Spielführung
slug: Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay
l10n:
  sourceCommit: ef78a9a3336c884fb3587e4ff833e64704296f01
---

{{Previous("Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}

Dies ist der **16. Schritt** von 16 im [Gamedev Phaser Tutorial](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Unser Spiel scheint fertig zu sein, aber bei genauem Hinsehen werden Sie feststellen, dass der Ball das Paddle während des gesamten Spiels im gleichen Winkel abprallt. Das bedeutet, dass jedes Spiel ziemlich ähnlich abläuft. Um dies zu beheben und die Spielbarkeit zu verbessern, sollten wir die Rückprallwinkel zufälliger gestalten, und in diesem Artikel sehen wir uns an, wie das geht.

## Zufälliger machen von Rückprällen

Wir können die Geschwindigkeit des Balls ändern, je nachdem, welcher genaue Punkt auf das Paddle trifft, indem wir die `x`-Geschwindigkeit jedes Mal modifizieren, wenn die Methode `hitPaddle()` ausgeführt wird, indem wir eine Zeile wie die unten angegebene hinzufügen. Fügen Sie jetzt diese neue Zeile in Ihren Code ein und probieren Sie es aus.

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

Es ist ein bisschen Magie—die neue Geschwindigkeit ist höher, je größer der Abstand zwischen der Mitte des Paddles und dem Punkt ist, an dem der Ball dieses trifft. Auch die Richtung (links oder rechts) wird durch diesen Wert bestimmt—wenn der Ball die linke Seite des Paddles trifft, prallt er nach links ab, während er bei einem Treffer auf der rechten Seite nach rechts abprallt. Dies ergab sich durch ein wenig Experimentieren mit den gegebenen Werten; Sie können selbst experimentieren und sehen, was passiert. Natürlich ist es nicht völlig zufällig, aber es macht das Spiel ein wenig unvorhersehbarer und damit interessanter.

## Vergleichen Sie Ihren Code

Hier ist, was Sie bisher haben sollten, live in Aktion. Um den Quellcode zu sehen, klicken Sie auf den "Play"-Button.

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

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Zusammenfassung

Sie haben alle Lektionen abgeschlossen—herzlichen Glückwunsch! Bis zu diesem Punkt haben Sie die Grundlagen von Phaser und die Logik hinter einfachen 2D-Spielen gelernt.

### Übungen zum Weitermachen

Sie können viel mehr im Spiel machen—fügen Sie alles hinzu, was Ihrer Meinung nach das Spiel spaßiger und interessanter machen würde. Es ist ein einfacher Einstieg, der nur an der Oberfläche der unzähligen hilfreichen Methoden kratzt, die Phaser bietet. Unten sind einige Vorschläge, wie Sie unser kleines Spiel erweitern könnten, um zu starten:

- Fügen Sie einen zweiten Ball oder ein Paddle hinzu.
- Ändern Sie bei jedem Treffer die Hintergrundfarbe.
- Ändern Sie die Bilder und verwenden Sie Ihre eigenen.
- Gewähren Sie zusätzliche Bonuspunkte, wenn Ziegel schnell zerstört werden, mehrere in Folge (oder andere Boni Ihrer Wahl).
- Erstellen Sie Level mit unterschiedlichen Ziegelanordnungen.

Schauen Sie unbedingt in die ständig wachsende Liste der [Beispiele](https://labs.phaser.io/) und die [offizielle Dokumentation](https://docs.phaser.io/) und besuchen Sie das [Phaser Discourse Forum](https://phaser.discourse.group/), wenn Sie jemals Hilfe benötigen.

Sie könnten auch zur [Indexseite dieser Tutorialreihe](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) zurückgehen.

{{Previous("Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}
