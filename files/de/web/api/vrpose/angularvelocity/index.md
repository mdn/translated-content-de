---
title: "VRPose: angularVelocity-Eigenschaft"
short-title: angularVelocity
slug: Web/API/VRPose/angularVelocity
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`angularVelocity`** der Schnittstelle [`VRPose`](/de/docs/Web/API/VRPose) gibt ein Array zurück, das den Winkelgeschwindigkeitsvektor des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen Zeitstempel in Radiant pro Sekunde darstellt.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Anders ausgedrückt: Sie gibt die aktuelle Geschwindigkeit an, mit der sich der Sensor um die Achsen `x`, `y` und `z` dreht.

## Wert

Ein {{jsxref("Float32Array")}} oder `null`, wenn der VR-Sensor keine Informationen zur Winkelgeschwindigkeit bereitstellen kann.

## Beispiele

```js
// rendering loop for a VR scene
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // Populate frameData with the data of the next frame to display
  vrDisplay.getFrameData(frameData);

  // Retrieve the angular velocity values for use in rendering
  // curFramePose is a VRPose object
  const curFramePose = frameData.pose;
  const angVel = curFramePose.angularVelocity;
  const avx = angVel[0];
  const avy = angVel[1];
  const avz = angVel[2];

  // render the scene
  // …

  // WebVR: submit the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in [Metas Leitfaden zur Migration von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
