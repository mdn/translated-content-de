---
title: Extra Lives
slug: Games/Tutorials/2D_breakout_game_Phaser/Extra_lives
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Win_the_game", "Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens")}}

Dies ist der **13. Schritt** von 16 des [Gamedev Phaser-Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson13.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson13.html).

Wir können das Spiel länger angenehm gestalten, indem wir Leben hinzufügen. In diesem Artikel implementieren wir ein Leben-System, sodass der Spieler weiterspielen kann, bis er drei Leben verloren hat, nicht nur eines.

## Neue Variablen

Fügen Sie die folgenden neuen Variablen unterhalb der vorhandenen in Ihrem Code hinzu:

```js
let lives = 3;
let livesText;
let lifeLostText;
```

Diese Variablen speichern jeweils die Anzahl der Leben, das Textlabel, das die verbleibenden Leben anzeigt, und ein Textlabel, das auf dem Bildschirm angezeigt wird, wenn der Spieler eines seiner Leben verliert.

## Definition der neuen Textlabels

Die Definition der Texte sieht aus wie das, was wir bereits in der Lektion [der Punktestand](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score) gemacht haben. Fügen Sie die folgenden Zeilen unterhalb der bestehenden `scoreText`-Definition in Ihrer `create()`-Funktion hinzu:

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

Die Objekte `livesText` und `lifeLostText` sehen dem `scoreText` sehr ähnlich — sie definieren eine Position auf dem Bildschirm, den eigentlichen anzuzeigenden Text und die Schriftstilgestaltung. Ersteres ist an seiner oberen rechten Ecke verankert, um richtig mit dem Bildschirm ausgerichtet zu sein, und letzteres ist zentriert, wobei beide `anchor.set()` verwenden.

Das `lifeLostText` wird nur angezeigt, wenn ein Leben verloren geht, daher ist seine Sichtbarkeit zunächst auf `false` gesetzt.

### Unsere Textstilierung DRY gestalten

Wie Ihnen wahrscheinlich aufgefallen ist, verwenden wir dieselbe Stilgestaltung für alle drei Texte: `scoreText`, `livesText` und `lifeLostText`. Wenn wir jemals die Schriftgröße oder die Farbe ändern wollen, müssen wir dies an mehreren Stellen tun. Um es in Zukunft leichter wartbar zu machen, können wir eine separate Variable erstellen, die unsere Stilgestaltung enthält. Nennen wir sie `textStyle` und platzieren sie vor den Textdefinitionen:

```js
textStyle = { font: "18px Arial", fill: "#0095DD" };
```

Wir können jetzt diese Variable verwenden, wenn wir unsere Text-Labels gestalten — aktualisieren Sie Ihren Code so, dass die mehrfachen Instanzen der Textstilierung durch die Variable ersetzt werden:

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

Auf diese Weise wird eine Schriftänderung in einer Variable auf alle Stellen angewendet, an denen sie verwendet wird.

## Der Lebens-Verwaltungscode

Um Leben in unserem Spiel zu implementieren, ändern wir zunächst die Funktion des Balls, die an das `onOutOfBounds`-Ereignis gebunden ist. Anstatt sofort eine anonyme Funktion auszuführen und die Warnung anzuzeigen:

```js
ball.events.onOutOfBounds.add(() => {
  alert("Game over!");
  location.reload();
}, this);
```

Weisen wir eine neue Funktion namens `ballLeaveScreen` zu; löschen Sie den vorherigen Ereignishandler (oben gezeigt) und ersetzen Sie ihn durch die folgende Zeile:

```js
ball.events.onOutOfBounds.add(ballLeaveScreen, this);
```

Wir möchten die Anzahl der Leben jedes Mal verringern, wenn der Ball die Zeichenfläche verlässt. Fügen Sie die Definition der `ballLeaveScreen()`-Funktion am Ende unseres Codes hinzu:

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

Anstatt sofort die Warnung auszugeben, wenn Sie ein Leben verlieren, ziehen wir zuerst ein Leben von der aktuellen Anzahl ab und prüfen, ob es ein Nicht-Null-Wert ist. Wenn ja, dann hat der Spieler noch einige Leben übrig und kann weiterspielen — er wird die Nachricht über den Verlust eines Lebens sehen, die Positionen von Ball und Paddel werden auf dem Bildschirm zurückgesetzt, und beim nächsten Eingabebefehl (Klick oder Berührung) wird die Nachricht ausgeblendet und der Ball beginnt sich erneut zu bewegen.

Wenn die Anzahl der verfügbaren Leben null erreicht, ist das Spiel vorbei und die Spielende-Warnnachricht wird angezeigt.

## Ereignisse

Sie haben wahrscheinlich die `add()`- und `addOnce()`-Methodenaufrufe in den obigen zwei Codeblöcken bemerkt und sich gefragt, wie sie sich unterscheiden. Der Unterschied besteht darin, dass die `add()`-Methode die angegebene Funktion bindet und sie jedes Mal ausführt, wenn das Ereignis auftritt, während `addOnce()` nützlich ist, wenn Sie die gebundene Funktion nur einmal ausführen und dann entbinden möchten, sodass sie nicht erneut ausgeführt wird. In unserem Fall wird bei jedem `outOfBounds`-Ereignis die `ballLeaveScreen`-Funktion ausgeführt, aber wenn der Ball den Bildschirm verlässt, möchten wir die Nachricht nur einmal vom Bildschirm entfernen.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/yk1c5n0b/","","400")}}

## Nächste Schritte

Leben machen das Spiel verzeihender — wenn Sie ein Leben verlieren, haben Sie noch zwei weitere und können weiterspielen. Lassen Sie uns nun das Aussehen und Gefühl des Spiels erweitern, indem wir [Animationen und Tweens](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens) hinzufügen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Win_the_game", "Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens")}}
