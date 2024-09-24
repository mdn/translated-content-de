---
title: Skalierung
slug: Games/Tutorials/2D_breakout_game_Phaser/Scaling
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework", "Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}

Dies ist der **2. Schritt** von 16 des [Gamedev Phaser-Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie können den Quellcode, so wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson02.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson02.html) finden.

Skalierung bezieht sich darauf, wie das Spiel-Canvas auf unterschiedlichen Bildschirmgrößen skaliert wird. Wir können das Spiel während der Preload-Phase automatisch so skalieren, dass es auf jede Bildschirmgröße passt, sodass wir uns später keine Sorgen mehr darüber machen müssen.

## Das Phaser-Skalierungsobjekt

Es gibt ein spezielles `scale`-Objekt in Phaser mit einigen praktischen Methoden und Eigenschaften. Aktualisieren Sie Ihre bestehende `preload()`-Funktion wie folgt:

```js
function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
}
```

`scaleMode` bietet ein paar verschiedene Optionen, wie die Canvas skaliert werden kann:

- `NO_SCALE` — nichts wird skaliert.
- `EXACT_FIT` — skaliert die Canvas so, dass sie den gesamten verfügbaren Raum sowohl vertikal als auch horizontal füllt, ohne das Seitenverhältnis beizubehalten.
- `SHOW_ALL` — skaliert die Canvas, behält aber das Seitenverhältnis unverändert bei, sodass Bilder nicht wie im vorherigen Modus verzerrt werden. Es könnten schwarze Streifen an den Bildschirmrändern sichtbar sein, aber das können wir akzeptieren.
- `RESIZE` — erstellt die Canvas mit derselben Größe wie die verfügbare Breite und Höhe, sodass Sie die Objekte in Ihrem Spiel dynamisch platzieren müssen; dies ist eher ein fortgeschrittener Modus.
- `USER_SCALE` — ermöglicht benutzerdefinierte dynamische Skalierung, wobei Sie die Größe, Skalierung und das Verhältnis selbst berechnen; auch dies ist eher ein fortgeschrittener Modus.

Die anderen beiden Codezeilen in der `preload()`-Funktion sind dafür verantwortlich, dass das Canvas-Element horizontal und vertikal ausgerichtet wird, sodass es unabhängig von der Größe immer zentriert auf dem Bildschirm ist.

## Hinzufügen einer benutzerdefinierten Hintergrundfarbe für die Canvas

Wir können auch eine benutzerdefinierte Hintergrundfarbe für unser Canvas hinzufügen, damit es nicht schwarz bleibt. Das `stage`-Objekt hat eine `backgroundColor`-Eigenschaft für diesen Zweck, die wir mit der CSS-Farbdefinitionssyntax festlegen können. Fügen Sie folgende Zeile unter den anderen drei hinzu, die Sie zuvor hinzugefügt haben:

```js
game.stage.backgroundColor = "#eee";
```

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/6a64vecL/","","400")}}

## Nächste Schritte

Jetzt, da wir die Skalierung für unser Spiel eingerichtet haben, gehen wir weiter zur dritten Lektion und schauen, wie wir [die Assets laden und auf dem Bildschirm anzeigen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen) können.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework", "Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}
