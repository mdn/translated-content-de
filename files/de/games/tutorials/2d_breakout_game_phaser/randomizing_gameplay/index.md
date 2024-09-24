---
title: Spielen zufällig gestalten
slug: Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{GamesSidebar}}

{{Previous("Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}

Dies ist der **16. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson16.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson16.html) finden.

Unser Spiel scheint abgeschlossen zu sein, aber wenn Sie genau hinsehen, werden Sie feststellen, dass der Ball während des gesamten Spiels mit dem gleichen Winkel vom Schläger abprallt. Das bedeutet, dass jedes Spiel ziemlich ähnlich ist. Um dies zu beheben und die Spielbarkeit zu verbessern, sollten wir die Abprallwinkel zufälliger gestalten, und in diesem Artikel werden wir uns ansehen, wie.

## Abpraller zufälliger machen

Wir können die Geschwindigkeit des Balls ändern, je nachdem, wo genau er den Schläger trifft, indem wir bei jedem Ausführen der `ballHitPaddle()`-Funktion die `x`-Geschwindigkeit mithilfe einer Zeile wie der folgenden ändern. Fügen Sie diese neue Zeile jetzt Ihrem Code hinzu und probieren Sie es aus.

```js
function ballHitPaddle(ball, paddle) {
  ball.animations.play("wobble");
  ball.body.velocity.x = -5 * (paddle.x - ball.x);
}
```

Es ist ein bisschen Magie — die neue Geschwindigkeit ist größer, je weiter die Entfernung zwischen der Mitte des Schlägers und dem Punkt ist, an dem der Ball ihn trifft. Auch die Richtung (links oder rechts) wird von diesem Wert bestimmt — wenn der Ball die linke Seite des Schlägers trifft, prallt er nach links ab, während das Treffen der rechten Seite ihn nach rechts abprallen lässt. Es ist so geworden, weil ein bisschen mit den gegebenen Werten experimentiert wurde, Sie können Ihre eigenen Experimente durchführen und sehen, was passiert. Es ist natürlich nicht völlig zufällig, aber es macht das Gameplay etwas unvorhersehbarer und dadurch interessanter.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im folgenden Live-Demo einsehen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/3yds5ege/","","400")}}

## Zusammenfassung

Sie haben alle Lektionen abgeschlossen — Herzlichen Glückwunsch! Bis zu diesem Punkt hätten Sie die Grundlagen von Phaser und die Logik hinter einfachen 2D-Spielen gelernt.

### Übungen zum Weiterführen

Sie können noch viel mehr im Spiel tun — fügen Sie hinzu, was Sie für am besten halten, um es unterhaltsamer und interessanter zu machen. Es ist eine grundlegende Einführung, die gerade die Oberfläche der unzähligen hilfreichen Methoden kratzt, die Phaser bietet. Nachfolgend finden Sie einige Vorschläge, wie Sie unser kleines Spiel erweitern könnten, um den Einstieg zu erleichtern:

- Fügen Sie einen zweiten Ball oder Schläger hinzu.
- Ändern Sie die Farbe des Hintergrunds bei jedem Treffer.
- Ändern Sie die Bilder und verwenden Sie Ihre eigenen.
- Gewähren Sie zusätzliche Bonuspunkte, wenn Ziegel schnell hintereinander zerstört werden (oder andere Boni Ihrer Wahl).
- Erstellen Sie Levels mit unterschiedlichen Ziegel-Layouts.

Seien Sie sicher, die immer länger werdende Liste von [Beispielen](https://labs.phaser.io/) und die [offizielle Dokumentation](https://phaser.io/docs/) zu überprüfen, und besuchen Sie das [Phaser Discourse Forum](https://phaser.discourse.group/), wenn Sie Hilfe benötigen.

Sie könnten auch zur [Indexseite dieser Tutorialreihe](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) zurückgehen.

{{Previous("Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}
