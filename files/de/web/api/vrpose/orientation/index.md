---
title: "VRPose: orientation-Eigenschaft"
short-title: orientation
slug: Web/API/VRPose/orientation
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`orientation`** der Schnittstelle [`VRPose`](/de/docs/Web/API/VRPose) gibt die Ausrichtung des Sensors zum aktuellen Zeitstempel als Quaternion-Wert zurück.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Der Wert ist ein {{jsxref("Float32Array")}}, bestehend aus den folgenden Werten:

- pitch — Rotation um die X-Achse.
- yaw — Rotation um die Y-Achse.
- roll — Rotation um die Z-Achse.
- w — die vierte Dimension (normalerweise 1).

Das yaw der Ausrichtung (Rotation um die Y-Achse) ist relativ zur anfänglichen Ausrichtung des Sensors, als dieser zuerst gelesen wurde oder zur Ausrichtung des Sensors an dem Punkt, an dem [`VRDisplay.resetPose()`](/de/docs/Web/API/VRDisplay/resetPose) zuletzt aufgerufen wurde.

## Wert

Ein {{jsxref("Float32Array")}}, oder `null`, wenn der VR-Sensor keine Ausrichtungsdaten bereitstellen kann.

## Beispiele

Siehe [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode.

> [!NOTE]
> Eine Ausrichtung von `{ x: 0, y: 0, z: 0, w: 1 }` wird als "vorwärts" betrachtet.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
