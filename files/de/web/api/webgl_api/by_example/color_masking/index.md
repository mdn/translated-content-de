---
title: Farbmaskierung
slug: Web/API/WebGL_API/By_example/Color_masking
l10n:
  sourceCommit: 0ea88f719ad95045993f8a54d5bbaee857617380
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Simple_color_animation","Web/API/WebGL_API/By_example/Basic_scissoring")}}

Dieses WebGL-Beispiel verändert zufällige Farben, indem es eine Farbmaskierung anwendet, um den Bereich der angezeigten Farben auf bestimmte Schattierungen zu beschränken.

## Maskierung zufälliger Farben

{{EmbedLiveSample("Masking_random_colors",660,425)}}

Dieses Beispiel verändert die zufällige Farbanimation, indem es eine Farbmaskierung mit [`colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask) anwendet. Sie können sich die Farbmaskierung so vorstellen, als würden Sie durch getöntes Glas oder einen Farbfilter auf die farbige Leinwand schauen. Indem Sie die blauen und grünen Kanäle maskieren, wird nur die rote Komponente der Pixel aktualisiert, und es ist so, als ob Sie durch ein rot getöntes Glas schauen würden.

Farbmaskierung ermöglicht es uns, einige Grundlagen der [Farbtheorie](https://en.wikipedia.org/wiki/Color_theory) zu demonstrieren. Indem wir einige Kanäle maskieren, verschieben wir die angezeigten Farben in Richtung der Komplementärfarbe. Das Maskieren sowohl von Blau als auch Rot würde uns also Grüntöne geben. Das Maskieren nur des blauen Kanals würde uns Gelbtöne geben (einschließlich Orange, Braun, Olive und Gelbgrün), das Komplementär von Blau. Ähnlich würde das Maskieren nur von Grün Magenta-Töne geben (auch Purpur, Karminrot usw.), und das Maskieren nur von Rot würde Cyan-Töne ergeben (auch Meergrün, Blau usw.).

Beachten Sie, dass die Aufrufe an `colorMask()` nur erfolgen, wenn der Benutzer auf einen der Umschaltknöpfe klickt. Das Rendering erfolgt jedoch jede Sekunde mit dem Timer. Der Zustand der Farbmaske von {{Glossary("WebGL", "WebGL")}} bleibt erhalten, sodass wir nicht in jedem Frame `colorMask()` aufrufen müssen, um die Farbmaske einzurichten. Dies ist ein wichtiger Aspekt der WebGL-Zustandsmaschine. Es ermöglicht uns, WebGL in einer einzigen Initialisierungsphase einzurichten und dann lediglich Zeichenbefehle für jedes Frame auszuführen.

Farbmaskierung gibt Ihnen die Möglichkeit, Pixelwerte auf dem Bildschirm feinkörnig zu steuern. Indem Sie die Farbkanäle, die von jedem Zeichnungsbefehl geschrieben werden, beschränken, können Sie jeden Kanal z.B. verwenden, um ein anderes Graustufenbild zu speichern. Alternativ können Sie die {{Glossary("RGB", "RGB")}}-Komponenten für Farbe verwenden, aber die Alpha-Komponente für einige benutzerdefinierte Pixel-Daten Ihrer Erfindung.

Schließlich lehrt uns Farbmaskierung, dass {{Glossary("WebGL", "WebGL")}} nicht nur eine Zustandsmaschine ist, sondern auch eine _Grafikpipeline_. Dies bedeutet, dass Grafikoperationen in WebGL in einer bestimmten Reihenfolge ausgeführt werden, wobei das Ergebnis jeder Operation als Eingabe für die nächste dient. So setzt beispielsweise die Löschoperation den Wert jedes Pixels auf die gewählte Löschfarbe. Die Maskierung erfolgt später in der Pipeline und modifiziert den Pixel-Farbwert, sodass das Endergebnis auf dem Bildschirm die Löschfarbe ist, getönt durch die Farbmaske.

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
const canvas = document.querySelector("canvas");
const gl = canvas.getContext("webgl");
gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

const timer = setInterval(drawAnimation, 1000);

const mask = [true, true, true];
const redToggle = document.querySelector("#red-toggle");
const greenToggle = document.querySelector("#green-toggle");
const blueToggle = document.querySelector("#blue-toggle");
redToggle.addEventListener("click", setColorMask);
greenToggle.addEventListener("click", setColorMask);
blueToggle.addEventListener("click", setColorMask);

function setColorMask(evt) {
  const index =
    (evt.target === greenToggle && 1) || (evt.target === blueToggle && 2) || 0;
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
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/color-masking) verfügbar.

{{PreviousNext("Web/API/WebGL_API/By_example/Simple_color_animation","Web/API/WebGL_API/By_example/Basic_scissoring")}}
