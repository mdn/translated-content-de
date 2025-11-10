---
title: Spiel vorbei
slug: Games/Tutorials/2D_breakout_game_Phaser/Game_over
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls", "Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field")}}

Dies ist der **8. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Um das Spiel interessanter zu gestalten, können wir die Fähigkeit einführen, zu verlieren – wenn Sie den Ball nicht treffen, bevor er den unteren Rand des Bildschirms erreicht, ist das Spiel vorbei.

## Wie man verliert

Um die Möglichkeit zu bieten, zu verlieren, werden wir die Kollision des Balls mit dem unteren Rand des Bildschirms deaktivieren. Fügen Sie den untenstehenden Code ganz oben in der `create()`-Methode hinzu:

```js
this.physics.world.checkCollision.down = false;
```

Dies sorgt dafür, dass die drei Wände (oben, links und rechts) den Ball zurückprallen lassen, während die vierte (unten) verschwindet und den Ball vom Bildschirm fallen lässt, falls das Paddel ihn verfehlt. Wir benötigen eine Möglichkeit, dies zu erkennen und entsprechend zu handeln. Fügen Sie die folgenden Zeilen am Ende der `update()`-Methode hinzu:

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

Das Hinzufügen dieser Zeilen überprüft, ob der Ball die Grenzen der Welt (in unserem Fall der Zeichenfläche) überschreitet und zeigt dann einen Alarm an. Wenn Sie auf den resultierenden Alarm klicken, wird die Seite neu geladen und Sie können erneut spielen.

> [!NOTE]
> Die Benutzererfahrung hier ist ziemlich fragwürdig, da [`alert()`](/de/docs/Web/API/Window/alert) einen Systemdialog anzeigt und das Spiel blockiert. In einem echten Spiel würden Sie wahrscheinlich Ihren eigenen modalen Dialog mit {{HTMLElement("dialog")}} gestalten wollen.
>
> Außerdem werden wir später einen ["Start"-Button](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons) hinzufügen, aber hier beginnt unser Spiel sofort, wenn die Seite geladen wird, sodass Sie verlieren können, bevor Sie überhaupt anfangen zu spielen. Um den nervigen Dialog zu verhindern, werden wir den `alert()`-Aufruf ab jetzt entfernen.

## Vergleichen Sie Ihren Code

Hier ist, was Sie bisher haben sollten, und es läuft live. Um den Quellcode anzusehen, klicken Sie auf den "Play"-Button.

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

Jetzt, da das grundlegende Gameplay vorhanden ist, machen wir es interessanter, indem wir Ziegel zum Zerschlagen einführen – es ist Zeit, das [Ziegel-Feld zu bauen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls", "Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field")}}
