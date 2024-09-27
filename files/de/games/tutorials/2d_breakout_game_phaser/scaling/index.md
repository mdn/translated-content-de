---
title: Skalierung
slug: Games/Tutorials/2D_breakout_game_Phaser/Scaling
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework", "Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}

Dies ist der **2. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen soll, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson02.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson02.html).

Skalierung bezieht sich darauf, wie das Spiel-Canvas auf verschiedenen Bildschirmgrößen skaliert wird. Wir können das Spiel so skalieren, dass es automatisch auf jede Bildschirmgröße passt, und zwar während der Preload-Phase, damit wir uns später nicht darum kümmern müssen.

## Das Phaser scale-Objekt

In Phaser gibt es ein spezielles `scale`-Objekt mit einigen nützlichen Methoden und Eigenschaften. Aktualisieren Sie Ihre vorhandene `preload()`-Funktion wie folgt:

```js
function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
}
```

`scaleMode` hat einige verschiedene Optionen, wie das Canvas skaliert werden kann:

- `NO_SCALE` — nichts wird skaliert.
- `EXACT_FIT` — skaliert das Canvas, um den gesamten verfügbaren Raum sowohl vertikal als auch horizontal zu füllen, ohne das Seitenverhältnis beizubehalten.
- `SHOW_ALL` — skaliert das Canvas, behält jedoch das Seitenverhältnis unverändert, sodass Bilder nicht verzerrt werden wie im vorherigen Modus. Es kann schwarze Streifen an den Bildschirmrändern geben, aber damit können wir leben.
- `RESIZE` — erstellt das Canvas mit der gleichen Größe wie die verfügbare Breite und Höhe, sodass Sie die Objekte innerhalb Ihres Spiels dynamisch platzieren müssen; dies ist eher ein fortgeschrittener Modus.
- `USER_SCALE` — ermöglicht Ihnen benutzerdefinierte dynamische Skalierung, indem Sie die Größe, Skalierung und das Verhältnis selbst berechnen; auch dies ist ein fortgeschrittener Modus.

Die anderen zwei Codezeilen in der `preload()`-Funktion sind dafür verantwortlich, das Canvas-Element horizontal und vertikal auszurichten, sodass es unabhängig von der Größe immer zentriert auf dem Bildschirm angezeigt wird.

## Hinzufügen einer benutzerdefinierten Canvas-Hintergrundfarbe

Wir können unserem Canvas auch eine benutzerdefinierte Hintergrundfarbe hinzufügen, damit es nicht schwarz bleibt. Das `stage`-Objekt hat eine `backgroundColor`-Eigenschaft zu diesem Zweck, die wir mit der CSS-Farbdefinitionssyntax setzen können. Fügen Sie die folgende Zeile unterhalb der drei anderen hinzu, die Sie zuvor hinzugefügt haben:

```js
game.stage.backgroundColor = "#eee";
```

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im untenstehenden Live-Demo einsehen und damit herumspielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/6a64vecL/","","400")}}

## Nächste Schritte

Nachdem wir nun die Skalierung für unser Spiel eingerichtet haben, lassen Sie uns zur dritten Lektion übergehen und herausfinden, wie wir [die Assets laden und sie auf dem Bildschirm anzeigen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework", "Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}
