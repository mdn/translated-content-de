---
title: Spielende
slug: Games/Tutorials/2D_breakout_game_Phaser/Game_over
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls", "Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field")}}

Dies ist der **6. Schritt** von 12 im [Tutorial zum Erstellen eines Breakout-Spiels mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Um das Spiel interessanter zu gestalten, führen wir die Möglichkeit ein, zu verlieren: Wenn Sie den Ball nicht treffen, bevor er den unteren Bildschirmrand erreicht, ist das Spiel vorbei.

## So verlieren Sie

Damit Sie verlieren können, deaktivieren wir die Kollision des Balls mit dem unteren Bildschirmrand. Fügen Sie den folgenden Code ganz am Anfang der Methode `create()` ein:

```js
this.physics.world.checkCollision.down = false;
```

Dadurch prallt der Ball an drei Begrenzungen (oben, links und rechts) ab. Die vierte Begrenzung (unten) entfällt, sodass der Ball aus dem Bildschirm fallen kann, wenn der Schläger ihn verfehlt. Wir müssen das erkennen und entsprechend reagieren. Fügen Sie die folgenden Zeilen am Ende der Methode `update()` ein:

```js
const ballIsOutOfBounds = !Phaser.Geom.Rectangle.Overlaps(
  this.physics.world.bounds,
  this.ball.getBounds(),
);
if (ballIsOutOfBounds) {
  // Game over logic
  alert("Game over!");
  location.reload();
}
```

Diese Zeilen prüfen, ob der Ball die Grenzen der Spielwelt (in unserem Fall des Canvas) überschreitet, und zeigen dann eine Meldung an. Wenn Sie die Meldung bestätigen, wird die Seite neu geladen und Sie können erneut spielen.

> [!NOTE]
> Die Benutzerführung ist hier nicht ideal, da [`alert()`](/de/docs/Web/API/Window/alert) einen Systemdialog anzeigt und das Spiel blockiert. In einem echten Spiel würden Sie wahrscheinlich einen eigenen modalen Dialog mit {{HTMLElement("dialog")}} gestalten.
>
> Später fügen wir außerdem einen [„Start“-Button](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons) hinzu. Im Moment beginnt unser Spiel jedoch sofort beim Laden der Seite. Sie könnten also „verlieren“, bevor Sie überhaupt zu spielen begonnen haben. Um den störenden Dialog zu vermeiden, lassen wir den Aufruf von `alert()` ab jetzt weg.

## Vergleichen Sie Ihren Code

So sollte Ihr bisheriger Code aussehen. Das Spiel läuft direkt hier. Um den Quellcode anzuzeigen, klicken Sie auf die Schaltfläche „Play“.

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

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
    this.load.image("paddle", "paddle.png");
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
  }
  update() {
    this.physics.collide(this.ball, this.paddle);
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

Die grundlegende Spiellogik steht nun. Machen wir das Spiel interessanter und fügen Steine hinzu, die zerstört werden können: Es ist Zeit, das [Feld aus Steinen zu erstellen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls", "Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field")}}
