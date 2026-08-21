---
title: "VRPose: orientation-Eigenschaft"
short-title: orientation
slug: Web/API/VRPose/orientation
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte **`orientation`**-Eigenschaft des [`VRPose`](/de/docs/Web/API/VRPose)-Interfaces gibt die Ausrichtung des Sensors zum aktuellen Zeitpunkt als Quaternionwert zurück.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Der Wert ist ein {{jsxref("Float32Array")}}, bestehend aus den folgenden Werten:

- pitch — Drehung um die X-Achse.
- yaw — Drehung um die Y-Achse.
- roll — Drehung um die Z-Achse.
- w — die vierte Dimension (normalerweise 1).

Die Ausrichtung yaw (Drehung um die y-Achse) ist relativ zum anfänglichen yaw des Sensors, als dieser erstmals gelesen wurde, oder zum yaw des Sensors zu dem Zeitpunkt, als [`VRDisplay.resetPose()`](/de/docs/Web/API/VRDisplay/resetPose) zuletzt aufgerufen wurde.

## Wert

Ein {{jsxref("Float32Array")}}, oder `null`, wenn der VR-Sensor keine Ausrichtungsdaten bereitstellen kann.

## Beispiele

Siehe [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode.

> [!NOTE]
> Eine Ausrichtung von `{ x: 0, y: 0, z: 0, w: 1 }` wird als "vorwärts" betrachtet.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/), oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Meta-Leitfaden zur Portierung von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
