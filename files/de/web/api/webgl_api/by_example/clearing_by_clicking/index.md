---
title: Löschen durch Klicken
slug: Web/API/WebGL_API/By_example/Clearing_by_clicking
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Clearing_with_colors","Web/API/WebGL_API/By_example/Simple_color_animation")}}

Dieses Beispiel zeigt, wie man Benutzerinteraktion mit WebGL-Grafikoperationen kombiniert, indem der Rendering-Kontext mit einer zufälligen Farbe gelöscht wird, wenn der Benutzer klickt.

## Den Rendering-Kontext mit zufälligen Farben löschen

{{EmbedLiveSample("Clearing_the_rendering_context_with_random_colors",660,425)}}

Dieses Beispiel veranschaulicht, wie man {{Glossary("WebGL", "WebGL")}} und Benutzerinteraktion kombiniert. Jedes Mal, wenn der Benutzer auf das Canvas oder den Button klickt, wird das Canvas mit einer neuen, zufällig gewählten Farbe gelöscht.

Beachten Sie, wie wir die {{Glossary("WebGL", "WebGL")}}-Funktionsaufrufe in die Event-Handler-Funktion einbetten.

```html
<p>
  A very simple WebGL program that still shows some color and user interaction.
</p>
<p>
  You can repeatedly click the empty canvas or the button below to change color.
</p>
<canvas id="canvas-view">
  Your browser does not seem to support HTML canvas.
</canvas>
<button id="color-switcher">Press here to switch color</button>
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

    // Cleaning after ourselves. The event handler removes
    // itself, because it only needs to run once.
    window.removeEventListener(evt.type, setupWebGL, false);

    // Adding the same click event handler to both canvas and
    // button.
    const canvas = document.querySelector("#canvas-view");
    const button = document.querySelector("#color-switcher");
    canvas.addEventListener("click", switchColor, false);
    button.addEventListener("click", switchColor, false);

    // A variable to hold the WebGLRenderingContext.
    let gl;

    // The click event handler.
    function switchColor() {
      // Referring to the externally defined gl variable.
      // If undefined, try to obtain the WebGLRenderingContext.
      // If failed, alert user of failure.
      // Otherwise, initialize the drawing buffer (the viewport).
      if (!gl) {
        gl =
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (!gl) {
          alert(
            "Failed to get WebGL context.\n" +
              "Your browser or device may not support WebGL.",
          );
          return;
        }
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      }
      // Get a random color value using a helper function.
      const color = getRandomColor();
      // Set the clear color to the random color.
      gl.clearColor(color[0], color[1], color[2], 1.0);
      // Clear the context with the newly set color. This is
      // the function call that actually does the drawing.
      gl.clear(gl.COLOR_BUFFER_BIT);
    }

    // Random color helper function.
    function getRandomColor() {
      return [Math.random(), Math.random(), Math.random()];
    }
  },
  false,
);
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/clearing-by-clicking) verfügbar.

{{PreviousNext("Web/API/WebGL_API/By_example/Clearing_with_colors","Web/API/WebGL_API/By_example/Simple_color_animation")}}
