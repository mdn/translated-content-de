---
title: Spieler-Schläger und Steuerung
slug: Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_Phaser/Game_over")}}

Dies ist der **7. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson07.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson07.html).

Wir haben den Ball, der sich bewegt und von den Wänden abprallt, aber das wird schnell langweilig — es gibt keine Interaktivität! Wir brauchen eine Möglichkeit, Gameplay einzuführen, daher erstellen wir in diesem Artikel einen Schläger, um den Ball zu bewegen und damit zu schlagen.

## Rendering des Schlägers

Aus Sicht des Frameworks ist der Schläger dem Ball sehr ähnlich — wir müssen eine Variable hinzufügen, um ihn zu repräsentieren, das relevante Bild-Asset laden und dann die Magie geschehen lassen.

### Laden des Schlägers

Zuerst fügen Sie die `paddle` Variable hinzu, die wir in unserem Spiel verwenden werden, direkt nach der `ball` Variable:

```js
let paddle;
```

Dann laden Sie in der `preload` Funktion das `paddle` Bild, indem Sie den folgenden neuen `load.image()` Aufruf hinzufügen:

```js
function preload() {
  // …
  game.load.image("ball", "img/ball.png");
  game.load.image("paddle", "img/paddle.png");
}
```

### Hinzufügen der Schlägergrafik

Damit wir es nicht vergessen, sollten Sie an dieser Stelle die [Schlägergrafik](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/paddle.png) von GitHub herunterladen und in Ihrem `/img` Ordner speichern.

### Rendering des Schlägers mit Physik

Als nächstes initialisieren wir unseren Schläger, indem wir den folgenden `add.sprite()` Aufruf in die `create()` Funktion einfügen — fügen Sie ihn ganz unten hinzu:

```js
paddle = game.add.sprite(
  game.world.width * 0.5,
  game.world.height - 5,
  "paddle",
);
```

Wir können die `world.width` und `world.height` Werte verwenden, um den Schläger genau dort zu positionieren, wo wir ihn haben möchten: `game.world.width*0.5` wird genau in der Mitte des Bildschirms sein. In unserem Fall ist die Welt dieselbe wie das Canvas, aber für andere Spieltypen, wie z.B. Side-Scroller, wird die Welt größer sein und Sie können damit experimentieren, um interessante Effekte zu erzielen.

Wie Sie bemerken werden, wenn Sie Ihr `index.html` zu diesem Zeitpunkt neu laden, befindet sich der Schläger derzeit nicht genau in der Mitte. Warum? Weil der Anker, von dem die Position berechnet wird, immer von der oberen linken Kante des Objekts ausgeht. Wir können das ändern, um den Anker in der Mitte der Breite des Schlägers und am unteren Ende seiner Höhe zu haben, damit es einfacher ist, ihn an der unteren Kante zu positionieren. Fügen Sie die folgende Zeile unter der vorherigen neuen hinzu:

```js
paddle.anchor.set(0.5, 1);
```

Der Schläger ist jetzt genau dort positioniert, wo wir ihn haben wollen. Um ihn mit dem Ball kollidieren zu lassen, müssen wir die Physik für den Schläger aktivieren. Fügen Sie zur Fortsetzung die folgende neue Zeile erneut am Ende der `create()` Funktion hinzu:

```js
game.physics.enable(paddle, Phaser.Physics.ARCADE);
```

Jetzt kann die Magie beginnen — das Framework kann sich um die Kollisionsprüfung in jedem Frame kümmern. Um die Kollisionserkennung zwischen Schläger und Ball zu aktivieren, fügen Sie die `collide()` Methode der `update()` Funktion hinzu, wie gezeigt:

```js
function update() {
  game.physics.arcade.collide(ball, paddle);
}
```

Der erste Parameter ist eines der Objekte, an dem wir interessiert sind — der Ball —, und der zweite ist das andere, der Schläger. Dies funktioniert, jedoch nicht ganz so, wie wir es erwartet haben — wenn der Ball den Schläger trifft, fällt der Schläger vom Bildschirm! Wir möchten nur, dass der Ball vom Schläger abprallt und der Schläger an der gleichen Stelle bleibt. Wir können den `body` des Schlägers auf `immovable` setzen, damit er sich nicht bewegt, wenn der Ball ihn trifft. Um dies zu tun, fügen Sie die folgende Zeile am Ende der `create()` Funktion hinzu:

```js
paddle.body.immovable = true;
```

Jetzt funktioniert es wie erwartet.

## Steuerung des Schlägers

Das nächste Problem ist, dass wir den Schläger nicht bewegen können. Dazu können wir die standardmäßige Eingabe des Systems (Maus oder Touch, je nach Plattform) verwenden und die Schlägerposition dort setzen, wo die `input` Position ist. Fügen Sie die folgende neue Zeile zur `update()` Funktion hinzu, wie gezeigt:

```js
function update() {
  game.physics.arcade.collide(ball, paddle);
  paddle.x = game.input.x;
}
```

Jetzt wird bei jedem neuen Frame die `x` Position des Schlägers entsprechend der `x` Position des Eingabegeräts angepasst. Wenn wir das Spiel starten, ist die Position des Schlägers jedoch nicht in der Mitte. Das liegt daran, dass die Eingabeposition noch nicht definiert ist. Um dies zu beheben, können wir die Standardposition (wenn eine Eingabeposition noch nicht definiert ist) auf die Mitte des Bildschirms setzen. Aktualisieren Sie die vorherige Zeile wie folgt:

```js
paddle.x = game.input.x || game.world.width * 0.5;
```

Wenn Sie dies noch nicht getan haben, laden Sie Ihr `index.html` neu und probieren Sie es aus!

## Positionierung des Balls

Der Schläger funktioniert wie erwartet, also positionieren wir den Ball darauf. Es ist sehr ähnlich wie beim Platzieren des Schlägers — wir müssen ihn horizontal in der Mitte des Bildschirms und vertikal unten mit einem kleinen Abstand vom unteren Rand platzieren. Um ihn genau so zu platzieren, wie wir es möchten, setzen wir den Anker in die exakte Mitte des Balls. Suchen Sie die vorhandene `ball = game.add.sprite()` Zeile und ersetzen Sie sie durch die folgenden zwei Zeilen:

```js
ball = game.add.sprite(game.world.width * 0.5, game.world.height - 25, "ball");
ball.anchor.set(0.5);
```

Die Geschwindigkeit bleibt fast gleich — wir ändern nur den Wert des zweiten Parameters von 150 auf -150, damit der Ball das Spiel startet, indem er nach oben statt nach unten bewegt. Suchen Sie die vorhandene `ball.body.velocity.set()` Zeile und aktualisieren Sie sie auf das Folgende:

```js
ball.body.velocity.set(150, -150);
```

Jetzt wird der Ball direkt aus der Mitte des Schlägers starten.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/ogqza0ye/","","400")}}

## Nächste Schritte

Wir können den Schläger bewegen und den Ball daran abprallen lassen, aber was bringt das, wenn der Ball sowieso vom unteren Rand des Bildschirms abprallt? Lassen Sie uns die Möglichkeit einführen zu verlieren — auch bekannt als [game over](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over) Logik.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_Phaser/Game_over")}}
