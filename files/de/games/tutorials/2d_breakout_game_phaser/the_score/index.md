---
title: The score
slug: Games/Tutorials/2D_breakout_game_Phaser/The_score
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Collision_detection", "Games/Workflows/2D_Breakout_game_Phaser/Win_the_game")}}

Dies ist der **11. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson11.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson11.html) finden.

Ein Punktestand kann das Spiel interessanter machen — Sie können versuchen, Ihren eigenen Highscore oder den Ihrer Freunde zu schlagen. In diesem Artikel fügen wir unserem Spiel ein Punktesystem hinzu.

Wir werden eine separate Variable zum Speichern des Punktestands verwenden und Phasers `text()` Methode, um ihn auf dem Bildschirm auszugeben.

## Neue Variablen

Fügen Sie zwei neue Variablen direkt nach den zuvor definierten hinzu:

```js
// …
let scoreText;
let score = 0;
```

## Hinzufügen von Punktestand-Text zur Spielanzeige

Fügen Sie nun diese Zeile am Ende der `create()` Funktion hinzu:

```js
scoreText = game.add.text(5, 5, "Points: 0", {
  font: "18px Arial",
  fill: "#0095DD",
});
```

Die `text()` Methode kann vier Parameter aufnehmen:

- Die x- und y-Koordinaten, an denen der Text gezeichnet werden soll.
- Der tatsächliche Text, der dargestellt wird.
- Der Schriftstil, mit dem der Text gerendert wird.

Der letzte Parameter sieht sehr ähnlich wie CSS-Styling aus. In unserem Fall wird der Punktestand-Text blau, in 18 Pixeln Größe und mit der Schriftart Arial dargestellt.

## Aktualisierung des Punktestands, wenn Ziegel zerstört werden

Wir werden die Punktzahl jedes Mal erhöhen, wenn der Ball einen Ziegel trifft, und den `scoreText` aktualisieren, um den aktuellen Punktestand anzuzeigen. Dies kann mit der Methode `setText()` erreicht werden — fügen Sie die beiden neuen Linien, die unten zu sehen sind, der `ballHitBrick()` Funktion hinzu:

```js
function ballHitBrick(ball, brick) {
  brick.kill();
  score += 10;
  scoreText.setText(`Points: ${score}`);
}
```

Das war's für jetzt — laden Sie Ihre `index.html` neu und überprüfen Sie, ob der Punktestand bei jedem Ziegeltreffer aktualisiert wird.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/n8o6rhrf/","","400")}}

## Nächste Schritte

Wir haben jetzt ein Punktesystem, aber was bringt es, zu spielen und den Punktestand zu halten, wenn Sie nicht gewinnen können? Lassen Sie uns sehen, wie wir einen Siegeszustand hinzufügen können, der es uns ermöglicht, [das Spiel zu gewinnen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Win_the_game).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Collision_detection", "Games/Workflows/2D_Breakout_game_Phaser/Win_the_game")}}
