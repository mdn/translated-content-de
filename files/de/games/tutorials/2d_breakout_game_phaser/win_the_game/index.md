---
title: Gewinnen Sie das Spiel
slug: Games/Tutorials/2D_breakout_game_Phaser/Win_the_game
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/The_score", "Games/Workflows/2D_Breakout_game_Phaser/Extra_lives")}}

Dies ist der **12. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson12.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson12.html) finden.

Das Implementieren des Gewinnens in unserem Spiel ist recht einfach: Wenn Sie alle Ziegel zerstören, dann gewinnen Sie.

## Wie gewinnt man?

Fügen Sie den folgenden neuen Code in Ihre `ballHitBrick()`-Funktion ein:

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

Wir durchlaufen die Ziegel im `bricks.children`-Array der Gruppe und überprüfen mit der `.alive`-Eigenschaft jedes Ziegels, ob sie noch "lebendig" sind. Wenn keine Ziegel mehr übrig sind, zeigen wir eine Gewinnnachricht an und starten das Spiel neu, sobald die Benachrichtigung beendet ist.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im untenstehenden Live-Demo überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/u8waa4Lx/1/","","400")}}

## Nächste Schritte

Sowohl Verlieren als auch Gewinnen sind implementiert, sodass das Kernspiel unseres Spiels abgeschlossen ist. Lassen Sie uns nun etwas extra hinzufügen – wir geben dem Spieler statt einem, drei [Leben](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/The_score", "Games/Workflows/2D_Breakout_game_Phaser/Extra_lives")}}
