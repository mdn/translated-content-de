---
title: Punktestand erfassen und gewinnen
slug: Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field", "Games/Tutorials/2D_breakout_game_Phaser/Extra_lives")}}

Dies ist der **8. Schritt** von 12 im [Tutorial zum Erstellen eines Breakout-Spiels mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). In diesem Artikel fügen wir unserem Spiel ein Punktesystem hinzu. Ein Punktestand kann das Spiel interessanter machen: Sie können versuchen, Ihren eigenen Rekord oder den eines Freundes zu übertreffen. Außerdem fügen wir eine Siegbedingung hinzu: Sie gewinnen, wenn Sie alle Steine zerstört haben.

Wir verwenden eine eigene Eigenschaft, um den Punktestand zu speichern, und die Methode `text()` von Phaser, um ihn auf dem Bildschirm anzuzeigen.

## Neue Eigenschaften

Fügen Sie direkt nach den zuvor definierten Eigenschaften zwei neue Eigenschaften hinzu:

```js
class ExampleScene extends Phaser.Scene {
  // ... previous property definitions ...
  scoreText;
  score = 0;
  // ... rest of the class ...
}
```

## Punktestand im Spiel anzeigen

Fügen Sie nun am Ende der Methode `create()` diese Zeile hinzu:

```js
this.scoreText = this.add.text(5, 5, "Points: 0", {
  font: "18px Arial",
  color: "#0095dd",
});
```

Die Methode `text()` kann vier Parameter entgegennehmen:

- Die x- und y-Koordinaten, an denen der Text gezeichnet werden soll.
- Den Text, der angezeigt werden soll.
- Die Schriftgestaltung für den Text.

Der letzte Parameter ähnelt stark der CSS-Stildefinition. In unserem Fall ist der Punktestand blau, 18 Pixel groß und wird in der Schriftart Arial angezeigt.

## Punktestand beim Zerstören von Steinen aktualisieren

Jedes Mal, wenn der Ball einen Stein trifft, erhöhen wir die Punktzahl und aktualisieren `scoreText`, damit der aktuelle Punktestand angezeigt wird. Dazu können wir die Methode `setText()` verwenden. Fügen Sie der Methode `hitBrick()` die beiden folgenden Zeilen hinzu:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  hitBrick(ball, brick) {
    brick.destroy();
    this.score += 10;
    this.scoreText.setText(`Points: ${this.score}`);
  }
}
```

Das war’s fürs Erste. Laden Sie Ihre `index.html` neu und prüfen Sie, ob sich der Punktestand bei jedem Treffer eines Steins aktualisiert.

## Wie gewinnt man?

Fügen Sie Ihrer Methode `update()` den folgenden Code hinzu:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    // ...
    if (this.bricks.countActive() === 0) {
      alert("You won the game, congratulations!");
      location.reload();
    }
  }
  // ...
}
```

Mit der Methode `countActive()` auf `this.bricks` zählen wir die Steine, die noch aktiv sind. Sind keine aktiven Steine mehr vorhanden, zeigen wir die Siegmeldung an. Sobald das Hinweisfenster geschlossen wird, startet das Spiel neu.

## Vergleichen Sie Ihren Code

So sollte Ihr bisheriger Code aussehen. Das Spiel können Sie hier direkt ausprobieren. Um den Quellcode anzuzeigen, klicken Sie auf die Schaltfläche „Play“.

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

    this.scoreText = this.add.text(5, 5, "Points: 0", {
      font: "18px Arial",
      color: "#0095dd",
    });
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
      // Game over logic
      location.reload();
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

Sowohl das Verlieren als auch das Gewinnen sind nun implementiert. Damit ist die grundlegende Spiellogik fertig. Als Nächstes fügen wir noch etwas hinzu: Der Spieler erhält drei [Leben](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives) statt nur eines.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field", "Games/Tutorials/2D_breakout_game_Phaser/Extra_lives")}}
