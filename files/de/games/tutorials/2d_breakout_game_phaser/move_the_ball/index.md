---
title: Bewegen Sie den Ball
slug: Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen", "Games/Tutorials/2D_breakout_game_Phaser/Physics")}}

Dies ist der **4. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Wir haben unseren blauen Ball auf dem Bildschirm angezeigt, aber er macht nichts – es wäre cool, wenn er sich irgendwie bewegen würde. Dieser Artikel erläutert, wie Sie genau das tun können.

## Aktualisieren der Ballposition in jedem Frame

Erinnern Sie sich an die `update()`-Methode und deren Definition? Der Code darin wird bei jedem Frame ausgeführt, daher ist es der perfekte Ort, um den Code zu platzieren, der die Position des Balls auf dem Bildschirm aktualisiert. Fügen Sie die folgenden neuen Zeilen in `update()` ein, wie gezeigt:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    this.ball.x += 1;
    this.ball.y += 1;
  }
}
```

Der obige Code erhöht die `x`- und `y`-Eigenschaften, die die Ballkoordinaten auf der Leinwand darstellen, bei jedem Frame um 1. Laden Sie `index.html` neu und Sie sollten sehen, wie der Ball über den Bildschirm rollt.

## Vergleichen Sie Ihren Code

Hier ist der Code, den Sie bisher haben sollten, live ausgeführt. Um den Quellcode anzusehen, klicken Sie auf die Schaltfläche "Play".

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
  }
  update() {
    this.ball.x += 1;
    this.ball.y += 1;
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
};

const game = new Phaser.Game(config);
```

{{EmbedLiveSample("Vergleichen Sie Ihren Code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Der nächste Schritt ist die Einführung einer grundlegenden Kollisionsabfrage, damit unser Ball von den Wänden abprallen kann. Dies würde mehrere Codezeilen erfordern – ein deutlich komplexerer Schritt als die bisherigen, insbesondere wenn wir auch Kollisionen mit Schläger und Ziegeln hinzufügen wollen. Glücklicherweise ermöglicht Phaser uns, dies viel einfacher umzusetzen, als wenn wir nur reines JavaScript verwenden würden.

In jedem Fall werden wir, bevor wir all das tun, zuerst die [Physics](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics)-Engines von Phaser einführen und einige Vorbereitungsarbeiten durchführen.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen", "Games/Tutorials/2D_breakout_game_Phaser/Physics")}}
