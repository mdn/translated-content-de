---
title: Farbmaskierung
slug: Web/API/WebGL_API/By_example/Color_masking
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example/Simple_color_animation","Learn/WebGL/By_example/Basic_scissoring")}}

Dieses WebGL-Beispiel modifiziert zufällige Farben, indem es Farbmaskierung anwendet, um den Bereich der angezeigten Farben auf bestimmte Farbtöne zu begrenzen.

## Zufällige Farben maskieren

{{EmbedLiveSample("Masking_random_colors",660,425)}}

Dieses Beispiel modifiziert die zufällige Farbanimation, indem Farbmaskierung mit {{domxref("WebGLRenderingContext.colorMask()","colorMask()")}} angewendet wird. Sie können die Farbmaskierungsoperation sich so vorstellen, als ob Sie durch getöntes Glas oder einen Farbfilter auf die farbige Leinwand blicken. Durch das Abmaskieren der blauen und grünen Kanäle wird nur die rote Komponente der Pixel aktualisiert, sodass es so ist, als würden Sie durch ein rotes getöntes Glas blicken.

Farbmaskierung ermöglicht es uns, einige Grundlagen der [Farblehre](https://en.wikipedia.org/wiki/Color_theory) zu demonstrieren. Durch das Abmaskieren von Kanälen verzerren wir die angezeigten Farben in Richtung der Komplementärfarbe. Wenn man also sowohl Blau als auch Rot maskiert, erhält man Grüntöne. Das Maskieren des blauen Kanals würde Gelbtöne ergeben (einschließlich Schattierungen von Orange, Braun, Oliv und Gelb-Grün), der Komplementärfarbe von Blau. Ähnlich ergibt das Maskieren von Grün Magentatöne (auch Purpur, Karmesinrot usw.), und das Maskieren von Rot gibt Cyan-Töne (auch Seegrün, Blau usw.).

Beachten Sie, dass die Aufrufe von `colorMask()` nur erfolgen, wenn der Benutzer auf eine der Umschalttasten klickt. Aber das Rendering erfolgt jede Sekunde, mithilfe des Timers. Der Farbmaskenzustand von {{Glossary("WebGL")}} bleibt erhalten, sodass wir `colorMask()` nicht in jedem Frame aufrufen müssen, um die Farbmaske einzurichten. Dies ist ein wichtiger Aspekt der WebGL-Zustandsmaschine. Es erlaubt uns, WebGL in einer einzigen Initialisierungsphase einzurichten und dann einfach Zeichenbefehle für jedes Frame auszuführen.

Farbmaskierung gibt Ihnen die Möglichkeit, die Aktualisierung der Pixelwerte auf dem Bildschirm genau zu steuern. Indem Sie die Farbkanäle, die durch jeden Zeichenbefehl geschrieben werden, einschränken, können Sie jeden Kanal beispielsweise verwenden, um ein anderes Graustufenbild zu speichern. Alternativ können Sie die {{Glossary("RGB")}}-Komponenten für Farbe verwenden, aber die Alphakomponente für einige benutzerdefinierte Pixel-Daten Ihrer Erfindung.

Schließlich lehrt uns die Farbmaskierung, dass {{Glossary("WebGL")}} nicht nur eine Zustandsmaschine ist, sondern auch eine _Grafikpipeline_. Dies bedeutet, dass Grafikoperationen in WebGL in einer bestimmten Reihenfolge ausgeführt werden, wobei das Ergebnis jeder Operation als Eingabe für die nächste dient. So setzt beispielsweise die Löschoperation den Wert jedes Pixels auf die gewählte Löschfarbe. Maskierung erfolgt später in der Pipeline und modifiziert den Farbwert des Pixels, sodass das endgültige Ergebnis auf dem Bildschirm der Löschfarbe entspricht, getönt durch die Farbmaske.

```html
<p>Einfärben der angezeigten Farben mit Farbmaskierung.</p>
<canvas>Ihr Browser scheint HTML-Canvas nicht zu unterstützen.</canvas>
<button id="red-toggle">Ein</button>
<button id="green-toggle">Ein</button>
<button id="blue-toggle">Ein</button>
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
      evt.target.textContent = mask[index] ? "Ein" : "Aus";
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
