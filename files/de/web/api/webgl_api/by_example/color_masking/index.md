---
title: Color Masking
slug: Web/API/WebGL_API/By_example/Color_masking
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Simple_color_animation","Learn/WebGL/By_example/Basic_scissoring")}}

Dieses WebGL-Beispiel verändert zufällige Farben, indem es eine Farbmaskierung anwendet, um den Bereich der angezeigten Farben auf spezifische Farbtöne zu beschränken.

## Maskierung zufälliger Farben

{{EmbedLiveSample("Masking_random_colors",660,425)}}

Dieses Beispiel verändert die zufällige Farbanimation, indem es eine Farbmaskierung mit [`colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask) anwendet. Sie können sich den Farbmaskierungsvorgang so vorstellen, als ob Sie durch getöntes Glas oder einen Farbfilter auf die farbige Leinwand schauen würden. Indem die blauen und grünen Kanäle maskiert werden, kann nur der rote Bestandteil der Pixel aktualisiert werden, und daher ist es, als ob Sie durch ein rot getöntes Glas schauen würden.

Farbmaskierung erlaubt es uns, einige Grundlagen der [Farblehre](https://en.wikipedia.org/wiki/Color_theory) zu demonstrieren. Wenn wir einen oder mehrere Kanäle maskieren, verschieben wir die angezeigten Farben in Richtung der Komplementärfarbe. So würde das Maskieren sowohl des blauen als auch des roten Kanals uns Grüntöne liefern. Das Maskieren nur des blauen Kanals würde uns Gelbtöne (einschließlich Orangetöne, Braun, Oliv und Gelbgrün), die Komplementärfarben von Blau, liefern. Ebenso würde das Maskieren nur des grünen Kanals uns Magentatöne (auch Purpur, Karmesinrot usw.) geben, und das Maskieren nur des roten Kanals würde Cyan-Töne (auch Seegrün, Blau usw.) liefern.

Beachten Sie, dass die Aufrufe von `colorMask()` nur erfolgen, wenn der Benutzer auf eine der Toggle-Schaltflächen klickt. Aber das Rendern erfolgt jede Sekunde über den Timer. Der Farbmaskszustand von {{Glossary("WebGL", "WebGL")}} wird beibehalten, sodass wir nicht in jedem Frame `colorMask()` aufrufen müssen, um die Farbmaske einzurichten. Dies ist ein wichtiger Aspekt der WebGL-Zustandsmaschine. Es ermöglicht uns, WebGL in einer einzigen Initialisierungsphase einzurichten und dann nur Zeichenbefehle für jeden Frame auszuführen.

Farbmaskierung gibt Ihnen eine feine Kontrolle über die Aktualisierung von Pixelwerten auf dem Bildschirm. Indem Sie die Farbkanäle einschränken, die durch jeden Zeichenbefehl geschrieben werden, können Sie jeden Kanal beispielsweise verwenden, um ein anderes Graustufenbild zu speichern. Alternativ könnten Sie die {{Glossary("RGB", "RGB")}}-Komponenten für Farbe verwenden, aber die Alpha-Komponente für einige benutzerdefinierte Pixeldaten Ihrer Erfindung.

Schließlich lehrt uns die Farbmaskierung, dass {{Glossary("WebGL", "WebGL")}} nicht nur eine Zustandsmaschine ist, sondern auch eine _Grafikpipeline_. Dies bedeutet, dass Grafikoperationen in WebGL in einer bestimmten Reihenfolge durchgeführt werden, wobei das Ergebnis jeder Operation als Eingabe für die nächste dient. So setzt beispielsweise der Löschvorgang den Wert jedes Pixels auf die gewählte Löschfarbe. Die Maskierung erfolgt später in der Pipeline und modifiziert den Pixelfarbwert, sodass das endgültige Ergebnis auf dem Bildschirm das der Löschfarbe ist, getönt durch die Farbmaske.

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
    const redtoggle = document.querySelector("#red-toggle");
    const greentoggle = document.querySelector("#green-toggle");
    const bluetoggle = document.querySelector("#blue-toggle");
    redtoggle.addEventListener("click", setColorMask, false);
    greentoggle.addEventListener("click", setColorMask, false);
    bluetoggle.addEventListener("click", setColorMask, false);

    function setColorMask(evt) {
      const index =
        (evt.target === greentoggle && 1) ||
        (evt.target === bluetoggle && 2) ||
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
