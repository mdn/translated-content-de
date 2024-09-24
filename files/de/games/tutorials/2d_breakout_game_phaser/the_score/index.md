---
title: Die Punktzahl
slug: Games/Tutorials/2D_breakout_game_Phaser/The_score
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Collision_detection", "Games/Workflows/2D_Breakout_game_Phaser/Win_the_game")}}

Dies ist der **11. Schritt** von 16 des [Gamedev Phaser-Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson11.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson11.html).

Eine Punktzahl kann das Spiel interessanter machen — Sie können versuchen, Ihre eigene Bestzeit oder die Ihres Freundes zu schlagen. In diesem Artikel fügen wir unserem Spiel ein Punktesystem hinzu.

Wir verwenden eine separate Variable zum Speichern der Punktzahl und Phaser's `text()`-Methode, um diese auf dem Bildschirm anzuzeigen.

## Neue Variablen

Fügen Sie direkt nach den zuvor definierten Variablen zwei neue Variablen hinzu:

```js
// …
let scoreText;
let score = 0;
```

## Hinzufügen des Punktetextes zur Spielanzeige

Fügen Sie jetzt diese Zeile am Ende der `create()`-Funktion hinzu:

```js
scoreText = game.add.text(5, 5, "Punkte: 0", {
  font: "18px Arial",
  fill: "#0095DD",
});
```

Die `text()`-Methode kann vier Parameter aufnehmen:

- Die x- und y-Koordinaten, an denen der Text gezeichnet werden soll.
- Der eigentliche Text, der dargestellt wird.
- Der Schriftstil, mit dem der Text gerendert werden soll.

Der letzte Parameter sieht dem CSS-Styling sehr ähnlich. In unserem Fall wird der Punktetext blau sein, 18 Pixel groß und die Schriftart Arial verwenden.

## Aktualisieren der Punktzahl, wenn Steine zerstört werden

Wir werden die Punktzahl jedes Mal erhöhen, wenn der Ball einen Stein trifft, und das `scoreText` aktualisieren, um die aktuelle Punktzahl anzuzeigen. Dies kann mit der `setText()`-Methode erfolgen — fügen Sie die zwei neuen Zeilen unten der `ballHitBrick()`-Funktion hinzu:

```js
function ballHitBrick(ball, brick) {
  brick.kill();
  score += 10;
  scoreText.setText(`Punkte: ${score}`);
}
```

Das war's fürs Erste — laden Sie Ihre `index.html` neu und überprüfen Sie, ob die Punktzahl bei jedem Treffer eines Steins aktualisiert wird.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im unten stehenden Live-Demo überprüfen und damit spielen, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/n8o6rhrf/","","400")}}

## Nächste Schritte

Wir haben jetzt ein Punktesystem, aber was nützt es, zu spielen und Punkte zu sammeln, wenn Sie nicht gewinnen können? Sehen wir, wie wir einen Siegzustand hinzufügen können, der es uns ermöglicht, [das Spiel zu gewinnen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Win_the_game).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Collision_detection", "Games/Workflows/2D_Breakout_game_Phaser/Win_the_game")}}
