---
title: Skalierung
slug: Games/Tutorials/2D_breakout_game_Phaser/Scaling
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework", "Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}

Dies ist der **2. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Wir werden an der Skalierung arbeiten, die sich darauf bezieht, wie die Spielfläche auf verschiedenen Bildschirmgrößen skaliert wird. Wir können das Spiel so konfigurieren, dass es auf jede Bildschirmgröße skaliert, indem wir `scale` während der Initialisierung einstellen, damit wir uns später nicht darum kümmern müssen.

## Das Phaser-Skalierungsobjekt

Die `scale`-Eigenschaft des `config`-Objekts ermöglicht es uns einzustellen, wie die Spielfläche skaliert wird. Aktualisieren Sie Ihr `config`-Objekt wie folgt:

```js
const config = {
  // ...
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};
```

Die `mode`-Eigenschaft in `scale` bietet einige verschiedene Optionen, wie die Fläche skaliert werden kann:

- `NO_SCALE`—nichts wird skaliert (der Standardwert).
- `ENVELOP`—passt Breite und Höhe automatisch an, um den gesamten Zielbereich unter Beibehaltung des Seitenverhältnisses abzudecken. Es kann weiter als die Zielgröße hinausragen.
- `FIT`—skaliert die Fläche, um den verfügbaren Raum zu füllen, während das Seitenverhältnis unangetastet bleibt. Abhängig vom Seitenverhältnis kann es den gesamten Raum nicht abdecken.
- `HEIGHT_CONTROLS_WIDTH`—passt die Breite der Fläche basierend auf der Höhe an.
- `WIDTH_CONTROLS_HEIGHT`—passt die Höhe der Fläche basierend auf der Breite an.
- `RESIZE`—passt den sichtbaren Bereich der Fläche an, um den gesamten verfügbaren _Eltern_-Bereich abzudecken, unabhängig vom Seitenverhältnis.
- `EXPAND`—passt den sichtbaren Bereich der Fläche an, um den gesamten verfügbaren _Eltern_-Bereich wie im RESIZE-Modus zu füllen und skaliert die Größe der Fläche, um innerhalb des sichtbaren Bereichs wie im FIT-Modus zu passen.

Die andere Eigenschaft, `autoCenter`, ist verantwortlich für die horizontale und vertikale Ausrichtung des Canvas-Elements, sodass es immer zentriert auf dem Bildschirm bleibt, unabhängig von der Größe.

## Hinzufügen einer benutzerdefinierten Hintergrundfarbe für das Canvas

Wir können auch eine benutzerdefinierte Hintergrundfarbe zu unserem Canvas hinzufügen, damit es nicht schwarz bleibt. Das Konfigurationsobjekt hat eine `backgroundColor`-Eigenschaft für diesen Zweck, die wir mithilfe der CSS-Farbdefinitionssyntax festlegen können. Fügen Sie die folgende Zeile zu Ihrem `config`-Objekt hinzu:

```js
const config = {
  // ...
  backgroundColor: "#eeeeee",
};
```

## Vergleichen Sie Ihren Code

Hier ist, was Sie bisher haben sollten, live ausgeführt. Um dessen Quellcode anzuzeigen, klicken Sie auf die Schaltfläche „Play“.

```html hidden
<script src="https://cdnjs.cloudflare.com/ajax/libs/phaser/3.90.0/phaser.js"></script>
```

```css hidden
* {
  padding: 0;
  margin: 0;
}
```

```js hidden
class ExampleScene extends Phaser.Scene {
  preload() {}
  create() {}
  update() {}
}

const config = {
  type: Phaser.CANVAS,
  width: 480,
  height: 320,
  scene: ExampleScene,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: "#eeeeee",
};

const game = new Phaser.Game(config);
```

{{EmbedLiveSample("vergleichen Sie Ihren Code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Nun, da wir die Skalierung für unser Spiel eingerichtet haben, gehen wir zur dritten Lektion über und arbeiten daran, [die Assets zu laden und sie auf dem Bildschirm anzuzeigen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework", "Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}
