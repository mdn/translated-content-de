---
title: Einführung in WebGL
slug: Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("WebGL")}} {{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}

[WebGL](/de/docs/Web/API/WebGL_API) ermöglicht es Webinhalten, eine auf [OpenGL ES](https://www.khronos.org/opengles/) 2.0 basierende API zu verwenden, um 2D- und 3D-Rendering in einem HTML-[`canvas`](/de/docs/Web/API/Canvas_API) in Browsern, die es unterstützen, ohne Plug-ins durchzuführen.

WebGL-Programme bestehen aus Steuerungscode, der in JavaScript geschrieben ist, und Shadercode (GLSL), der auf der Grafikeinheit (GPU) eines Computers ausgeführt wird. WebGL-Elemente können mit anderen HTML-Elementen gemischt und mit anderen Teilen der Seite oder dem Seitenhintergrund zusammengeführt werden.

Dieser Artikel führt Sie in die Grundlagen der Verwendung von WebGL ein. Es wird davon ausgegangen, dass Sie bereits über ein Verständnis der Mathematik verfügen, die in 3D-Grafiken involviert ist, und dieser Artikel erhebt keinen Anspruch darauf, Ihnen Konzepte der 3D-Grafik selbst beizubringen.

Die Codebeispiele in diesem Tutorial finden Sie auch im [WebGL-Examples-Ordner auf GitHub](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial).

Es sei hier angemerkt, dass diese Artikelsammlung WebGL selbst einführt; es gibt jedoch eine Reihe von Frameworks, die die Fähigkeiten von WebGL kapseln und es erleichtern, 3D-Anwendungen und Spiele zu entwickeln, wie z. B. [THREE.js](https://threejs.org/) und [BABYLON.js](https://www.babylonjs.com/).

## Vorbereitung zum Rendern in 3D

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
    <canvas id="gl-canvas" width="640" height="480"></canvas>
  </body>
</html>
```

Beachten Sie, dass hier ein Canvas deklariert wird, in das unser Beispiel zeichnen wird.

### Vorbereitung des WebGL-Kontexts

Fügen Sie der Datei "webgl-demo.js" folgenden Code hinzu:

```js
main();

//
// start here
//
function main() {
  const canvas = document.querySelector("#gl-canvas");
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

Die Funktion `main()` wird aufgerufen, wenn unser Skript geladen wird. Ihr Zweck besteht darin, den WebGL-Kontext einzurichten und mit der Darstellung von Inhalten zu beginnen.

Das Erste, was wir hier tun, ist, eine Referenz zum Canvas zu erhalten und diese einer Variablen namens `canvas` zuzuweisen.

Sobald wir das Canvas haben, versuchen wir, einen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) dafür zu erhalten, indem wir [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) aufrufen und den String `"webgl"` übergeben. Wenn der Browser WebGL nicht unterstützt, gibt `getContext()` `null` zurück, in diesem Fall zeigen wir dem Benutzer eine Nachricht an und beenden das Programm.

Wenn der Kontext erfolgreich initialisiert wird, ist die Variable `gl` unsere Referenz darauf. In diesem Fall setzen wir die Clear-Farbe auf Schwarz und löschen den Kontext in dieser Farbe (indem wir das Canvas mit der Hintergrundfarbe neu zeichnen).

An diesem Punkt haben Sie genügend Code, sodass der WebGL-Kontext erfolgreich initialisiert werden sollte, und Sie sollten mit einem großen schwarzen, leeren Kasten enden, der bereit ist, Inhalte zu empfangen.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample1/index.html', 670, 510) }}

[Vollständigen Code anzeigen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample1) | [Dieses Demo auf einer neuen Seite öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample1/)

## Siehe auch

- [WebGL Grundlagen](https://webglfundamentals.org/)
- [Eine Einführung in modernes OpenGL:](https://duriansoftware.com/joe/an-intro-to-modern-opengl.-table-of-contents) Eine Reihe schöner Artikel über OpenGL, geschrieben von Joe Groff, die eine klare Einführung in OpenGL von seiner Geschichte bis zum wichtigen Konzept der Grafikpipeline bieten und einige Beispiele enthalten, um zu demonstrieren, wie OpenGL funktioniert. Wenn Sie keine Vorstellung davon haben, was OpenGL ist, ist dies ein guter Ausgangspunkt.

{{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}
