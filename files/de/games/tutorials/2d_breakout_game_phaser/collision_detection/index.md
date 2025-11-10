---
title: Kollisionserkennung
slug: Games/Tutorials/2D_breakout_game_Phaser/Collision_detection
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field", "Games/Tutorials/2D_breakout_game_Phaser/The_score")}}

Dies ist der **10. Schritt** von 16 des [Gamedev Phaser-Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Nun geht es zur nächsten Herausforderung—der Kollisionserkennung zwischen dem Ball und den Ziegeln. Glücklicherweise können wir die Physik-Engine nutzen, um Kollisionen nicht nur zwischen einzelnen Objekten (wie dem Ball und dem Schläger), sondern auch zwischen einem Objekt und der Gruppe zu überprüfen.

## Kollisionserkennung zwischen Ziegel/Ball

Die Physik-Engine macht alles viel einfacher—wir müssen nur zwei einfache Codezeilen hinzufügen. Zuerst fügen Sie eine neue Zeile in Ihrer `update()`-Methode hinzu, die eine Kollision zwischen dem Ball und den Ziegeln erkennt, wie unten gezeigt:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    this.physics.collide(this.ball, this.paddle);
    this.physics.collide(this.ball, this.bricks, (ball, brick) =>
      this.hitBrick(ball, brick),
    );
    this.paddle.x = this.input.x || this.scale.width * 0.5;
    // ...
  }
  // ...
}
```

Die Position des Balls wird gegen die Positionen aller Ziegel in der Gruppe berechnet. Der dritte, optionale Parameter ist die Funktion, die bei einer Kollision ausgeführt wird. Diese Funktion wird von Phaser mit zwei Argumenten aufgerufen—das erste ist der Ball, den wir explizit an die `collide`-Methode übergeben haben, und das zweite ist der einzelne Ziegel aus der Ziegelgruppe, mit dem der Ball kollidiert. Hier implementieren wir das Verhalten in einer Methode namens `hitBrick()`. Erstellen Sie diese neue Methode am Ende der `ExampleScene`-Klasse, kurz vor der schließenden Klammer `}`, wie folgt:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  hitBrick(ball, brick) {
    brick.destroy();
  }
}
```

Und das war's! Laden Sie Ihren Code neu, und Sie sollten sehen, dass die neue Kollisionserkennung wie gewünscht funktioniert.

Sie würden erwarten, viel mehr eigene Berechnungen schreiben zu müssen, um Kollisionserkennung zu implementieren, wenn Sie [pures JavaScript](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection) verwenden. Das ist das Schöne am Framework—Sie können viel langweiligen Code Phaser überlassen und sich auf die spaßigeren und interessanteren Teile der Spieleentwicklung konzentrieren.

## Vergleichen Sie Ihren Code

Hier sehen Sie, was Sie bisher haben sollten, live ausgeführt. Um den Quellcode anzuzeigen, klicken Sie auf die Schaltfläche "Play".

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

Wir können die Ziegel treffen und entfernen, was bereits eine schöne Ergänzung zum Gameplay ist. Es wäre noch besser, die zerstörten Ziegel zu zählen und [die Punktzahl](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score) infolgedessen zu erhöhen.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field", "Games/Tutorials/2D_breakout_game_Phaser/The_score")}}
