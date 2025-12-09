---
title: Zusätzliche Leben
slug: Games/Tutorials/2D_breakout_game_Phaser/Extra_lives
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Win_the_game", "Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens")}}

Dies ist der **13. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). In diesem Artikel implementieren wir ein Lebenssystem, sodass der Spieler weiterspielen kann, bis er drei Leben verloren hat, nicht nur eins, was das Spiel länger unterhaltsam macht.

## Neue Eigenschaften

Fügen Sie die folgenden neuen Eigenschaften unterhalb der bestehenden in Ihrem Code hinzu:

```js
class ExampleScene extends Phaser.Scene {
  // ... previous property definitions ...
  lives = 3;
  livesText;
  lifeLostText;
  // ... rest of the class ...
}
```

Diese speichern jeweils die Anzahl der Leben, das Textetikett, das die Anzahl der verbleibenden Leben anzeigt, und ein Textetikett, das auf dem Bildschirm angezeigt wird, wenn der Spieler eines seiner Leben verliert.

## Definition der neuen Textetiketten

Die Definition der Texte ähnelt dem, was wir bereits in der [Score](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score) Lektion gemacht haben. Fügen Sie die folgenden Zeilen unterhalb der bestehenden `scoreText` Definition in Ihrer `create()` Methode hinzu:

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

Die Objekte `this.livesText` und `this.lifeLostText` ähneln sehr `this.scoreText`—sie definieren eine Position auf dem Bildschirm, den tatsächlichen anzuzeigenden Text und die Schriftstilierung. Ersteres ist an seiner oberen rechten Ecke verankert, um richtig mit dem Bildschirm auszurichten, und letzteres ist zentriert, beide mit `setOrigin`.

Das `lifeLostText` wird nur gezeigt, wenn ein Leben verloren ist, daher ist seine Sichtbarkeit zunächst auf `false` gesetzt.

### Unsere Textstilierung DRY machen

Wie Sie wahrscheinlich bemerkt haben, verwenden wir dieselbe Stilierung für alle drei Texte: `scoreText`, `livesText` und `lifeLostText`. Wenn wir irgendwann die Schriftgröße oder Farbe ändern wollen, müssten wir das an mehreren Orten tun. Um dies in Zukunft besser warten zu können, können wir eine separate Variable erstellen, die unsere Stilierung hält, nennen wir sie `textStyle` und platzieren sie vor den Textdefinitionen:

```js
const textStyle = { font: "18px Arial", fill: "#0095dd" };
```

Wir können diese Variable jetzt verwenden, um unsere Textetiketten zu gestalten—aktualisieren Sie Ihren Code, sodass die mehreren Instanzen der Textstilierung durch die Variable ersetzt werden:

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

Auf diese Weise werden Änderungen an der Schrift in einer Variablen an jedem Ort angewendet, an dem sie verwendet wird.

## Der Code zur Lebensverwaltung

Um Leben in unserem Spiel zu implementieren, ändern wir zuerst das Verhalten, wenn der Ball die Grenzen verlässt. Anstatt sofort neu zu starten:

```js
if (ballIsOutOfBounds) {
  // Game over logic
  location.reload();
}
```

Wir rufen eine neue Methode namens `ballLeaveScreen()` auf; löschen Sie die vorherigen Zeilen (oben gezeigt) und ersetzen Sie sie durch die folgende Zeile:

```js
if (ballIsOutOfBounds) {
  this.ballLeaveScreen();
}
```

Wir möchten die Anzahl der Leben jedes Mal verringern, wenn der Ball die Leinwand verlässt. Fügen Sie die Methode `ballLeaveScreen()` am Ende der `ExampleScene` Klasse hinzu:

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

Anstatt sofort den Warnhinweis auszugeben, wenn Sie ein Leben verlieren, subtrahieren wir zunächst ein Leben von der aktuellen Zahl und prüfen, ob es ein nonzeroer Wert ist. Wenn ja, dann hat der Spieler noch einige Leben übrig und kann weiterspielen—sie sehen die Meldung über das verlorene Leben, die Positionen von Ball und Paddle werden auf dem Bildschirm zurückgesetzt, und bei der nächsten Eingabe (Klick oder Berührung) wird die Nachricht ausgeblendet und der Ball beginnt sich wieder zu bewegen.

Wenn die Anzahl der verfügbaren Leben Null erreicht, ist das Spiel vorbei und die Game-Over-Warnmeldung wird angezeigt.

## Ereignisse

Sie haben wahrscheinlich den `once` Methodenaufruf im obigen Codeblock bemerkt und sich gefragt, was es ist. Die Methode `once()` ist ein Phaser-Ereignis-Listener, der auf das nächste Auftreten des angegebenen Ereignisses (in diesem Fall ein Pointer-Down-Ereignis) lauscht und sich dann selbst entfernt, nachdem es ausgelöst wurde. Das bedeutet, dass der Code in der Rückruffunktion nur einmal nach dem Aufruf von `once` ausgeführt wird, was genau das ist, was wir hier wollen—wir möchten die Meldung über das verlorene Leben ausblenden und die Ballbewegung nur einmal wieder starten, nachdem der Spieler den Bildschirm geklickt oder berührt hat.

## Vergleichen Sie Ihren Code

Hier ist, was Sie bisher haben sollten, live laufend. Um seinen Quellcode anzusehen, klicken Sie auf die Schaltfläche "Play".

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

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Leben machen das Spiel verzeihender—wenn Sie ein Leben verlieren, haben Sie immer noch zwei übrig und können weiterspielen. Lassen Sie uns nun das Aussehen und Gefühl des Spiels erweitern, indem wir [Animationen und Tweens](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens) hinzufügen.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Win_the_game", "Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens")}}
