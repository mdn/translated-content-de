---
title: Löschen durch Klicken
slug: Web/API/WebGL_API/By_example/Clearing_by_clicking
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Clearing_with_colors","Learn/WebGL/By_example/Simple_color_animation")}}

Dieses Beispiel zeigt, wie Sie Benutzerinteraktionen mit WebGL-Grafikoperationen kombinieren können, indem der Rendering-Kontext beim Klick des Benutzers mit einer zufälligen Farbe gelöscht wird.

## Löschen des Rendering-Kontextes mit zufälligen Farben

{{EmbedLiveSample("Clearing_the_rendering_context_with_random_colors",660,425)}}

Dieses Beispiel bietet eine einfache Darstellung der Kombination von {{Glossary("WebGL")}} und Benutzerinteraktion. Jedes Mal, wenn der Benutzer auf die Leinwand oder den Button klickt, wird die Leinwand mit einer neu zufällig gewählten Farbe gelöscht.

Beachten Sie, wie wir die {{Glossary("WebGL")}}-Funktionsaufrufe in die Event-Handler-Funktion einbetten.

```html
<p>
  Ein sehr einfaches WebGL-Programm, das dennoch einige Farbe und Benutzerinteraktion zeigt.
</p>
<p>
  Sie können wiederholt auf die leere Leinwand oder den Button unten klicken, um die Farbe zu ändern.
</p>
<canvas id="canvas-view">
  Ihr Browser scheint HTML-Canvas nicht zu unterstützen.
</canvas>
<button id="color-switcher">Klicken Sie hier, um die Farbe zu wechseln</button>
```

```css
body {
  text-align: center;
}
canvas {
  display: block;
  width: 280px;
  height: 210px;
  margin: auto;
  padding: 0;
  border: none;
  background-color: black;
}
button {
  display: inline-block;
  font-size: inherit;
  margin: auto;
  padding: 0.6em;
}
```

```js
window.addEventListener(
  "load",
  function setupWebGL(evt) {
    "use strict";

    // Reinigung nach uns selbst. Der Event-Handler entfernt
    // sich selbst, weil er nur einmal ausgeführt werden muss.
    window.removeEventListener(evt.type, setupWebGL, false);

    // Hinzufügen desselben Klick-Event-Handlers sowohl zur Leinwand als auch zum Button.
    const canvas = document.querySelector("#canvas-view");
    const button = document.querySelector("#color-switcher");
    canvas.addEventListener("click", switchColor, false);
    button.addEventListener("click", switchColor, false);

    // Eine Variable, um den WebGLRenderingContext zu halten.
    let gl;

    // Der Klick-Event-Handler.
    function switchColor() {
      // Bezugnahme auf die extern definierte gl-Variable.
      // Wenn undefiniert, versuchen, den WebGLRenderingContext zu erhalten.
      // Wenn fehlgeschlagen, den Benutzer über den Fehler informieren.
      // Andernfalls den Zeichenpuffer (die Viewport) initialisieren.
      if (!gl) {
        gl =
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (!gl) {
          alert(
            "Fehler beim Abrufen des WebGL-Kontextes.\n" +
              "Ihr Browser oder Gerät unterstützt möglicherweise kein WebGL.",
          );
          return;
        }
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      }
      // Einen zufälligen Farbwert mit einer Hilfsfunktion erhalten.
      const color = getRandomColor();
      // Setzen der Löschfarbe auf die zufällige Farbe.
      gl.clearColor(color[0], color[1], color[2], 1.0);
      // Löschen des Kontextes mit der neu gesetzten Farbe. Dies ist
      // der Funktionsaufruf, der tatsächlich das Zeichnen durchführt.
      gl.clear(gl.COLOR_BUFFER_BIT);
    }

    // Hilfsfunktion für zufällige Farben.
    function getRandomColor() {
      return [Math.random(), Math.random(), Math.random()];
    }
  },
  false,
);
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/clearing-by-clicking) verfügbar.

{{PreviousNext("Learn/WebGL/By_example/Clearing_with_colors","Learn/WebGL/By_example/Simple_color_animation")}}
