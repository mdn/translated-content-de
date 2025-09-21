---
title: Leeren durch Klicken
slug: Web/API/WebGL_API/By_example/Clearing_by_clicking
l10n:
  sourceCommit: 0ea88f719ad95045993f8a54d5bbaee857617380
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Clearing_with_colors","Web/API/WebGL_API/By_example/Simple_color_animation")}}

Dieses Beispiel zeigt, wie man Benutzerinteraktion mit WebGL-Grafikoperationen kombiniert, indem der Rendering-Kontext mit einer zufälligen Farbe geleert wird, wenn der Benutzer klickt.

## Leeren des Rendering-Kontexts mit zufälligen Farben

{{EmbedLiveSample("Clearing_the_rendering_context_with_random_colors",660,425)}}

Dieses Beispiel veranschaulicht, wie man {{Glossary("WebGL", "WebGL")}} mit Benutzerinteraktion kombiniert. Jedes Mal, wenn der Benutzer auf die Leinwand oder den Button klickt, wird die Leinwand mit einer neuen zufällig gewählten Farbe geleert.

Beachten Sie, wie wir die {{Glossary("WebGL", "WebGL")}} Funktionsaufrufe innerhalb der Ereignisbehandlungsfunktion einbetten.

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
// Adding the same click event handler to both canvas and
// button.
const canvas = document.querySelector("#canvas-view");
const button = document.querySelector("#color-switcher");
canvas.addEventListener("click", switchColor);
button.addEventListener("click", switchColor);

// A variable to hold the WebGLRenderingContext.
const gl = canvas.getContext("webgl");
gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

// The click event handler.
function switchColor() {
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
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/clearing-by-clicking) verfügbar.

{{PreviousNext("Web/API/WebGL_API/By_example/Clearing_with_colors","Web/API/WebGL_API/By_example/Simple_color_animation")}}
