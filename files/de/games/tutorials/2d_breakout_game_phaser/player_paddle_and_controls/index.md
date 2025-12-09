---
title: Spieler-Schläger und Steuerung
slug: Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls", "Games/Tutorials/2D_breakout_game_Phaser/Game_over")}}

Dies ist der **7. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Wir haben den Ball, der sich bewegt und von den Wänden abprallt, aber es wird schnell langweilig—es gibt keine Interaktivität! Wir brauchen eine Möglichkeit, das Gameplay zu integrieren, also werden wir in diesem Artikel einen Schläger erstellen, um ihn zu bewegen und den Ball damit zu treffen.

## Rendering des Schlägers

Aus der Perspektive des Frameworks ist der Schläger dem Ball sehr ähnlich—wir müssen eine Eigenschaft hinzufügen, um ihn darzustellen, das entsprechende Bild laden und dann den Rest erledigen.

### Laden des Schlägers

Zuerst fügen Sie die `paddle`-Eigenschaft hinzu, die wir in unserem Spiel verwenden werden, direkt nach der `ball`-Eigenschaft:

```js
class ExampleScene extends Phaser.Scene {
  ball;
  paddle;
  // ...
}
```

Dann, in der `preload`-Methode, laden Sie das `paddle`-Bild, indem Sie den folgenden neuen Aufruf von `load.image()` hinzufügen:

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

Damit wir es nicht vergessen, sollten Sie sich an dieser Stelle die [Schläger-Grafik](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/paddle.png) schnappen und in Ihrem `/img` Ordner speichern.

### Rendering des Schlägers mit Physik

Als Nächstes werden wir unseren Schläger initialisieren, indem wir den folgenden `add.sprite()`-Aufruf innerhalb der `create()`-Methode hinzufügen—fügen Sie ihn ganz unten hinzu:

```js
this.paddle = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height - 5,
  "paddle",
);
```

Wir können die Werte `scale.width` und `scale.height` verwenden, um den Schläger genau dort zu positionieren, wo wir ihn haben wollen: `this.scale.width * 0.5` wird genau in der Mitte des Bildschirms sein. In unserem Fall ist die Welt dieselbe wie die Leinwand, aber für andere Arten von Spielen, wie z. B. Side-Scroller, wird die Welt größer sein und Sie können mit ihr experimentieren, um interessante Effekte zu erzielen.

Wie Sie feststellen werden, wenn Sie zu diesem Zeitpunkt Ihr `index.html` neu laden, befindet sich der Schläger derzeit ganz unten auf dem Bildschirm, zu niedrig für den Schläger. Warum? Weil der Ursprung, von dem aus die Position berechnet wird, vom Mittelpunkt des Objekts ausgeht. Wir können das ändern, um den Ursprung in der Mitte der Schlägerbreite und am unteren Ende der Schlägerhöhe zu haben, sodass es einfacher ist, ihn gegen den unteren Rand zu positionieren. Fügen Sie die folgende Zeile unter der vorherigen neuen hinzu:

```js
this.paddle.setOrigin(0.5, 1);
```

Der Schläger ist jetzt genau dort positioniert, wo wir ihn haben wollen. Um ihn mit dem Ball kollidieren zu lassen, müssen wir die Physik für den Schläger aktivieren. Fahren Sie fort, indem Sie die folgende neue Zeile wieder am Ende der `create()`-Methode hinzufügen:

```js
this.physics.add.existing(this.paddle);
```

