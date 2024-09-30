---
title: Bounce off the walls
slug: Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Physics", "Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls")}}

Dies ist der **6. Schritt** von insgesamt 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson06.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson06.html).

Da die Physik nun eingeführt wurde, können wir mit der Implementierung der Kollisionsabfrage im Spiel beginnen – zuerst werden wir uns die Wände anschauen.

## Abprallen an den Welträndern

Die einfachste Möglichkeit, unseren Ball von den Wänden abprallen zu lassen, besteht darin, dem Framework mitzuteilen, dass wir die Grenzen des `<canvas>`-Elements als Wände behandeln und den Ball nicht darüber hinaus bewegen lassen wollen. In Phaser kann dies einfach mit der `collideWorldsBound`-Eigenschaft erreicht werden. Fügen Sie diese Zeile direkt nach dem Aufruf der bestehenden Methode `game.physics.enable()` hinzu:

```js
ball.body.collideWorldBounds = true;
```

Nun wird der Ball am Rand des Bildschirms stoppen, anstatt zu verschwinden, aber er prallt nicht ab. Um dies zu ermöglichen, müssen wir seine Elastizität einstellen. Fügen Sie folgende Zeile unterhalb der vorherigen ein:

```js
ball.body.bounce.set(1);
```

Versuchen Sie, index.html erneut zu laden – jetzt sollte der Ball von allen Wänden abprallen und sich innerhalb des `<canvas>`-Bereichs bewegen.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im Live-Demo unten überprüfen und damit herumspielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/dcw36opz/","","400")}}

## Nächste Schritte

Dies beginnt jetzt mehr wie ein Spiel auszusehen, aber wir können es in keiner Weise steuern – es ist höchste Zeit, das [Spielerpaddel und die Steuerung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls) vorzustellen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Physics", "Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls")}}
