---
title: Laden der Assets und Anzeige auf dem Bildschirm
slug: Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Scaling", "Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball")}}

Dies ist der **3. Schritt** von 16 im [Gamedev Phaser Leitfaden](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). In diesem Artikel schauen wir uns an, wie Sprites in unsere Spielwelt hinzugefügt werden. Unser Spiel wird eine Kugel enthalten, die über den Bildschirm rollt, von einer Paddle abprallt und Ziegel zerstört, um Punkte zu sammeln — bekannt, oder?

## Eine Kugel haben

Beginnen wir damit, eine Eigenschaft für unsere Kugel zur `ExampleScene` Klasse hinzuzufügen. Fügen Sie die folgende Zeile direkt nach der Eröffnungszeile innerhalb des Klassenrumpfs hinzu:

```js
class ExampleScene extends Phaser.Scene {
  ball;
  // ...
}
```

## Laden des Kugelsprites

Das Laden von Bildern und deren Darstellung auf unserem Canvas ist mit Phaser viel einfacher als mit reinem JavaScript. Um das Asset zu laden, verwenden wir die Methode `load.image()` der `Phaser.Scene`, verfügbar als `this.load.image`. Fügen Sie die folgende neue Zeile innerhalb der `preload()` Methode hinzu:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  preload() {
    this.load.image("ball", "img/ball.png");
  }
}
```

Der erste Parameter gibt dem Asset seinen Namen, der im gesamten Spielcode verwendet wird. Zur Konsistenz verwenden Sie denselben Namen wie die zugehörige Eigenschaft, die `ball` ist. Der zweite Parameter ist der relative Pfad zum grafischen Asset. In unserem Fall laden wir das Bild für unsere Kugel. (Beachten Sie, dass die Datei nicht `ball` heißen muss, wir empfehlen es jedoch, da es die Verfolgung erleichtert.)

Natürlich muss das Bild, um geladen zu werden, in unserem Codeverzeichnis vorhanden sein. [Laden Sie das Kugelbild von unserer Asset-Website herunter](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png) und speichern Sie es in einem `/img` Verzeichnis am selben Ort wie Ihre `index.html` Datei.

Um es nun auf dem Bildschirm anzuzeigen, verwenden wir eine andere Methode der `Phaser.Scene` namens `add.sprite()`. Fügen Sie die folgende neue Zeile innerhalb der `create()` Methode hinzu:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  create() {
    this.ball = this.add.sprite(50, 50, "ball");
  }
  // ...
}
```

Dies wird die Kugel dem Spiel hinzufügen und auf dem Bildschirm rendern. Die ersten beiden Parameter sind die x- und y-Koordinaten des Canvas, wo Sie es hinzufügen möchten, und der dritte ist der Name des zuvor definierten Assets. Das war's — wenn Sie Ihre `index.html` Datei laden, sehen Sie das Bild bereits geladen und auf dem Canvas dargestellt!

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
};

const game = new Phaser.Game(config);
```

{{EmbedLiveSample("vergleichen Sie Ihren Code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Das Ausgeben der Kugel war einfach; als nächstes versuchen wir, [die Kugel zu bewegen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball) auf dem Bildschirm.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Scaling", "Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball")}}
