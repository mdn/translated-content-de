---
title: Spielende
slug: Games/Tutorials/2D_breakout_game_Phaser/Game_over
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls", "Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field")}}

Dies ist der **8. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson08.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson08.html) finden.

Um das Spiel interessanter zu gestalten, können wir die Möglichkeit einführen, zu verlieren – wenn Sie den Ball nicht treffen, bevor er den unteren Rand des Bildschirms erreicht, ist das Spiel vorbei.

## Wie man verliert

Um die Möglichkeit zu bieten, zu verlieren, werden wir die Kollision des Balls mit dem unteren Rand des Bildschirms deaktivieren. Fügen Sie den folgenden Code innerhalb der `create()`-Funktion hinzu; es ist in Ordnung, dies direkt nach der Definition der Attribute des Balls zu tun:

```js
game.physics.arcade.checkCollision.down = false;
```

Dadurch werden die drei Wände (oben, links und rechts) den Ball zurückprallen lassen, aber die vierte (unten) wird verschwinden, sodass der Ball vom Bildschirm fällt, wenn das Paddle ihn verfehlt. Wir benötigen eine Möglichkeit, dies zu erkennen und entsprechend zu handeln. Fügen Sie die folgenden Zeilen direkt unter der vorherigen neuen Zeile hinzu:

```js
ball.checkWorldBounds = true;
ball.events.onOutOfBounds.add(() => {
  alert("Game over!");
  location.reload();
}, this);
```

Das Hinzufügen dieser Zeilen bewirkt, dass der Ball die Weltgrenzen (in unserem Fall die Leinwand) überprüft und die Funktion ausführt, die mit dem `onOutOfBounds`-Ereignis verbunden ist. Wenn Sie auf die resultierende Warnung klicken, wird die Seite neu geladen, damit Sie erneut spielen können.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion in der Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/436bckb7/","","400")}}

## Nächste Schritte

Jetzt, da das grundlegende Gameplay vorhanden ist, machen wir es interessanter, indem wir Ziegel zum Zerschmettern einführen – es ist Zeit, das [Ziegelfeld zu bauen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls", "Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field")}}
