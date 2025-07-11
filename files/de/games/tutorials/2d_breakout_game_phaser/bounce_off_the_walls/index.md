---
title: An den Wänden abprallen
slug: Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Physics", "Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls")}}

Dies ist der **6. Schritt** von 16 des [Gamedev Phaser-Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson06.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson06.html) finden.

Da nun die Physik eingeführt wurde, können wir mit der Implementierung der Kollisionserkennung im Spiel beginnen – zunächst schauen wir uns die Wände an.

## Abprallen an den Weltbegrenzungen

Der einfachste Weg, unseren Ball von den Wänden abprallen zu lassen, besteht darin, dem Framework mitzuteilen, dass wir die Grenzen des {{htmlelement("canvas")}}-Elements als Wände behandeln möchten und den Ball nicht über diese hinaus bewegen lassen. In Phaser kann dies einfach durch die Nutzung der `collideWorldsBound`-Eigenschaft erreicht werden. Fügen Sie diese Zeile direkt nach dem bestehenden `game.physics.enable()`-Methodenaufruf hinzu:

```js
ball.body.collideWorldBounds = true;
```

Jetzt wird der Ball am Bildschirmrand stoppen, anstatt zu verschwinden, aber er prallt noch nicht ab. Um dies zu erreichen, müssen wir seine Elastizität einstellen. Fügen Sie die folgende Zeile unter der vorherigen hinzu:

```js
ball.body.bounce.set(1);
```

Versuchen Sie, index.html erneut zu laden – nun sollten Sie sehen, wie der Ball von allen Wänden abprallt und sich innerhalb des Canvasbereichs bewegt.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im folgenden Live-Demo einsehen und damit experimentieren, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/dcw36opz/","","400")}}

## Nächste Schritte

Dies sieht nun schon eher wie ein Spiel aus, aber wir können es in keiner Weise steuern – es wird höchste Zeit, [Spielerpaddel und Steuerung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls) einzuführen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Physics", "Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls")}}
