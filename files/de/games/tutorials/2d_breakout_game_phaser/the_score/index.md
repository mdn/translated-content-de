---
title: The score
slug: Games/Tutorials/2D_breakout_game_Phaser/The_score
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Collision_detection", "Games/Workflows/2D_Breakout_game_Phaser/Win_the_game")}}

Dies ist der **11. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Der Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, ist unter [Gamedev-Phaser-Content-Kit/demos/lesson11.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson11.html) zu finden.

Ein Punktestand kann das Spiel interessanter machen — Sie können versuchen, Ihren eigenen Highscore oder den Ihres Freundes zu schlagen. In diesem Artikel fügen wir unserem Spiel ein Punktesystem hinzu.

Wir werden eine separate Variable zum Speichern der Punktzahl und die `text()`-Methode von Phaser verwenden, um diese auf dem Bildschirm auszugeben.

## Neue Variablen

Fügen Sie zwei neue Variablen direkt nach den zuvor definierten hinzu:

```js
// …
let scoreText;
let score = 0;
```

## Hinzufügen des Punktestands zum Spielbildschirm

Fügen Sie nun diese Zeile am Ende der `create()`-Funktion hinzu:

```js
scoreText = game.add.text(5, 5, "Points: 0", {
  font: "18px Arial",
  fill: "#0095DD",
});
```

Die `text()`-Methode kann vier Parameter annehmen:

- Die x- und y-Koordinaten, um den Text zu zeichnen.
- Der tatsächliche Text, der gerendert wird.
- Der Schriftstil, der verwendet wird, um den Text zu rendern.

Der letzte Parameter ähnelt sehr dem CSS-Styling. In unserem Fall wird der Punktestand blau sein, in der Größe von 18 Pixel und die Arial-Schriftart verwenden.

## Aktualisierung des Punktestands, wenn Steine zerstört werden

Wir erhöhen die Anzahl der Punkte jedes Mal, wenn der Ball einen Stein trifft, und aktualisieren den `scoreText`, um den aktuellen Punktestand anzuzeigen. Dies kann mit der Methode `setText()` erfolgen — fügen Sie die zwei neuen Zeilen, die unten zu sehen sind, zur Funktion `ballHitBrick()` hinzu:

```js
function ballHitBrick(ball, brick) {
  brick.kill();
  score += 10;
  scoreText.setText(`Points: ${score}`);
}
```

Das war's fürs Erste — laden Sie Ihr `index.html` neu und prüfen Sie, ob der Punktestand bei jedem Treffer eines Steins aktualisiert wird.

## Vergleich Ihres Codes

Sie können den fertigen Code für diese Lektion im folgenden Live-Demo überprüfen und mit ihm spielen, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/n8o6rhrf/","","400")}}

## Nächste Schritte

Jetzt haben wir ein Punktesystem, aber was bringt es, zu spielen und Punkte zu sammeln, wenn man nicht gewinnen kann? Sehen wir, wie wir einen Siegzustand hinzufügen können, der es uns erlaubt, [das Spiel zu gewinnen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Win_the_game).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Collision_detection", "Games/Workflows/2D_Breakout_game_Phaser/Win_the_game")}}
