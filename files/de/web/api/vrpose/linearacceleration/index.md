---
title: "VRPose: linearAcceleration-Eigenschaft"
short-title: linearAcceleration
slug: Web/API/VRPose/linearAcceleration
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte **`linearAcceleration`**-Eigenschaft des [`VRPose`](/de/docs/Web/API/VRPose)-Interfaces gibt ein Array zurück, das den linearen Beschleunigungsvektor des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen Zeitstempel in Metern pro Sekunde^2 darstellt.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Mit anderen Worten, die aktuelle Beschleunigung des Sensors entlang der `x`-, `y`- und `z`-Achsen.

## Wert

Ein {{jsxref("Float32Array")}}, oder `null`, wenn der VR-Sensor keine Daten zur linearen Beschleunigung bereitstellen kann.

## Beispiele

```js
// rendering loop for a VR scene
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // Populate frameData with the data of the next frame to display
  vrDisplay.getFrameData(frameData);

  // Retrieve the linear acceleration values for use in rendering
  // curFramePose is a VRPose object
  const curFramePose = frameData.pose;
  const linAcc = curFramePose.linearAcceleration;
  const lax = linAcc[0];
  const lay = linAcc[1];
  const laz = linAcc[2];

  // render the scene
  // …

  // WebVR: submit the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) sowie ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden für das Portieren von WebVR zu WebXR von Meta](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
