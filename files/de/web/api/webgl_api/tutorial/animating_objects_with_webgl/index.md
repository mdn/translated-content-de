---
title: Objekte mit WebGL animieren
slug: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}

## Das Quadrat rotieren lassen

In diesem Beispiel werden wir tatsächlich unsere Kamera rotieren. Dadurch wird es so aussehen, als ob wir das Quadrat drehen. Zuerst benötigen wir einige Variablen, um die aktuelle Rotation der Kamera zu verfolgen.

> [!NOTE]
> Fügen Sie diesen Code am Anfang Ihres "webgl-demo.js"-Skripts hinzu:

```js
let squareRotation = 0.0;
let deltaTime = 0;
```

Nun müssen wir die Funktion `drawScene()` aktualisieren, um die aktuelle Rotation auf die Kamera anzuwenden, wenn sie gezeichnet wird. Nachdem wir die Kamera in die Anfangsposition für das Quadrat verschoben haben, wenden wir die Rotation an.

> [!NOTE]
> Aktualisieren Sie in Ihrem "draw-scene.js"-Modul die Deklaration Ihrer `drawScene()` Funktion, sodass sie die zu verwendende Rotation übergeben bekommen kann:

```js-nolint
function drawScene(gl, programInfo, buffers, squareRotation) {
```

> [!NOTE]
> Fügen Sie in Ihrer `drawScene()` Funktion direkt nach dem Aufruf von `mat4.translate()` diesen Code hinzu:

```js
mat4.rotate(
  modelViewMatrix, // Zielmatrix
  modelViewMatrix, // zu rotierende Matrix
  squareRotation, // Rotationsbetrag in Radiant
  [0, 0, 1],
); // Achse, um die rotiert werden soll
```

Dies rotiert die modelViewMatrix um den aktuellen Wert von `squareRotation` um die Z-Achse.

Um tatsächlich zu animieren, müssen wir Code hinzufügen, der den Wert von `squareRotation` im Laufe der Zeit ändert.

> [!NOTE]
> Fügen Sie diesen Code am Ende Ihrer `main()` Funktion hinzu und ersetzen Sie den vorhandenen `drawScene()`-Aufruf:

```js
let then = 0;

// Zeichnet die Szene wiederholt
function render(now) {
  now *= 0.001; // in Sekunden umwandeln
  deltaTime = now - then;
  then = now;

  drawScene(gl, programInfo, buffers, squareRotation);
  squareRotation += deltaTime;

  requestAnimationFrame(render);
}
requestAnimationFrame(render);
```

Dieser Code verwendet `requestAnimationFrame`, um den Browser zu bitten, die Funktion "`render`" in jedem Frame aufzurufen. `requestAnimationFrame` übergibt uns die Zeit in Millisekunden seit dem Laden der Seite. Wir wandeln dies in Sekunden um und subtrahieren es dann von der letzten Zeit, um `deltaTime` zu berechnen, was die Anzahl der Sekunden seit dem letzten gerenderten Frame ist.

Schließlich aktualisieren wir `squareRotation`.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample4/index.html', 670, 510) }}

[Den vollständigen Code anzeigen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample4) | [Öffnen Sie diese Demo auf einer neuen Seite](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample4/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}
