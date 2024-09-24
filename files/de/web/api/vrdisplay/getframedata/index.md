---
title: "VRDisplay: getFrameData()-Methode"
short-title: getFrameData()
slug: Web/API/VRDisplay/getFrameData
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`getFrameData()`**-Methode der {{domxref("VRDisplay")}}-Schnittstelle akzeptiert ein {{domxref("VRFrameData")}}-Objekt und füllt es mit den Informationen, die erforderlich sind, um den aktuellen Frame darzustellen.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dies umfasst die {{domxref("VRPose")}} und die Ansichts- und Projektionsmatrizen für den aktuellen Frame.

## Syntax

```js-nolint
getFrameData(frameData)
```

### Parameter

- `frameData`
  - : Das {{domxref("VRFrameData")}}-Objekt, das Sie füllen möchten.

### Rückgabewert

Ein boolescher Wert — Ein Wert von `true` wird zurückgegeben, wenn das {{domxref("VRFrameData")}}-Objekt erfolgreich gefüllt wurde, oder `false`, wenn dies nicht der Fall war.

## Beispiele

```js
const frameData = new VRFrameData();
let vrDisplay;

navigator.getVRDisplays().then((displays) => {
  vrDisplay = displays[0];
  console.log("Display gefunden");
  // Starten der Präsentation, wenn der Button geklickt wird: Es kann nur als Antwort auf eine Benutzeraktion aufgerufen werden
  btn.addEventListener("click", () => {
    vrDisplay.requestPresent([{ source: canvas }]).then(() => {
      drawVRScene();
    });
  });
});

// WebVR: Zeichnen der Szene für das WebVR-Display.
function drawVRScene() {
  // WebVR: Anfordern des nächsten Frames der Animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // Füllen von frameData mit den Daten des nächsten darzustellenden Frames
  vrDisplay.getFrameData(frameData);

  // Sie können die Position, Orientierung usw. des Displays von der Pose des aktuellen Frames abrufen
  // curFramePose ist ein VRPose-Objekt
  const curFramePose = frameData.pose;
  const curPos = curFramePose.position;
  const curOrient = curFramePose.orientation;

  // Löschen der Leinwand, bevor wir darauf zeichnen.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // WebVR: Erstellen der erforderlichen Projektions- und Ansichts-Matrix-Positionen,
  // die zum Übergeben in die uniformMatrix4fv-Methoden unten benötigt werden

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
    // Zeichnen der Ansicht für jedes Auge
  }

  // …

  // WebVR: Anzeigen, dass wir bereit sind, den gerenderten Frame auf dem VR-Display darzustellen
  vrDisplay.submitFrame();
}
```

> [!NOTE]
> Sie können diesen vollständigen Code bei [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) sehen.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie die Anleitung [Porting from WebVR to WebXR von Meta](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
