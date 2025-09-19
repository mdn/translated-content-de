---
title: Farbmaskierung
slug: Web/API/WebGL_API/By_example/Color_masking
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Simple_color_animation","Web/API/WebGL_API/By_example/Basic_scissoring")}}

Dieses WebGL-Beispiel modifiziert zufällige Farben durch das Anwenden einer Farbmaskierung, um die Anzeigefarben auf bestimmte Farbtöne zu begrenzen.

## Maskierung zufälliger Farben

{{EmbedLiveSample("Masking_random_colors",660,425)}}

Dieses Beispiel modifiziert die zufällige Farbanimation durch das Anwenden einer Farbmaskierung mit [`colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask). Sie können sich die Farbmaskierung so vorstellen, als ob man das farbige Canvas durch ein getöntes Glas oder einen Farbfilter betrachtet. Durch das Maskieren der blauen und grünen Kanäle, wird nur die rote Komponente der Pixel aktualisiert, und es ist daher, als ob man durch ein rotes getöntes Glas schaut.

Die Farbmaskierung ermöglicht uns, einige Grundlagen der [Farbtheorie](https://en.wikipedia.org/wiki/Color_theory) zu demonstrieren. Durch das Maskieren einiger Kanäle verschieben wir die angezeigten Farben tatsächlich in Richtung der komplementären Farbe. Das Maskieren sowohl der blauen als auch der roten Kanäle würde uns also Grüntöne ergeben. Das Maskieren nur des blauen Kanals liefert Gelbtöne (einschließlich Orange-, Braun-, Oliven- und Gelbgrüntöne), das Komplementär zu Blau. Ebenso würde das Maskieren nur des grünen Kanals Magentatöne (auch Purpur, Purpurrot usw.) ergeben, und das Maskieren nur des roten Kanals würde Cyan-Töne (auch Meergrün, Blau usw.) ergeben.

Beachten Sie, dass die Aufrufe an `colorMask()` nur erfolgen, wenn der Benutzer auf eine der Umschalttasten klickt. Das Rendering erfolgt jedoch jede Sekunde mithilfe des Timers. Der Zustand der Farbmaske in {{Glossary("WebGL", "WebGL")}} bleibt erhalten, sodass wir `colorMask()` nicht in jedem Frame aufrufen müssen, um die Farbmaske einzurichten. Dies ist ein wichtiger Aspekt der WebGL-Zustandsmaschine. Es ermöglicht uns, WebGL in einer einzigen Initialisierungsphase einzurichten und dann einfach Zeichenbefehle für jedes Frame auszuführen.

Die Farbmaskierung gibt Ihnen präzise Kontrolle über das Aktualisieren von Pixelwerten auf dem Bildschirm. Indem Sie die Farbanäle beschränken, die von jedem Zeichenbefehl geschrieben werden, können Sie jeden Kanal beispielsweise verwenden, um ein anderes Graustufenbild zu speichern. Alternativ können Sie die {{Glossary("RGB", "RGB")}}-Komponenten für Farbe verwenden, aber die Alphakomponente für einige benutzerdefinierte Pixel-Daten Ihrer Erfindung.

Schließlich lehrt uns die Farbmaskierung, dass {{Glossary("WebGL", "WebGL")}} nicht nur eine Zustandsmaschine ist, sondern auch eine _Grafik-Pipeline_. Das bedeutet, dass Grafikoperationen in WebGL in einer bestimmten Reihenfolge ausgeführt werden, wobei die Ausgabe jeder Operation als Eingang der nächsten dient. So setzt beispielsweise die Löschoperation den Wert jedes Pixels auf die gewählte Löschfarbe. Die Maskierung erfolgt später in der Pipeline und modifiziert den Pixel-Farbwert, sodass das endgültige Ergebnis auf dem Bildschirm die Löschfarbe, getönt von der Farbmaske, darstellt.

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
window.addEventListener("load", function setupAnimation(evt) {
  "use strict";
  window.removeEventListener(evt.type, setupAnimation);

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
  redToggle.addEventListener("click", setColorMask);
  greenToggle.addEventListener("click", setColorMask);
  blueToggle.addEventListener("click", setColorMask);

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
});
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/color-masking) verfügbar.

{{PreviousNext("Web/API/WebGL_API/By_example/Simple_color_animation","Web/API/WebGL_API/By_example/Basic_scissoring")}}
