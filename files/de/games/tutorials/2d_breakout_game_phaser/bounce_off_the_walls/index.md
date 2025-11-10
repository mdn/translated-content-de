---
title: Von den Wänden abstoßen
slug: Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Physics", "Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls")}}

Dies ist der **6. Schritt** von 16 des [Gamedev Phaser-Leitfadens](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Nachdem die Physik eingeführt wurde, können wir mit der Implementierung der Kollisionserkennung im Spiel beginnen. Zuerst betrachten wir die Wände.

## Von den Weltgrenzen abprallen

Der einfachste Weg, unser Ball von den Wänden abprallen zu lassen, besteht darin, dem Framework mitzuteilen, dass wir die Grenzen des {{htmlelement("canvas")}}-Elements als Wände behandeln möchten und der Ball nicht darüber hinaus bewegt werden darf. In Phaser kann dies einfach mit der Methode `setCollideWorldBounds()` erreicht werden. Fügen Sie diese Zeile direkt nach dem bestehenden Methodenaufruf `this.ball.body.setVelocity()` hinzu:

```js
this.ball.body.setCollideWorldBounds(true, 1, 1);
```

Das `true` weist Phaser an, die Kollisionserkennung mit den Weltgrenzen zu aktivieren, während die beiden `1`s der Rückstoßfaktor auf den x- und y-Achsen sind. Dies bedeutet, dass wenn der Ball eine Wand trifft, er mit der gleichen Geschwindigkeit zurückprallt, die er vor dem Treffer hatte. Versuchen Sie erneut, index.html zu laden — jetzt sollten Sie sehen, wie der Ball von allen Wänden abprallt und sich innerhalb des Canvas-Bereichs bewegt.

## Vergleichen Sie Ihren Code

Hier ist, was Sie bisher haben sollten, live ausgeführt. Um den Quellcode zu sehen, klicken Sie auf die Schaltfläche "Play".

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

Das sieht jetzt mehr wie ein Spiel aus, aber wir können es auf keine Weise kontrollieren — es ist höchste Zeit, dass wir das [Spieler-Schläger und die Steuerung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls) einführen.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Physics", "Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls")}}
