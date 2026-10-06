---
title: "VRPose: orientation-Eigenschaft"
short-title: orientation
slug: Web/API/VRPose/orientation
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`orientation`** der Schnittstelle [`VRPose`](/de/docs/Web/API/VRPose) gibt die Ausrichtung des Sensors zum aktuellen Zeitstempel als Quaternion zurück.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Der Wert ist ein {{jsxref("Float32Array")}} mit den folgenden Komponenten:

- pitch — Drehung um die X-Achse.
- yaw — Drehung um die Y-Achse.
- roll — Drehung um die Z-Achse.
- w — die vierte Dimension (normalerweise 1).

Der yaw-Wert der Ausrichtung (Drehung um die Y-Achse) bezieht sich auf den anfänglichen yaw-Wert des Sensors beim ersten Auslesen oder auf dessen yaw-Wert zum Zeitpunkt des letzten Aufrufs von [`VRDisplay.resetPose()`](/de/docs/Web/API/VRDisplay/resetPose).

## Wert

Ein {{jsxref("Float32Array")}} oder `null`, wenn der VR-Sensor keine Ausrichtungsdaten bereitstellen kann.

## Beispiele

Beispielcode finden Sie unter [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples).

> [!NOTE]
> Eine Ausrichtung von `{ x: 0, y: 0, z: 0, w: 1 }` gilt als „nach vorne“ gerichtet.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in [Metas Leitfaden zur Portierung von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
