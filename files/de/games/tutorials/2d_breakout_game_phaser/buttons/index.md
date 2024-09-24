---
title: Schaltflächen
slug: Games/Tutorials/2D_breakout_game_Phaser/Buttons
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens", "Games/Workflows/2D_Breakout_game_Phaser/Randomizing_gameplay")}}

Dies ist der **15. Schritt** von 16 des [Gamedev Phaser-Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson15.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson15.html).

Anstatt das Spiel sofort zu starten, können wir diese Entscheidung dem Spieler überlassen, indem wir eine Start-Taste hinzufügen, die dieser drücken kann. Lassen Sie uns untersuchen, wie das funktioniert.

## Neue Variablen

Wir benötigen eine Variable, um einen booleschen Wert zu speichern, der anzeigt, ob das Spiel derzeit gespielt wird oder nicht, und eine weitere, um unsere Schaltfläche darzustellen. Fügen Sie diese Zeilen unter Ihren anderen Variablendefinitionen hinzu:

```js
let playing = false;
let startButton;
```

## Laden des Schaltflächen-Spritesheets

Wir können das Schaltflächen-Spritesheet auf die gleiche Weise laden, wie wir die Wackel-Animation des Balls geladen haben. Fügen Sie Folgendes am Ende der `preload()`-Funktion hinzu:

```js
game.load.spritesheet("button", "img/button.png", 120, 40);
```

Ein einzelner Schaltflächenrahmen ist 120 Pixel breit und 40 Pixel hoch.

Sie müssen auch das [Schaltflächen-Spritesheet von GitHub herunterladen](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/button.png) und es in Ihrem `/img`-Verzeichnis speichern.

## Hinzufügen der Schaltfläche zum Spiel

Das Hinzufügen der neuen Schaltfläche zum Spiel erfolgt mit der `add.button`-Methode. Fügen Sie die folgenden Zeilen am Ende Ihrer `create()`-Funktion hinzu:

```js
startButton = game.add.button(
  game.world.width * 0.5,
  game.world.height * 0.5,
  "button",
  startGame,
  this,
  1,
  0,
  2,
);
startButton.anchor.set(0.5);
```

Die Parameter der `button()`-Methode sind wie folgt:

- Die x- und y-Koordinaten der Schaltfläche
- Der Name des grafischen Assets, das für die Schaltfläche angezeigt werden soll
- Eine Callback-Funktion, die ausgeführt wird, wenn die Schaltfläche gedrückt wird
- Eine Referenz auf `this`, um den Ausführungskontext festzulegen
- Die Frames, die für die _over_-, _out_- und _down_-Ereignisse verwendet werden.

> [!NOTE]
> Das over-Ereignis entspricht hover, out tritt auf, wenn der Zeiger die Schaltfläche verlässt, und down, wenn die Schaltfläche gedrückt wird.

Nun müssen wir die `startGame()`-Funktion definieren, die im obigen Code referenziert wird:

```js
function startGame() {
  startButton.destroy();
  ball.body.velocity.set(150, -150);
  playing = true;
}
```

Wenn die Schaltfläche gedrückt wird, entfernen wir die Schaltfläche, setzen die Anfangsgeschwindigkeit des Balls und setzen die `playing`-Variable auf `true`.

Zuletzt in diesem Abschnitt gehen Sie zurück in Ihre `create()`-Funktion, finden Sie die Zeile `ball.body.velocity.set(150, -150);` und entfernen Sie sie. Sie möchten, dass sich der Ball nur bewegt, wenn die Schaltfläche gedrückt wird, nicht vorher!

## Stillhalten des Schlägers bevor das Spiel beginnt

Es funktioniert wie erwartet, aber wir können den Schläger bewegen, wenn das Spiel noch nicht begonnen hat, was etwas albern aussieht. Um dies zu stoppen, können wir die `playing`-Variable nutzen und den Schläger nur beweglich machen, wenn das Spiel begonnen hat. Passen Sie dazu die `update()`-Funktion wie folgt an:

```js
function update() {
  game.physics.arcade.collide(ball, paddle, ballHitPaddle);
  game.physics.arcade.collide(ball, bricks, ballHitBrick);
  if (playing) {
    paddle.x = game.input.x || game.world.width * 0.5;
  }
}
```

Auf diese Weise ist der Schläger unbeweglich, nachdem alles geladen und vorbereitet ist, aber bevor das eigentliche Spiel beginnt.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im unten stehenden Live-Demo überprüfen und damit spielen, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/1rpj71k4/","","400")}}

## Nächste Schritte

Das letzte, was wir in dieser Artikelserie tun werden, ist das Gameplay noch interessanter zu gestalten, indem wir [Randomisierung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay) in die Art und Weise einfügen, wie der Ball vom Schläger abprallt.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens", "Games/Workflows/2D_Breakout_game_Phaser/Randomizing_gameplay")}}
