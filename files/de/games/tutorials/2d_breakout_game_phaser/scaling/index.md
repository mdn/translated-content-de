---
title: Skalierung
slug: Games/Tutorials/2D_breakout_game_Phaser/Scaling
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework", "Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}

Dies ist der **2. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson02.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson02.html).

Skalierung bezieht sich darauf, wie das Spielfeld auf verschiedenen Bildschirmgrößen skaliert wird. Wir können das Spiel während der Preload-Phase automatisch an jede Bildschirmgröße anpassen, sodass wir uns später keine Sorgen mehr machen müssen.

## Das Phaser-Skalierungsobjekt

In Phaser gibt es ein spezielles `scale` Objekt mit einigen nützlichen Methoden und Eigenschaften. Aktualisieren Sie Ihre vorhandene `preload()` Funktion wie folgt:

```js
function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
}
```

Für `scaleMode` stehen verschiedene Optionen zur Verfügung, wie die Canvas skaliert werden kann:

- `NO_SCALE` — Es wird nichts skaliert.
- `EXACT_FIT` — Skaliert die Canvas, um den gesamten verfügbaren Platz sowohl vertikal als auch horizontal zu füllen, ohne das Seitenverhältnis beizubehalten.
- `SHOW_ALL` — Skaliert die Canvas, behält jedoch das Seitenverhältnis bei, sodass Bilder nicht wie im vorherigen Modus verzerrt werden. Es können schwarze Streifen an den Bildschirmrändern sichtbar sein, aber das können wir tolerieren.
- `RESIZE` — Erstellt die Canvas mit der gleichen Größe wie die verfügbare Breite und Höhe, sodass Sie die Objekte in Ihrem Spiel dynamisch platzieren müssen; dies ist eher ein fortgeschrittener Modus.
- `USER_SCALE` — Ermöglicht benutzerdefinierte dynamische Skalierung, wobei Größe, Skala und Verhältnis selbst berechnet werden; auch dies ist ein eher fortgeschrittener Modus.

Die anderen beiden Codezeilen in der `preload()` Funktion sind dafür verantwortlich, das Canvas-Element horizontal und vertikal auszurichten, sodass es unabhängig von der Größe immer zentriert auf dem Bildschirm ist.

## Hinzufügen einer benutzerdefinierten Canvas-Hintergrundfarbe

Wir können auch eine benutzerdefinierte Hintergrundfarbe zu unserem Canvas hinzufügen, damit es nicht schwarz bleibt. Das `stage` Objekt hat eine `backgroundColor` Eigenschaft zu diesem Zweck, die wir mit der CSS-Farbdefinitionssyntax setzen können. Fügen Sie die folgende Zeile unter den zuvor hinzugefügten drei Zeilen hinzu:

```js
game.stage.backgroundColor = "#eee";
```

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im folgenden Live-Demo überprüfen und damit spielen, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/6a64vecL/","","400")}}

## Nächste Schritte

Nachdem wir die Skalierung für unser Spiel eingerichtet haben, fahren wir mit der dritten Lektion fort und arbeiten daran, [die Assets zu laden und sie auf dem Bildschirm anzuzeigen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework", "Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}
