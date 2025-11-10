---
title: WebGL Erkennung
slug: Web/API/WebGL_API/By_example/Detect_WebGL
l10n:
  sourceCommit: 0ea88f719ad95045993f8a54d5bbaee857617380
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example","Web/API/WebGL_API/By_example/Clearing_with_colors")}}

Dieses Beispiel demonstriert, wie ein {{Glossary("WebGL", "WebGL")}} Rendering-Kontext erkannt wird und berichtet das Ergebnis an den Benutzer.

## WebGL Feature-Erkennung

{{EmbedLiveSample("Feature-detecting_WebGL",660,150)}}

In diesem ersten Beispiel werden wir überprüfen, ob der Browser {{Glossary("WebGL", "WebGL")}} unterstützt. Dazu werden wir versuchen, den [WebGL Rendering-Kontext](/de/docs/Web/API/WebGLRenderingContext) aus einem [`canvas`](/de/docs/Web/API/HTMLCanvasElement)-Element zu erhalten. Der [WebGL Rendering-Kontext](/de/docs/Web/API/WebGLRenderingContext) ist eine Schnittstelle, durch die Sie den Zustand der Grafikmaschine einstellen und abfragen, Daten an WebGL senden und Zeichenbefehle ausführen können.

Das Speichern des Zustands der Grafikmaschine innerhalb einer einzelnen Kontextschnittstelle ist nicht einzigartig für {{Glossary("WebGL", "WebGL")}}. Dies wird auch bei anderen Grafik-{{Glossary("API", "API")}} gemacht, wie beim [Canvas 2D Rendering-Kontext](/de/docs/Web/API/CanvasRenderingContext2D). Die Eigenschaften und Variablen, die Sie anpassen können, sind jedoch für jede {{Glossary("API", "API")}} unterschiedlich.

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
  const gl = canvas.getContext("webgl");

  // Report the result.
  paragraph.textContent =
    gl instanceof WebGLRenderingContext
      ? "Congratulations! Your browser supports WebGL."
      : "Failed. Your browser or device may not support WebGL.";
}
```

Der Quellcode dieses Beispiels ist auch auf [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/detect-webgl) verfügbar.

{{PreviousNext("Web/API/WebGL_API/By_example","Web/API/WebGL_API/By_example/Clearing_with_colors")}}
