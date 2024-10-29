---
title: Farbmaskierung
slug: Web/API/WebGL_API/By_example/Color_masking
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Simple_color_animation","Learn/WebGL/By_example/Basic_scissoring")}}

Dieses WebGL-Beispiel modifiziert zufällige Farben, indem eine Farbmaskierung angewendet wird, um den Bereich der angezeigten Farben auf bestimmte Farbtöne zu begrenzen.

## Maskierung zufälliger Farben

{{EmbedLiveSample("Masking_random_colors",660,425)}}

In diesem Beispiel wird die zufällige Farbanimation durch die Anwendung einer Farbmaskierung mit [`colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask) modifiziert. Sie können sich die Farbmaskierungsoperation so vorstellen, als ob Sie durch getöntes Glas oder einen Farbfilter auf die farbige Leinwand blicken. Indem Sie die blauen und grünen Kanäle maskieren, ermöglichen Sie nur die Aktualisierung der roten Komponente der Pixel, und es ist, als ob Sie durch eine rot getönte Brille sehen würden.

Farbmaskierung erlaubt es uns, einige Grundlagen der [Farbtheorie](https://en.wikipedia.org/wiki/Color_theory) zu demonstrieren. Indem bestimmte Kanäle maskiert werden, verschieben wir die angezeigten Farben tatsächlich in Richtung der Komplementärfarbe. Das Maskieren von sowohl Blau als auch Rot würde uns Grüntöne geben. Das Maskieren nur des blauen Kanals würde uns Gelbtöne geben (einschließlich Orangetöne, Brauntöne, Oliv- und Gelbgrüntöne), die Komplementärfarbe von Blau. Ähnlich würde das Maskieren nur von Grün uns Magentatöne geben (auch Lila, Karmesinrot usw.), und das Maskieren nur von Rot würde Cyan-Töne geben (auch Seegrün, Blautöne usw.).

Beachten Sie, dass die Aufrufe zu `colorMask()` nur erfolgen, wenn der Benutzer auf einen der Umschaltknöpfe klickt. Das Rendering erfolgt jede Sekunde mit dem Timer. Der Farbmaskenzustand von {{Glossary("WebGL", "WebGL")}} bleibt erhalten, sodass wir nicht in jedem Frame `colorMask()` aufrufen müssen, um die Farbmaske einzurichten. Dies ist ein wichtiger Aspekt der WebGL-Zustandsmaschine. Es ermöglicht uns, WebGL in einer einzelnen Initialisierungsphase einzurichten und dann einfach für jeden Frame die Zeichenbefehle auszuführen.

Farbmaskierung gibt Ihnen feine Kontrolle über die Aktualisierung der Pixelwerte auf dem Bildschirm. Indem Sie die Farbkanäle begrenzen, die durch jeden Zeichenbefehl geschrieben werden, können Sie jeden Kanal z. B. verwenden, um ein unterschiedliches Graustufenbild zu speichern. Alternativ können Sie die {{Glossary("RGB", "RGB")}}-Komponenten für Farbe, aber die Alphakomponente für einige von Ihnen erfundene benutzerdefinierte Pixel-Daten verwenden.

Schließlich lehrt uns die Farbmaskierung, dass {{Glossary("WebGL", "WebGL")}} nicht nur eine Zustandsmaschine ist, sondern auch eine _Grafikpipeline_. Das bedeutet, dass Grafikoperationen in WebGL in einer bestimmten Reihenfolge ausgeführt werden, wobei das Ergebnis jeder Operation als Eingabe der nächsten dient. So setzt z.B. die Löschoperation den Wert jedes Pixels auf die gewählte Klarfarbe. Die Maskierung erfolgt später in der Pipeline und modifiziert den Pixel-Farbwert, sodass das Endergebnis auf dem Bildschirm die Klarfarbe ist, getönt durch die Farbmaske.

```html
<p>Tinting the displayed colors with color masking.</p>
<canvas>Your browser does not seem to support HTML canvas.</canvas>
<button id="red-toggle">On</button>
<button id="green-toggle">On</button>
<button id="blue-toggle">On</button>
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
  font-family: serif;
  font-size: inherit;
  font-weight: 900;
  color: white;
  margin: auto;
  padding: 0.6em 1.2em;
}
#red-toggle {
  background-color: red;
}
#green-toggle {
  background-color: green;
}
#blue-toggle {
  background-color: blue;
}
```

```js
window.addEventListener(
  "load",
  function setupAnimation(evt) {
    "use strict";
    window.removeEventListener(evt.type, setupAnimation, false);

    const canvas = document.querySelector("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      document.querySelector("p").textContent =
        "Failed to get WebGL context. Your browser or device may not support WebGL.";
      return;
    }
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

    const timer = setInterval(drawAnimation, 1000);

    const mask = [true, true, true];
    const redToggle = document.querySelector("#red-toggle");
    const greenToggle = document.querySelector("#green-toggle");
    const blueToggle = document.querySelector("#blue-toggle");
    redToggle.addEventListener("click", setColorMask, false);
    greenToggle.addEventListener("click", setColorMask, false);
    blueToggle.addEventListener("click", setColorMask, false);

    function setColorMask(evt) {
      const index =
        (evt.target === greenToggle && 1) ||
        (evt.target === blueToggle && 2) ||
        0;
      mask[index] = !mask[index];
      evt.target.textContent = mask[index] ? "On" : "Off";
      gl.colorMask(mask[0], mask[1], mask[2], true);
      drawAnimation();
    }

    function drawAnimation() {
      const color = getRandomColor();
      gl.clearColor(color[0], color[1], color[2], 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }

    function getRandomColor() {
      return [Math.random(), Math.random(), Math.random()];
    }
  },
  false,
);
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/color-masking) verfügbar.

{{PreviousNext("Learn/WebGL/By_example/Simple_color_animation","Learn/WebGL/By_example/Basic_scissoring")}}
