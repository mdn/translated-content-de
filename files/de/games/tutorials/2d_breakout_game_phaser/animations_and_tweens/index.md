---
title: Animationen und Tweens
slug: Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Extra_lives", "Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}

Dies ist der **14. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Wir werden erkunden, wie Phaser-Animationen und Tweens in unserem Spiel implementiert werden können, um das Spiel lebhafter und ansprechender zu gestalten. Dies wird zu einer besseren, unterhaltsameren Erfahrung führen.

## Animationen

In Phaser beinhalten Animationen das Nehmen eines Spritesheets aus einer externen Quelle und das sequentielle Anzeigen der Sprites. Zum Beispiel werden wir den Ball wackeln lassen, wenn er etwas trifft.

Zuerst einmal, [laden Sie das Spritesheet herunter](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/wobble.png) und speichern es im `/img`-Verzeichnis.

Als nächstes laden wir das Spritesheet—setzen Sie die folgende Zeile am Ende Ihrer `preload()`-Methode:

```js
this.load.spritesheet("wobble", "img/wobble.png", {
  frameWidth: 20,
  frameHeight: 20,
});
```

Anstatt ein einzelnes Bild des Balls zu laden, können wir das gesamte Spritesheet laden—eine Sammlung unterschiedlicher Bilder. Wir werden die Sprites sequentiell anzeigen, um die Illusion einer Animation zu erzeugen. Der zusätzliche Parameter der `spritesheet()`-Methode bestimmt die Breite und Höhe jedes einzelnen Frames in der angegebenen Spritesheet-Datei und gibt dem Programm an, wie es zerkleinert werden soll, um die einzelnen Frames zu erhalten.

## Laden der Animation

Gehen Sie als nächstes in Ihre `create()`-Methode, finden Sie den Codeblock, der den Ball-Sprite lädt und konfiguriert, und fügen Sie darunter den Aufruf von `anims.create` ein, wie unten gezeigt:

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

Um einem Objekt eine Animation hinzuzufügen, verwenden wir die `anims.create()`-Methode, die den Parameter mit den folgenden Eigenschaften erhält:

- `key`: Der Name, den wir für die Animation gewählt haben.
- `frameRate`: Die Bildrate in fps. Da wir die Animation mit 24fps abspielen und es 9 Frames gibt, wird die Animation knapp dreimal pro Sekunde angezeigt.
- `frames`: Ein Array, das die Reihenfolge definiert, in der die Frames während der Animation angezeigt werden. Schauen Sie sich erneut das `wobble.png`-Bild an, Sie werden sehen, dass es drei Frames gibt. Phaser extrahiert diese und speichert Referenzen darauf in einem Array—Positionen 0, 1 und 2. Das obige Array sagt aus, dass wir Frame 0, dann 1, dann 0 usw. anzeigen.

## Anwendung der Animation, wenn der Ball das Paddle trifft

Im Aufruf der Methode `physics.collide()`, die die Kollision zwischen dem Ball und dem Paddle behandelt (die erste Zeile in `update()`, siehe unten), können wir einen zusätzlichen Parameter hinzufügen, der eine Funktion spezifiziert, die jedes Mal ausgeführt wird, wenn die Kollision erfolgt, auf die gleiche Weise wie die `hitBrick()`-Methode. Aktualisieren Sie die erste Zeile in `update()`, wie unten gezeigt:

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

Dann können wir die `hitPaddle()`-Methode erstellen (mit `ball` und `paddle` als Parameter), die die Wackelanimation abspielt, wenn sie aufgerufen wird. Fügen Sie die folgende Methode über der `hitBrick()`-Methode hinzu:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  hitPaddle(ball, paddle) {
    this.ball.anims.play("wobble");
  }
  // ...
}
```

Die Animation wird jedes Mal abgespielt, wenn der Ball das Paddle trifft. Sie können den Aufruf von `anims.play()` auch in die `hitBrick()`-Methode aufnehmen, wenn Sie glauben, dass es das Spiel besser aussehen lassen würde.

## Tweens

Während Animationen externe Sprites sequentiell abspielen, animieren Tweens glatt Eigenschaften eines Objekts in der Spielwelt, wie Breite oder Opazität.

Fügen wir unserem Spiel einen Tween hinzu, um die Steine sanft verschwinden zu lassen, wenn sie vom Ball getroffen werden. Gehen Sie zu Ihrer `hitBrick()`-Methode, finden Sie Ihre `brick.destroy();`-Zeile und ersetzen Sie sie durch Folgendes:

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
  onComplete: () => {
    brick.destroy();
  },
});
destroyTween.play();
```

Gehen wir das durch, damit Sie sehen können, was hier passiert:

1. Beim Definieren eines neuen Tweens müssen Sie angeben, welche Eigenschaft der `targets` getweent werden soll— in unserem Fall, anstatt die Steine sofort zu verstecken, wenn sie vom Ball getroffen werden, lassen wir ihre Breite und Höhe auf null skalieren, sodass sie schön verschwinden. Zu diesem Zweck verwenden wir die `tweens.add()`-Methode, die `brick` als `targets` und die `scaleX`- und `scaleY`-Eigenschaften angibt, die im `props`-Objekt getweent werden sollen.
2. Andere Eigenschaften, die wir festlegen können, sind `ease`, die die verwendete Easing-Funktion definiert (in diesem Fall `Linear`), `repeat`, das festlegt, wie oft der Tween wiederholt werden soll (0 bedeutet, es wird nicht wiederholt), und `duration`, die die Zeit in Millisekunden angibt, die der Tween zur Fertigstellung benötigt.
3. Wir werden auch den optionalen `onComplete`-Ereignishandler hinzufügen, der eine Funktion definiert, die ausgeführt wird, wenn der Tween abgeschlossen ist.
4. Das letzte, was zu tun ist, ist den Tween sofort mit der `play()`-Methode zu starten.

## Vergleichen Sie Ihren Code

Hier ist, was Sie bisher haben sollten, live laufend. Um den Quellcode zu sehen, klicken Sie auf die Schaltfläche "Play".

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
      onComplete: () => {
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

{{EmbedLiveSample("Ihren Code vergleichen", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Animationen und Tweens sehen sehr gut aus, aber wir können unserem Spiel noch mehr hinzufügen—im nächsten Abschnitt schauen wir uns an, wie [Button](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons)-Eingaben behandelt werden.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Extra_lives", "Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}
