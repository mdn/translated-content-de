---
title: Extra-Leben
slug: Games/Tutorials/2D_breakout_game_Phaser/Extra_lives
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Win_the_game", "Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens")}}

Dies ist der **13. Schritt** von 16 des [Gamedev Phaser-Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). In diesem Artikel implementieren wir ein Leben-System, sodass der Spieler weiterspielen kann, bis er drei Leben verloren hat, nicht nur eins, was das Spiel für längere Zeit angenehm macht.

## Neue Eigenschaften

Fügen Sie die folgenden neuen Eigenschaften unter den bestehenden in Ihrem Code hinzu:

```js
class ExampleScene extends Phaser.Scene {
  // ... previous property definitions ...
  lives = 3;
  livesText;
  lifeLostText;
  // ... rest of the class ...
}
```

Diese werden jeweils die Anzahl der Leben speichern, das Textlabel anzeigen, das die Anzahl der verbleibenden Leben anzeigt, und ein Textlabel, das auf dem Bildschirm angezeigt wird, wenn der Spieler eines seiner Leben verliert.

## Festlegung der neuen Textlabels

Die Definition der Texte ähnelt etwas, das wir bereits in der Lektion über [den Punktestand](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score) gemacht haben. Fügen Sie die folgenden Zeilen unterhalb der bestehenden `scoreText`-Definition in Ihrer `create()`-Methode hinzu:

```js
this.livesText = this.add.text(
  this.scale.width - 5,
  5,
  `Lives: ${this.lives}`,
  { font: "18px Arial", fill: "#0095dd" },
);
this.livesText.setOrigin(1, 0);
this.lifeLostText = this.add.text(
  this.scale.width * 0.5,
  this.scale.height * 0.5,
  "Life lost, click to continue",
  { font: "18px Arial", fill: "#0095dd" },
);
this.lifeLostText.setOrigin(0.5, 0.5);
this.lifeLostText.visible = false;
```

Die Objekte `this.livesText` und `this.lifeLostText` ähneln dem `this.scoreText` sehr - sie definieren eine Position auf dem Bildschirm, den tatsächlichen anzuzeigenden Text und die Schriftart-Styling. Ersteres ist an seiner oberen rechten Kante verankert, um sich richtig mit dem Bildschirm auszurichten, und letzteres ist zentriert, beide verwenden `setOrigin`.

Das `lifeLostText` wird nur angezeigt, wenn ein Leben verloren wird, daher ist seine Sichtbarkeit zunächst auf `false` gesetzt.

### Unser Textstyling DRY machen

Wie Sie wahrscheinlich bemerkt haben, verwenden wir dasselbe Styling für alle drei Texte: `scoreText`, `livesText` und `lifeLostText`. Wenn wir jemals die Schriftgröße oder -farbe ändern möchten, müssten wir dies an mehreren Stellen tun. Um es uns in der Zukunft leichter zu machen, können wir eine separate Variable erstellen, die unser Styling enthält. Nennen wir sie `textStyle` und platzieren sie vor den Textdefinitionen:

```js
const textStyle = { font: "18px Arial", fill: "#0095dd" };
```

Wir können diese Variable nun beim Stylen unserer Textlabels verwenden - aktualisieren Sie Ihren Code so, dass die mehrfachen Instanzen des Textstylings durch die Variable ersetzt werden:

```js
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
```

Auf diese Weise wird das Ändern der Schriftart in einer Variable die Änderungen auf alle Verwendungen anwenden.

## Der Code zur Verwaltung der Leben

Um Leben in unserem Spiel zu implementieren, lassen Sie uns zuerst das Verhalten ändern, wenn der Ball aus dem Bildschirmbereich herausläuft. Anstatt sofort neu zu starten:

```js
if (ballIsOutOfBounds) {
  // Game over logic
  location.reload();
}
```

rufen wir eine neue Methode namens `ballLeaveScreen()` auf; löschen Sie die vorherigen Zeilen (oben gezeigt) und ersetzen Sie sie durch die folgende Zeile:

```js
if (ballIsOutOfBounds) {
  this.ballLeaveScreen();
}
```

Wir möchten die Anzahl der Leben jedes Mal verringern, wenn der Ball die Leinwand verlässt. Fügen Sie die Definition der Methode `ballLeaveScreen()` am Ende der Klasse `ExampleScene` hinzu:

```js
class ExampleScene extends Phaser.Scene {
  // ...
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
```

Anstatt sofort die Warnung anzuzeigen, wenn Sie ein Leben verlieren, subtrahieren wir zuerst ein Leben von der aktuellen Anzahl und prüfen, ob es einen Wert ungleich Null hat. Wenn ja, hat der Spieler noch einige Leben übrig und kann weiterspielen - sie werden die Nachricht über den verlorenen Leben sehen, die Positionen von Ball und Schläger werden auf dem Bildschirm zurückgesetzt, und bei der nächsten Eingabe (Klicken oder Berühren) wird die Nachricht ausgeblendet und der Ball bewegt sich wieder.

Wenn die Anzahl der verfügbaren Leben Null erreicht, ist das Spiel vorbei und die Game-Over-Warnmeldung wird angezeigt.

## Ereignisse

Sie haben wahrscheinlich den `once` Methodeaufruf im obigen Codeblock bemerkt und sich gefragt, was es ist. Die `once()`-Methode ist ein Phaser-Ereignislistener, der auf das nächste Auftreten des angegebenen Ereignisses (in diesem Fall ein Pointer-Down-Ereignis) wartet und sich dann nach dem Auslösen selbst entfernt. Das bedeutet, dass der Code im Callback nur einmal nach dem Aufruf von `once` ausgeführt wird, was genau das ist, was wir hier wollen - wir wollen die Nachricht über den verlorenen Leben ausblenden und die Ballbewegung nur einmal starten, nachdem der Spieler auf den Bildschirm klickt oder ihn berührt.

## Vergleichen Sie Ihren Code

Hier sehen Sie, was Sie bisher haben sollten, live ausgeführt. Um den Quellcode einzusehen, klicken Sie auf die Schaltfläche "Spielen".

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

  hitBrick(ball, brick) {
    brick.destroy();
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

{{EmbedLiveSample("Vergleichen Sie Ihren Code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Leben haben das Spiel verzeihender gemacht - wenn Sie ein Leben verlieren, haben Sie immer noch zwei weitere und können weiterspielen. Nun lassen Sie uns das Aussehen und Gefühl des Spiels erweitern, indem wir [Animationen und Tweens](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens) hinzufügen.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Win_the_game", "Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens")}}
