---
title: "VRPose: angularVelocity-Eigenschaft"
short-title: angularVelocity
slug: Web/API/VRPose/angularVelocity
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`angularVelocity`**-Eigenschaft des {{domxref("VRPose")}} Interfaces gibt ein Array zurück, das den Drehgeschwindigkeitsvektor des {{domxref("VRDisplay")}} zum aktuellen Zeitpunkt in Bogenmaß pro Sekunde darstellt.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Mit anderen Worten, die aktuelle Geschwindigkeit, mit der sich der Sensor um die `x`-, `y`- und `z`-Achsen dreht.

## Wert

Ein {{jsxref("Float32Array")}}, oder `null`, wenn der VR-Sensor keine Informationen über die Drehgeschwindigkeit bereitstellen kann.

## Beispiele

```js
// Rendering-Schleife für eine VR-Szene
function drawVRScene() {
  // WebVR: Fordern Sie den nächsten Frame der Animation an
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // Befüllen Sie frameData mit den Daten des nächsten darzustellenden Frames
  vrDisplay.getFrameData(frameData);

  // Abrufen der Drehgeschwindigkeitswerte zur Verwendung beim Rendern
  // curFramePose ist ein VRPose-Objekt
  const curFramePose = frameData.pose;
  const angVel = curFramePose.angularVelocity;
  const avx = angVel[0];
  const avy = angVel[1];
  const avz = angVel[2];

  // Szene rendern
  // …

  // WebVR: den gerenderten Frame an das VR-Display übermitteln
  vrDisplay.submitFrame();
}
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/), oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Anleitung zum Portieren von WebVR auf WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
