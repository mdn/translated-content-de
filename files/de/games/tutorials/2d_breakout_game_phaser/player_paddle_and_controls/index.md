---
title: Spieler-Schläger und Steuerung
slug: Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls", "Games/Tutorials/2D_breakout_game_Phaser/Game_over")}}

Dies ist der **7. Schritt** von insgesamt 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Wir haben den Ball, der sich bewegt und von den Wänden abprallt, aber das wird schnell langweilig—es fehlt die Interaktivität! Wir benötigen eine Möglichkeit, das Gameplay einzuführen, daher werden wir in diesem Artikel einen Schläger erstellen, den wir bewegen können, um den Ball zu treffen.

## Den Schläger rendern

Aus Sicht des Frameworks ist der Schläger dem Ball sehr ähnlich—wir müssen eine Eigenschaft hinzufügen, um ihn zu repräsentieren, das relevante Bild-Asset laden und dann die Magie geschehen lassen.

### Den Schläger laden

Fügen Sie zuerst die `paddle` Eigenschaft hinzu, die wir in unserem Spiel verwenden werden, direkt nach der `ball` Eigenschaft:

```js
class ExampleScene extends Phaser.Scene {
  ball;
  paddle;
  // ...
}
```

Laden Sie dann im `preload`-Verfahren das `paddle`-Bild, indem Sie den folgenden neuen `load.image()`-Aufruf hinzufügen:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  preload() {
    this.load.image("ball", "img/ball.png");
    this.load.image("paddle", "img/paddle.png");
  }
  // ...
}
```

Damit wir es nicht vergessen, sollten Sie an dieser Stelle die [Schlägergrafik](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/paddle.png) holen und in Ihrem `/img`-Ordner speichern.

### Den Schläger mit Physik rendern

Als Nächstes initialisieren wir unseren Schläger, indem wir den folgenden `add.sprite()`-Aufruf in die `create()`-Methode einfügen—fügen Sie ihn ganz unten hinzu:

```js
this.paddle = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height - 5,
  "paddle",
);
```

Wir können die Werte `scale.width` und `scale.height` verwenden, um den Schläger genau dort zu positionieren, wo wir ihn haben möchten: `this.scale.width * 0.5` befindet sich genau in der Mitte des Bildschirms. In unserem Fall ist die Welt dieselbe wie die Leinwand, aber für andere Spieltypen wie Side-Scroller wird die Welt größer sein, und Sie können damit experimentieren, um interessante Effekte zu erzielen.

Wie Sie bemerken werden, befindet sich der Schläger beim Neuladen Ihrer `index.html` derzeit ganz unten auf dem Bildschirm, zu tief für den Schläger. Warum? Weil der Ursprung, von dem die Position berechnet wird, vom Mittelpunkt des Objekts aus beginnt. Wir können das ändern, um den Ursprung in der Mitte der Breite des Schlägers und am unteren Rand seiner Höhe zu haben, damit er leichter an der unteren Kante positioniert werden kann. Fügen Sie die folgende Zeile unter der vorherigen neuen Zeile hinzu:

```js
this.paddle.setOrigin(0.5, 1);
```

Der Schläger ist jetzt genau dort positioniert, wo wir ihn haben wollen. Um ihn mit dem Ball kollidieren zu lassen, müssen wir die Physik für den Schläger aktivieren. Fahren Sie fort, indem Sie die folgende neue Zeile wieder am Ende der `create()`-Methode hinzufügen:

```js
this.physics.add.existing(this.paddle);
```

Jetzt kann die Magie beginnen—das Framework kann die Kollisionsdetektion in jedem Frame überprüfen. Um die Kollisionsdetektion zwischen dem Schläger und dem Ball zu aktivieren, fügen Sie die `collide()` Methode zur `update()` Methode hinzu, wie gezeigt:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    this.physics.collide(this.ball, this.paddle);
  }
}
```

