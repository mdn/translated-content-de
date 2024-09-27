---
title: WebGL erkennen
slug: Web/API/WebGL_API/By_example/Detect_WebGL
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Learn/WebGL/By_example","Learn/WebGL/By_example/Clearing_with_colors")}}

Dieses Beispiel demonstriert, wie man einen [WebGL](/de/docs/Glossary/WebGL)-Rendering-Kontext erkennt und das Ergebnis an den Benutzer meldet.

## WebGL als Funktionalität erkennen

{{EmbedLiveSample("Feature-detecting_WebGL",660,150)}}

In diesem ersten Beispiel werden wir überprüfen, ob der Browser [WebGL](/de/docs/Glossary/WebGL) unterstützt. Zu diesem Zweck werden wir versuchen, den {{domxref("WebGLRenderingContext","WebGL rendering context","",1)}} von einem [`canvas`](/de/docs/Web/API/HTMLCanvasElement)-Element zu erhalten. Der {{domxref("WebGLRenderingContext","WebGL rendering context", "", 1)}} ist eine Schnittstelle, über die Sie den Zustand der Grafikmaschine einstellen und abfragen, Daten an WebGL senden und Zeichenbefehle ausführen können.

Das Speichern des Zustands der Grafikmaschine innerhalb einer einzigen Kontextschnittstelle ist nicht einzigartig für [WebGL](/de/docs/Glossary/WebGL). Dies wird auch in anderen Grafik-[API](/de/docs/Glossary/API) gemacht, wie z.B. dem {{domxref("CanvasRenderingContext2D","canvas 2D rendering context", "", 1)}}. Die Eigenschaften und Variablen, die Sie anpassen können, unterscheiden sich jedoch für jede [API](/de/docs/Glossary/API).

```html
<p>[ Here would go the result of WebGL feature detection ]</p>
<button>Press here to detect WebGLRenderingContext</button>
```

```css
body {
  text-align: center;
}
button {
  display: block;
  font-size: inherit;
  margin: auto;
  padding: 0.6em;
}
```

```js
// Run everything inside window load event handler, to make sure
// DOM is fully loaded and styled before trying to manipulate it.
window.addEventListener(
  "load",
  () => {
    const paragraph = document.querySelector("p");
    const button = document.querySelector("button");

    // Adding click event handler to button.
    button.addEventListener("click", detectWebGLContext, false);
    function detectWebGLContext() {
      // Create canvas element. The canvas is not added to the
      // document itself, so it is never displayed in the
      // browser window.
      const canvas = document.createElement("canvas");

      // Get WebGLRenderingContext from canvas element.
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

      // Report the result.
      paragraph.textContent =
        gl instanceof WebGLRenderingContext
          ? "Congratulations! Your browser supports WebGL."
          : "Failed. Your browser or device may not support WebGL.";
    }
  },
  false,
);
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/detect-webgl) verfügbar.

{{PreviousNext("Learn/WebGL/By_example","Learn/WebGL/By_example/Clearing_with_colors")}}
