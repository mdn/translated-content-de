---
title: Zufall im Gameplay
slug: Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{Previous("Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}

Dies ist der **16. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson16.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson16.html).

Unser Spiel scheint abgeschlossen zu sein. Doch bei genauerem Hinsehen fällt auf, dass der Ball während des gesamten Spiels im gleichen Winkel vom Schläger abprallt. Das bedeutet, dass jedes Spiel recht ähnlich ist. Um dies zu verbessern und die Spielbarkeit zu erhöhen, sollten wir die Abprallwinkel zufälliger gestalten. In diesem Artikel schauen wir uns an, wie das geht.

## Abpraller zufälliger machen

Wir können die Geschwindigkeit des Balls ändern, je nachdem, an welcher Stelle er den Schläger trifft, indem wir die `x`-Geschwindigkeit jedes Mal ändern, wenn die Funktion `ballHitPaddle()` ausgeführt wird. Fügen Sie jetzt diese neue Zeile in Ihren Code ein und probieren Sie es aus.

```js
function ballHitPaddle(ball, paddle) {
  ball.animations.play("wobble");
  ball.body.velocity.x = -5 * (paddle.x - ball.x);
}
```

Es ist ein bisschen Magie — die neue Geschwindigkeit ist höher, je größer der Abstand zwischen der Mitte des Schlägers und der Stelle, an der der Ball ihn trifft. Auch die Richtung (links oder rechts) wird von diesem Wert bestimmt — wenn der Ball die linke Seite des Schlägers trifft, wird er nach links abprallen, während ein Treffer auf der rechten Seite ihn nach rechts abprallen lässt. Dies ergab sich durch ein wenig Experimentieren mit den gegebenen Werten. Sie können auch selbst experimentieren und sehen, was passiert. Es ist natürlich nicht völlig zufällig, aber es macht das Gameplay etwas unvorhersehbarer und damit interessanter.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im untenstehenden Live-Demo überprüfen und damit spielen, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/3yds5ege/","","400")}}

## Zusammenfassung

Sie haben alle Lektionen abgeschlossen — herzlichen Glückwunsch! An diesem Punkt sollten Sie die Grundlagen von Phaser und die Logik hinter einfachen 2D-Spielen erlernt haben.

### Übungen zum Weiterführen

Sie können noch viel mehr im Spiel tun — fügen Sie hinzu, was Sie für das Beste halten, um es unterhaltsamer und interessanter zu machen. Es ist eine grundlegende Einführung, die an der Oberfläche der unzähligen hilfreichen Methoden kratzt, die Phaser bietet. Unterhalb finden Sie einige Vorschläge, wie Sie unser kleines Spiel erweitern könnten, um zu starten:

- Fügen Sie einen zweiten Ball oder Schläger hinzu.
- Ändern Sie die Hintergrundfarbe bei jedem Treffer.
- Ändern Sie die Bilder und verwenden Sie Ihre eigenen.
- Gewähren Sie zusätzliche Bonuspunkte, wenn Ziegelsteine schnell, mehrmals hintereinander zerstört werden (oder andere Boni Ihrer Wahl).
- Erstellen Sie Level mit unterschiedlichen Ziegelsteinanordnungen.

Vergessen Sie nicht, die ständig wachsende Liste von [Beispielen](https://labs.phaser.io/) und die [offizielle Dokumentation](https://phaser.io/docs/) zu überprüfen und besuchen Sie das [Phaser Discourse Forum](https://phaser.discourse.group/), wenn Sie Hilfe benötigen.

Sie könnten auch zur [Indexseite dieser Tutorial-Serie](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) zurückkehren.

{{Previous("Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}
