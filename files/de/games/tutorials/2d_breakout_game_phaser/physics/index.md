---
title: Physik
slug: Games/Tutorials/2D_breakout_game_Phaser/Physics
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball", "Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls")}}

Dies ist der **5. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson05.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson05.html) finden.

Für eine korrekte Kollisionserkennung zwischen Objekten in unserem Spiel benötigen wir Physik; dieser Artikel führt Sie in das ein, was in Phaser verfügbar ist, und demonstriert eine typische einfache Einrichtung.

## Hinzufügen von Physik

Phaser wird mit drei verschiedenen Physik-Engines geliefert — Arcade Physics, P2 und Ninja Physics — mit einer vierten Option, Box2D, die als kommerzielles Plugin verfügbar ist. Für einfache Spiele wie unseres können wir die Arcade Physics Engine verwenden. Wir benötigen keine aufwendigen Berechnungen der Geometrie — schließlich ist es nur ein Ball, der von Wänden und Ziegeln abprallt.

Zuerst initialisieren wir die Arcade Physics Engine in unserem Spiel. Fügen Sie die Methode `physics.startSystem()` am Anfang der Funktion `create` hinzu (machen Sie sie zur ersten Zeile innerhalb der Funktion), wie unten gezeigt:

```js
game.physics.startSystem(Phaser.Physics.ARCADE);
```

Als nächstes müssen wir unseren Ball für das Physiksystem aktivieren — die Physik von Phaser-Objekten ist standardmäßig nicht aktiviert. Fügen Sie die folgende Zeile am Ende der `create()`-Funktion hinzu:

```js
game.physics.enable(ball, Phaser.Physics.ARCADE);
```

Als nächstes können wir, wenn wir unseren Ball auf dem Bildschirm bewegen wollen, `velocity` auf seinem `body` setzen. Fügen Sie die folgende Zeile ebenfalls am Ende von `create()` hinzu:

```js
ball.body.velocity.set(150, 150);
```

## Entfernen unserer vorherigen Aktualisierungsanweisungen

Denken Sie daran, unsere alte Methode, Werte zu `x` und `y` in der `update()`-Funktion zu addieren, zu entfernen:

```js
function update() {
  ball.x += 1;
  ball.y += 1;
}
```

wir behandeln dies jetzt korrekt mit einer Physik-Engine.

## Abschließende Code-Überprüfung

Der neueste Code sollte so aussehen:

```js
let ball;

function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.stage.backgroundColor = "#eee";
  game.load.image("ball", "img/ball.png");
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  ball = game.add.sprite(50, 50, "ball");
  game.physics.enable(ball, Phaser.Physics.ARCADE);
  ball.body.velocity.set(150, 150);
}

function update() {}
```

Versuchen Sie, `index.html` erneut zu laden — Der Ball sollte sich nun konstant in die vorgegebene Richtung bewegen. Im Moment hat die Physik-Engine Schwerkraft und Reibung auf Null gesetzt. Wenn Sie Schwerkraft hinzufügen würden, würde der Ball nach unten fallen, während Reibung den Ball irgendwann stoppen würde.

## Spaß mit Physik

Sie können viel mehr mit Physik machen, indem Sie zum Beispiel `ball.body.gravity.y = 100;` hinzufügen, setzen Sie die vertikale Schwerkraft des Balls. Dadurch wird er nach oben geschossen, fällt dann jedoch aufgrund der Schwerkraft, die ihn nach unten zieht.

Diese Art von Funktionalität ist nur die Spitze des Eisbergs — es gibt verschiedene Funktionen und Variablen, die Ihnen helfen können, die Physikobjekte zu manipulieren. Sehen Sie sich die offizielle [Physik-Dokumentation](https://phaser.io/docs/#physics) an und sehen Sie sich die [große Sammlung von Beispielen](https://samme.github.io/phaser-examples-mirror/) an, die die Arcade- und P2-Physiksysteme nutzen.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im nachfolgenden Live-Demo überprüfen und damit experimentieren, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/bjto9nj8/","","400")}}

## Nächste Schritte

Nun können wir zur nächsten Lektion übergehen und sehen, wie man den Ball [von den Wänden abprallen lässt](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball", "Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls")}}
