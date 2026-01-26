---
title: Laden Sie die Assets und zeigen Sie sie auf dem Bildschirm an
slug: Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Scaling", "Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball")}}

Dies ist der **dritte Schritt** von 16 im [Gamedev Phaser-Leitfaden](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). In diesem Artikel werden wir uns ansehen, wie man Sprites in unsere Spielwelt einfügt. Unser Spiel wird eine Kugel enthalten, die über den Bildschirm rollt, von einem Paddel abprallt und Ziegel zerstört, um Punkte zu sammeln – kommt Ihnen bekannt vor, nicht wahr?

## Eine Kugel haben

Lassen Sie uns damit beginnen, eine Eigenschaft hinzuzufügen, die unsere Kugel in der `ExampleScene`-Klasse darstellt. Fügen Sie die folgende Zeile direkt nach der Eröffnungslinie innerhalb des Klassenkörpers hinzu:

```js
class ExampleScene extends Phaser.Scene {
  ball;
  // ...
}
```

## Laden des Kugelsprites

Mit Phaser ist das Laden von Bildern und deren Anzeige auf unserer Leinwand weniger komplex als mit reinem JavaScript. Um das Asset zu laden, verwenden wir die `Phaser.Scene`-Methode `load.image()`, verfügbar als `this.load.image`. Fügen Sie die folgende neue Zeile in die `preload()`-Methode ein:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  preload() {
    this.load.image("ball", "img/ball.png");
  }
}
```

Der erste Parameter gibt dem Asset seinen Namen, der im gesamten Spielcode verwendet wird. Für Konsistenz verwenden wir denselben Namen wie die zugrunde liegende Eigenschaft, nämlich `ball`. Der zweite Parameter ist der relative Pfad zum Grafik-Asset. In unserem Fall werden wir das Bild für unsere Kugel laden. (Beachten Sie, dass die Datei nicht `ball` genannt werden muss, aber wir empfehlen es, da es alles leichter nachvollziehbar macht.)

Natürlich muss das Bild verfügbar sein, um es zu laden. [Laden Sie das Kugelbild von unserer Assets-Website herunter](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png) und speichern Sie es in einem `/img` Verzeichnis am selben Ort wie Ihre `index.html`-Datei.

Um es auf dem Bildschirm anzuzeigen, verwenden wir eine andere `Phaser.Scene`-Methode namens `add.sprite();` fügen Sie die folgende neue Zeile in die `create()`-Methode ein:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  create() {
    this.ball = this.add.sprite(50, 50, "ball");
  }
  // ...
}
```

Dies fügt die Kugel zum Spiel hinzu und rendert sie auf dem Bildschirm. Die ersten beiden Parameter sind die x- und y-Koordinaten der Leinwand, wo Sie sie hinzufügen möchten, und der dritte ist der Name des zuvor definierten Assets. Das war's – wenn Sie Ihre `index.html`-Datei laden, sehen Sie das Bild bereits geladen und auf der Leinwand gerendert!

## Vergleichen Sie Ihren Code

Hier sehen Sie, was Sie bisher haben sollten, live in Aktion. Um den Quellcode anzusehen, klicken Sie auf die Schaltfläche "Play".

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

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Das Ausgeben der Kugel war einfach; als nächstes werden wir versuchen, die Kugel [auf dem Bildschirm zu bewegen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Scaling", "Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball")}}
