---
title: Farbmaskierung
slug: Web/API/WebGL_API/By_example/Color_masking
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Simple_color_animation","Web/API/WebGL_API/By_example/Basic_scissoring")}}

Dieses WebGL-Beispiel ändert zufällige Farben, indem es eine Farbmaskierung anwendet, um den Bereich der dargestellten Farben auf bestimmte Schattierungen zu beschränken.

## Maskierung zufälliger Farben

{{EmbedLiveSample("Masking_random_colors",660,425)}}

Dieses Beispiel modifiziert die Animation zufälliger Farben, indem eine Farbmaskierung mit [`colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask) angewendet wird. Sie können sich die Farbmaskierungsoperation vorstellen, als ob Sie die farbige Leinwand durch getöntes Glas oder einen Farbfilter betrachten. Indem Sie die blauen und grünen Kanäle maskieren, erlauben Sie nur die Aktualisierung der roten Komponente der Pixel, sodass es so aussieht, als würden Sie durch rotes getöntes Glas schauen.

Farbmaskierung ermöglicht es uns, einige Grundlagen der [Farbtheorie](https://en.wikipedia.org/wiki/Color_theory) zu demonstrieren. Indem wir einige Kanäle maskieren, beeinflussen wir die angezeigten Farben hin zur komplementären Farbe. So würde das Maskieren von sowohl Blau als auch Rot uns Grüntöne geben. Das Maskieren nur des blauen Kanals würde uns Gelbtöne geben (einschließlich Orange-, Braun-, Oliven- und Gelbgrüntöne), das Komplementäre von Blau. Ähnlich würde das Maskieren nur von Grün uns Magentatöne geben (auch Purpur, Karmesin usw.), und das Maskieren nur von Rot würde Zyan-Töne ergeben (auch Meeresgrün, Blau usw.).

Beachten Sie, dass die Aufrufe von `colorMask()` nur erfolgen, wenn der Benutzer auf einen der Umschaltknöpfe klickt. Die Darstellung erfolgt jedoch jede Sekunde mit einem Timer. Der Status der Farbmaske von {{Glossary("WebGL", "WebGL")}} bleibt erhalten, sodass wir `colorMask()` nicht jedes Bild erneut aufrufen müssen, um die Farbmaske einzurichten. Dies ist ein wichtiger Aspekt der WebGL-Zustandsmaschine. Es ermöglicht uns, WebGL in einer einzigen Initialisierungsphase einzurichten und dann einfach Zeichnungsbefehle für jedes Bild auszuführen.

Farbmaskierung gibt Ihnen eine feine Kontrolle über die Aktualisierung der Pixelwerte auf dem Bildschirm. Indem Sie die Farbbereiche einschränken, die von jedem Zeichnungsbefehl geschrieben werden, können Sie jeden Kanal beispielsweise verwenden, um ein anderes Graustufenbild zu speichern. Alternativ könnten Sie die {{Glossary("RGB", "RGB")}}-Komponenten für Farbe verwenden, aber die Alphakomponente für einige benutzerdefinierte Pixelinformationen Ihrer Erfindung.

Schließlich lehrt uns Farbmaskierung, dass {{Glossary("WebGL", "WebGL")}} nicht nur eine Zustandsmaschine ist, sondern auch eine _Grafik-Pipeline_. Das bedeutet, dass Grafikoperationen in WebGL in einer bestimmten Reihenfolge durchgeführt werden, wobei das Ergebnis jeder Operation als Eingabe für die nächste dient. Zum Beispiel setzt die Löschoperation den Wert jedes Pixels auf die gewählte Löschfarbe. Die Maskierung erfolgt später in der Pipeline und modifiziert den Pixel-Farbwert, sodass das endgültige Ergebnis auf dem Bildschirm die Löschfarbe ist, getönt durch die Farbmaske.

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

{{PreviousNext("Web/API/WebGL_API/By_example/Simple_color_animation","Web/API/WebGL_API/By_example/Basic_scissoring")}}
