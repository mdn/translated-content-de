---
title: Buttons
slug: Games/Tutorials/2D_breakout_game_Phaser/Buttons
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens", "Games/Workflows/2D_Breakout_game_Phaser/Randomizing_gameplay")}}

Dies ist der **15. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson15.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson15.html).

Anstatt das Spiel sofort zu starten, können wir diese Entscheidung dem Spieler überlassen, indem wir einen Startknopf hinzufügen, den er drücken kann. Lassen Sie uns untersuchen, wie das geht.

## Neue Variablen

Wir benötigen eine Variable, um einen booleschen Wert zu speichern, der darstellt, ob das Spiel derzeit gespielt wird oder nicht, und eine weitere, um unseren Knopf darzustellen. Fügen Sie diese Zeilen unter Ihren anderen Variablendefinitionen hinzu:

```js
let playing = false;
let startButton;
```

## Laden des Buttonspritesheets

Wir können das Buttonspritesheet auf die gleiche Weise laden, wie wir die Wackelanimation des Balls geladen haben. Fügen Sie das Folgende am Ende der `preload()` Funktion hinzu:

```js
game.load.spritesheet("button", "img/button.png", 120, 40);
```

Ein einzelner Buttonrahmen ist 120 Pixel breit und 40 Pixel hoch.

Sie müssen auch [das Buttonspritesheet von GitHub herunterladen](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/button.png) und es in Ihrem `/img` Verzeichnis speichern.

## Hinzufügen des Buttons zum Spiel

Das Hinzufügen des neuen Buttons zum Spiel erfolgt mit der `add.button` Methode. Fügen Sie die folgenden Zeilen am Ende Ihrer `create()` Funktion hinzu:

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

Die Parameter der `button()` Methode sind wie folgt:

- Die x- und y-Koordinaten des Buttons
- Der Name des grafischen Assets, das für den Button angezeigt werden soll
- Eine Rückruffunktion, die ausgeführt wird, wenn der Button gedrückt wird
- Eine Referenz auf `this`, um den Ausführungskontext anzugeben
- Die Frames, die für die _over_, _out_ und _down_ Ereignisse verwendet werden.

> [!NOTE]
> Das over Ereignis ist dasselbe wie Hover, out ist, wenn der Zeiger den Button verlässt, und down ist, wenn der Button gedrückt wird.

Nun müssen wir die `startGame()` Funktion definieren, die im obigen Code referenziert wird:

```js
function startGame() {
  startButton.destroy();
  ball.body.velocity.set(150, -150);
  playing = true;
}
```

Wenn der Button gedrückt wird, entfernen wir den Button, setzen die Anfangsgeschwindigkeit des Balls und setzen die `playing` Variable auf `true`.

Schließlich, für diesen Abschnitt, gehen Sie zurück in Ihre `create()` Funktion, finden Sie die Zeile `ball.body.velocity.set(150, -150);` und entfernen Sie sie. Sie möchten, dass sich der Ball nur bewegt, wenn der Button gedrückt wird, nicht vorher!

## Den Schläger stillhalten, bevor das Spiel startet

Es funktioniert wie erwartet, aber wir können den Schläger immer noch bewegen, wenn das Spiel noch nicht begonnen hat, was etwas albern aussieht. Um dies zu verhindern, können wir die `playing` Variable nutzen und den Schläger nur dann beweglich machen, wenn das Spiel gestartet ist. Passen Sie dazu die `update()` Funktion wie folgt an:

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

Sie können den fertigen Code für diese Lektion im Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/1rpj71k4/", "", "400")}}

## Nächste Schritte

Das Letzte, was wir in dieser Artikelsreihe tun werden, ist, das Gameplay noch interessanter zu machen, indem wir [zufällige Elemente](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay) hinzufügen, wie der Ball vom Schläger abprallt.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens", "Games/Workflows/2D_Breakout_game_Phaser/Randomizing_gameplay")}}
