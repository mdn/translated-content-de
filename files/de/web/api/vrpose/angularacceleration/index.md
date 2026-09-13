---
title: "VRPose: angularAcceleration-Eigenschaft"
short-title: angularAcceleration
slug: Web/API/VRPose/angularAcceleration
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`angularAcceleration`** des [`VRPose`](/de/docs/Web/API/VRPose)-Interfaces gibt ein Array zurück, das den Winkelbeschleunigungsvektor des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen Zeitpunkt in Metern pro Sekunde pro Sekunde darstellt.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Mit anderen Worten: die aktuelle Beschleunigung der Drehung des Sensors um die `x`-, `y`- und `z`-Achsen.

## Wert

Ein {{jsxref("Float32Array")}}, oder `null`, wenn der VR-Sensor keine Informationen zur Winkelbeschleunigung bereitstellen kann.

## Beispiele

```js
// rendering loop for a VR scene
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // Populate frameData with the data of the next frame to display
  vrDisplay.getFrameData(frameData);

  // Retrieve the angular acceleration values for use in rendering
  // curFramePose is a VRPose object
  const curFramePose = frameData.pose;
  const angAcc = curFramePose.angularAcceleration;
  const aax = angAcc[0];
  const aay = angAcc[1];
  const aaz = angAcc[2];

  // render the scene
  // …

  // WebVR: submit the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden von Meta zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
