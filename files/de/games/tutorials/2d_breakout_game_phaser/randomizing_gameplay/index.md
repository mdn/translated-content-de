---
title: Zufällige Spielmechaniken
slug: Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{GamesSidebar}}

{{Previous("Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}

Dies ist der **16. Schritt** von 16 des [Gamedev Phaser-Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson16.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson16.html) finden.

Unser Spiel scheint abgeschlossen zu sein, aber bei genauem Hinsehen werden Sie bemerken, dass der Ball den Schläger im gesamten Spiel im gleichen Winkel abprallt. Das bedeutet, dass jedes Spiel ziemlich ähnlich ist. Um dies zu beheben und die Spielbarkeit zu verbessern, sollten wir die Rückprallwinkel zufälliger gestalten, und in diesem Artikel werden wir uns ansehen, wie das geht.

## Rückprall zufälliger gestalten

Wir können die Geschwindigkeit des Balls ändern, abhängig von der genauen Stelle, an der er den Schläger trifft, indem wir die `x`-Geschwindigkeit jedes Mal anpassen, wenn die Funktion `ballHitPaddle()` ausgeführt wird. Verwenden Sie eine Zeile, die der unten stehenden ähnelt. Fügen Sie diese neue Zeile jetzt Ihrem Code hinzu und probieren Sie es aus.

```js
function ballHitPaddle(ball, paddle) {
  ball.animations.play("wobble");
  ball.body.velocity.x = -5 * (paddle.x - ball.x);
}
```

Es ist ein bisschen wie Magie — die neue Geschwindigkeit ist höher, je größer der Abstand zwischen der Mitte des Schlägers und der Stelle ist, an der der Ball ihn trifft. Auch die Richtung (links oder rechts) wird durch diesen Wert bestimmt — wenn der Ball die linke Seite des Schlägers trifft, prallt er nach links ab, während ein Treffer auf der rechten Seite ihn nach rechts prallen lässt. Dies ist durch ein wenig Experimentieren mit den gegebenen Werten entstanden, Sie können Ihre eigenen Experimente durchführen und sehen, was passiert. Es ist natürlich nicht völlig zufällig, aber es macht das Gameplay etwas unvorhersehbarer und damit interessanter.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im untenstehenden Live-Demo testen und damit herumspielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/3yds5ege/","","400")}}

## Zusammenfassung

Sie haben alle Lektionen abgeschlossen — herzlichen Glückwunsch! Bis zu diesem Punkt hätten Sie die Grundlagen von Phaser und die Logik hinter einfachen 2D-Spielen gelernt.

### Übungen im Anschluss

Sie können im Spiel noch viel mehr machen — fügen Sie hinzu, was immer Sie für am besten halten, um es unterhaltsamer und interessanter zu gestalten. Es ist eine grundlegende Einführung, die erst den Anfang der unzähligen hilfreichen Methoden beschreibt, die Phaser bietet. Unten sind einige Vorschläge, wie Sie unser kleines Spiel erweitern könnten, um loszulegen:

- Fügen Sie einen zweiten Ball oder Schläger hinzu.
- Ändern Sie die Farbe des Hintergrunds bei jedem Treffer.
- Ändern Sie die Bilder und verwenden Sie Ihre eigenen.
- Gewähren Sie zusätzliche Bonuspunkte, wenn Steine schnell hintereinander zerstört werden (oder andere Boni Ihrer Wahl).
- Erstellen Sie Levels mit unterschiedlichen Steinlayouts.

Stellen Sie sicher, die ständig wachsende Liste der [Beispiele](https://labs.phaser.io/) und die [offizielle Dokumentation](https://phaser.io/docs/) zu überprüfen, und besuchen Sie das [Phaser Discourse Forum](https://phaser.discourse.group/), wenn Sie Hilfe benötigen.

Sie können auch zur [Indexseite dieser Tutorialserie](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) zurückkehren.

{{Previous("Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}
