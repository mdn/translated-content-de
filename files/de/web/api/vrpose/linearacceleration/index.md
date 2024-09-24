---
title: "VRPose: Eigenschaft linearAcceleration"
short-title: linearAcceleration
slug: Web/API/VRPose/linearAcceleration
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`linearAcceleration`** schreibgeschützte Eigenschaft der {{domxref("VRPose")}}-Schnittstelle gibt ein Array zurück, das den linearen Beschleunigungsvektor des {{domxref("VRDisplay")}} zum aktuellen Zeitpunkt in Metern pro Sekunde zum Quadrat darstellt.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Mit anderen Worten, die aktuelle Beschleunigung des Sensors entlang der Achsen `x`, `y` und `z`.

## Wert

Ein {{jsxref("Float32Array")}} oder `null`, wenn der VR-Sensor keine linearen Beschleunigungsdaten bereitstellen kann.

## Beispiele

```js
// Rendering-Schleife für eine VR-Szene
function drawVRScene() {
  // WebVR: Fordern Sie den nächsten Animationsrahmen an
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // Füllen Sie frameData mit den Daten des nächsten darzustellenden Rahmens
  vrDisplay.getFrameData(frameData);

  // Rufen Sie die linearen Beschleunigungswerte für die Verwendung beim Rendern ab
  // curFramePose ist ein VRPose-Objekt
  const curFramePose = frameData.pose;
  const linAcc = curFramePose.linearAcceleration;
  const lax = linAcc[0];
  const lay = linAcc[1];
  const laz = linAcc[2];

  // die Szene rendern
  // …

  // WebVR: Übergeben Sie den gerenderten Frame an das VR-Display
  vrDisplay.submitFrame();
}
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Leitfaden zur Umstellung von WebVR auf WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
