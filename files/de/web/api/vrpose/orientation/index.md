---
title: "VRPose: Eigenschaft orientation"
short-title: orientation
slug: Web/API/VRPose/orientation
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`orientation`**-Eigenschaft der {{domxref("VRPose")}}-Schnittstelle gibt die Orientierung des Sensors zum aktuellen Zeitpunkt als Quaternion-Wert zurück.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Der Wert ist ein {{jsxref("Float32Array")}}, der aus den folgenden Werten besteht:

- pitch — Rotation um die X-Achse.
- yaw — Rotation um die Y-Achse.
- roll — Rotation um die Z-Achse.
- w — die vierte Dimension (normalerweise 1).

Die Orientierung yaw (Rotation um die y-Achse) ist relativ zur anfänglichen yaw des Sensors, als er zuerst gelesen wurde, oder zur yaw des Sensors zu dem Zeitpunkt, zu dem {{domxref("VRDisplay.resetPose()")}} zuletzt aufgerufen wurde.

## Wert

Ein {{jsxref("Float32Array")}}, oder `null`, wenn der VR-Sensor keine Orientierungsdaten bereitstellen kann.

## Beispiele

Siehe [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode.

> [!NOTE]
> Eine Orientierung von `{ x: 0, y: 0, z: 0, w: 1 }` wird als "vorwärts" betrachtet.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/), oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
