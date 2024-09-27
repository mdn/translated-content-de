---
title: Physik
slug: Games/Tutorials/2D_breakout_game_Phaser/Physics
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball", "Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls")}}

Dies ist der **5. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson05.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson05.html).

Für die korrekte Kollisionserkennung zwischen Objekten in unserem Spiel benötigen wir Physik; dieser Artikel führt Sie in die in Phaser verfügbaren Optionen ein und zeigt Ihnen eine typische einfache Einrichtung.

## Physik hinzufügen

Phaser wird mit drei verschiedenen Physik-Engines geliefert — Arcade Physics, P2 und Ninja Physics — wobei eine vierte Option, Box2D, als kommerzielles Plugin verfügbar ist. Für einfache Spiele wie unseres können wir die Arcade Physics-Engine verwenden. Wir benötigen keine aufwendigen geometrischen Berechnungen — schließlich handelt es sich nur um einen Ball, der von Wänden und Ziegeln abprallt.

Zuerst initialisieren wir die Arcade Physics-Engine in unserem Spiel. Fügen Sie die Methode `physics.startSystem()` am Anfang der Funktion `create` hinzu (machen Sie sie zur ersten Zeile innerhalb der Funktion), wie unten gezeigt:

```js
game.physics.startSystem(Phaser.Physics.ARCADE);
```

Als nächstes müssen wir unseren Ball für das Physiksystem aktivieren — die Physik für Phaser-Objekte ist standardmäßig nicht aktiviert. Fügen Sie die folgende Zeile am Ende der Funktion `create()` hinzu:

```js
game.physics.enable(ball, Phaser.Physics.ARCADE);
```

Wenn wir unseren Ball auf dem Bildschirm bewegen wollen, können wir `velocity` an seinem `body` setzen. Fügen Sie die folgende Zeile wieder am Ende von `create()` hinzu:

```js
ball.body.velocity.set(150, 150);
```

## Unsere bisherigen Aktualisierungsanweisungen entfernen

Denken Sie daran, unsere alte Methode zum Hinzufügen von Werten zu `x` und `y` aus der Funktion `update()` zu entfernen:

```js
function update() {
  ball.x += 1;
  ball.y += 1;
}
```

wir bearbeiten dies nun korrekt mit einer Physik-Engine.

## Finaler Code-Check

Der neueste Code sollte folgendermaßen aussehen:

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

Versuchen Sie, `index.html` erneut zu laden — der Ball sollte sich nun konstant in die angegebene Richtung bewegen. Im Moment sind die Schwerkraft und Reibung der Physik-Engine auf null gesetzt. Wenn Sie Schwerkraft hinzufügen würden, würde der Ball fallen, während die Reibung letztendlich den Ball stoppen würde.

## Spaß mit Physik

Sie können noch viel mehr mit Physik machen, wenn Sie zum Beispiel `ball.body.gravity.y = 100;` hinzufügen, setzen Sie die vertikale Schwerkraft des Balls. Dadurch wird er nach oben geschossen, fällt jedoch dann aufgrund der Wirkung der Schwerkraft wieder nach unten.

Diese Funktionalität ist nur die Spitze des Eisbergs — es gibt verschiedene Funktionen und Variablen, die Ihnen helfen können, die Physikobjekte zu manipulieren. Schauen Sie sich die offizielle [Physik-Dokumentation](https://phaser.io/docs/#physics) an und sehen Sie sich die [riesige Sammlung von Beispielen](https://samme.github.io/phaser-examples-mirror/) an, die die Arcade und P2 Physiksysteme nutzen.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im unten stehenden Live-Demo überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/bjto9nj8/","","400")}}

## Nächste Schritte

Nun können wir zur nächsten Lektion übergehen und sehen, wie man den Ball [von den Wänden abprallen lassen kann](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball", "Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls")}}
