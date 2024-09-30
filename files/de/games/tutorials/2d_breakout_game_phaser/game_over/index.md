---
title: Game over
slug: Games/Tutorials/2D_breakout_game_Phaser/Game_over
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls", "Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field")}}

Dies ist der **8. Schritt** von 16 des [Gamedev Phaser-Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson08.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson08.html) finden.

Um das Spiel interessanter zu gestalten, können wir die Möglichkeit einführen, zu verlieren – wenn Sie den Ball nicht treffen, bevor er den unteren Bildschirmrand erreicht, ist das Spiel vorbei.

## Anleitung: Wie man verliert

Um die Möglichkeit zu geben, zu verlieren, deaktivieren wir die Ballkollision mit dem unteren Bildschirmrand. Fügen Sie den folgenden Code in die `create()`-Funktion ein, direkt nachdem Sie die Attribute des Balls definiert haben:

```js
game.physics.arcade.checkCollision.down = false;
```

Dadurch prallen die drei Wände (oben, links und rechts) den Ball zurück, aber die vierte (unten) wird verschwinden, sodass der Ball vom Bildschirm fällt, wenn der Schläger ihn nicht trifft. Wir benötigen eine Möglichkeit, dies zu erkennen und entsprechend zu handeln. Fügen Sie die folgenden Zeilen direkt unter der vorherigen neuen Zeile hinzu:

```js
ball.checkWorldBounds = true;
ball.events.onOutOfBounds.add(() => {
  alert("Game over!");
  location.reload();
}, this);
```

Das Hinzufügen dieser Zeilen bewirkt, dass der Ball die Weltgrenzen (in unserem Fall die Leinwand) überprüft und die an das `onOutOfBounds`-Ereignis gebundene Funktion ausführt. Wenn Sie auf die resultierende Warnung klicken, wird die Seite neu geladen, sodass Sie erneut spielen können.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im untenstehenden Live-Demo überprüfen und damit spielen, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/436bckb7/","","400")}}

## Nächste Schritte

Jetzt, da das grundlegende Gameplay vorhanden ist, machen wir es interessanter, indem wir Steine einführen, die es zu zerschlagen gilt – es ist an der Zeit, [das Spielfeld mit Steinen zu bauen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls", "Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field")}}
