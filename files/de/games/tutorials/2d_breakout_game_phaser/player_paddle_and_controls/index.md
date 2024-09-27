---
title: Spieler-Schläger und Steuerung
slug: Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_Phaser/Game_over")}}

Dies ist der **7. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson07.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson07.html) finden.

Wir haben den Ball, der sich bewegt und von den Wänden abprallt, aber das wird schnell langweilig — es gibt keine Interaktivität! Wir benötigen eine Möglichkeit, das Gameplay einzuführen, also werden wir in diesem Artikel einen Schläger erstellen, den wir bewegen können, um den Ball zu treffen.

## Den Schläger darstellen

Aus Framework-Sicht ist der Schläger dem Ball sehr ähnlich — wir müssen eine Variable hinzufügen, um ihn darzustellen, das relevante Bild-Asset laden und dann die Magie geschehen lassen.

### Laden des Schlägers

Zuerst fügen Sie die `paddle`-Variable hinzu, die wir in unserem Spiel verwenden werden, direkt nach der `ball`-Variable:

```js
let paddle;
```

Laden Sie dann in der `preload`-Funktion das `paddle`-Bild, indem Sie den folgenden neuen `load.image()`-Aufruf hinzufügen:

```js
function preload() {
  // …
  game.load.image("ball", "img/ball.png");
  game.load.image("paddle", "img/paddle.png");
}
```

### Hinzufügen der Schlägergrafik

Damit wir es nicht vergessen, sollten Sie an dieser Stelle die [Schlägergrafik](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/paddle.png) von GitHub herunterladen und in Ihrem `/img`-Ordner speichern.

### Den Schläger mit Physik darstellen

Als nächstes initialisieren wir unseren Schläger, indem wir den folgenden `add.sprite()`-Aufruf innerhalb der `create()` Funktion hinzufügen — und zwar ganz unten:

```js
paddle = game.add.sprite(
  game.world.width * 0.5,
  game.world.height - 5,
  "paddle",
);
```

Wir können die Werte `world.width` und `world.height` verwenden, um den Schläger genau dort zu positionieren, wo wir ihn haben möchten: `game.world.width*0.5` ist genau in der Mitte des Bildschirms. In unserem Fall entspricht die Welt der Leinwand, aber für andere Spieltypen, wie z.B. Side-Scroller, wird die Welt größer sein, und Sie können damit experimentieren, um interessante Effekte zu erzeugen.

Wie Sie bemerken werden, wenn Sie Ihr `index.html` an diesem Punkt neu laden, befindet sich der Schläger derzeit nicht genau in der Mitte. Warum? Weil der Anker, von dem die Position berechnet wird, immer von der oberen linken Ecke des Objekts startet. Wir können das ändern, um den Anker in der Mitte der Breite des Schlägers und am unteren Rand seiner Höhe zu haben, damit es einfacher ist, ihn am unteren Rand zu positionieren. Fügen Sie die folgende Zeile unter der vorhergehenden neuen Zeile hinzu:

```js
paddle.anchor.set(0.5, 1);
```

Der Schläger ist jetzt genau dort positioniert, wo wir ihn haben wollen. Um ihn mit dem Ball kollidieren zu lassen, müssen wir die Physik für den Schläger aktivieren. Fahren Sie fort, indem Sie die folgende neue Zeile erneut am Ende der `create()` Funktion hinzufügen:

```js
game.physics.enable(paddle, Phaser.Physics.ARCADE);
```

Nun kann die Magie beginnen — das Framework kann die Kollisionsprüfung in jedem Frame übernehmen. Um die Kollisionsprüfung zwischen Schläger und Ball zu aktivieren, fügen Sie die `collide()` Methode zur `update()` Funktion hinzu, wie gezeigt:

```js
function update() {
  game.physics.arcade.collide(ball, paddle);
}
```

Der erste Parameter ist eines der Objekte, das uns interessiert — der Ball — und der zweite ist das andere, der Schläger. Das funktioniert, aber nicht ganz so, wie wir es erwartet haben — wenn der Ball den Schläger trifft, fällt der Schläger vom Bildschirm! Alles, was wir wollen, ist, dass der Ball vom Schläger abprallt und der Schläger an Ort und Stelle bleibt. Wir können den `body` des Schlägers auf `immovable` setzen, damit er sich nicht bewegt, wenn der Ball ihn trifft. Fügen Sie dazu die folgende Zeile am Ende der `create()` Funktion hinzu:

```js
paddle.body.immovable = true;
```

Jetzt funktioniert es wie erwartet.

## Steuerung des Schlägers

Das nächste Problem ist, dass wir den Schläger nicht bewegen können. Dazu können wir die standardmäßige Eingabe des Systems (Maus oder Berührung, je nach Plattform) verwenden und die Schlägerposition auf die `input`-Position einstellen. Fügen Sie die folgende neue Zeile zur `update()` Funktion hinzu, wie gezeigt:

```js
function update() {
  game.physics.arcade.collide(ball, paddle);
  paddle.x = game.input.x;
}
```

Jetzt wird bei jedem neuen Frame die `x`-Position des Schlägers entsprechend der `x`-Position der Eingabe angepasst, jedoch ist die Position des Schlägers nicht in der Mitte, wenn wir das Spiel starten. Das liegt daran, dass die Eingabeposition noch nicht definiert ist. Um das zu beheben, können wir die Standardposition (wenn eine Eingabeposition noch nicht definiert ist) auf die Mitte des Bildschirms setzen. Aktualisieren Sie die vorherige Zeile wie folgt:

```js
paddle.x = game.input.x || game.world.width * 0.5;
```

Laden Sie, falls noch nicht geschehen, Ihre `index.html` neu und probieren Sie es aus!

## Den Ball positionieren

Wir haben den Schläger so funktionierend wie erwartet, also positionieren wir den Ball darauf. Es ist sehr ähnlich wie das Positionieren des Schlägers — wir müssen ihn horizontal in der Mitte des Bildschirms und vertikal unten mit einem kleinen Abstand vom Boden platzieren. Um ihn genau so zu platzieren, wie wir es wollen, werden wir den Anker auf die exakte Mitte des Balls setzen. Finden Sie die vorhandene `ball = game.add.sprite()`-Zeile und ersetzen Sie sie durch die folgenden zwei Zeilen:

```js
ball = game.add.sprite(game.world.width * 0.5, game.world.height - 25, "ball");
ball.anchor.set(0.5);
```

Die Geschwindigkeit bleibt fast gleich — wir ändern nur den Wert des zweiten Parameters von 150 auf -150, damit der Ball das Spiel nach oben anstatt nach unten startet. Finden Sie die vorhandene `ball.body.velocity.set()`-Zeile und aktualisieren Sie sie auf die folgende:

```js
ball.body.velocity.set(150, -150);
```

Jetzt startet der Ball direkt von der Mitte des Schlägers.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im untenstehenden Live-Demo überprüfen und damit herumspielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/ogqza0ye/","","400")}}

## Nächste Schritte

Wir können den Schläger bewegen und den Ball davon abprallen lassen, aber was ist der Sinn, wenn der Ball sowieso vom unteren Rand des Bildschirms abprallt? Lassen Sie uns die Möglichkeit des Verlierens einführen, auch bekannt als [Game Over](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over) Logik.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_Phaser/Game_over")}}
