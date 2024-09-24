---
title: Spielerschläger und Steuerung
slug: Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_Phaser/Game_over")}}

Dies ist der **7. Schritt** von 16 des [Gamedev Phaser-Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson07.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson07.html).

Wir haben den Ball, der sich bewegt und von den Wänden abprallt, aber das wird schnell langweilig - es gibt keine Interaktivität! Wir brauchen eine Möglichkeit, das Gameplay zu integrieren. Deshalb werden wir in diesem Artikel einen Schläger erstellen, mit dem der Ball bewegt und getroffen werden kann.

## Darstellung des Schlägers

Aus der Perspektive des Frameworks ist der Schläger dem Ball sehr ähnlich — wir müssen eine Variable hinzufügen, um ihn darzustellen, das entsprechende Bildasset laden und dann die Magie wirken lassen.

### Laden des Schlägers

Fügen Sie zunächst die `paddle`-Variable hinzu, die wir in unserem Spiel verwenden werden, direkt nach der `ball`-Variable:

```js
let paddle;
```

Laden Sie dann im `preload`-Funktion das `paddle`-Bild, indem Sie den folgenden neuen `load.image()`-Aufruf hinzufügen:

```js
function preload() {
  // …
  game.load.image("ball", "img/ball.png");
  game.load.image("paddle", "img/paddle.png");
}
```

### Hinzufügen der Schlägergrafik

Damit wir es nicht vergessen, sollten Sie an dieser Stelle die [Schlägergrafik](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/paddle.png) von GitHub herunterladen und in Ihrem `/img`-Ordner speichern.

### Darstellung des Schlägers mit Physik

Als Nächstes werden wir unseren Schläger initialisieren, indem wir den folgenden `add.sprite()`-Aufruf in der `create()`-Funktion hinzufügen — fügen Sie ihn ganz unten hinzu:

```js
paddle = game.add.sprite(
  game.world.width * 0.5,
  game.world.height - 5,
  "paddle",
);
```

Wir können die Werte `world.width` und `world.height` verwenden, um den Schläger genau dort zu positionieren, wo wir ihn haben möchten: `game.world.width*0.5` befindet sich genau in der Mitte des Bildschirms. In unserem Fall ist die Welt dasselbe wie die Leinwand, aber für andere Spieltypen, wie zum Beispiel Sidescroller, wird die Welt größer sein, und Sie können diese anpassen, um interessante Effekte zu erzeugen.

Wie Sie bemerken werden, wenn Sie Ihr `index.html` an dieser Stelle neu laden, befindet sich der Schläger derzeit nicht genau in der Mitte. Warum? Weil der Anker, von dem aus die Position berechnet wird, immer vom oberen linken Rand des Objekts beginnt. Wir können das ändern, damit der Anker sich in der Mitte der Breite des Schlägers und am unteren Rand seiner Höhe befindet, sodass er einfacher gegen den unteren Rand positioniert werden kann. Fügen Sie die folgende Zeile unter der vorherigen neuen Zeile hinzu:

```js
paddle.anchor.set(0.5, 1);
```

Der Schläger ist nun genau dort positioniert, wo wir ihn haben möchten. Jetzt müssen wir Physik für den Schläger aktivieren, um ihn mit dem Ball kollidieren zu lassen. Fahren Sie fort, indem Sie die folgende neue Zeile am Ende der `create()`-Funktion hinzufügen:

```js
game.physics.enable(paddle, Phaser.Physics.ARCADE);
```

Nun kann die Magie beginnen — das Framework kann sich um die Kollisionsabfrage in jedem Frame kümmern. Um die Kollisionserkennung zwischen dem Schläger und dem Ball zu ermöglichen, fügen Sie die `collide()`-Methode in der `update()`-Funktion wie folgt hinzu:

```js
function update() {
  game.physics.arcade.collide(ball, paddle);
}
```

Der erste Parameter ist eines der Objekte, an denen wir interessiert sind — der Ball — und der zweite ist das andere, der Schläger. Das funktioniert, aber nicht ganz wie erwartet — wenn der Ball den Schläger trifft, fällt der Schläger vom Bildschirm! Alles, was wir wollen, ist, dass der Ball vom Schläger abprallt und der Schläger an Ort und Stelle bleibt. Wir können den `body` des Schlägers als `immovable` festlegen, damit er sich nicht bewegt, wenn der Ball ihn trifft. Um dies zu tun, fügen Sie die folgende Zeile am Ende der `create()`-Funktion hinzu:

```js
paddle.body.immovable = true;
```

Jetzt funktioniert es wie erwartet.

## Steuerung des Schlägers

Das nächste Problem ist, dass wir den Schläger nicht bewegen können. Dazu können wir die standardmäßige Systemeingabe (Maus oder Touch, je nach Plattform) verwenden und die Position des Schlägers auf die Position der `input` setzen. Fügen Sie die folgende neue Zeile zur `update()`-Funktion wie dargestellt hinzu:

```js
function update() {
  game.physics.arcade.collide(ball, paddle);
  paddle.x = game.input.x;
}
```

Jetzt wird bei jedem neuen Frame die `x`-Position des Schlägers entsprechend der `x`-Position der Eingabe angepasst, jedoch befindet sich die Position des Schlägers beim Start des Spiels nicht in der Mitte. Das liegt daran, dass die Eingabeposition noch nicht definiert ist. Um dies zu beheben, können wir die Standardposition (wenn eine Eingabeposition noch nicht definiert ist) auf die Mitte des Bildschirms setzen. Aktualisieren Sie die vorherige Zeile wie folgt:

```js
paddle.x = game.input.x || game.world.width * 0.5;
```

Wenn Sie das noch nicht getan haben, laden Sie Ihr `index.html` neu und probieren Sie es aus!

## Position des Balls

Wir haben den Schläger wie gewünscht funktionsfähig, also positionieren wir den Ball darauf. Es ist sehr ähnlich wie das Positionieren des Schlägers — wir müssen ihn horizontal in der Mitte des Bildschirms platzieren und vertikal ganz unten mit einem kleinen Abstand vom Boden. Um ihn genau so zu platzieren, wie wir es möchten, setzen wir den Anker genau in die Mitte des Balls. Suchen Sie die bestehende Zeile `ball = game.add.sprite()` und ersetzen Sie sie durch die folgenden zwei Zeilen:

```js
ball = game.add.sprite(game.world.width * 0.5, game.world.height - 25, "ball");
ball.anchor.set(0.5);
```

Die Geschwindigkeit bleibt fast gleich — wir ändern lediglich den Wert des zweiten Parameters von 150 auf -150, damit der Ball das Spiel startet, indem er sich nach oben anstatt nach unten bewegt. Suchen Sie die bestehende Zeile `ball.body.velocity.set()` und aktualisieren Sie sie wie folgt:

```js
ball.body.velocity.set(150, -150);
```

Jetzt beginnt der Ball direkt von der Mitte des Schlägers.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im folgenden Live-Demo überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/ogqza0ye/", "", "400")}}

## Nächste Schritte

Wir können den Schläger bewegen und den Ball davon abprallen lassen, aber welchen Sinn hat es, wenn der Ball sowieso vom unteren Rand des Bildschirms abprallt? Lassen Sie uns die Möglichkeit des Verlierens einführen — auch bekannt als [Spielende](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over)-Logik.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_Phaser/Game_over")}}
