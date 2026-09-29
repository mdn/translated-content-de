---
title: Zusätzliche Leben
slug: Games/Tutorials/2D_breakout_game_Phaser/Extra_lives
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win", "Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens")}}

Dies ist der **9. Schritt** von 12 im [Tutorial zum Erstellen eines Breakout-Spiels mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). In diesem Artikel implementieren wir ein Lebenssystem, damit Spieler weiterspielen können, bis sie drei Leben verloren haben, statt nur eines. So bleibt das Spiel länger unterhaltsam.

## Neue Eigenschaften

Fügen Sie die folgenden neuen Eigenschaften in Ihrem Code unterhalb der vorhandenen hinzu:

```js
class ExampleScene extends Phaser.Scene {
  // ... previous property definitions ...
  lives = 3;
  livesText;
  lifeLostText;
  // ... rest of the class ...
}
```

Sie speichern jeweils die Anzahl der Leben, die Textanzeige für die verbleibenden Leben und eine Textanzeige, die erscheint, wenn ein Leben verloren geht.

## Die neuen Textanzeigen definieren

Die Definition der Textanzeigen ähnelt dem, was wir bereits in der Lektion [Punktestand erfassen und gewinnen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win) getan haben. Fügen Sie die folgenden Zeilen innerhalb Ihrer `create()`-Methode unterhalb der vorhandenen Definition von `scoreText` hinzu:

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

Die Objekte `this.livesText` und `this.lifeLostText` ähneln `this.scoreText` stark: Sie legen eine Position auf dem Bildschirm, den anzuzeigenden Text und die Schriftformatierung fest. Ersteres wird an seiner oberen rechten Ecke verankert, damit es korrekt am Bildschirm ausgerichtet ist; Letzteres wird zentriert. Beide verwenden dafür `setOrigin`.

`lifeLostText` wird nur angezeigt, wenn ein Leben verloren geht. Deshalb ist seine Sichtbarkeit anfangs auf `false` gesetzt.

### Wiederholungen bei der Textformatierung vermeiden

Wie Sie wahrscheinlich bemerkt haben, verwenden wir für alle drei Texte dieselbe Formatierung: `scoreText`, `livesText` und `lifeLostText`. Wenn wir jemals die Schriftgröße oder Farbe ändern möchten, müssten wir das an mehreren Stellen tun. Um die spätere Pflege zu erleichtern, können wir eine eigene Variable für die Formatierung erstellen. Nennen wir sie `textStyle` und platzieren sie vor den Textdefinitionen:

```js
const textStyle = { font: "18px Arial", fill: "#0095dd" };
```

Diese Variable können wir nun zur Formatierung unserer Textanzeigen verwenden. Aktualisieren Sie Ihren Code so, dass die mehrfach vorkommenden Formatierungsangaben durch die Variable ersetzt werden:

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

So werden Änderungen an der Schrift in dieser einen Variable überall übernommen, wo sie verwendet wird.

## Code zur Verwaltung der Leben

Um Leben in unserem Spiel zu implementieren, ändern wir zunächst das Verhalten, wenn der Ball den Spielbereich verlässt. Statt das Spiel sofort neu zu starten:

```js
if (ballIsOutOfBounds) {
  // Game over logic
  location.reload();
}
```

rufen wir eine neue Methode namens `ballLeaveScreen()` auf. Löschen Sie die bisherigen Zeilen (siehe oben) und ersetzen Sie sie durch die folgende Zeile:

```js
if (ballIsOutOfBounds) {
  this.ballLeaveScreen();
}
```

Die Anzahl der Leben soll jedes Mal sinken, wenn der Ball den Canvas verlässt. Fügen Sie die Definition der Methode `ballLeaveScreen()` am Ende der Klasse `ExampleScene` hinzu:

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

Statt sofort eine Meldung anzuzeigen, wenn ein Leben verloren geht, ziehen wir zunächst ein Leben von der aktuellen Anzahl ab und prüfen, ob der Wert noch größer als null ist. Falls ja, hat der Spieler noch Leben übrig und kann weiterspielen: Die Meldung über das verlorene Leben wird angezeigt und die Positionen von Ball und Schläger werden auf dem Bildschirm zurückgesetzt. Bei der nächsten Eingabe (Klick oder Berührung) wird die Meldung ausgeblendet und der Ball bewegt sich wieder.

Wenn die Anzahl der verfügbaren Leben null erreicht, ist das Spiel vorbei und die Game-over-Meldung wird angezeigt.

## Ereignisse

Vielleicht ist Ihnen im obigen Codeblock der Aufruf der Methode `once` aufgefallen und Sie fragen sich, was sie bewirkt. Die Methode `once()` ist ein Ereignis-Listener von Phaser. Sie wartet auf das nächste Auftreten des angegebenen Ereignisses (in diesem Fall ein Pointer-Down-Ereignis) und entfernt sich anschließend selbst. Dadurch wird der Code im Callback nach dem Aufruf von `once` nur einmal ausgeführt. Genau das möchten wir hier: Die Meldung über das verlorene Leben soll ausgeblendet und der Ball nur einmal wieder in Bewegung gesetzt werden, nachdem der Spieler auf den Bildschirm geklickt oder ihn berührt hat.

## Vergleichen Sie Ihren Code

So sollte Ihr Code bisher aussehen. Sie können ihn hier direkt ausführen. Um den Quellcode anzuzeigen, klicken Sie auf die Schaltfläche „Play“.

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

Die zusätzlichen Leben machen das Spiel nachsichtiger: Wenn Sie ein Leben verlieren, bleiben Ihnen noch zwei weitere und Sie können weiterspielen. Als Nächstes verbessern wir das Erscheinungsbild und Spielgefühl mit [Animationen und Tweens](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win", "Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens")}}
