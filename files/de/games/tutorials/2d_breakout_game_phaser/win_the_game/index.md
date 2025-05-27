---
title: Gewinnen Sie das Spiel
slug: Games/Tutorials/2D_breakout_game_Phaser/Win_the_game
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/The_score", "Games/Workflows/2D_Breakout_game_Phaser/Extra_lives")}}

Dies ist der **12. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson12.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson12.html) finden.

Die Implementierung des Gewinnens in unserem Spiel ist ganz einfach: Wenn Sie alle Steine zerstören, gewinnen Sie.

## Wie gewinnt man?

Fügen Sie den folgenden neuen Code in Ihre `ballHitBrick()`-Funktion hinzu:

```js
function ballHitBrick(ball, brick) {
  brick.kill();
  score += 10;
  scoreText.setText(`Points: ${score}`);

  const countAlive = bricks.children.filter((b) => b.alive).length;
  if (countAlive === 0) {
    alert("You won the game, congratulations!");
    location.reload();
  }
}
```

Wir durchlaufen die Steine in der Gruppe mit `bricks.children` und überprüfen das Leben jedes Steins mit der `.alive`-Eigenschaft. Wenn keine Steine mehr leben, zeigen wir eine Gewinnnachricht an und starten das Spiel neu, sobald die Meldung geschlossen wird.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/u8waa4Lx/1/","","400")}}

## Nächste Schritte

Sowohl das Verlieren als auch das Gewinnen sind implementiert, sodass das Kerngameplay unseres Spiels abgeschlossen ist. Jetzt fügen wir etwas Extra hinzu — wir geben dem Spieler drei [Leben](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives) anstelle von einem.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/The_score", "Games/Workflows/2D_Breakout_game_Phaser/Extra_lives")}}
