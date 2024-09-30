---
title: Den Ball bewegen
slug: Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen", "Games/Workflows/2D_Breakout_game_Phaser/Physics")}}

Dies ist der **4. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson04.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson04.html) finden.

Unser blauer Ball wird auf dem Bildschirm angezeigt, tut aber nichts – es wäre toll, ihn irgendwie zu bewegen. Dieser Artikel behandelt, wie Sie genau das erreichen können.

## Die Position des Balls in jedem Frame aktualisieren

Erinnern Sie sich an die `update()`-Funktion und ihre Definition? Der Code innerhalb dieser Funktion wird in jedem Frame ausgeführt, daher ist es der perfekte Ort, um den Ball auf dem Bildschirm zu aktualisieren. Fügen Sie die folgenden neuen Codezeilen innerhalb von `update()` hinzu, wie gezeigt:

```js
function update() {
  ball.x += 1;
  ball.y += 1;
}
```

Der obige Code addiert in jedem Frame 1 zu den `x`- und `y`-Eigenschaften, die die Ballkoordinaten auf der Leinwand darstellen. Laden Sie die index.html neu, und Sie sollten den Ball über den Bildschirm rollen sehen.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im untenstehenden Live-Demo einsehen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/g1cfp0vv/","","400")}}

## Nächste Schritte

Der nächste Schritt ist das Hinzufügen einer einfachen Kollisionserkennung, damit unser Ball von den Wänden abprallen kann. Dies würde mehrere Codezeilen erfordern – ein wesentlich komplexerer Schritt als bisher gesehen, insbesondere wenn wir auch Schläger- und Ziegelkollisionen hinzufügen möchten – aber zum Glück ermöglicht Phaser, dies viel einfacher zu machen, als wenn wir pures JavaScript verwenden würden.

In jedem Fall werden wir zuerst Phasers [physikalische](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics) Engines vorstellen und einige Vorarbeiten leisten.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen", "Games/Workflows/2D_Breakout_game_Phaser/Physics")}}