Jetzt kann die Magie beginnen—das Framework kann sich um die Kollisionserkennung in jedem Frame kümmern. Um die Kollisionserkennung zwischen Schläger und Ball zu aktivieren, fügen Sie die `collide()`-Methode zu der `update()`-Methode hinzu, wie gezeigt:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    this.physics.collide(this.ball, this.paddle);
  }
}
```

Der erste Parameter ist eines der Objekte, an denen wir interessiert sind—der Ball—und der zweite ist das andere, der Schläger. Dies funktioniert, aber nicht ganz so, wie wir es erwartet haben—wenn der Ball den Schläger trifft, fällt der Schläger vom Bildschirm! Alles, was wir wollen, ist, dass der Ball vom Schläger abprallt und der Schläger an derselben Stelle bleibt. Wir können den `body` des Schlägers als unbeweglich festlegen, damit er sich nicht bewegt, wenn der Ball ihn trifft. Um dies zu tun, fügen Sie die folgende Zeile am Ende der `create()`-Methode hinzu:

```js
this.paddle.body.setImmovable(true);
```

Eine zweite Sache, die Ihnen auffallen wird, ist, dass der Ball, nachdem er den Schläger trifft, horizontal zu bewegen beginnt, anstatt zurück zu prallen. Um dies zu beheben, müssen wir den Rückprallfaktor auch auf dem Ball selbst einstellen (wir haben das bereits für die Wandkollisionen mit `setCollideWorldBounds()` getan). Fügen Sie die folgende Zeile zur `create()`-Methode hinzu, direkt nach der `ball.body.setCollideWorldBounds(true, 1, 1)`-Zeile (wir möchten alle Konfigurationen für den Ball zusammenhalten):

```js
this.ball.body.setBounce(1);
```

Jetzt funktioniert es wie erwartet.

## Steuerung des Schlägers

Das nächste Problem ist, dass wir den Schläger nicht bewegen können. Um das zu beheben, können wir die Standardeingabe des Systems (Maus oder Touch, je nach Plattform) verwenden und die Schlägerposition an die Position der `input`-Position setzen. Fügen Sie die folgende neue Zeile zur `update()`-Methode hinzu, wie gezeigt:

```js
this.paddle.x = this.input.x;
```

Jetzt wird in jedem neuen Frame die `x`-Position des Schlägers entsprechend der `x`-Position der Eingabe angepasst. Wenn wir jedoch das Spiel starten, ist die Position des Schlägers nicht in der Mitte. Das liegt daran, dass die Eingabeposition noch nicht definiert ist. Um dies zu beheben, können wir die Standardposition (wenn eine Eingabeposition noch nicht definiert ist) in die Mitte des Bildschirms setzen. Aktualisieren Sie die vorherige Zeile wie folgt:

```js
this.paddle.x = this.input.x || this.scale.width * 0.5;
```

Falls Sie es noch nicht getan haben, laden Sie Ihr `index.html` neu und probieren Sie es aus!

## Positionierung des Balls

Wir haben den Schläger so funktionierend, wie wir es erwartet haben, also lassen Sie uns den Ball darauf positionieren. Es ist dem Positionieren des Schlägers sehr ähnlich—wir müssen ihn horizontal in die Mitte des Bildschirms und vertikal am unteren Ende mit einem kleinen Versatz von unten platzieren. Um ihn genau so zu platzieren, wie wir es möchten, setzen wir den Ursprung genau in die Mitte des Balls. Finden Sie die bestehende Zeile `this.ball = this.add.sprite(...)` und ersetzen Sie sie durch die folgenden Zeilen:

```js
this.ball = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height - 25,
  "ball",
);
```

Die Geschwindigkeit bleibt fast gleich—wir ändern nur den Wert des zweiten Parameters von 150 auf -150, sodass der Ball das Spiel durch Bewegen nach oben anstatt nach unten beginnt. Finden Sie die bestehende Zeile `this.ball.body.setVelocity()` und aktualisieren Sie sie wie folgt:

```js
this.ball.body.setVelocity(150, -150);
```

Jetzt wird der Ball direkt aus der Mitte des Schlägers starten.

## Vergleichen Sie Ihren Code

Hier ist, was Sie bisher haben sollten, live ausgeführt. Um den Quellcode zu sehen, klicken Sie auf die "Play"-Schaltfläche.

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

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Wir können den Schläger bewegen und den Ball daran abprallen lassen, aber was bringt das, wenn der Ball sowieso vom unteren Rand des Bildschirms abprallt? Lassen Sie uns die Möglichkeit einführen, zu verlieren—auch bekannt als [Game Over](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over)-Logik.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls", "Games/Tutorials/2D_breakout_game_Phaser/Game_over")}}
