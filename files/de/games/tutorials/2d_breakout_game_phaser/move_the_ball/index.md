---
title: Bewegen Sie den Ball
slug: Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen", "Games/Workflows/2D_Breakout_game_Phaser/Physics")}}

Dies ist der **4. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson04.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson04.html).

Wir haben unseren blauen Ball auf dem Bildschirm, aber er tut nichts - es wäre cool, ihn irgendwie in Bewegung zu bringen. Dieser Artikel beschreibt, wie das geht.

## Aktualisieren der Position des Balls in jedem Frame

Erinnern Sie sich an die `update()`-Funktion und deren Definition? Der Code darin wird in jedem Frame ausgeführt, daher ist es der perfekte Ort, um den Code zu platzieren, der die Position des Balls auf dem Bildschirm aktualisiert. Fügen Sie die folgenden neuen Codezeilen in `update()` hinzu, wie gezeigt:

```js
function update() {
  ball.x += 1;
  ball.y += 1;
}
```

Der obige Code fügt in jedem Frame 1 zu den `x`- und `y`-Eigenschaften hinzu, die die Ballkoordinaten auf der Leinwand darstellen. Laden Sie index.html neu und Sie sollten sehen, wie der Ball über den Bildschirm rollt.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/g1cfp0vv/","","400")}}

## Nächste Schritte

Der nächste Schritt ist, eine grundlegende Kollisionserkennung hinzuzufügen, damit unser Ball von den Wänden abprallen kann. Dies würde mehrere Codezeilen erfordern – ein deutlich komplexerer Schritt, als wir bisher gesehen haben, besonders wenn wir auch Paddel- und Ziegelkollisionen hinzufügen wollen – aber glücklicherweise erlaubt uns Phaser, dies viel einfacher zu erledigen, als wenn wir reines JavaScript verwenden wollten.

In jedem Fall werden wir, bevor wir all das tun, zuerst Phasers [Physik-](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics) Engines einführen und einige Vorbereitungsarbeiten durchführen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen", "Games/Workflows/2D_Breakout_game_Phaser/Physics")}}
