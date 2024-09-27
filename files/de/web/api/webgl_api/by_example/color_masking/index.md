---
title: Farbmaskierung
slug: Web/API/WebGL_API/By_example/Color_masking
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Simple_color_animation","Learn/WebGL/By_example/Basic_scissoring")}}

Dieses WebGL-Beispiel modifiziert zufällige Farben, indem eine Farbmaskierung angewendet wird, um den Bereich der angezeigten Farben auf bestimmte Schattierungen zu beschränken.

## Maskierung zufälliger Farben

{{EmbedLiveSample("Masking_random_colors",660,425)}}

Dieses Beispiel verändert die zufällige Farbanimation, indem eine Farbmaskierung mit [`colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask) angewendet wird. Sie können sich die Farbmaskierungsoperation so vorstellen, als ob Sie durch getöntes Glas oder einen Farbfilter auf die farbige Leinwand schauen. Indem die blauen und grünen Kanäle maskiert werden, wird nur die rote Komponente der Pixel aktualisiert, und es ist, als ob Sie durch ein rotes getöntes Glas blicken.

Farbmaskierung erlaubt es uns, einige Grundlagen der [Farblehre](https://en.wikipedia.org/wiki/Color_theory) zu demonstrieren. Durch das Maskieren bestimmter Kanäle neigen wir die angezeigten Farben in Richtung der Komplementärfarbe. Das Maskieren sowohl von Blau als auch von Rot würde uns also Grüntöne geben. Das Maskieren nur des blauen Kanals würde uns Gelbtöne geben (einschließlich Schattierungen von Orange, Braun, Olivgrün und Gelbgrün), die Komplementärfarbe von Blau. Ebenso würde das Maskieren nur von Grün Magentatöne ergeben (auch Purpur, Karminrot usw.), und das Maskieren nur von Rot würde Cyan-Töne ergeben (auch Seegrün, Blau usw.).

Beachten Sie, dass die Aufrufe von `colorMask()` nur erfolgen, wenn der Benutzer auf eine der Umschalttasten klickt. Das Rendering erfolgt jedoch jede Sekunde, mithilfe des Timers. Der Farbmaskenzustand von [WebGL](/de/docs/Glossary/WebGL) bleibt erhalten, daher müssen wir `colorMask()` nicht bei jedem Frame aufrufen, um die Farbmaske einzurichten. Dies ist ein wichtiger Aspekt der WebGL-Zustandsmaschine. Es ermöglicht uns, WebGL in einer einzigen Initialisierungsphase einzurichten und dann nur noch Zeichenbefehle für jedes Frame auszuführen.

Die Farbmaskierung gibt Ihnen eine feine Kontrolle über die Aktualisierung der Pixelwerte auf dem Bildschirm. Indem Sie die Farbkanäle begrenzen, die durch jeden Zeichenbefehl geschrieben werden, können Sie jeden Kanal beispielsweise verwenden, um ein anderes Graustufenbild zu speichern. Alternativ können Sie die [RGB](/de/docs/Glossary/RGB)-Komponenten für Farbe verwenden, aber die Alphakomponente für einige benutzerdefinierte Pixeldaten Ihrer Erfindung.

Schließlich lehrt uns die Farbmaskierung, dass [WebGL](/de/docs/Glossary/WebGL) nicht nur eine Zustandsmaschine ist, sondern auch eine _Grafik-Pipeline_. Dies bedeutet, dass Grafikoperationen in WebGL in einer bestimmten Reihenfolge ausgeführt werden, wobei die Ausgabe jeder Operation als Eingabe der nächsten dient. Beispielsweise setzt die Löschoperation den Wert jedes Pixels auf die gewählte Löschfarbe. Maskierung erfolgt später in der Pipeline und modifiziert den Pixel-Farbwert, sodass das endgültige Ergebnis auf dem Bildschirm die Löschfarbe ist, getönt durch die Farbmaske.

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
