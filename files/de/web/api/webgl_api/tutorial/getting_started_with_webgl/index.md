---
title: Erste Schritte mit WebGL
slug: Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("WebGL")}} {{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}

[WebGL](/de/docs/Web/API/WebGL_API) ermöglicht es Webinhalten, eine auf [OpenGL ES](https://www.khronos.org/opengles/) 2.0 basierende API zu nutzen, um 2D- und 3D-Rendering in einem HTML-`canvas` in unterstützenden Browsern durchzuführen, ohne die Nutzung von Plug-ins.

WebGL-Programme bestehen aus Steuerungscode in JavaScript und Shader-Code (GLSL), der auf der Grafikeinheit (GPU) eines Computers ausgeführt wird. WebGL-Elemente können mit anderen HTML-Elementen gemischt und mit anderen Teilen der Seite oder dem Seitenhintergrund zusammengesetzt werden.

Dieser Artikel führt Sie in die Grundlagen der Verwendung von WebGL ein. Es wird vorausgesetzt, dass Sie bereits ein Verständnis der in der 3D-Grafik verwendeten Mathematik haben; dieser Artikel versucht nicht, Ihnen Konzepte der 3D-Grafik selbst beizubringen.

Die Codebeispiele in diesem Tutorial finden Sie auch im [webgl-examples Ordner auf GitHub](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial).

Es ist erwähnenswert, dass diese Artikelsammlung WebGL selbst einführt; es gibt jedoch eine Reihe von Frameworks, die die Fähigkeiten von WebGL kapseln und es einfacher machen, 3D-Anwendungen und Spiele zu erstellen, wie [THREE.js](https://threejs.org/) und [BABYLON.js](https://www.babylonjs.com/).

## Vorbereitung für 3D-Rendering

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

Beachten Sie, dass hier ein Canvas deklariert wird, in das unser Beispiel zeichnen wird.

### Vorbereitung des WebGL-Kontextes

Fügen Sie der Datei "webgl-demo.js" folgenden Code hinzu:

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

Die Funktion `main()` wird aufgerufen, wenn unser Skript geladen ist. Ihr Zweck ist es, den WebGL-Kontext einzurichten und mit dem Rendern von Inhalten zu beginnen.

Das erste, was wir hier tun, ist, eine Referenz auf das Canvas zu erhalten und sie einer Variablen namens `canvas` zuzuweisen.

Sobald wir das Canvas haben, versuchen wir, einen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) dafür zu erhalten, indem wir [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) aufrufen und den String `"webgl"` übergeben. Wenn der Browser WebGL nicht unterstützt, gibt `getContext()` `null` zurück, in diesem Fall zeigen wir dem Benutzer eine Nachricht an und beenden.

Wenn der Kontext erfolgreich initialisiert ist, ist die Variable `gl` unsere Referenz darauf. In diesem Fall setzen wir die Löschfarbe auf Schwarz und löschen den Kontext auf diese Farbe (indem wir das Canvas mit der Hintergrundfarbe neu zeichnen).

An diesem Punkt haben Sie genügend Code, dass der WebGL-Kontext erfolgreich initialisiert werden sollte, und Sie sollten mit einem großen, schwarzen, leeren Kasten enden, der bereit ist, Inhalte zu empfangen.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample1/index.html', 670, 510)}}

[Vollständigen Code ansehen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample1) | [Dieses Demo auf einer neuen Seite öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample1/)

## Siehe auch

- [WebGL-Grundlagen](https://webglfundamentals.org/)
- [Eine Einführung in modernes OpenGL:](https://duriansoftware.com/joe/an-intro-to-modern-opengl.-table-of-contents) Eine Reihe von interessanten Artikeln über OpenGL geschrieben von Joe Groff, die eine klare Einführung in OpenGL von seiner Geschichte bis zum wichtigen Konzept der Grafikpipeline bieten und auch einige Beispiele enthalten, um zu demonstrieren, wie OpenGL funktioniert. Wenn Sie keine Ahnung haben, was OpenGL ist, ist dies ein guter Ausgangspunkt.

{{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}