Der erste Parameter ist eines der Objekte, an dem wir interessiert sind—der Ball—und das zweite ist das andere, der Schläger. Das funktioniert, aber nicht ganz so, wie wir es erwartet haben—wenn der Ball den Schläger trifft, fällt der Schläger vom Bildschirm! Alles, was wir wollen, ist, dass der Ball vom Schläger abprallt und der Schläger an derselben Stelle bleibt. Wir können den `body` des Schlägers unbeweglich machen, sodass er sich nicht bewegt, wenn der Ball ihn trifft. Um dies zu tun, fügen Sie die folgende Zeile am Ende der `create()` Methode hinzu:

```js
this.paddle.body.setImmovable(true);
```

Eine zweite Sache, die Ihnen auffallen wird, ist, dass der Ball nach dem Treffen des Schlägers horizontal zu bewegen beginnt, anstatt zurückzuspringen. Um dies zu beheben, müssen wir den Abprallfaktor des Balls selbst festlegen (das haben wir bereits für die Kollision mit den Wänden mit `setCollideWorldBounds()` gemacht). Fügen Sie die folgende Zeile zur `create()` Methode hinzu, direkt nach der Zeile `ball.body.setCollideWorldBounds(true, 1, 1)` (wir möchten alle Konfigurationen für den Ball zusammenhalten):

```js
this.ball.body.setBounce(1);
```

Jetzt funktioniert es wie erwartet.

## Den Schläger steuern

Das nächste Problem ist, dass wir den Schläger nicht bewegen können. Um dies zu beheben, können wir den standardmäßigen System-Input (Maus oder Touch, abhängig von der Plattform) verwenden und die Schlägerposition auf die `input`-Position setzen. Fügen Sie die folgende neue Zeile zur `update()` Methode hinzu, wie gezeigt:

```js
this.paddle.x = this.input.x;
```

Nun wird bei jedem neuen Frame die `x` Position des Schlägers entsprechend der `x` Position des Inputs angepasst. Wenn wir das Spiel jedoch starten, befindet sich die Position des Schlägers nicht in der Mitte. Das liegt daran, dass die Eingabeposition noch nicht definiert ist. Um dies zu beheben, können wir die Standardposition (falls eine Eingabeposition noch nicht definiert ist) auf die Mitte des Bildschirms setzen. Aktualisieren Sie die vorherige Zeile wie folgt:

```js
this.paddle.x = this.input.x || this.scale.width * 0.5;
```

Sollten Sie dies noch nicht getan haben, laden Sie Ihre `index.html` neu und probieren Sie es aus!

## Den Ball positionieren

Der Schläger funktioniert wie erwartet, also lassen Sie uns den Ball darauf positionieren. Es ist sehr ähnlich wie das Positionieren des Schlägers—wir müssen ihn horizontal in der Mitte des Bildschirms und vertikal am unteren Rand mit einem kleinen Offset vom Boden platzieren. Um ihn genau so zu platzieren, wie wir es wollen, setzen wir den Ursprung genau in die Mitte des Balls. Finden Sie die bestehende Zeile `this.ball = this.add.sprite(...)` und ersetzen Sie sie durch die folgenden Zeilen:

```js
this.ball = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height - 25,
  "ball",
);
```

Die Geschwindigkeit bleibt fast gleich—wir ändern nur den Wert des zweiten Parameters von 150 auf -150, sodass der Ball das Spiel beginnt, indem er nach oben statt nach unten bewegt. Finden Sie die bestehende Zeile `this.ball.body.setVelocity()` und aktualisieren Sie sie zu Folgendem:

```js
this.ball.body.setVelocity(150, -150);
```

Jetzt beginnt der Ball genau aus der Mitte des Schlägers.

## Vergleichen Sie Ihren Code

Hier ist, was Sie bisher laufend haben sollten. Um den Quellcode anzuzeigen, klicken Sie auf die Schaltfläche "Play".

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

{{EmbedLiveSample("vergleichen Sie Ihren Code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Wir können den Schläger bewegen und den Ball daran abprallen lassen, aber was bringt es, wenn der Ball ohnehin vom unteren Rand des Bildschirms abprallt? Lassen Sie uns die Möglichkeit einführen zu verlieren—auch bekannt als [Game Over](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over) Logik.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls", "Games/Tutorials/2D_breakout_game_Phaser/Game_over")}}
