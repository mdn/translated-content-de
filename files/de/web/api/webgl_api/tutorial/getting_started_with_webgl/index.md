---
title: Einstieg in WebGL
slug: Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("WebGL")}} {{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}

[WebGL](/de/docs/Web/API/WebGL_API) ermöglicht es Webinhalten, eine API basierend auf [OpenGL ES](https://www.khronos.org/opengles/) 2.0 zu verwenden, um 2D- und 3D-Rendering in einem HTML-[`canvas`](/de/docs/Web/API/Canvas_API) in unterstützenden Browsern ohne Plug-ins durchzuführen.

WebGL-Programme bestehen aus Steuerungscode, der in JavaScript geschrieben ist, und Shadercode (GLSL), der auf der Grafikeinheit (GPU) eines Computers ausgeführt wird. WebGL-Elemente können mit anderen HTML-Elementen gemischt und mit anderen Teilen der Seite oder dem Seitenhintergrund zusammengesetzt werden.

Dieser Artikel wird Sie in die Grundlagen der Verwendung von WebGL einführen. Es wird angenommen, dass Sie bereits ein Verständnis der Mathematik, die in 3D-Grafiken erforderlich ist, haben, und dieser Artikel versucht nicht, Ihnen die Konzepte der 3D-Grafik selbst beizubringen.

Die Codebeispiele in diesem Tutorial finden Sie auch im [webgl-examples-Ordner auf GitHub](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial).

Es sei hier darauf hingewiesen, dass diese Artikelserie WebGL selbst einführt; es gibt jedoch eine Reihe von Frameworks, die die Fähigkeiten von WebGL umfassen und es einfacher machen, 3D-Anwendungen und Spiele zu entwickeln, wie z.B. [THREE.js](https://threejs.org/) und [BABYLON.js](https://www.babylonjs.com/).

## Vorbereitung für das 3D-Rendering

Erstellen Sie zunächst zwei neue Dateien:

- "index.html"
- "webgl-demo.js"

Die Datei "index.html" sollte Folgendes enthalten:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>WebGL Demo</title>
    <script src="webgl-demo.js" type="module"></script>
  </head>

  <body>
    <canvas id="glcanvas" width="640" height="480"></canvas>
  </body>
</html>
```

Beachten Sie, dass dies eine Leinwand deklariert, in die unser Beispiel zeichnen wird.

### Vorbereitung des WebGL-Kontextes

Fügen Sie den folgenden Code zur Datei "webgl-demo.js" hinzu:

```js
main();

//
// start here
//
function main() {
  const canvas = document.querySelector("#glcanvas");
  // Initialize the GL context
  const gl = canvas.getContext("webgl");

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it.",
    );
    return;
  }

  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}
```

Die `main()`-Funktion wird aufgerufen, wenn unser Skript geladen wird. Ihr Zweck ist es, den WebGL-Kontext einzurichten und mit dem Rendern von Inhalten zu beginnen.

Das Erste, was wir hier tun, ist, eine Referenz auf die Leinwand zu erhalten und sie einer Variablen namens `canvas` zuzuweisen.

Sobald wir die Leinwand haben, versuchen wir, einen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) dafür zu erhalten, indem wir [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) aufrufen und den String `"webgl"` übergeben. Wenn der Browser WebGL nicht unterstützt, wird `getContext()` `null` zurückgeben, in diesem Fall zeigen wir dem Benutzer eine Nachricht an und beenden.

Falls der Kontext erfolgreich initialisiert wird, ist die Variable `gl` unsere Referenz darauf. In diesem Fall setzen wir die Löschfarbe auf Schwarz und löschen den Kontext mit dieser Farbe (wir zeichnen die Leinwand mit der Hintergrundfarbe neu).

An diesem Punkt haben Sie genug Code, dass der WebGL-Kontext erfolgreich initialisiert werden sollte, und Sie sollten mit einem großen schwarzen, leeren Kasten enden, der bereit ist, Inhalte zu empfangen.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample1/index.html', 670, 510) }}

[Vollständigen Code ansehen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample1) | [Diese Demo auf einer neuen Seite öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample1/)

## Siehe auch

- [WebGL Grundlagen](https://webglfundamentals.org/)
- [Eine Einführung in modernes OpenGL:](https://duriansoftware.com/joe/an-intro-to-modern-opengl.-table-of-contents) Eine Serie von schönen Artikeln über OpenGL, geschrieben von Joe Groff, die eine klare Einführung in OpenGL von seiner Geschichte bis zum wichtigen Konzept der Grafik-Pipeline bietet, und auch einige Beispiele enthält, um zu demonstrieren, wie OpenGL funktioniert. Wenn Sie keine Vorstellung davon haben, was OpenGL ist, ist dies ein guter Ausgangspunkt.

{{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}
