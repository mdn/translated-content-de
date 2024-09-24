---
title: "VRPose: linearVelocity-Eigenschaft"
short-title: linearVelocity
slug: Web/API/VRPose/linearVelocity
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`linearVelocity`**-Eigenschaft des {{domxref("VRPose")}}-Interfaces gibt ein Array zurück, das den linearen Geschwindigkeitsvektor des {{domxref("VRDisplay")}} zum aktuellen Zeitpunkt in Metern pro Sekunde darstellt.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Mit anderen Worten: die aktuelle Geschwindigkeit, mit der sich der Sensor entlang der `x`-, `y`- und `z`-Achse bewegt.

## Wert

Ein {{jsxref("Float32Array")}} oder `null`, wenn der VR-Sensor keine Daten zur linearen Geschwindigkeit bereitstellen kann.

## Beispiele

```js
// Rendering-Schleife für eine VR-Szene
function drawVRScene() {
  // WebVR: Fordern Sie den nächsten Animationsframe an
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // Füllen Sie frameData mit den Daten des nächsten anzuzeigenden Frames
  vrDisplay.getFrameData(frameData);

  // Rufen Sie die linearen Geschwindigkeitswerte zur Verwendung im Rendering ab
  // curFramePose ist ein VRPose-Objekt
  const curFramePose = frameData.pose;
  const linVel = curFramePose.linearVelocity;
  const lvx = linVel[0];
  const lvy = linVel[1];
  const lvz = linVel[2];

  // Szene rendern
  // …

  // WebVR: Übermitteln Sie den gerenderten Frame an das VR-Display
  vrDisplay.submitFrame();
}
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
