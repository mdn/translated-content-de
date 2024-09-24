---
title: Spiel beendet
slug: Games/Tutorials/2D_breakout_game_Phaser/Game_over
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls", "Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field")}}

Dies ist der **8. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson08.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson08.html).

Um das Spiel interessanter zu machen, können wir die Möglichkeit einführen, zu verlieren – wenn Sie den Ball nicht treffen, bevor er den unteren Rand des Bildschirms erreicht, ist das Spiel vorbei.

## Wie man verliert

Um die Möglichkeit zu bieten, zu verlieren, deaktivieren wir die Kollision des Balls mit dem unteren Bildschirmrand. Fügen Sie den folgenden Code in die `create()`-Funktion ein; gleich nachdem Sie die Attribute des Balls definiert haben, ist in Ordnung:

```js
game.physics.arcade.checkCollision.down = false;
```

Dies wird die drei Wände (oben, links und rechts) den Ball zurückprallen lassen, aber die vierte (unten) wird verschwinden, sodass der Ball vom Bildschirm fällt, wenn die Paddle ihn verfehlt. Wir benötigen eine Möglichkeit, dies zu erkennen und entsprechend zu handeln. Fügen Sie die folgenden Zeilen direkt unter der vorherigen hinzu:

```js
ball.checkWorldBounds = true;
ball.events.onOutOfBounds.add(() => {
  alert("Spiel beendet!");
  location.reload();
}, this);
```

Durch das Hinzufügen dieser Zeilen wird der Ball die Grenzen der Welt (in unserem Fall der Leinwand) überprüfen und die Funktion ausführen, die an das `onOutOfBounds`-Ereignis gebunden ist. Wenn Sie auf die resultierende Warnung klicken, wird die Seite neu geladen, sodass Sie erneut spielen können.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im Live-Demo unten überprüfen und damit experimentieren, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/436bckb7/","","400")}}

## Nächste Schritte

Jetzt, da das grundlegende Gameplay vorhanden ist, lassen Sie uns das Spiel interessanter machen, indem wir Ziegel zum Zerschlagen einführen – es ist Zeit, das [Brick Field zu bauen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls", "Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field")}}
