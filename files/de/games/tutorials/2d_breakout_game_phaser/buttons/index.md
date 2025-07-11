---
title: Schaltflächen
slug: Games/Tutorials/2D_breakout_game_Phaser/Buttons
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens", "Games/Workflows/2D_Breakout_game_Phaser/Randomizing_gameplay")}}

Dies ist der **15. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson15.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson15.html) finden.

Anstatt das Spiel sofort zu starten, können wir diese Entscheidung dem Spieler überlassen, indem wir einen Start-Button hinzufügen, den er drücken kann. Lassen Sie uns untersuchen, wie das geht.

## Neue Variablen

Wir benötigen eine Variable, um einen booleschen Wert zu speichern, der darstellt, ob das Spiel derzeit gespielt wird oder nicht, und eine weitere, um unseren Button darzustellen. Fügen Sie diese Zeilen unterhalb Ihrer anderen Variablendefinitionen hinzu:

```js
let playing = false;
let startButton;
```

## Laden des Button-Spritesheets

Wir können das Button-Spritesheet auf die gleiche Weise laden, wie wir die Wackel-Animation des Balls geladen haben. Fügen Sie Folgendes am Ende der `preload()`-Funktion hinzu:

```js
game.load.spritesheet("button", "img/button.png", 120, 40);
```

Ein einzelner Button-Frame ist 120 Pixel breit und 40 Pixel hoch.

Sie müssen auch das [Button-Spritesheet von GitHub herunterladen](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/button.png) und es in Ihrem `/img`-Verzeichnis speichern.

## Hinzufügen des Buttons zum Spiel

Das Hinzufügen des neuen Buttons zum Spiel erfolgt mittels der `add.button`-Methode. Fügen Sie die folgenden Zeilen am Ende Ihrer `create()`-Funktion hinzu:

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

- Die x- und y-Koordinaten des Buttons
- Der Name des Grafikelements, das für den Button angezeigt werden soll
- Eine Callback-Funktion, die ausgeführt wird, wenn der Button gedrückt wird
- Ein Verweis auf `this`, um den Ausführungskontext festzulegen
- Die Frames, die für die _over_, _out_ und _down_ Ereignisse verwendet werden.

> [!NOTE]
> Das über-Ereignis entspricht dem Hover-Ereignis, out ist wenn der Zeiger den Button verlässt und down ist wenn der Button gedrückt wird.

Nun müssen wir die `startGame()`-Funktion definieren, auf die im oben stehenden Code verwiesen wird:

```js
function startGame() {
  startButton.destroy();
  ball.body.velocity.set(150, -150);
  playing = true;
}
```

Wenn der Button gedrückt wird, entfernen wir den Button, setzen die Anfangsgeschwindigkeit des Balls und setzen die `playing`-Variable auf `true`.

Schließlich gehen Sie in Ihrer `create()`-Funktion zurück, suchen Sie die Zeile `ball.body.velocity.set(150, -150);` und entfernen Sie sie. Sie wollen, dass sich der Ball nur bewegt, wenn der Button gedrückt wird, nicht vorher!

## Halten des Schlägers still, bevor das Spiel beginnt

Es funktioniert wie erwartet, aber wir können den Schläger immer noch bewegen, wenn das Spiel noch nicht begonnen hat, was ein wenig seltsam aussieht. Um dies zu verhindern, können wir die `playing`-Variable nutzen und den Schläger nur bewegbar machen, wenn das Spiel begonnen hat. Dazu passen Sie die `update()`-Funktion wie folgt an:

```js
function update() {
  game.physics.arcade.collide(ball, paddle, ballHitPaddle);
  game.physics.arcade.collide(ball, bricks, ballHitBrick);
  if (playing) {
    paddle.x = game.input.x || game.world.width * 0.5;
  }
}
```

So ist der Schläger unbeweglich, nachdem alles geladen und vorbereitet ist, aber bevor das eigentliche Spiel beginnt.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/1rpj71k4/","","400")}}

## Nächste Schritte

Das letzte, was wir in dieser Artikelserie tun werden, ist das Gameplay noch interessanter zu machen, indem wir etwas [Randomisierung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay) bei der Art und Weise hinzufügen, wie der Ball vom Schläger abprallt.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens", "Games/Workflows/2D_Breakout_game_Phaser/Randomizing_gameplay")}}
