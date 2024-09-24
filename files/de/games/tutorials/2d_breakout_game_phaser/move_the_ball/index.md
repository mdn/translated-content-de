---
title: Bewege den Ball
slug: Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen", "Games/Workflows/2D_Breakout_game_Phaser/Physics")}}

Dies ist der **4. Schritt** von 16 im [Gamedev Phaser Tutorial](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson04.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson04.html).

Wir haben unseren blauen Ball auf dem Bildschirm gedruckt, aber er tut nichts – es wäre cool, ihn irgendwie in Bewegung zu setzen. Dieser Artikel erklärt, wie das geht.

## Aktualisieren der Position des Balls in jedem Frame

Erinnern Sie sich an die `update()` Funktion und deren Definition? Der Code innerhalb dieser Funktion wird in jedem Frame ausgeführt, daher ist es der perfekte Ort, um den Code zu platzieren, der die Position des Balls auf dem Bildschirm aktualisiert. Fügen Sie die folgenden neuen Zeilen innerhalb von `update()` hinzu, wie gezeigt:

```js
function update() {
  ball.x += 1;
  ball.y += 1;
}
```

Der obige Code addiert bei jedem Frame 1 zu den `x`- und `y`-Eigenschaften, die die Ballkoordinaten auf der Leinwand darstellen. Laden Sie index.html neu und Sie sollten sehen, wie der Ball über den Bildschirm rollt.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion in der folgenden Live-Demo überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/g1cfp0vv/","","400")}}

## Nächste Schritte

Der nächste Schritt ist, eine grundlegende Kollisionsabfrage hinzuzufügen, damit unser Ball von den Wänden abprallen kann. Dies würde mehrere Codezeilen erfordern – ein deutlich komplexerer Schritt als das, was wir bisher gesehen haben, insbesondere wenn wir auch Kollisionen mit Schlägern und Ziegeln hinzufügen wollen – aber zum Glück ermöglicht uns Phaser, dies viel einfacher zu tun, als wenn wir reines JavaScript verwenden wollten.

In jedem Fall werden wir, bevor wir all das tun, zunächst die [Physik](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics) Engines von Phaser einführen und einige Vorbereitungsarbeiten durchführen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen", "Games/Workflows/2D_Breakout_game_Phaser/Physics")}}
