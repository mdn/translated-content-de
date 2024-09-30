---
title: Objekte mit WebGL animieren
slug: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}

## Das Quadrat rotieren lassen

In diesem Beispiel werden wir tatsächlich unsere Kamera rotieren. Dadurch sieht es so aus, als ob wir das Quadrat rotieren. Zuerst benötigen wir einige Variablen, um die aktuelle Rotation der Kamera zu verfolgen.

> [!NOTE]
> Fügen Sie diesen Code am Anfang Ihres "webgl-demo.js"-Scripts hinzu:

```js
let squareRotation = 0.0;
let deltaTime = 0;
```

Jetzt müssen wir die `drawScene()`-Funktion aktualisieren, um die aktuelle Rotation auf die Kamera anzuwenden, wenn wir sie zeichnen. Nachdem die Kamera an die anfängliche Zeichenposition für das Quadrat verschoben wurde, wenden wir die Rotation an.

> [!NOTE]
> In Ihrem Modul "draw-scene.js" aktualisieren Sie die Deklaration Ihrer `drawScene()`-Funktion, damit sie die zu verwendende Rotation übergeben bekommt:

```js-nolint
function drawScene(gl, programInfo, buffers, squareRotation) {
```

> [!NOTE]
> Fügen Sie in Ihrer `drawScene()`-Funktion direkt nach dem Aufruf von `mat4.translate()` diesen Code hinzu:

```js
mat4.rotate(
  modelViewMatrix, // destination matrix
  modelViewMatrix, // matrix to rotate
  squareRotation, // amount to rotate in radians
  [0, 0, 1],
); // axis to rotate around
```

Dies dreht die modelViewMatrix um den aktuellen Wert von `squareRotation`, um die Z-Achse.

Um tatsächlich zu animieren, müssen wir Code hinzufügen, der den Wert von `squareRotation` im Laufe der Zeit ändert.

> [!NOTE]
> Fügen Sie diesen Code am Ende Ihrer `main()`-Funktion hinzu, indem Sie den bestehenden `drawScene()`-Aufruf ersetzen:

```js
let then = 0;

// Draw the scene repeatedly
function render(now) {
  now *= 0.001; // convert to seconds
  deltaTime = now - then;
  then = now;

  drawScene(gl, programInfo, buffers, squareRotation);
  squareRotation += deltaTime;

  requestAnimationFrame(render);
}
requestAnimationFrame(render);
```

Dieser Code verwendet `requestAnimationFrame`, um den Browser zu bitten, die Funktion `render` bei jedem Frame aufzurufen. `requestAnimationFrame` übergibt uns die Zeit in Millisekunden seit dem Laden der Seite. Wir konvertieren das in Sekunden und ziehen dann die letzte Zeit ab, um `deltaTime` zu berechnen, was die Anzahl der Sekunden seit dem letzten gerenderten Frame ist.

Schließlich aktualisieren wir `squareRotation`.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample4/index.html', 670, 510) }}

[Sehen Sie den vollständigen Code](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample4) | [Öffnen Sie diese Demo auf einer neuen Seite](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample4/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}
