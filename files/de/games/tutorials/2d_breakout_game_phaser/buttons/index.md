---
title: Buttons
slug: Games/Tutorials/2D_breakout_game_Phaser/Buttons
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens", "Games/Workflows/2D_Breakout_game_Phaser/Randomizing_gameplay")}}

Dies ist der **15. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson15.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson15.html).

Anstatt das Spiel sofort zu starten, können wir diese Entscheidung dem Spieler überlassen, indem wir ihm einen Startbutton hinzufügen, den er drücken kann. Lassen Sie uns untersuchen, wie das geht.

## Neue Variablen

Wir benötigen eine Variable, um einen booleschen Wert zu speichern, der darstellt, ob das Spiel gerade gespielt wird oder nicht, und eine weitere, um unseren Button darzustellen. Fügen Sie diese Zeilen unterhalb Ihrer anderen Variablendefinitionen hinzu:

```js
let playing = false;
let startButton;
```

## Laden des Button-Spritesheets

Wir können das Button-Spritesheet auf die gleiche Weise laden, wie wir die Wackelanimation des Balls geladen haben. Fügen Sie folgendes am Ende der `preload()`-Funktion hinzu:

```js
game.load.spritesheet("button", "img/button.png", 120, 40);
```

Ein einzelner Button-Rahmen ist 120 Pixel breit und 40 Pixel hoch.

Sie müssen auch [das Button-Spritesheet von GitHub holen](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/button.png) und es in Ihrem `/img` Verzeichnis speichern.

## Hinzufügen des Buttons zum Spiel

Das Hinzufügen des neuen Buttons zum Spiel erfolgt durch die Verwendung der `add.button`-Methode. Fügen Sie die folgenden Zeilen unten in Ihrer `create()`-Funktion hinzu:

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

- Die x und y Koordinaten des Buttons
- Der Name der grafischen Ressource, die für den Button angezeigt werden soll
- Eine Callback-Funktion, die ausgeführt wird, wenn der Button gedrückt wird
- Ein Verweis auf `this`, um den Ausführungskontext anzugeben
- Die Frames, die für die _over_, _out_ und _down_ Ereignisse verwendet werden.

> [!NOTE]
> Das Over-Ereignis ist dasselbe wie Hover, Out ist, wenn der Zeiger den Button verlässt und Down ist, wenn der Button gedrückt wird.

Nun müssen wir die `startGame()`-Funktion definieren, auf die im obigen Code verwiesen wird:

```js
function startGame() {
  startButton.destroy();
  ball.body.velocity.set(150, -150);
  playing = true;
}
```

Wenn der Button gedrückt wird, entfernen wir den Button, setzen die anfängliche Geschwindigkeit des Balls und setzen die `playing`-Variable auf `true`.

Schließlich für diesen Abschnitt, gehen Sie zurück in Ihre `create()`-Funktion, suchen Sie die Zeile `ball.body.velocity.set(150, -150);` und entfernen Sie sie. Sie möchten, dass sich der Ball nur bewegt, wenn der Button gedrückt wird, nicht davor!

## Der Paddel unbeweglich halten, bevor das Spiel beginnt

Es funktioniert wie erwartet, aber wir können das Paddel immer noch bewegen, wenn das Spiel noch nicht begonnen hat, was ein bisschen albern aussieht. Um dies zu stoppen, können wir die `playing`-Variable nutzen und das Paddel nur beweglich machen, wenn das Spiel gestartet ist. Passen Sie dazu die `update()`-Funktion wie folgt an:

```js
function update() {
  game.physics.arcade.collide(ball, paddle, ballHitPaddle);
  game.physics.arcade.collide(ball, bricks, ballHitBrick);
  if (playing) {
    paddle.x = game.input.x || game.world.width * 0.5;
  }
}
```

Auf diese Weise ist das Paddel unbeweglich, nachdem alles geladen und vorbereitet wurde, aber bevor das eigentliche Spiel gestartet wird.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/1rpj71k4/","","400")}}

## Nächste Schritte

Das Letzte, was wir in dieser Artikelserie tun werden, ist, das Gameplay noch interessanter zu gestalten, indem wir etwas [Randomisierung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay) in die Art und Weise einfügen, wie der Ball vom Paddel abprallt.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens", "Games/Workflows/2D_Breakout_game_Phaser/Randomizing_gameplay")}}
