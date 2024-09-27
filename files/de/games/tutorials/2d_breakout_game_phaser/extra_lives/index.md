---
title: Extra lives
slug: Games/Tutorials/2D_breakout_game_Phaser/Extra_lives
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Win_the_game", "Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens")}}

Dies ist der **13. Schritt** von 16 des [Gamedev Phaser-Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson13.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson13.html).

Wir können das Spiel länger genießen, indem wir Leben hinzufügen. In diesem Artikel implementieren wir ein Lebenssystem, damit der Spieler weiterspielen kann, bis er drei Leben verloren hat, nicht nur eines.

## Neue Variablen

Fügen Sie die folgenden neuen Variablen unterhalb der bestehenden in Ihrem Code hinzu:

```js
let lives = 3;
let livesText;
let lifeLostText;
```

Diese Variablen speichern jeweils die Anzahl der Leben, das Textlabel, das die verbleibende Anzahl an Leben anzeigt, und ein Textlabel, das auf dem Bildschirm gezeigt wird, wenn der Spieler eines seiner Leben verliert.

## Die neuen Textlabels definieren

Die Definition der Texte ähnelt dem, was wir bereits in der Lektion [der Punktzahl](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score) gemacht haben. Fügen Sie die folgenden Zeilen unterhalb der vorhandenen `scoreText`-Definition in Ihrer `create()`-Funktion hinzu:

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

Die `livesText`- und `lifeLostText`-Objekte sehen dem `scoreText` sehr ähnlich aus — sie definieren eine Position auf dem Bildschirm, den tatsächlichen anzuzeigenden Text und das Schriftstyling. Ersteres ist an seiner oberen rechten Ecke verankert, um mit dem Bildschirm korrekt auszurichten, und letzteres ist zentriert, beide verwenden `anchor.set()`.

Das `lifeLostText` wird nur angezeigt, wenn ein Leben verloren geht, daher ist seine Sichtbarkeit anfangs auf `false` gesetzt.

### Unser Textstyling DRY gestalten

Wie Sie wahrscheinlich bemerkt haben, verwenden wir dasselbe Styling für alle drei Texte: `scoreText`, `livesText` und `lifeLostText`. Wenn wir jemals die Schriftgröße oder Farbe ändern wollen, müssen wir es an mehreren Stellen tun. Um es uns in Zukunft einfacher zu machen, können wir eine separate Variable erstellen, die unser Styling hält. Nennen wir sie `textStyle` und platzieren sie vor den Textdefinitionen:

```js
textStyle = { font: "18px Arial", fill: "#0095DD" };
```

Wir können diese Variable nun verwenden, um unsere Textlabels zu stylen — aktualisieren Sie Ihren Code, sodass die mehrfachen Instanzen des Textstylings durch die Variable ersetzt werden:

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

Auf diese Weise wird durch das Ändern der Schrift in einer Variable die Änderung an jeder Stelle angewendet, an der sie verwendet wird.

## Der Code zur Verwaltung der Leben

Um in unserem Spiel Leben zu implementieren, ändern wir zuerst die Funktion des Balls, die an das `onOutOfBounds`-Ereignis gebunden ist. Anstatt eine anonyme Funktion auszuführen und die Warnung sofort anzuzeigen:

```js
ball.events.onOutOfBounds.add(() => {
  alert("Game over!");
  location.reload();
}, this);
```

Weisen wir eine neue Funktion namens `ballLeaveScreen` zu; löschen Sie den vorherigen Ereignishandler (wie oben gezeigt) und ersetzen Sie ihn durch die folgende Zeile:

```js
ball.events.onOutOfBounds.add(ballLeaveScreen, this);
```

Wir möchten die Anzahl der Leben jedes Mal verringern, wenn der Ball die Leinwand verlässt. Fügen Sie die `ballLeaveScreen()`-Funktionsdefinition am Ende unseres Codes hinzu:

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

Anstatt sofort die Warnung beim Verlust eines Lebens auszugeben, subtrahieren wir zuerst ein Leben von der aktuellen Anzahl und prüfen, ob es ein Nicht-Null-Wert ist. Wenn ja, dann hat der Spieler noch einige Leben übrig und kann weiterspielen — er wird die Nachricht über den Verlust eines Lebens sehen, die Ball- und Paddelpositionen werden auf dem Bildschirm zurückgesetzt und beim nächsten Eingabebefehl (Klick oder Berührung) wird die Nachricht ausgeblendet und der Ball beginnt sich wieder zu bewegen.

Wenn die Anzahl der verfügbaren Leben Null erreicht, ist das Spiel vorbei und die Game-Over-Warnmeldung wird angezeigt.

## Ereignisse

Sie haben wahrscheinlich die `add()`- und `addOnce()`-Methodenaufrufe in den obigen beiden Codeblöcken bemerkt und sich gefragt, wie sie sich unterscheiden. Der Unterschied besteht darin, dass die `add()`-Methode die gegebene Funktion bindet und sie jedes Mal ausführen lässt, wenn das Ereignis eintritt, während `addOnce()` nützlich ist, wenn Sie möchten, dass die gebundene Funktion nur einmal ausgeführt und dann entbunden wird, sodass sie nicht erneut ausgeführt wird. In unserem Fall wird bei jedem `outOfBounds`-Ereignis die `ballLeaveScreen`-Funktion ausgeführt, aber wenn der Ball den Bildschirm verlässt, möchten wir die Nachricht nur einmal vom Bildschirm entfernen.

## Ihren Code vergleichen

Sie können den fertigen Code für diese Lektion im Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/yk1c5n0b/","","400")}}

## Nächste Schritte

Leben haben das Spiel verzeihlicher gemacht — wenn Sie ein Leben verlieren, haben Sie noch zwei weitere und können weiterspielen. Lassen Sie uns nun das Erscheinungsbild des Spiels erweitern, indem wir [Animationen und Tweenings](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens) hinzufügen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Win_the_game", "Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens")}}
