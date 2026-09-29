---
title: Den Ball bewegen
slug: Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework", "Games/Tutorials/2D_breakout_game_Phaser/Physics")}}

Dies ist der **2. von 12 Schritten** des [Tutorials zum Erstellen eines Breakout-Spiels mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). In diesem Artikel sehen wir uns an, wie Sie ein Ball-Sprite laden, es zur Spielwelt hinzufügen und über den Bildschirm bewegen. In unserem Spiel rollt ein Ball über den Bildschirm, prallt von einem Schläger ab und zerstört Steine, um Punkte zu erzielen.

Für den Ball sind zwei Schritte erforderlich: das Laden der Bilddatei und das Darstellen des Balls an der richtigen Position, während er sich bewegt.

## Einen Ball hinzufügen

Beginnen wir damit, der Klasse `ExampleScene` eine Eigenschaft für unseren Ball hinzuzufügen. Fügen Sie die folgende Zeile direkt nach der öffnenden Zeile innerhalb der Klasse ein:

```js
class ExampleScene extends Phaser.Scene {
  ball;
  // ...
}
```

## Das Ball-Sprite laden

Mit Phaser ist es einfacher, Bilder zu laden und auf unserem Canvas darzustellen, als mit reinem JavaScript. Zum Laden der Bilddatei verwenden wir die Methode `load.image()` von `Phaser.Scene`, die als `this.load.image` verfügbar ist. Fügen Sie die folgende neue Zeile in die Methode `preload()` ein:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  preload() {
    this.load.image("ball", "img/ball.png");
  }
  // ...
}
```

Der erste Parameter gibt der Bilddatei einen Namen, den wir im gesamten Spielcode verwenden. Verwenden Sie der Einheitlichkeit halber denselben Namen wie für die zugehörige Eigenschaft: `ball`. Der zweite Parameter ist der relative Pfad zur Bilddatei. In unserem Fall laden wir das Bild für unseren Ball. (Die Datei muss nicht `ball` heißen, aber wir empfehlen es, weil der Code dadurch leichter nachzuvollziehen ist.)

Damit das Bild geladen werden kann, muss es in unserem Codeverzeichnis verfügbar sein. [Laden Sie das Ballbild von unserer Website mit Beispieldateien herunter](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png) und speichern Sie es in einem Verzeichnis `/img` am selben Ort wie Ihre Datei `index.html`.

Um den Ball auf dem Bildschirm anzuzeigen, verwenden wir eine weitere Methode von `Phaser.Scene`: `add.sprite()`. Fügen Sie die folgende neue Zeile in die Methode `create()` ein:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  create() {
    this.ball = this.add.sprite(50, 50, "ball");
  }
  // ...
}
```

Dadurch wird der Ball zum Spiel hinzugefügt und auf dem Bildschirm dargestellt. Die ersten beiden Parameter sind die x- und y-Koordinaten auf dem Canvas, an denen er erscheinen soll. Der dritte Parameter ist der Name der zuvor festgelegten Bilddatei. Das ist schon alles: Wenn Sie Ihre Datei `index.html` laden, sehen Sie das Bild auf dem Canvas!

## Die Position des Balls bei jedem Frame aktualisieren

Erinnern Sie sich an die Methode `update()` und ihre Funktion? Der darin enthaltene Code wird bei jedem Frame ausgeführt. Sie eignet sich daher hervorragend, um die Position des Balls auf dem Bildschirm zu aktualisieren. Fügen Sie die folgenden neuen Zeilen wie gezeigt in `update()` ein:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    this.ball.x += 1;
    this.ball.y += 1;
  }
}
```

Der obige Code erhöht bei jedem Frame die Eigenschaften `x` und `y`, die die Koordinaten des Balls auf dem Canvas angeben, jeweils um 1. Laden Sie `index.html` neu. Sie sollten sehen, wie der Ball über den Bildschirm rollt.

## Vergleichen Sie Ihren Code

So sollte Ihr Ergebnis bisher aussehen. Das Beispiel wird direkt hier ausgeführt. Um den Quellcode anzusehen, klicken Sie auf die Schaltfläche „Play“.

Wenn Sie den Ball nicht sehen können, laden Sie die Seite erneut – wahrscheinlich hat der Ball den Bildschirm bereits verlassen.

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

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Als Nächstes fügen wir eine einfache Kollisionserkennung hinzu, damit unser Ball von den Wänden abprallen kann. Dafür wären mehrere Codezeilen nötig – ein deutlich komplexerer Schritt als die bisherigen, insbesondere wenn wir auch Kollisionen mit dem Schläger und den Steinen berücksichtigen möchten. Glücklicherweise macht Phaser uns das wesentlich leichter als reines JavaScript.

Bevor wir das tun, stellen wir zunächst die [Physik-Engines](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics) von Phaser vor und treffen einige Vorbereitungen.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework", "Games/Tutorials/2D_breakout_game_Phaser/Physics")}}
