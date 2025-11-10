---
title: Physik
slug: Games/Tutorials/2D_breakout_game_Phaser/Physics
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball", "Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls")}}

Dies ist der **5. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Für eine ordnungsgemäße Kollisionserkennung zwischen den Objekten in unserem Spiel benötigen wir Physik; dieser Artikel führt Sie in die in Phaser verfügbaren Optionen ein und zeigt Ihnen eine typische einfache Einrichtung.

## Hinzufügen der Physik

Phaser wird mit drei verschiedenen Physik-Engines geliefert—Arcade Physics, Impact Physics und Matter.js Physics—mit der vierten Option, Box2D, als kommerzielles Plugin verfügbar. Für einfache Spiele wie unseres können wir die Arcade Physics Engine verwenden. Wir benötigen keine schweren Geometrieberechnungen—schließlich ist es nur ein Ball, der von Wänden und Ziegeln abprallt.

Zuerst konfigurieren wir die Arcade Physics Engine in unserem Spiel. Fügen Sie die Eigenschaft `physics` dem `config` Objekt hinzu, wie unten gezeigt:

```js
const config = {
  // ...
  physics: {
    default: "arcade",
  },
};
```

Als nächstes müssen wir unseren Ball für das Physiksystem aktivieren—Phaser-Objektphysik ist standardmäßig nicht aktiviert. Fügen Sie die folgende Zeile am Ende der `create()` Methode hinzu:

```js
this.physics.add.existing(this.ball);
```

Wenn wir unseren Ball auf dem Bildschirm bewegen möchten, können wir `velocity` auf seinem `body` setzen. Fügen Sie die folgende Zeile ebenfalls am Ende von `create()` hinzu:

```js
this.ball.body.setVelocity(150, 150);
```

## Entfernen unserer bisherigen Update-Anweisungen

Denken Sie daran, unsere alte Methode zum Hinzufügen von Werten zu `x` und `y` aus der `update()` Methode zu entfernen, d.h. sie in den leeren Zustand zurückzusetzen:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {}
}
```

Wir handhaben dies jetzt ordnungsgemäß mit einer Physik-Engine.

Versuchen Sie, `index.html` erneut zu laden. Im Moment hat die Physik-Engine weder Schwerkraft noch Reibung, sodass der Ball in die gegebene Richtung mit konstanter Geschwindigkeit läuft.

## Spaß mit Physik

Mit Physik kann man viel mehr machen. Wenn Sie z. B. `this.ball.body.gravity.y = 500;` in `create()` hinzufügen, wird die vertikale Schwerkraft des Balls eingestellt. Versuchen Sie, die Geschwindigkeit auf `this.ball.body.setVelocity(150, -150);` zu ändern, und Sie werden sehen, wie der Ball nach oben geschossen wird, aber dann aufgrund der Schwerkraft wieder nach unten fällt.

Diese Art von Funktionalität ist nur die Spitze des Eisbergs—es gibt verschiedene Funktionen und Variablen, die Ihnen helfen können, die Physik-Objekte zu manipulieren. Schauen Sie sich die offizielle [Physik-Dokumentation](https://docs.phaser.io/phaser/concepts/physics/arcade) an und sehen Sie sich die [riesige Sammlung von Beispielen](https://phaser.io/examples/v3.85.0/physics) unter Verwendung der Arcade- und Matter.js-Physiksysteme an.

## Vergleichen Sie Ihren Code

Hier sehen Sie, was Sie bisher live laufen sollten. Um dessen Quellcode anzusehen, klicken Sie auf die Schaltfläche "Play".

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

{{EmbedLiveSample("vergleichen Sie Ihren Code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Nun können wir zur nächsten Lektion übergehen und sehen, wie der Ball [von den Wänden abprallt](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball", "Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls")}}
