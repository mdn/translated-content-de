---
title: WebGL erkennen
slug: Web/API/WebGL_API/By_example/Detect_WebGL
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example","Web/API/WebGL_API/By_example/Clearing_with_colors")}}

Dieses Beispiel zeigt, wie ein {{Glossary("WebGL", "WebGL")}}-Rendering-Kontext erkannt wird und meldet das Ergebnis an den Benutzer.

## WebGL-Feature-Erkennung

{{EmbedLiveSample("Feature-detecting_WebGL",660,150)}}

In diesem ersten Beispiel überprüfen wir, ob der Browser {{Glossary("WebGL", "WebGL")}} unterstützt. Dazu versuchen wir, den [WebGL-Rendering-Kontext](/de/docs/Web/API/WebGLRenderingContext) von einem [`canvas`](/de/docs/Web/API/HTMLCanvasElement)-Element zu erhalten. Der [WebGL-Rendering-Kontext](/de/docs/Web/API/WebGLRenderingContext) ist eine Schnittstelle, über die Sie den Zustand der Grafikeinheit einstellen und abfragen, Daten an das WebGL senden und Zeichenbefehle ausführen können.

Das Speichern des Zustands der Grafikeinheit innerhalb einer einzigen Kontextschnittstelle ist nicht einzigartig für {{Glossary("WebGL", "WebGL")}}. Dies wird auch in anderen Grafik-{{Glossary("API", "API")}} gemacht, wie z.B. dem [canvas 2D-Rendering-Kontext](/de/docs/Web/API/CanvasRenderingContext2D). Die Eigenschaften und Variablen, die Sie ändern können, sind jedoch für jede {{Glossary("API", "API")}} unterschiedlich.

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

{{PreviousNext("Web/API/WebGL_API/By_example","Web/API/WebGL_API/By_example/Clearing_with_colors")}}
