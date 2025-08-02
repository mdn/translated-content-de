---
title: Der Punktestand
slug: Games/Tutorials/2D_breakout_game_Phaser/The_score
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Collision_detection", "Games/Tutorials/2D_breakout_game_Phaser/Win_the_game")}}

Dies ist der **11. Schritt** von 16 des [Gamedev Phaser-Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). In diesem Artikel fügen wir unserem Spiel ein Punktesystem hinzu. Ein Punktestand kann das Spiel interessanter machen—Sie können versuchen, Ihren eigenen Highscore oder den Ihres Freundes zu übertreffen.

Wir werden eine separate Eigenschaft zur Speicherung des Punktestands verwenden und die `text()`-Methode von Phaser, um diesen auf dem Bildschirm anzuzeigen.

## Neue Eigenschaften

Fügen Sie zwei neue Eigenschaften direkt nach den vorher definierten hinzu:

```js
class ExampleScene extends Phaser.Scene {
  // ... previous property definitions ...
  scoreText;
  score = 0;
  // ... rest of the class ...
}
```

## Hinzufügen des Punktetextes zur Spielanzeige

Fügen Sie nun diese Zeile am Ende der `create()`-Methode hinzu:

```js
this.scoreText = this.add.text(5, 5, "Points: 0", {
  font: "18px Arial",
  color: "#0095dd",
});
```

Die `text()`-Methode kann vier Parameter übernehmen:

- Die x- und y-Koordinaten, an denen der Text gezeichnet wird.
- Der tatsächliche Text, der gerendert wird.
- Der Schriftstil, mit dem der Text gerendert wird.

Der letzte Parameter sieht sehr ähnlich aus wie CSS-Styling. In unserem Fall wird der Punktetext blau sein, mit einer Größe von 18 Pixeln und der Schriftart Arial.

## Aktualisierung des Punktestands bei zerstörten Steinen

Wir werden die Punktzahl jedes Mal erhöhen, wenn der Ball einen Stein trifft, und den `scoreText` aktualisieren, um den aktuellen Punktestand anzuzeigen. Dies kann mit der `setText()`-Methode durchgeführt werden—fügen Sie die zwei neuen Zeilen, die unten zu sehen sind, zur `hitBrick()`-Methode hinzu:

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

Das war's fürs Erste—laden Sie Ihre `index.html` neu und prüfen Sie, ob der Punktestand bei jedem Steintreffer aktualisiert wird.

## Vergleichen Sie Ihren Code

Hier ist, was Sie bisher haben sollten, live ausgeführt. Um den Quellcode anzuzeigen, klicken Sie auf den "Play"-Button.

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

{{EmbedLiveSample("vergleichen Sie Ihren Code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Wir haben jetzt ein Punktesystem, aber was ist der Sinn des Spielens und der Punktesammlung, wenn man nicht gewinnen kann? Lassen Sie uns sehen, wie wir einen Siegzustand hinzufügen können, der es uns ermöglicht, [das Spiel zu gewinnen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Win_the_game).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Collision_detection", "Games/Tutorials/2D_breakout_game_Phaser/Win_the_game")}}
