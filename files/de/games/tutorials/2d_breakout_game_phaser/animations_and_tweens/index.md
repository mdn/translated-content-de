---
title: Animationen und Tweens
slug: Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Extra_lives", "Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}

Dies ist der **10. von 12 Schritten** des [Tutorials zum Erstellen eines Breakout-Spiels mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Wir sehen uns an, wie Sie Animationen und Tweens mit Phaser in unserem Spiel umsetzen, damit es lebendiger und ansprechender wirkt. So macht das Spielen mehr Spaß.

## Animationen

Bei Animationen in Phaser werden die Einzelbilder eines externen Spritesheets nacheinander angezeigt. Als Beispiel lassen wir den Ball wackeln, wenn er mit etwas zusammenstößt.

[Laden Sie zunächst das Spritesheet herunter](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/wobble.png) und speichern Sie es in Ihrem Verzeichnis `/img`.

Laden Sie anschließend das Spritesheet, indem Sie die folgende Zeile am Ende Ihrer Methode `preload()` einfügen:

```js
this.load.spritesheet("wobble", "img/wobble.png", {
  frameWidth: 20,
  frameHeight: 20,
});
```

Statt nur ein einzelnes Bild des Balls zu laden, können wir das gesamte Spritesheet laden – eine Sammlung verschiedener Bilder. Indem wir die Bilder nacheinander anzeigen, entsteht der Eindruck einer Animation. Der zusätzliche Parameter der Methode `spritesheet()` legt die Breite und Höhe jedes Einzelbilds in der Spritesheet-Datei fest. So weiß das Programm, wie es die Datei in Einzelbilder aufteilen muss.

## Die Animation laden

Suchen Sie nun in Ihrer Methode `create()` den Codeblock, der das Ball-Sprite lädt und konfiguriert, und fügen Sie darunter den folgenden Aufruf von `anims.create` ein:

```js
this.ball = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height - 25,
  "ball",
);
// ...
this.ball.anims.create({
  key: "wobble",
  frameRate: 24,
  frames: this.anims.generateFrameNumbers("wobble", {
    frames: [0, 1, 0, 2, 0, 1, 0, 2, 0],
  }),
});
```

Um dem Objekt eine Animation hinzuzufügen, verwenden wir die Methode `anims.create()`. Sie erhält einen Parameter mit den folgenden Eigenschaften:

- `key`: Der Name, den wir für die Animation gewählt haben.
- `frameRate`: Die Bildrate in Bildern pro Sekunde. Da die Animation mit 24 Bildern pro Sekunde läuft und aus 9 Bildern besteht, wird sie knapp dreimal pro Sekunde abgespielt.
- `frames`: Ein Array, das festlegt, in welcher Reihenfolge die Bilder während der Animation angezeigt werden. Wenn Sie sich das Bild `wobble.png` noch einmal ansehen, erkennen Sie drei Einzelbilder. Phaser extrahiert sie und speichert Verweise darauf in einem Array – an den Positionen 0, 1 und 2. Das obige Array legt fest, dass zuerst Bild 0, dann Bild 1, dann wieder Bild 0 und so weiter angezeigt wird.

## Die Animation abspielen, wenn der Ball den Schläger trifft

Dem Aufruf der Methode `physics.collide()`, der die Kollision zwischen Ball und Schläger behandelt (die erste Zeile innerhalb von `update()`, siehe unten), können wir einen zusätzlichen Parameter übergeben. Dieser gibt eine Funktion an, die bei jeder Kollision ausgeführt wird – ähnlich wie die Methode `hitBrick()`. Ändern Sie die erste Zeile innerhalb von `update()` wie folgt:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    this.physics.collide(this.ball, this.paddle, (ball, paddle) =>
      this.hitPaddle(ball, paddle),
    );
    this.physics.collide(this.ball, this.bricks, (ball, brick) =>
      this.hitBrick(ball, brick),
    );
    this.paddle.x = this.input.x || this.scale.width * 0.5;
    // ...
  }
  // ...
}
```

Anschließend können wir die Methode `hitPaddle()` mit `ball` und `paddle` als Parametern erstellen. Bei ihrem Aufruf spielt sie die Wackelanimation ab. Fügen Sie die folgende Methode oberhalb von `hitBrick()` ein:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  hitPaddle(ball, paddle) {
    this.ball.anims.play("wobble");
  }
  // ...
}
```

Die Animation wird jedes Mal abgespielt, wenn der Ball den Schläger trifft. Sie können den Aufruf von `anims.play()` auch in die Methode `hitBrick()` einfügen, wenn das Spiel dadurch Ihrer Meinung nach besser aussieht.

## Tweens

Während Animationen externe Sprites nacheinander anzeigen, animieren Tweens Eigenschaften eines Objekts in der Spielwelt fließend, beispielsweise seine Breite oder Deckkraft.

Fügen wir unserem Spiel einen Tween hinzu, damit die Steine fließend verschwinden, wenn der Ball sie trifft. Suchen Sie in Ihrer Methode `hitBrick()` die Zeile `brick.destroy();` und ersetzen Sie sie durch Folgendes:

```js
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
```

Sehen wir uns Schritt für Schritt an, was hier geschieht:

1. Beim Definieren eines neuen Tweens müssen Sie angeben, welche Eigenschaften von `targets` animiert werden sollen. In unserem Fall blenden wir die Steine nach einem Treffer nicht sofort aus, sondern skalieren ihre Breite und Höhe auf null, sodass sie fließend verschwinden. Dazu verwenden wir die Methode `tweens.add()`: Wir geben `brick` als `targets` und die zu animierenden Eigenschaften `scaleX` und `scaleY` im Objekt `props` an.
2. Weitere Eigenschaften, die wir festlegen können, sind `ease` für die zu verwendende Easing-Funktion (hier `Linear`), `repeat` für die Anzahl der Wiederholungen (0 bedeutet, dass der Tween nicht wiederholt wird) und `duration` für die Dauer des Tweens in Millisekunden.
3. Außerdem fügen wir den optionalen Event-Handler `onComplete` hinzu. Er definiert eine Funktion, die nach Abschluss des Tweens ausgeführt wird.
4. Zum Schluss starten wir den Tween sofort mit der Methode `play()`.

## Vergleichen Sie Ihren Code

So sollte Ihr Spiel bisher aussehen; Sie können es hier direkt ausprobieren. Um den Quellcode anzuzeigen, klicken Sie auf die Schaltfläche „Play“.

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
  }
  update() {
    this.physics.collide(this.ball, this.paddle, (ball, paddle) =>
      this.hitPaddle(ball, paddle),
    );
    this.physics.collide(this.ball, this.bricks, (ball, brick) =>
      this.hitBrick(ball, brick),
    );

    this.paddle.x = this.input.x || this.scale.width * 0.5;
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

Animationen und Tweens sehen gut aus, aber wir können unserem Spiel noch mehr hinzufügen: Im nächsten Abschnitt sehen wir uns an, wie sich Eingaben über [Buttons](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons) verarbeiten lassen.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Extra_lives", "Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}
