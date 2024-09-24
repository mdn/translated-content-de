---
title: Zusätzliche Leben
slug: Games/Tutorials/2D_breakout_game_Phaser/Extra_lives
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Win_the_game", "Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens")}}

Dies ist der **13. Schritt** von 16 im [Gamedev Phaser Tutorial](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson13.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson13.html).

Wir können das Spiel durch das Hinzufügen von Leben länger unterhaltsam gestalten. In diesem Artikel implementieren wir ein Lebenssystem, sodass der Spieler weiterspielen kann, bis er drei Leben verloren hat, anstatt nur eines.

## Neue Variablen

Fügen Sie die folgenden neuen Variablen unter den bestehenden in Ihrem Code hinzu:

```js
let lives = 3;
let livesText;
let lifeLostText;
```

Diese speichern jeweils die Anzahl der Leben, das Textlabel, das die verbleibenden Leben anzeigt, und ein Textlabel, das auf dem Bildschirm angezeigt wird, wenn der Spieler eines seiner Leben verliert.

## Definition der neuen Textlabels

Die Definition der Texte ähnelt dem, was wir bereits in der Lektion [der Punktestand](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score) gemacht haben. Fügen Sie die folgenden Zeilen unterhalb der bestehenden `scoreText`-Definition in Ihrer `create()`-Funktion hinzu:

```js
livesText = game.add.text(game.world.width - 5, 5, `Lives: ${lives}`, {
  font: "18px Arial",
  fill: "#0095DD",
});
livesText.anchor.set(1, 0);
lifeLostText = game.add.text(
  game.world.width * 0.5,
  game.world.height * 0.5,
  "Life lost, click to continue",
  { font: "18px Arial", fill: "#0095DD" },
);
lifeLostText.anchor.set(0.5);
lifeLostText.visible = false;
```

Die Objekte `livesText` und `lifeLostText` sind dem `scoreText` sehr ähnlich — sie definieren eine Position auf dem Bildschirm, den anzuzeigenden Text und die Schriftstilierung. Ersteres wird an der oberen rechten Ecke verankert, um richtig ausgerichtet zu sein, und das Letztere ist zentriert, beide mithilfe von `anchor.set()`.

Das `lifeLostText` wird nur angezeigt, wenn das Leben verloren ist, daher ist seine Sichtbarkeit zunächst auf `false` gesetzt.

### Unseren Textstil DRY machen

Wie Sie wahrscheinlich bemerkt haben, verwenden wir denselben Stil für alle drei Texte: `scoreText`, `livesText` und `lifeLostText`. Wenn wir jemals die Schriftgröße oder Farbe ändern möchten, müssten wir dies an mehreren Stellen tun. Um es uns künftig einfacher zu machen, können wir eine separate Variable erstellen, die unseren Stil enthält, nennen wir sie `textStyle` und platzieren sie vor den Textdefinitionszeilen:

```js
textStyle = { font: "18px Arial", fill: "#0095DD" };
```

Wir können nun diese Variable verwenden, wenn wir unsere Textlabels stilisieren — aktualisieren Sie Ihren Code, sodass die mehrfachen Vorkommen der Textstilierung durch die Variable ersetzt werden:

```js
scoreText = game.add.text(5, 5, "Points: 0", textStyle);
livesText = game.add.text(
  game.world.width - 5,
  5,
  `Lives: ${lives}`,
  textStyle,
);
livesText.anchor.set(1, 0);
lifeLostText = game.add.text(
  game.world.width * 0.5,
  game.world.height * 0.5,
  "Life lost, click to continue",
  textStyle,
);
lifeLostText.anchor.set(0.5);
lifeLostText.visible = false;
```

Auf diese Weise wird das Ändern der Schriftart in einer Variablen die Änderungen an jeder Stelle, an der es verwendet wird, anwenden.

## Der Code zur Behandlung der Leben

Um Leben in unserem Spiel zu implementieren, ändern wir zunächst die Funktion für den Ball, die an das `onOutOfBounds`-Ereignis gebunden ist. Anstatt sofort eine anonyme Funktion auszuführen und die Warnung anzuzeigen:

```js
ball.events.onOutOfBounds.add(() => {
  alert("Game over!");
  location.reload();
}, this);
```

weisen wir eine neue Funktion namens `ballLeaveScreen` zu; löschen Sie den vorherigen Ereignishandler (oben gezeigt) und ersetzen Sie ihn durch die folgende Zeile:

```js
ball.events.onOutOfBounds.add(ballLeaveScreen, this);
```

Wir möchten die Anzahl der Leben jedes Mal verringern, wenn der Ball die Leinwand verlässt. Fügen Sie die Funktionsdefinition `ballLeaveScreen()` am Ende unseres Codes hinzu:

```js
function ballLeaveScreen() {
  lives--;
  if (lives) {
    livesText.setText(`Lives: ${lives}`);
    lifeLostText.visible = true;
    ball.reset(game.world.width * 0.5, game.world.height - 25);
    paddle.reset(game.world.width * 0.5, game.world.height - 5);
    game.input.onDown.addOnce(() => {
      lifeLostText.visible = false;
      ball.body.velocity.set(150, -150);
    }, this);
  } else {
    alert("You lost, game over!");
    location.reload();
  }
}
```

Anstatt sofort die Warnung auszugeben, wenn Sie ein Leben verlieren, ziehen wir zuerst ein Leben von der aktuellen Anzahl ab und prüfen, ob es einen Nicht-Null-Wert hat. Falls ja, dann hat der Spieler noch einige Leben übrig und kann weiterspielen — sie sehen die Nachricht über den Verlust eines Lebens, die Positionen von Ball und Schläger werden auf dem Bildschirm zurückgesetzt, und bei der nächsten Eingabe (Klick oder Berührung) wird die Nachricht versteckt und der Ball wird sich erneut bewegen.

Wenn die Anzahl der verfügbaren Leben null erreicht, ist das Spiel zu Ende und die Meldung über das Spielende wird angezeigt.

## Ereignisse

Sie haben wahrscheinlich die `add()`- und `addOnce()`-Methodenaufrufe in den obigen zwei Codeblöcken bemerkt und sich gefragt, wie sie sich unterscheiden. Der Unterschied besteht darin, dass die `add()`-Methode die gegebene Funktion bindet und sie jedes Mal ausgeführt, wenn das Ereignis auftritt, während `addOnce()` nützlich ist, wenn Sie möchten, dass die gebundene Funktion nur einmal ausgeführt und dann nicht mehr gebunden wird, sodass sie nicht erneut ausgeführt wird. In unserem Fall wird beim jedem `outOfBounds`-Ereignis die `ballLeaveScreen` ausgeführt, aber wenn der Ball den Bildschirm verlässt, möchten wir die Nachricht nur einmal vom Bildschirm entfernen.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion in der unten stehenden Live-Demo überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/yk1c5n0b/","","400")}}

## Nächste Schritte

Die Leben haben das Spiel nachsichtiger gemacht — wenn Sie ein Leben verlieren, haben Sie noch zwei weitere übrig und können weiterspielen. Lassen Sie uns nun das Aussehen und das Gefühl des Spiels erweitern, indem wir [Animationen und Tweens](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens) hinzufügen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Win_the_game", "Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens")}}
