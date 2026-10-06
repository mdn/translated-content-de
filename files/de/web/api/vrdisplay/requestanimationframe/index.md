---
title: "VRDisplay: requestAnimationFrame()-Methode"
short-title: requestAnimationFrame()
slug: Web/API/VRDisplay/requestAnimationFrame
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die Methode **`requestAnimationFrame()`** der Schnittstelle [`VRDisplay`](/de/docs/Web/API/VRDisplay) ist eine spezielle Implementierung von [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame). Sie nimmt eine Callback-Funktion entgegen, die jedes Mal aufgerufen wird, wenn ein neuer Frame der `VRDisplay`-Präsentation gerendert wird:

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

- Wenn `VRDisplay` keine Szene präsentiert, entspricht die Methode funktional [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame).
- Wenn `VRDisplay` eine Szene präsentiert, wird der Callback mit der nativen Bildwiederholfrequenz aufgerufen.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameter

- `callback`
  - : Eine Callback-Funktion, die jedes Mal aufgerufen wird, wenn ein neuer Frame der `VRDisplay`-Präsentation gerendert wird.

### Rückgabewert

Ein Wert vom Typ long, der das Handle des `requestAnimationFrame()`-Aufrufs darstellt. Er kann anschließend an [`VRDisplay.cancelAnimationFrame()`](/de/docs/Web/API/VRDisplay/cancelAnimationFrame) übergeben werden, um den Callback abzumelden.

## Beispiele

```js
const frameData = new VRFrameData();
let vrDisplay;

navigator.getVRDisplays().then((displays) => {
  vrDisplay = displays[0];
  console.log("Display found");
  // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
  btn.addEventListener("click", () => {
    vrDisplay.requestPresent([{ source: canvas }]).then(() => {
      drawVRScene();
    });
  });
});

// WebVR: Draw the scene for the WebVR display.
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // Populate frameData with the data of the next frame to display
  vrDisplay.getFrameData(frameData);

  // You can get the position, orientation, etc. of the display from the current frame's pose
  const curFramePose = frameData.pose;
  const curPos = curFramePose.position;
  const curOrient = curFramePose.orientation;

  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // WebVR: Create the required projection and view matrix locations needed
  // for passing into the uniformMatrix4fv methods below

  const projectionMatrixLocation = gl.getUniformLocation(
    shaderProgram,
    "projMatrix",
  );
  const viewMatrixLocation = gl.getUniformLocation(shaderProgram, "viewMatrix");

  // WebVR: Render the left eye's view to the left half of the canvas
  gl.viewport(0, 0, canvas.width * 0.5, canvas.height);
  gl.uniformMatrix4fv(
    projectionMatrixLocation,
    false,
    frameData.leftProjectionMatrix,
  );
  gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.leftViewMatrix);
  drawGeometry();

  // WebVR: Render the right eye's view to the right half of the canvas
  gl.viewport(canvas.width * 0.5, 0, canvas.width * 0.5, canvas.height);
  gl.uniformMatrix4fv(
    projectionMatrixLocation,
    false,
    frameData.rightProjectionMatrix,
  );
  gl.uniformMatrix4fv(viewMatrixLocation, false, frameData.rightViewMatrix);
  drawGeometry();

  function drawGeometry() {
    // draw the view for each eye
  }

  // …

  // WebVR: Indicate that we are ready to present the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

> [!NOTE]
> Den vollständigen Code finden Sie unter [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js).

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen. Weitere Informationen finden Sie in [Metas Leitfaden zur Migration von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
