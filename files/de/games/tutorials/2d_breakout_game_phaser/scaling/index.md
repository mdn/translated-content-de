---
title: Skalierung
slug: Games/Tutorials/2D_breakout_game_Phaser/Scaling
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework", "Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}

Dies ist der **2. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie können den Quellcode, so wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson02.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson02.html) finden.

Skalierung bezieht sich darauf, wie die Spielfläche auf verschiedenen Bildschirmgrößen skaliert wird. Wir können das Spiel während der Preload-Phase automatisch an jede Bildschirmgröße anpassen, sodass wir uns später keine Gedanken mehr darüber machen müssen.

## Das Phaser Scale-Objekt

In Phaser gibt es ein spezielles `scale`-Objekt mit einigen praktischen Methoden und Eigenschaften. Aktualisieren Sie Ihre vorhandene `preload()`-Funktion wie folgt:

```js
function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
}
```

`scaleMode` hat verschiedene Optionen dafür, wie das Canvas skaliert werden kann:

- `NO_SCALE` — nichts wird skaliert.
- `EXACT_FIT` — skaliert das Canvas, um den gesamten verfügbaren Raum sowohl vertikal als auch horizontal zu füllen, ohne das Seitenverhältnis beizubehalten.
- `SHOW_ALL` — skaliert das Canvas, hält das Seitenverhältnis jedoch unangetastet, sodass Bilder nicht verzerrt werden wie im vorherigen Modus. Es können schwarze Streifen an den Bildschirmrändern sichtbar sein, aber das können wir akzeptieren.
- `RESIZE` — erstellt das Canvas mit der gleichen Größe wie die verfügbare Breite und Höhe, sodass Sie die Objekte in Ihrem Spiel dynamisch platzieren müssen; dies ist eher ein fortgeschrittener Modus.
- `USER_SCALE` — ermöglicht benutzerdefinierte dynamische Skalierungen, indem Sie die Größe, Skalierung und das Verhältnis selbst berechnen; auch dies ist eher ein fortgeschrittener Modus.

Die anderen beiden Codezeilen in der `preload()`-Funktion sind dafür verantwortlich, das Canvas-Element horizontal und vertikal auszurichten, sodass es unabhängig von der Größe immer zentriert auf dem Bildschirm ist.

## Hinzufügen einer benutzerdefinierten Hintergrundfarbe für das Canvas

Wir können unserem Canvas auch eine benutzerdefinierte Hintergrundfarbe hinzufügen, damit es nicht schwarz bleibt. Das `stage`-Objekt hat eine `backgroundColor`-Eigenschaft zu diesem Zweck, die wir mithilfe der CSS-Farbdefinition definieren können. Fügen Sie die folgende Zeile unter den drei bereits hinzugefügten Zeilen hinzu:

```js
game.stage.backgroundColor = "#eee";
```

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im Live-Demo unten überprüfen und damit herumspielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/6a64vecL/","","400")}}

## Nächste Schritte

Jetzt haben wir die Skalierung für unser Spiel eingerichtet. Lassen Sie uns zur dritten Lektion übergehen und herausfinden, wie man [die Assets lädt und auf dem Bildschirm darstellt](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework", "Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}
