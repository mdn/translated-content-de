---
title: "VRDisplay: submitFrame() Methode"
short-title: submitFrame()
slug: Web/API/VRDisplay/submitFrame
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`submitFrame()`** Methode der {{domxref("VRDisplay")}} Schnittstelle erfasst den aktuellen Zustand des derzeit präsentierten {{domxref("VRLayerInit")}} und zeigt ihn auf dem `VRDisplay` an.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Der Frame sollte anschließend unter Verwendung des {{domxref("VRPose")}} und der Matrizen, die durch den letzten Aufruf von {{domxref("VRDisplay.getFrameData()", "getFrameData()")}} bereitgestellt wurden, gerendert werden.

## Syntax

```js-nolint
submitFrame()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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

// WebVR: Zeichnen Sie die Szene für das WebVR-Display.
function drawVRScene() {
  // WebVR: Fordern Sie den nächsten Frame der Animation an
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // Füllen Sie frameData mit den Daten des nächsten anzuzeigenden Frames
  vrDisplay.getFrameData(frameData);

  // Sie können die Position, Orientierung usw. des Displays aus der Pose des aktuellen Frames erhalten
  const curFramePose = frameData.pose;
  const curPos = curFramePose.position;
  const curOrient = curFramePose.orientation;

  // Löschen Sie die Zeichenfläche, bevor wir darauf zeichnen.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // WebVR: Erstellen Sie die erforderlichen Projektions- und View-Matrix-Lokationen,
  // die in die Methoden uniformMatrix4fv unten einzufügen sind

  const projectionMatrixLocation = gl.getUniformLocation(
    shaderProgram,
    "projMatrix",
  );
  const viewMatrixLocation = gl.getUniformLocation(shaderProgram, "viewMatrix");

  // WebVR: Rendern Sie die Ansicht des linken Auges auf die linke Hälfte der Leinwand
  gl.viewport(0, 0, canvas.width * 0.5, canvas.height);
  gl.uniformMatrix4fv(
    projectionMatrixLocation,
    false,
    frameData.leftProjectionMatrix,
  );
  gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.leftViewMatrix);
  drawGeometry();

  // WebVR: Rendern Sie die Ansicht des rechten Auges auf die rechte Hälfte der Leinwand
  gl.viewport(canvas.width * 0.5, 0, canvas.width * 0.5, canvas.height);
  gl.uniformMatrix4fv(
    projectionMatrixLocation,
    false,
    frameData.rightProjectionMatrix,
  );
  gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.rightViewMatrix);
  drawGeometry();

  function drawGeometry() {
    // Zeichnen Sie die Ansicht für jedes Auge
  }

  // …

  // WebVR: Geben Sie an, dass wir bereit sind, den gerenderten Frame an das VR-Display zu übermitteln
  vrDisplay.submitFrame();
}
```

> [!NOTE]
> Sie können diesen vollständigen Code unter [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) sehen.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Porting von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) von Meta für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
