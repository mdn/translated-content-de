---
title: Den Spielverlauf abwechslungsreicher gestalten
slug: Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{Previous("Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}

Dies ist der **12. und letzte Schritt** des [Tutorials zum Erstellen eines Breakout-Spiels mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Unser Spiel scheint fertig zu sein. Wenn Sie jedoch genauer hinsehen, werden Sie feststellen, dass der Ball während des gesamten Spiels im gleichen Winkel vom Paddle abprallt. Dadurch verläuft jede Partie ziemlich ähnlich. Um das zu ändern und das Spiel abwechslungsreicher zu gestalten, sollten wir die Abprallwinkel variieren. In diesem Artikel sehen wir uns an, wie das geht.

## Abprallwinkel variieren

Wir können die Geschwindigkeit des Balls davon abhängig machen, an welcher Stelle er das Paddle trifft. Dazu ändern wir die `x`-Geschwindigkeit jedes Mal, wenn die Methode `hitPaddle()` ausgeführt wird, mit einer Zeile wie der folgenden. Fügen Sie diese neue Zeile jetzt Ihrem Code hinzu und probieren Sie sie aus.

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

Dahinter steckt ein kleiner Trick: Je größer der Abstand zwischen der Mitte des Paddles und dem Auftreffpunkt des Balls ist, desto höher wird die neue Geschwindigkeit. Dieser Wert bestimmt auch die Richtung (links oder rechts): Trifft der Ball die linke Seite des Paddles, prallt er nach links ab; trifft er die rechte Seite, prallt er nach rechts ab. Die verwendeten Werte sind das Ergebnis einiger Experimente. Probieren Sie selbst andere Werte aus und sehen Sie, was passiert. Ganz zufällig ist der Verlauf dadurch natürlich nicht, aber das Spiel wird etwas unvorhersehbarer und damit interessanter.

## Vergleichen Sie Ihren Code

So sollte Ihr Spiel inzwischen aussehen. Sie können es hier direkt ausprobieren. Um den Quellcode anzusehen, klicken Sie auf die Schaltfläche „Play“.

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

Sie haben alle Lektionen abgeschlossen – herzlichen Glückwunsch! Inzwischen sollten Sie die Grundlagen von Phaser und die Logik hinter einfachen 2D-Spielen kennengelernt haben.

### Weitere Übungen

Sie können das Spiel noch in vielerlei Hinsicht erweitern. Ergänzen Sie alles, was es Ihrer Meinung nach unterhaltsamer und interessanter macht. Diese Einführung zeigt nur einen kleinen Teil der vielen hilfreichen Methoden, die Phaser bietet. Hier sind einige Vorschläge für den Anfang:

- Fügen Sie einen zweiten Ball oder ein zweites Paddle hinzu.
- Ändern Sie bei jedem Treffer die Hintergrundfarbe.
- Tauschen Sie die Bilder gegen eigene aus.
- Vergeben Sie zusätzliche Bonuspunkte, wenn mehrere Bricks schnell hintereinander zerstört werden (oder für andere Leistungen Ihrer Wahl).
- Erstellen Sie Level mit unterschiedlichen Anordnungen der Bricks.

Sehen Sie sich auch die ständig wachsende Sammlung von [Beispielen](https://labs.phaser.io/) und die [offizielle Dokumentation](https://docs.phaser.io/) an. Wenn Sie Hilfe benötigen, besuchen Sie das [Phaser-Discourse-Forum](https://phaser.discourse.group/).

Sie können auch zur [Übersichtsseite dieser Tutorialreihe](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) zurückkehren.

{{Previous("Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}
