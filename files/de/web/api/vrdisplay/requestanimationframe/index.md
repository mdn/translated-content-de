---
title: "VRDisplay: requestAnimationFrame()-Methode"
short-title: requestAnimationFrame()
slug: Web/API/VRDisplay/requestAnimationFrame
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`requestAnimationFrame()`**-Methode der {{domxref("VRDisplay")}}-Schnittstelle ist eine spezielle Implementierung von {{domxref("Window.requestAnimationFrame")}}, die eine Callback-Funktion enthält, die jedes Mal aufgerufen wird, wenn ein neues Frame der `VRDisplay`-Präsentation gerendert wird:

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

- Wenn das `VRDisplay` keine Szene darstellt, ist dies funktional äquivalent zu {{domxref("Window.requestAnimationFrame")}}.
- Wenn das `VRDisplay` darstellt, wird das Callback mit seiner nativen Bildwiederholrate aufgerufen.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameter

- `callback`
  - : Eine Callback-Funktion, die jedes Mal aufgerufen wird, wenn ein neues Frame der `VRDisplay`-Präsentation gerendert wird.

### Rückgabewert

Ein Long, der das Handle des `requestAnimationFrame()`-Aufrufs repräsentiert. Dieses kann dann an einen {{domxref("VRDisplay.cancelAnimationFrame()")}}-Aufruf übergeben werden, um das Callback abzumelden.

## Beispiele

```js
const frameData = new VRFrameData();
let vrDisplay;

navigator.getVRDisplays().then((displays) => {
  vrDisplay = displays[0];
  console.log("Display gefunden");
  // Starten der Präsentation, wenn der Button geklickt wird: Es kann nur als Reaktion auf eine Benutzeraktion aufgerufen werden
  btn.addEventListener("click", () => {
    vrDisplay.requestPresent([{ source: canvas }]).then(() => {
      drawVRScene();
    });
  });
});

// WebVR: Zeichnen der Szene für das WebVR-Display.
function drawVRScene() {
  // WebVR: Anfrage des nächsten Frames der Animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // Füllen von frameData mit den Daten des nächsten darzustellenden Frames
  vrDisplay.getFrameData(frameData);

  // Sie können die Position, Orientierung usw. des Displays aus der Pose des aktuellen Frames erhalten
  const curFramePose = frameData.pose;
  const curPos = curFramePose.position;
  const curOrient = curFramePose.orientation;

  // Löschen der Leinwand, bevor wir darauf zeichnen.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // WebVR: Erstellen der erforderlichen Projektions- und Ansichts-Matrixpositionen
  // für die Übergabe in die uniformMatrix4fv-Methoden unten

  const projectionMatrixLocation = gl.getUniformLocation(
    shaderProgram,
    "projMatrix",
  );
  const viewMatrixLocation = gl.getUniformLocation(shaderProgram, "viewMatrix");

  // WebVR: Rendern der Ansicht des linken Auges auf die linke Hälfte der Leinwand
  gl.viewport(0, 0, canvas.width * 0.5, canvas.height);
  gl.uniformMatrix4fv(
    projectionMatrixLocation,
    false,
    frameData.leftProjectionMatrix,
  );
  gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.leftViewMatrix);
  drawGeometry();

  // WebVR: Rendern der Ansicht des rechten Auges auf die rechte Hälfte der Leinwand
  gl.viewport(canvas.width * 0.5, 0, canvas.width * 0.5, canvas.height);
  gl.uniformMatrix4fv(
    projectionMatrixLocation,
    false,
    frameData.rightProjectionMatrix,
  );
  gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.rightViewMatrix);
  drawGeometry();

  function drawGeometry() {
    // die Ansicht für jedes Auge zeichnen
  }

  // …

  // WebVR: Anzeigen, dass wir bereit sind, das gerenderte Frame dem VR-Display zu präsentieren
  vrDisplay.submitFrame();
}
```

> [!NOTE]
> Sie können diesen vollständigen Code unter [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) sehen.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie befindet sich nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Anleitung zum Portieren von WebVR auf WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
