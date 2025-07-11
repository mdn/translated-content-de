---
title: Physik
slug: Games/Tutorials/2D_breakout_game_Phaser/Physics
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball", "Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls")}}

Dies ist der **5. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie auf [Gamedev-Phaser-Content-Kit/demos/lesson05.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson05.html).

Für eine ordnungsgemäße Kollisionserkennung zwischen Objekten in unserem Spiel benötigen wir Physik; dieser Artikel führt Sie ein in das, was in Phaser verfügbar ist, und demonstriert eine typische einfache Einrichtung.

## Hinzufügen von Physik

Phaser wird mit drei verschiedenen Physik-Engines gebündelt — Arcade Physics, P2 und Ninja Physics — mit einer vierten Option, Box2D, die als kommerzielles Plugin verfügbar ist. Für einfache Spiele wie unseres können wir die Arcade-Physics-Engine verwenden. Wir brauchen keine umfangreichen Geometrieberechnungen — schließlich ist es nur ein Ball, der von Wänden und Ziegeln abprallt.

Zuerst initialisieren wir die Arcade-Physics-Engine in unserem Spiel. Fügen Sie die Methode `physics.startSystem()` zu Beginn der `create`-Funktion hinzu (machen Sie sie zur ersten Zeile innerhalb der Funktion), wie unten gezeigt:

```js
game.physics.startSystem(Phaser.Physics.ARCADE);
```

Als nächstes müssen wir unseren Ball für das Physiksystem aktivieren — Phaser-Objektphysik ist standardmäßig nicht aktiviert. Fügen Sie die folgende Zeile unten in der `create()`-Funktion hinzu:

```js
game.physics.enable(ball, Phaser.Physics.ARCADE);
```

Wenn wir als nächstes unseren Ball auf dem Bildschirm bewegen wollen, können wir `velocity` auf seinem `body` setzen. Fügen Sie die folgende Zeile wieder am Ende von `create()` hinzu:

```js
ball.body.velocity.set(150, 150);
```

## Entfernen unserer vorherigen Aktualisierungsanweisungen

Vergessen Sie nicht, unsere alte Methode zum Hinzufügen von Werten zu `x` und `y` aus der `update()`-Funktion zu entfernen:

```js
function update() {
  ball.x += 1;
  ball.y += 1;
}
```

wir handhaben dies jetzt ordnungsgemäß mit einer Physik-Engine.

## Abschließende Codeüberprüfung

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

Versuchen Sie `index.html` erneut zu laden — Der Ball sollte sich nun konstant in die vorgegebene Richtung bewegen. Im Moment sind die Schwerkraft und die Reibung der Physik-Engine auf Null gesetzt. Das Hinzufügen von Schwerkraft würde dazu führen, dass der Ball nach unten fällt, während Reibung den Ball schließlich stoppen würde.

## Spaß mit Physik

Mit Physik können Sie viel mehr machen, zum Beispiel durch Hinzufügen von `ball.body.gravity.y = 100;` setzen Sie die vertikale Schwerkraft des Balls. Dadurch wird er nach oben katapultiert, fällt dann aber aufgrund der Schwerkraft nach unten.

Diese Art von Funktionalität ist nur die Spitze des Eisbergs — es gibt verschiedene Funktionen und Variablen, die Ihnen helfen können, die Physikobjekte zu manipulieren. Schauen Sie sich die offizielle [Physik-Dokumentation](https://phaser.io/docs/#physics) an und sehen Sie die [riesige Sammlung von Beispielen](https://samme.github.io/phaser-examples-mirror/), die die Arcade- und P2-Physiksysteme verwenden.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im untenstehenden Live-Demo überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/bjto9nj8/","","400")}}

## Nächste Schritte

Jetzt können wir zur nächsten Lektion übergehen und sehen, wie der Ball [von den Wänden abprallt](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball", "Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls")}}
