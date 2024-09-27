---
title: Abprallen von den Wänden
slug: Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Physics", "Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls")}}

Dies ist der **6. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson06.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson06.html).

Da jetzt die Physik eingeführt wurde, können wir beginnen, die Kollisionserkennung in das Spiel zu implementieren — zuerst schauen wir uns die Wände an.

## Abprallen von den Weltgrenzen

Der einfachste Weg, unseren Ball von den Wänden abprallen zu lassen, besteht darin, dem Framework mitzuteilen, dass wir die Ränder des {{htmlelement("canvas")}} Elements als Wände behandeln und den Ball nicht darüber hinaus bewegen lassen wollen. In Phaser kann dies einfach mit der Eigenschaft `collideWorldsBound` erreicht werden. Fügen Sie diese Zeile direkt nach dem bereits vorhandenen Aufruf der Methode `game.physics.enable()` hinzu:

```js
ball.body.collideWorldBounds = true;
```

Jetzt wird der Ball am Rand des Bildschirms stoppen, anstatt zu verschwinden, aber er prallt nicht ab. Um dies zu erreichen, müssen wir seine Rückprallfähigkeit einstellen. Fügen Sie die folgende Zeile unter der vorherigen hinzu:

```js
ball.body.bounce.set(1);
```

Versuchen Sie, index.html erneut zu laden — jetzt sollten Sie sehen, wie der Ball von allen Wänden abprallt und sich innerhalb des Canvas-Bereichs bewegt.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion in der Live-Demo unten überprüfen und damit experimentieren, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/dcw36opz/","","400")}}

## Nächste Schritte

Langsam sieht es mehr nach einem Spiel aus, aber wir können es noch in keiner Weise steuern — es ist höchste Zeit, dass wir [Spielerpaddle und Steuerungen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls) einführen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Physics", "Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls")}}
