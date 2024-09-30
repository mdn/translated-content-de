---
title: Gewinnen Sie das Spiel
slug: Games/Tutorials/2D_breakout_game_Phaser/Win_the_game
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/The_score", "Games/Workflows/2D_Breakout_game_Phaser/Extra_lives")}}

Dies ist der **12. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson12.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson12.html).

Das Implementieren des Gewinnens in unserem Spiel ist ziemlich einfach: Wenn Sie alle Steine zerstören, dann gewinnen Sie.

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

Wir durchlaufen die Steine in der Gruppe mit `bricks.children` und überprüfen das Überleben jedes Steins mit der `.alive()`-Methode. Wenn keine Steine mehr übrig sind, die am Leben sind, zeigen wir eine Gewinnmeldung und starten das Spiel neu, sobald die Benachrichtigung geschlossen wird.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/u8waa4Lx/1/","","400")}}

## Nächste Schritte

Sowohl Verlieren als auch Gewinnen sind implementiert, sodass das Kernspiel unseres Spiels abgeschlossen ist. Fügen wir nun etwas Extras hinzu – wir geben dem Spieler drei [Leben](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives) anstelle von einem.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/The_score", "Games/Workflows/2D_Breakout_game_Phaser/Extra_lives")}}
