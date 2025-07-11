---
title: Extraleben
slug: Games/Tutorials/2D_breakout_game_Phaser/Extra_lives
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Win_the_game", "Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens")}}

Dies ist der **13. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson13.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson13.html) finden.

Wir können das Spiel länger genießen, indem wir Leben hinzufügen. In diesem Artikel implementieren wir ein Lebenssystem, damit der Spieler weiterspielen kann, bis er drei Leben verloren hat, nicht nur eines.

## Neue Variablen

Fügen Sie die folgenden neuen Variablen unterhalb der bestehenden in Ihrem Code hinzu:

```js
let lives = 3;
let livesText;
let lifeLostText;
```

Diese speichern jeweils die Anzahl der Leben, das Textlabel, das die verbleibende Anzahl an Leben anzeigt, und ein Textlabel, das angezeigt wird, wenn der Spieler eines seiner Leben verliert.

## Definition der neuen Textlabels

Die Definition der Texte sieht ähnlich aus wie das, was wir bereits in der [Punkte]-Lektion (/de/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score) gemacht haben. Fügen Sie die folgenden Zeilen unterhalb der bestehenden `scoreText`-Definition in Ihrer `create()` Funktion hinzu:

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

Die Objekte `livesText` und `lifeLostText` ähneln sehr dem `scoreText` — sie definieren eine Position auf dem Bildschirm, den tatsächlichen anzuzeigenden Text und das Schriftstyling. Ersteres ist an seiner oberen rechten Kante verankert, um richtig mit dem Bildschirm auszurichten, und letzteres ist zentriert, beide mit `anchor.set()`.

Das `lifeLostText` wird nur angezeigt, wenn ein Leben verloren wird, daher ist seine Sichtbarkeit anfänglich auf `false` gesetzt.

### Unser Textstyling DRY machen

Wie Sie wahrscheinlich bemerkt haben, verwenden wir für alle drei Texte dasselbe Styling: `scoreText`, `livesText` und `lifeLostText`. Wenn wir jemals die Schriftgröße oder Farbe ändern wollen, müssen wir dies an mehreren Stellen tun. Um es uns in Zukunft einfacher zu machen, können wir eine separate Variable erstellen, die unser Styling enthält, nennen wir sie `textStyle` und platzieren sie vor den Textdefinitionen:

```js
textStyle = { font: "18px Arial", fill: "#0095DD" };
```

Wir können nun diese Variable beim Stylen unserer Textlabels verwenden — aktualisieren Sie Ihren Code so, dass die mehrfachen Instanzen des Textstylings durch die Variable ersetzt werden:

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

Auf diese Weise wird beim Ändern der Schriftart in einer Variable die Änderung überall dort angewendet, wo sie verwendet wird.

## Der Lebensverwaltungs-Code

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

Wir möchten die Anzahl der Leben jedes Mal verringern, wenn der Ball die Leinwand verlässt. Fügen Sie die Definition der Funktion `ballLeaveScreen()` am Ende unseres Codes hinzu:

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

Anstatt sofort die Warnung auszugeben, wenn Sie ein Leben verlieren, ziehen wir zuerst ein Leben von der aktuellen Anzahl ab und prüfen, ob es ein nicht-nullwert ist. Wenn ja, dann hat der Spieler noch einige Leben übrig und kann weiterspielen — er sieht die Nachricht über das verlorene Leben, die Ball- und Schlägerpositionen werden auf dem Bildschirm zurückgesetzt und bei der nächsten Eingabe (Klick oder Berührung) wird die Nachricht ausgeblendet und der Ball beginnt sich erneut zu bewegen.

Wenn die Anzahl der verfügbaren Leben null erreicht, ist das Spiel vorbei und die Game-Over-Warnung wird angezeigt.

## Ereignisse

Sie haben wahrscheinlich die Aufrufe der `add()` und `addOnce()` Methode in den obigen zwei Codeblöcken bemerkt und sich gefragt, wie sie sich unterscheiden. Der Unterschied besteht darin, dass die `add()` Methode die gegebene Funktion bindet und dazu führt, dass sie jedes Mal ausgeführt wird, wenn das Ereignis eintritt, während `addOnce()` nützlich ist, wenn Sie möchten, dass die gebundene Funktion nur einmal ausgeführt und dann entbunden wird, damit sie nicht erneut ausgeführt wird. In unserem Fall wird bei jedem `outOfBounds`-Ereignis `ballLeaveScreen` ausgeführt, aber wenn der Ball den Bildschirm verlässt, möchten wir die Nachricht nur einmal vom Bildschirm entfernen.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im folgenden Live-Demo überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/yk1c5n0b/","","400")}}

## Nächste Schritte

Leben machen das Spiel nachsichtiger — wenn Sie ein Leben verlieren, haben Sie immer noch zwei weitere übrig und können weiterspielen. Lassen Sie uns nun das Aussehen und das Gefühl des Spiels durch das Hinzufügen von [Animationen und Tweens](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens) erweitern.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Win_the_game", "Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens")}}
