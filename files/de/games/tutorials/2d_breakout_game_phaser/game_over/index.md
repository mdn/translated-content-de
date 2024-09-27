---
title: Spielende
slug: Games/Tutorials/2D_breakout_game_Phaser/Game_over
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls", "Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field")}}

Dies ist der **8. Schritt** von 16 des [Gamedev Phaser Leitfadens](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson08.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson08.html).

Um das Spiel interessanter zu gestalten, können wir die Möglichkeit zu verlieren einführen — wenn Sie den Ball nicht treffen, bevor er den unteren Rand des Bildschirms erreicht, ist das Spiel vorbei.

## Anleitung zum Verlieren

Um die Möglichkeit zu verlieren zu bieten, werden wir die Kollision des Balls mit dem unteren Bildschirmrand deaktivieren. Fügen Sie den folgenden Code innerhalb der `create()`-Funktion hinzu; kurz nachdem Sie die Attribute des Balls definiert haben, ist in Ordnung:

```js
game.physics.arcade.checkCollision.down = false;
```

Dies wird bewirken, dass die drei Wände (oben, links und rechts) den Ball zurückprallen lassen, die vierte (unten) jedoch verschwindet und den Ball vom Bildschirm fallen lässt, wenn das Paddle ihn verfehlt. Wir brauchen eine Möglichkeit, dies zu erkennen und entsprechend zu handeln. Fügen Sie die folgenden Zeilen direkt unter der vorherigen neuen Zeile hinzu:

```js
ball.checkWorldBounds = true;
ball.events.onOutOfBounds.add(() => {
  alert("Game over!");
  location.reload();
}, this);
```

Das Hinzufügen dieser Zeilen wird den Ball dazu bringen, die Weltgrenzen (in unserem Fall die Leinwand) zu überprüfen und die Funktion, die an das `onOutOfBounds`-Ereignis gebunden ist, auszuführen. Wenn Sie auf das resultierende Warnfenster klicken, wird die Seite neu geladen, sodass Sie erneut spielen können.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/436bckb7/","","400")}}

## Nächste Schritte

Da das grundlegende Gameplay nun vorhanden ist, machen wir es interessanter, indem wir Ziegel zum Zerschlagen einführen — es ist an der Zeit, das [Ziegelfeld zu bauen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls", "Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field")}}
