---
title: "VRPose: angularAcceleration-Eigenschaft"
short-title: angularAcceleration
slug: Web/API/VRPose/angularAcceleration
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`angularAcceleration`** des {{domxref("VRPose")}}-Interfaces gibt ein Array zurück, das den Drehbeschleunigungsvektor des {{domxref("VRDisplay")}} zum aktuellen Zeitpunkt in Metern pro Sekunde im Quadrat darstellt.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Mit anderen Worten, die aktuelle Beschleunigung der Drehung des Sensors um die `x`-, `y`- und `z`-Achsen.

## Wert

Ein {{jsxref("Float32Array")}}, oder `null`, wenn der VR-Sensor keine Informationen zur Drehbeschleunigung bereitstellen kann.

## Beispiele

```js
// Render-Schleife für eine VR-Szene
function drawVRScene() {
  // WebVR: Fordern Sie den nächsten Frame der Animation an
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // Füllen Sie frameData mit den Daten des nächsten darzustellenden Frames
  vrDisplay.getFrameData(frameData);

  // Rufen Sie die Drehbeschleunigungswerte für die Verwendung beim Rendering ab
  // curFramePose ist ein VRPose-Objekt
  const curFramePose = frameData.pose;
  const angAcc = curFramePose.angularAcceleration;
  const aax = angAcc[0];
  const aay = angAcc[1];
  const aaz = angAcc[2];

  // Rendern Sie die Szene
  // …

  // WebVR: Übermitteln Sie den gerenderten Frame an das VR-Display
  vrDisplay.submitFrame();
}
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
