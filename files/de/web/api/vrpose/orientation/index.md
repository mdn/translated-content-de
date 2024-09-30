---
title: "VRPose: orientation-Eigenschaft"
short-title: orientation
slug: Web/API/VRPose/orientation
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`orientation`**-Eigenschaft der Schnittstelle [`VRPose`](/de/docs/Web/API/VRPose) ist eine schreibgeschützte Eigenschaft und gibt die Ausrichtung des Sensors zum aktuellen Zeitstempel als Quaternion-Wert zurück.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Der Wert ist ein {{jsxref("Float32Array")}}, bestehend aus den folgenden Werten:

- pitch — Rotation um die X-Achse.
- yaw — Rotation um die Y-Achse.
- roll — Rotation um die Z-Achse.
- w — die vierte Dimension (normalerweise 1).

Die Ausrichtung yaw (Rotation um die Y-Achse) ist relativ zur anfänglichen yaw des Sensors, als er zuerst gelesen wurde, oder zur yaw des Sensors zu dem Zeitpunkt, als [`VRDisplay.resetPose()`](/de/docs/Web/API/VRDisplay/resetPose) zuletzt aufgerufen wurde.

## Wert

Ein {{jsxref("Float32Array")}}, oder `null`, wenn der VR-Sensor keine Ausrichtungsdaten liefern kann.

## Beispiele

Siehe [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode.

> [!NOTE]
> Eine Ausrichtung von `{ x: 0, y: 0, z: 0, w: 1 }` wird als "vorwärts" angesehen.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), oder [Three.js](https://threejs.org/) oder ein [polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden von Meta zum Umstieg von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
