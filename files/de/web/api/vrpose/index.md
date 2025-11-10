---
title: VRPose
slug: Web/API/VRPose
l10n:
  sourceCommit: 94ffd165232b5205418f8aa57127ee0854421db2
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`VRPose`** Schnittstelle der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert den Zustand eines VR-Sensors zu einem bestimmten Zeitpunkt (einschließlich Informationen über Orientierung, Position, Geschwindigkeit und Beschleunigung).

> [!NOTE]
> Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Diese Schnittstelle ist über die Methoden [`VRDisplay.getPose()`](/de/docs/Web/API/VRDisplay/getPose) und [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) zugänglich. [`VRDisplay.getPose()`](/de/docs/Web/API/VRDisplay/getPose) ist veraltet.

## Instanz-Eigenschaften

- [`VRPose.position`](/de/docs/Web/API/VRPose/position) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Position des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) als 3D-Vektor zurück.
- [`VRPose.linearVelocity`](/de/docs/Web/API/VRPose/linearVelocity) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die lineare Geschwindigkeit des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) in Metern pro Sekunde zurück.
- [`VRPose.linearAcceleration`](/de/docs/Web/API/VRPose/linearAcceleration) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die lineare Beschleunigung des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) in Metern pro Sekunde zum Quadrat zurück.
- [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Orientierung des Sensors zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) als Quaternion-Wert zurück.
- [`VRPose.angularVelocity`](/de/docs/Web/API/VRPose/angularVelocity) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Winkelgeschwindigkeit des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) in Radiant pro Sekunde zurück.
- [`VRPose.angularAcceleration`](/de/docs/Web/API/VRPose/angularAcceleration) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Winkelbeschleunigung des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) in Metern pro Sekunde zum Quadrat zurück.

## Beispiele

Siehe [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode.

## Spezifikationen

Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie die [Anleitung von Meta zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
