---
title: Von den Wänden abprallen
slug: Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Physics", "Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls")}}

Dies ist der **4. Schritt** von 12 im [Tutorial zum Erstellen eines Breakout-Spiels mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Nachdem wir die Physik eingeführt haben, können wir nun die Kollisionserkennung ins Spiel einbauen. Zuerst befassen wir uns mit den Wänden.

## Von den Grenzen der Spielwelt abprallen

Am einfachsten bringen wir den Ball dazu, von den Wänden abzuprallen, indem wir dem Framework mitteilen, dass es die Grenzen des {{htmlelement("canvas")}}-Elements als Wände behandeln und den Ball nicht darüber hinaus bewegen soll. In Phaser lässt sich das mit der Methode `setCollideWorldBounds()` erreichen. Fügen Sie diese Zeile direkt nach dem vorhandenen Aufruf der Methode `this.ball.body.setVelocity()` ein:

```js
this.ball.body.setCollideWorldBounds(true, 1, 1);
```

Mit `true` wird die Kollisionserkennung an den Grenzen der Spielwelt aktiviert. Die beiden `1`-Werte geben den Abprallfaktor auf der x- beziehungsweise y-Achse an. Trifft der Ball auf eine Wand, prallt er mit derselben Geschwindigkeit zurück, die er vor dem Aufprall hatte. Laden Sie index.html erneut – jetzt sollten Sie sehen, wie der Ball von allen Wänden abprallt und sich innerhalb des Canvas-Bereichs bewegt.

## Vergleichen Sie Ihren Code

So sollte Ihr bisheriger Code aussehen; das Beispiel ist direkt ausführbar. Um den Quellcode anzuzeigen, klicken Sie auf die Schaltfläche „Play“.

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

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
  }
  create() {
    this.ball = this.add.sprite(50, 50, "ball");
    this.physics.add.existing(this.ball);
    this.ball.body.setVelocity(150, 150);
    this.ball.body.setCollideWorldBounds(true, 1, 1);
  }
  update() {}
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

Allmählich sieht das Ganze wie ein Spiel aus, aber wir können es noch nicht steuern. Höchste Zeit, den [Spielerschläger und die Steuerung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls) einzuführen.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Physics", "Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls")}}
