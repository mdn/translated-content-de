---
title: Spielen zufällig gestalten
slug: Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{GamesSidebar}}

{{Previous("Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}

Dies ist der **16. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson16.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson16.html).

Unser Spiel scheint fertig zu sein, aber wenn Sie genau hinsehen, werden Sie feststellen, dass der Ball während des gesamten Spiels im gleichen Winkel vom Schläger abprallt. Das bedeutet, dass jedes Spiel ziemlich ähnlich ist. Um dies zu beheben und die Spielbarkeit zu verbessern, sollten wir die Rückprallwinkel zufälliger gestalten, und in diesem Artikel werden wir uns ansehen, wie das geht.

## Rückprälle zufälliger gestalten

Wir können die Geschwindigkeit des Balls ändern, je nachdem, an welcher Stelle er den Schläger trifft, indem wir bei jedem Ausführen der `ballHitPaddle()`-Funktion die `x`-Geschwindigkeit modifizieren, wie in der unten stehenden Zeile gezeigt. Fügen Sie diese neue Zeile jetzt in Ihren Code ein und probieren Sie es aus.

```js
function ballHitPaddle(ball, paddle) {
  ball.animations.play("wobble");
  ball.body.velocity.x = -5 * (paddle.x - ball.x);
}
```

Es ist ein bisschen Magie — die neue Geschwindigkeit ist höher, je größer der Abstand zwischen der Mitte des Schlägers und der Stelle ist, an der der Ball ihn trifft. Auch die Richtung (links oder rechts) wird durch diesen Wert bestimmt — wenn der Ball die linke Seite des Schlägers trifft, prallt er nach links ab, während er bei einem Treffer auf der rechten Seite nach rechts abprallt. Das hat sich durch ein wenig Experimentieren mit den gegebenen Werten so ergeben, Sie können Ihre eigenen Experimente durchführen und sehen, was passiert. Es ist natürlich nicht völlig zufällig, aber es macht das Gameplay etwas unvorhersehbarer und damit interessanter.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion in der folgenden Live-Demo überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/3yds5ege/","","400")}}

## Zusammenfassung

Sie haben alle Lektionen abgeschlossen — herzlichen Glückwunsch! Zu diesem Zeitpunkt hätten Sie die Grundlagen von Phaser und die Logik hinter einfachen 2D-Spielen erlernt.

### Übungen zum Mitmachen

Sie können im Spiel noch viel mehr machen — fügen Sie hinzu, was Sie für am besten halten, um es lustiger und interessanter zu gestalten. Es ist ein grundlegender Einstieg, der nur an der Oberfläche der unzähligen hilfreichen Methoden kratzt, die Phaser bietet. Unten sind einige Vorschläge, wie Sie unser kleines Spiel erweitern können, um loszulegen:

- Fügen Sie einen zweiten Ball oder Schläger hinzu.
- Ändern Sie die Farbe des Hintergrunds bei jedem Treffer.
- Ändern Sie die Bilder und verwenden Sie Ihre eigenen.
- Gewähren Sie zusätzliche Bonuspunkte, wenn Steine schnell, mehrere hintereinander zerstört werden (oder andere Boni Ihrer Wahl).
- Erstellen Sie Ebenen mit unterschiedlichen Stein-Layouts.

Schauen Sie sich unbedingt die ständig wachsende Liste von [Beispielen](https://labs.phaser.io/) an und die [offizielle Dokumentation](https://phaser.io/docs/), und besuchen Sie das [Phaser Discourse Forum](https://phaser.discourse.group/), wenn Sie jemals Hilfe benötigen.

Sie könnten auch zur [Indexseite dieser Tutorial-Serie](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) zurückkehren.

{{Previous("Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}
