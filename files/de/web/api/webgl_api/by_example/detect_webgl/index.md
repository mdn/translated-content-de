---
title: Erkennen von WebGL
slug: Web/API/WebGL_API/By_example/Detect_WebGL
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example","Web/API/WebGL_API/By_example/Clearing_with_colors")}}

Dieses Beispiel zeigt, wie Sie einen {{Glossary("WebGL", "WebGL")}}-Rendering-Kontext erkennen und das Ergebnis dem Benutzer melden können.

## Erkennung von WebGL

{{EmbedLiveSample("Feature-detecting_WebGL",660,150)}}

In diesem ersten Beispiel werden wir überprüfen, ob der Browser {{Glossary("WebGL", "WebGL")}} unterstützt. Dazu werden wir versuchen, den [WebGL-Rendering-Kontext](/de/docs/Web/API/WebGLRenderingContext) von einem [`canvas`](/de/docs/Web/API/HTMLCanvasElement)-Element zu erhalten. Der [WebGL-Rendering-Kontext](/de/docs/Web/API/WebGLRenderingContext) ist eine Schnittstelle, über die Sie den Zustand der Grafikmaschine festlegen und abfragen, Daten an WebGL senden und Zeichnungsbefehle ausführen können.

Das Speichern des Zustands der Grafikmaschine innerhalb einer einzigen Kontext-Schnittstelle ist nicht einzigartig für {{Glossary("WebGL", "WebGL")}}. Dies wird auch in anderen Grafik-{{Glossary("API", "API")}} gemacht, wie zum Beispiel dem [Canvas 2D-Rendering-Kontext](/de/docs/Web/API/CanvasRenderingContext2D). Die Eigenschaften und Variablen, die Sie anpassen können, sind jedoch für jede {{Glossary("API", "API")}} unterschiedlich.

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
window.addEventListener("load", () => {
  const paragraph = document.querySelector("p");
  const button = document.querySelector("button");

  // Adding click event handler to button.
  button.addEventListener("click", detectWebGLContext);
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
});
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/detect-webgl) verfügbar.

{{PreviousNext("Web/API/WebGL_API/By_example","Web/API/WebGL_API/By_example/Clearing_with_colors")}}
