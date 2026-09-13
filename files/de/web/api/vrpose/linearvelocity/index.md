---
title: "VRPose: linearVelocity Eigenschaft"
short-title: linearVelocity
slug: Web/API/VRPose/linearVelocity
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte **`linearVelocity`**-Eigenschaft des [`VRPose`](/de/docs/Web/API/VRPose)-Interfaces gibt ein Array zurück, das den Geschwindigkeitsvektor des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen Zeitstempel in Metern pro Sekunde darstellt.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Mit anderen Worten, die aktuelle Geschwindigkeit, mit der sich der Sensor entlang der `x`-, `y`- und `z`-Achsen bewegt.

## Wert

Ein {{jsxref("Float32Array")}}, oder `null`, wenn der VR-Sensor keine Geschwindigkeitsdaten bereitstellen kann.

## Beispiele

```js
// rendering loop for a VR scene
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // Populate frameData with the data of the next frame to display
  vrDisplay.getFrameData(frameData);

  // Retrieve the linear velocity values for use in rendering
  // curFramePose is a VRPose object
  const curFramePose = frameData.pose;
  const linVel = curFramePose.linearVelocity;
  const lvx = linVel[0];
  const lvy = linVel[1];
  const lvz = linVel[2];

  // render the scene
  // …

  // WebVR: submit the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/), oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill), zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Meta-Leitfaden zur Portierung von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für mehr Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
