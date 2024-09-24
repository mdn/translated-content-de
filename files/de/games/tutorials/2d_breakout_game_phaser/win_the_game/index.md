---
title: Gewinnen Sie das Spiel
slug: Games/Tutorials/2D_breakout_game_Phaser/Win_the_game
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/The_score", "Games/Workflows/2D_Breakout_game_Phaser/Extra_lives")}}

Dies ist der **12. Schritt** von 16 des [Gamedev Phaser-Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson12.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson12.html).

Das Implementieren des Gewinnens in unserem Spiel ist recht einfach: Wenn Sie es schaffen, alle Steine zu zerstören, dann gewinnen Sie.

## Wie gewinnt man?

Fügen Sie den folgenden neuen Code in Ihre `ballHitBrick()`-Funktion ein:

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

Wir durchlaufen die Steine in der Gruppe mithilfe von `bricks.children` und überprüfen die Lebensfähigkeit jedes einzelnen mit der `.alive()`-Methode des Steins. Wenn keine Steine mehr übrig sind, zeigen wir eine Gewinnnachricht und starten das Spiel neu, sobald der Alarm geschlossen wird.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im unten stehenden Live-Demo überprüfen und damit herumspielen, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/u8waa4Lx/1/","","400")}}

## Nächste Schritte

Sowohl das Verlieren als auch das Gewinnen sind implementiert, sodass das Kernspiel unseres Spiels abgeschlossen ist. Jetzt fügen wir etwas Extra hinzu – wir geben dem Spieler drei [Leben](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives) anstelle von einem.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/The_score", "Games/Workflows/2D_Breakout_game_Phaser/Extra_lives")}}
