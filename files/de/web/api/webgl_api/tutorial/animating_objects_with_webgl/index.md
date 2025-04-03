---
title: Objekte mit WebGL animieren
slug: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}

## Das Quadrat rotieren lassen

In diesem Beispiel werden wir tatsächlich unsere Kamera rotieren. Dadurch sieht es so aus, als ob wir das Quadrat drehen. Zuerst benötigen wir einige Variablen, um die aktuelle Rotation der Kamera zu verfolgen.

> [!NOTE]
> Fügen Sie diesen Code am Anfang Ihres "webgl-demo.js"-Scripts hinzu:

```js
let squareRotation = 0.0;
let deltaTime = 0;
```

Nun müssen wir die Funktion `drawScene()` so aktualisieren, dass die aktuelle Rotation auf die Kamera angewendet wird, wenn sie gezeichnet wird. Nachdem die Kamera auf die ursprüngliche Zeichenposition für das Quadrat verschoben wurde, wenden wir die Rotation an.

Aktualisieren Sie in Ihrem "draw-scene.js"-Modul die Deklaration Ihrer `drawScene()`-Funktion, damit sie die zu verwendende Rotation erhalten kann:

```js
function drawScene(gl, programInfo, buffers, squareRotation) {
  // …
}
```

Fügen Sie in Ihrer `drawScene()`-Funktion direkt nach dem `mat4.translate()`-Aufruf diesen Code hinzu:

```js
mat4.rotate(
  modelViewMatrix, // destination matrix
  modelViewMatrix, // matrix to rotate
  squareRotation, // amount to rotate in radians
  [0, 0, 1],
); // axis to rotate around
```

Dies rotiert die modelViewMatrix um den aktuellen Wert von `squareRotation` um die Z-Achse.

Um die Animation tatsächlich zu realisieren, müssen wir Code hinzufügen, der den Wert von `squareRotation` im Laufe der Zeit verändert.

Fügen Sie diesen Code am Ende Ihrer `main()`-Funktion hinzu und ersetzen Sie den vorhandenen `drawScene()`-Aufruf:

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

Dieser Code verwendet `requestAnimationFrame`, um den Browser zu bitten, die Funktion `render` bei jedem Frame aufzurufen. `requestAnimationFrame` gibt uns die Zeit in Millisekunden seit dem Laden der Seite. Wir konvertieren diese in Sekunden und ziehen dann die letzte Zeit ab, um `deltaTime` zu berechnen, was die Anzahl der Sekunden seit dem letzten gerenderten Frame ist.

Zum Schluss aktualisieren wir `squareRotation`.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample4/index.html', 670, 510) }}

[Den kompletten Code anzeigen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample4) | [Dieses Demo auf einer neuen Seite öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample4/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}
