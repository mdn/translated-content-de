---
title: Win the game
slug: Games/Tutorials/2D_breakout_game_Phaser/Win_the_game
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/The_score", "Games/Workflows/2D_Breakout_game_Phaser/Extra_lives")}}

Dies ist der **12. Schritt** von 16 des [Gamedev Phaser Leitfadens](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson12.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson12.html).

Das Gewinnen in unserem Spiel zu implementieren ist ziemlich einfach: Wenn Sie es schaffen, alle Ziegel zu zerstören, gewinnen Sie.

## Wie gewinnt man?

Fügen Sie den folgenden neuen Code in Ihre `ballHitBrick()`-Funktion hinzu:

```js
function ballHitBrick(ball, brick) {
  brick.kill();
  score += 10;
  scoreText.setText(`Points: ${score}`);

  let count_alive = 0;
  for (let i = 0; i < bricks.children.length; i++) {
    if (bricks.children[i].alive) {
      count_alive++;
    }
  }
  if (count_alive === 0) {
    alert("You won the game, congratulations!");
    location.reload();
  }
}
```

Wir durchlaufen die Ziegel in der Gruppe mit `bricks.children` und überprüfen mit der `.alive()` Methode jedes Ziegels, ob es noch lebt. Wenn keine Ziegel mehr am Leben sind, zeigen wir eine Gewinnmeldung an und starten das Spiel neu, sobald der Alarm geschlossen wird.

## Vergleichen Sie Ihren Code

Sie können den vollständigen Code für diese Lektion im folgenden Live-Demo überprüfen und damit spielen, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/u8waa4Lx/1/","","400")}}

## Nächste Schritte

Sowohl Verlieren als auch Gewinnen sind implementiert, sodass das Kern-Gameplay unseres Spiels abgeschlossen ist. Lassen Sie uns nun etwas Extra hinzufügen – wir geben dem Spieler drei [Leben](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives) anstelle von einem.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/The_score", "Games/Workflows/2D_Breakout_game_Phaser/Extra_lives")}}
