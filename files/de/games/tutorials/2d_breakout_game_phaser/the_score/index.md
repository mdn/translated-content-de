---
title: Der Punktestand
slug: Games/Tutorials/2D_breakout_game_Phaser/The_score
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Collision_detection", "Games/Workflows/2D_Breakout_game_Phaser/Win_the_game")}}

Dies ist der **11. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson11.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson11.html).

Einen Punktestand zu haben, kann das Spiel interessanter machen — Sie können versuchen, Ihren eigenen Highscore oder den eines Freundes zu überbieten. In diesem Artikel fügen wir unserem Spiel ein Punktesystem hinzu.

Wir werden eine separate Variable zum Speichern des Punktestands verwenden und Phasers `text()` Methode, um ihn auf dem Bildschirm anzuzeigen.

## Neue Variablen

Fügen Sie zwei neue Variablen direkt nach den zuvor definierten hinzu:

```js
// …
let scoreText;
let score = 0;
```

## Hinzufügen von Punktestext zur Spielanzeige

Fügen Sie nun diese Zeile am Ende der `create()` Funktion hinzu:

```js
scoreText = game.add.text(5, 5, "Points: 0", {
  font: "18px Arial",
  fill: "#0095DD",
});
```

Die `text()` Methode kann vier Parameter annehmen:

- Die x- und y-Koordinaten, an denen der Text gezeichnet werden soll.
- Der tatsächliche Text, der gerendert wird.
- Der Schriftstil, mit dem der Text gerendert wird.

Der letzte Parameter sieht dem CSS-Styling sehr ähnlich. In unserem Fall wird der Punktetext blau, in 18 Pixeln Größe und mit der Schriftart Arial dargestellt.

## Aktualisieren des Punktestands, wenn Steine zerstört werden

Wir werden die Anzahl der Punkte jedes Mal erhöhen, wenn der Ball einen Stein trifft, und `scoreText` aktualisieren, um den aktuellen Punktestand anzuzeigen. Dies kann mit der `setText()` Methode erfolgen — fügen Sie die beiden neuen Zeilen, die unten zu sehen sind, der `ballHitBrick()` Funktion hinzu:

```js
function ballHitBrick(ball, brick) {
  brick.kill();
  score += 10;
  scoreText.setText(`Points: ${score}`);
}
```

Das war's vorerst — laden Sie Ihre `index.html` neu und überprüfen Sie, ob der Punktestand bei jedem Treffer eines Steins aktualisiert wird.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im unten stehenden Live-Demo überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/n8o6rhrf/","","400")}}

## Nächste Schritte

Wir haben jetzt ein Punktesystem, aber was nützt es, zu spielen und Punkte zu sammeln, wenn man nicht gewinnen kann? Lassen Sie uns sehen, wie wir einen Siegzustand hinzufügen können, der es uns ermöglicht, [das Spiel zu gewinnen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Win_the_game).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Collision_detection", "Games/Workflows/2D_Breakout_game_Phaser/Win_the_game")}}
