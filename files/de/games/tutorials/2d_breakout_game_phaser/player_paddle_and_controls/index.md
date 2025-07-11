---
title: Spielerschläger und Steuerung
slug: Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_Phaser/Game_over")}}

Dies ist der **7. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie können den Quellcode finden, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson07.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson07.html).

Wir haben den Ball so weit, dass er sich bewegt und von den Wänden abprallt, aber das wird schnell langweilig — es gibt keine Interaktivität! Wir brauchen eine Möglichkeit, das Gameplay einzuführen. In diesem Artikel erstellen wir daher einen Schläger, um den Ball zu treffen und zu bewegen.

## Den Schläger darstellen

Aus der Sicht des Frameworks ist der Schläger dem Ball sehr ähnlich — wir müssen eine Variable hinzufügen, um ihn zu repräsentieren, das relevante Bild-Asset laden und dann die Magie geschehen lassen.

### Den Schläger laden

Zuerst fügen Sie die `paddle`-Variable hinzu, die wir in unserem Spiel verwenden werden, direkt nach der `ball`-Variable:

```js
let paddle;
```

Dann, in der `preload`-Funktion, laden Sie das `paddle`-Bild, indem Sie den folgenden neuen `load.image()`-Aufruf hinzufügen:

```js
function preload() {
  // …
  game.load.image("ball", "img/ball.png");
  game.load.image("paddle", "img/paddle.png");
}
```

### Die Grafik des Schlägers hinzufügen

Nur damit wir es nicht vergessen, sollten Sie an dieser Stelle die [Schläger-Grafik](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/paddle.png) von GitHub holen und in Ihrem `/img`-Ordner speichern.

### Den Schläger darstellen, mit Physik

Als nächstes initialisieren wir unseren Schläger, indem wir den folgenden `add.sprite()`-Aufruf innerhalb der `create()`-Funktion hinzufügen — fügen Sie ihn ganz unten hinzu:

```js
paddle = game.add.sprite(
  game.world.width * 0.5,
  game.world.height - 5,
  "paddle",
);
```

Wir können die Werte `world.width` und `world.height` verwenden, um den Schläger genau dort zu positionieren, wo wir ihn haben möchten: `game.world.width*0.5` wird genau in der Mitte des Bildschirms sein. In unserem Fall ist die Welt dasselbe wie das Canvas, aber für andere Arten von Spielen, wie zum Beispiel Side-Scroller, wird die Welt größer sein, und Sie können damit experimentieren, um interessante Effekte zu erzielen.

Wie Sie feststellen werden, wenn Sie Ihr `index.html` an dieser Stelle neu laden, befindet sich der Schläger momentan nicht genau in der Mitte. Warum? Weil der Anker, von dem aus die Position berechnet wird, immer von der oberen linken Ecke des Objekts beginnt. Wir können das ändern, um den Anker in der Mitte der Schlägerbreite und am unteren Rand seiner Höhe zu haben, damit er leichter an der unteren Kante positioniert werden kann. Fügen Sie die folgende Zeile unter der vorherigen neuen hinzu:

```js
paddle.anchor.set(0.5, 1);
```

Der Schläger ist jetzt genau dort positioniert, wo wir ihn haben möchten. Nun, um ihn mit dem Ball kollidieren zu lassen, müssen wir Physik für den Schläger aktivieren. Fahren Sie fort, indem Sie die folgende neue Zeile wieder am Ende der `create()`-Funktion hinzufügen:

```js
game.physics.enable(paddle, Phaser.Physics.ARCADE);
```

Jetzt kann die Magie beginnen — das Framework kann die Kollisionsdetektion in jedem Frame übernehmen. Um Kollisionsdetektion zwischen dem Schläger und dem Ball zu ermöglichen, fügen Sie die `collide()`-Methode der `update()`-Funktion hinzu, wie gezeigt:

```js
function update() {
  game.physics.arcade.collide(ball, paddle);
}
```

Der erste Parameter ist eines der Objekte, an denen wir interessiert sind — der Ball — und der zweite ist das andere, der Schläger. Das funktioniert, aber nicht ganz so, wie wir es erwartet haben — wenn der Ball den Schläger trifft, fällt der Schläger vom Bildschirm! Alles, was wir wollen, ist, dass der Ball vom Schläger abprallt und der Schläger an derselben Stelle bleibt. Wir können den `body` des Schlägers auf `immovable` setzen, sodass er sich nicht bewegt, wenn der Ball ihn trifft. Dazu fügen Sie die folgende Zeile am Ende der `create()`-Funktion hinzu:

```js
paddle.body.immovable = true;
```

Jetzt funktioniert es wie erwartet.

## Den Schläger steuern

Das nächste Problem ist, dass wir den Schläger nicht bewegen können. Dafür können wir die Standardeingabe des Systems verwenden (Maus oder Touch, je nach Plattform) und die Schlägerposition auf die `input`-Position setzen. Fügen Sie die folgende neue Zeile der `update()`-Funktion hinzu, wie gezeigt:

```js
function update() {
  game.physics.arcade.collide(ball, paddle);
  paddle.x = game.input.x;
}
```

Jetzt wird bei jedem neuen Frame die `x`-Position des Schlägers entsprechend der `x`-Position der Eingabe angepasst, jedoch wenn wir das Spiel starten, ist die Position des Schlägers nicht in der Mitte. Das liegt daran, dass die Eingabeposition noch nicht definiert ist. Um das zu beheben, können wir die Standardposition (falls eine Eingabeposition noch nicht definiert ist) auf die Mitte des Bildschirms setzen. Aktualisieren Sie die vorherige Zeile wie folgt:

```js
paddle.x = game.input.x || game.world.width * 0.5;
```

Falls Sie es noch nicht getan haben, laden Sie Ihre `index.html` neu und probieren Sie es aus!

## Den Ball positionieren

Wir haben den Schläger wie erwartet funktionierend, also lassen Sie uns den Ball darauf positionieren. Es ist sehr ähnlich wie die Positionierung des Schlägers — wir müssen ihn horizontal in der Mitte des Bildschirms und vertikal am unteren Rand mit einem kleinen Abstand vom unteren Rand platzieren. Um ihn genau dort zu platzieren, wo wir ihn haben möchten, setzen wir den Anker auf die genaue Mitte des Balls. Finden Sie die vorhandene `ball = game.add.sprite()`-Zeile und ersetzen Sie sie durch die folgenden zwei Zeilen:

```js
ball = game.add.sprite(game.world.width * 0.5, game.world.height - 25, "ball");
ball.anchor.set(0.5);
```

Die Geschwindigkeit bleibt fast gleich — wir ändern nur den Wert des zweiten Parameters von 150 auf -150, sodass der Ball das Spiel durch Aufwärtsbewegung beginnt, anstatt abwärts. Finden Sie die vorhandene `ball.body.velocity.set()`-Zeile und aktualisieren Sie sie wie folgt:

```js
ball.body.velocity.set(150, -150);
```

Jetzt wird der Ball direkt von der Mitte des Schlägers starten.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/ogqza0ye/","","400")}}

## Nächste Schritte

Wir können den Schläger bewegen und den Ball davon abprallen lassen, aber was bringt es, wenn der Ball ohnehin vom unteren Rand des Bildschirms abprallt? Lassen Sie uns die Möglichkeit einführen, zu verlieren — auch bekannt als [Game-Over](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over) Logik.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_Phaser/Game_over")}}
