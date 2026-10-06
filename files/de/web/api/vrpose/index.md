---
title: VRPose
slug: Web/API/VRPose
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die **`VRPose`**-Schnittstelle der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert den Zustand eines VR-Sensors zu einem bestimmten Zeitstempel. Dazu gehören Informationen über Orientierung, Position, Geschwindigkeit und Beschleunigung.

> [!NOTE]
> Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Auf diese Schnittstelle kann über die Methoden [`VRDisplay.getPose()`](/de/docs/Web/API/VRDisplay/getPose) und [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) zugegriffen werden. [`VRDisplay.getPose()`](/de/docs/Web/API/VRDisplay/getPose) ist veraltet.

## Instanzeigenschaften

- [`VRPose.position`](/de/docs/Web/API/VRPose/position) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Position des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) als 3D-Vektor zurück.
- [`VRPose.linearVelocity`](/de/docs/Web/API/VRPose/linearVelocity) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die lineare Geschwindigkeit des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) in Metern pro Sekunde zurück.
- [`VRPose.linearAcceleration`](/de/docs/Web/API/VRPose/linearAcceleration) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die lineare Beschleunigung des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) in Metern pro Sekunde zum Quadrat zurück.
- [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Orientierung des Sensors zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) als Quaternion zurück.
- [`VRPose.angularVelocity`](/de/docs/Web/API/VRPose/angularVelocity) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Winkelgeschwindigkeit des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) in Radiant pro Sekunde zurück.
- [`VRPose.angularAcceleration`](/de/docs/Web/API/VRPose/angularAcceleration) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Winkelbeschleunigung des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) in Metern pro Sekunde zum Quadrat zurück.

## Beispiele

Beispielcode finden Sie unter [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples).

## Spezifikationen

Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in Metas Leitfaden [Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
