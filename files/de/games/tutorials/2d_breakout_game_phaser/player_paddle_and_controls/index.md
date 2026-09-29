---
title: Spielerschläger und Steuerung
slug: Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls", "Games/Tutorials/2D_breakout_game_Phaser/Game_over")}}

Dies ist der **5. Schritt** von 12 im [Tutorial zum Erstellen eines Breakout-Spiels mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Der Ball bewegt sich bereits und prallt von den Wänden ab, aber das wird schnell langweilig – es fehlt die Interaktivität! Damit das Spiel spielbar wird, erstellen wir in diesem Artikel einen Schläger, den Sie bewegen können, um den Ball zu treffen.

## Den Schläger darstellen

Aus Sicht des Frameworks ähnelt der Schläger dem Ball sehr: Wir müssen eine Property für ihn hinzufügen, die zugehörige Bilddatei laden und dann den Rest einrichten.

### Den Schläger laden

Fügen Sie zunächst direkt nach der `ball`-Property die `paddle`-Property hinzu, die wir im Spiel verwenden werden:

```js
class ExampleScene extends Phaser.Scene {
  ball;
  paddle;
  // ...
}
```

Laden Sie dann in der `preload`-Methode das `paddle`-Bild, indem Sie den folgenden neuen `load.image()`-Aufruf hinzufügen:

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

Damit Sie es nicht vergessen: Laden Sie jetzt die [Schlägergrafik](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/paddle.png) herunter und speichern Sie sie in Ihrem `/img`-Ordner.

### Den Schläger mit Physik darstellen

Als Nächstes initialisieren wir den Schläger. Fügen Sie dazu den folgenden `add.sprite()`-Aufruf ganz am Ende der `create()`-Methode hinzu:

```js
this.paddle = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height - 5,
  "paddle",
);
```

Mit den Werten `scale.width` und `scale.height` können wir den Schläger genau dort positionieren, wo wir ihn haben möchten: `this.scale.width * 0.5` liegt genau in der Mitte des Bildschirms. In unserem Fall ist die Spielwelt genauso groß wie der Canvas. Bei anderen Spieltypen, etwa Side-Scrollern, ist die Spielwelt größer. Dort können Sie mit diesen Werten experimentieren, um interessante Effekte zu erzielen.

Wenn Sie Ihre `index.html` jetzt neu laden, sehen Sie, dass der Schläger ganz am unteren Bildschirmrand liegt – zu weit unten. Warum? Die Position wird vom Mittelpunkt des Objekts aus berechnet. Wir können den Ursprung so ändern, dass er horizontal in der Mitte und vertikal am unteren Rand des Schlägers liegt. Dadurch lässt sich der Schläger einfacher am unteren Bildschirmrand ausrichten. Fügen Sie die folgende Zeile unter der gerade hinzugefügten ein:

```js
this.paddle.setOrigin(0.5, 1);
```

Der Schläger befindet sich nun an der gewünschten Position. Damit der Ball mit ihm kollidieren kann, müssen wir die Physik für den Schläger aktivieren. Fügen Sie dazu die folgende Zeile ebenfalls am Ende der `create()`-Methode hinzu:

```js
this.physics.add.existing(this.paddle);
```

Jetzt kann das Framework bei jedem Frame auf Kollisionen prüfen. Um die Kollisionserkennung zwischen Schläger und Ball zu aktivieren, fügen Sie der `update()`-Methode wie gezeigt die `collide()`-Methode hinzu:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    this.physics.collide(this.ball, this.paddle);
  }
}
```

Der erste Parameter ist eines der Objekte, deren Kollision uns interessiert – der Ball. Der zweite Parameter ist das andere Objekt, der Schläger. Das funktioniert, aber nicht ganz wie erwartet: Wenn der Ball den Schläger trifft, fällt der Schläger vom Bildschirm! Wir möchten, dass nur der Ball vom Schläger abprallt und der Schläger an Ort und Stelle bleibt. Dazu können wir den `body` des Schlägers als unbeweglich festlegen. Fügen Sie die folgende Zeile am Ende der `create()`-Methode hinzu:

```js
this.paddle.body.setImmovable(true);
```

Außerdem werden Sie feststellen, dass sich der Ball nach dem Aufprall auf den Schläger horizontal bewegt, statt zurückzuprallen. Um das zu beheben, müssen wir auch für den Ball selbst den Abprallfaktor festlegen. Für Kollisionen mit den Wänden haben wir das bereits mit `setCollideWorldBounds()` getan. Fügen Sie die folgende Zeile in der `create()`-Methode direkt nach `ball.body.setCollideWorldBounds(true, 1, 1)` hinzu, damit alle Einstellungen für den Ball beieinanderbleiben:

```js
this.ball.body.setBounce(1);
```

Jetzt funktioniert es wie erwartet.

## Den Schläger steuern

Das nächste Problem ist, dass wir den Schläger noch nicht bewegen können. Dafür können wir die standardmäßige Eingabe des Systems verwenden – je nach Plattform Maus oder Touch – und die Position des Schlägers an die `input`-Position anpassen. Fügen Sie der `update()`-Methode wie gezeigt die folgende Zeile hinzu:

```js
this.paddle.x = this.input.x;
```

Jetzt wird die `x`-Position des Schlägers bei jedem neuen Frame an die `x`-Position der Eingabe angepasst. Beim Start des Spiels steht der Schläger allerdings nicht in der Mitte, weil die Eingabeposition noch nicht definiert ist. Um das zu beheben, können wir als Standardposition die Bildschirmmitte festlegen, solange noch keine Eingabeposition definiert ist. Ändern Sie die vorherige Zeile wie folgt:

```js
this.paddle.x = this.input.x || this.scale.width * 0.5;
```

Falls Sie es noch nicht getan haben, laden Sie Ihre `index.html` neu und probieren Sie es aus!

## Den Ball positionieren

Der Schläger funktioniert jetzt wie erwartet. Positionieren wir also den Ball darauf. Ähnlich wie beim Schläger soll er horizontal in der Bildschirmmitte und vertikal nahe dem unteren Rand liegen, mit einem kleinen Abstand zum Rand. Damit er genau an der gewünschten Stelle erscheint, setzen wir seinen Ursprung auf seinen Mittelpunkt. Suchen Sie die vorhandene Zeile `this.ball = this.add.sprite(...)` und ersetzen Sie sie durch die folgenden Zeilen:

```js
this.ball = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height - 25,
  "ball",
);
```

Die Geschwindigkeit bleibt nahezu gleich: Wir ändern lediglich den Wert des zweiten Parameters von 150 auf -150, damit sich der Ball zu Beginn des Spiels nach oben statt nach unten bewegt. Suchen Sie die vorhandene Zeile `this.ball.body.setVelocity()` und ändern Sie sie wie folgt:

```js
this.ball.body.setVelocity(150, -150);
```

Jetzt startet der Ball direkt über der Mitte des Schlägers.

## Vergleichen Sie Ihren Code

So sollte Ihr bisheriger Stand aussehen. Das Beispiel ist direkt ausführbar. Um den Quellcode anzusehen, klicken Sie auf die Schaltfläche „Play“.

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

Wir können den Schläger bewegen und den Ball von ihm abprallen lassen. Aber was bringt das, wenn der Ball ohnehin vom unteren Bildschirmrand abprallt? Als Nächstes führen wir die Möglichkeit ein, das Spiel zu verlieren – die sogenannte [Game-over-Logik](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls", "Games/Tutorials/2D_breakout_game_Phaser/Game_over")}}
