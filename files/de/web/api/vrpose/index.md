---
title: VRPose
slug: Web/API/VRPose
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Das **`VRPose`** Interface der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert den Zustand eines VR-Sensors zu einem gegebenen Zeitpunkt (einschließlich Informationen über Orientierung, Position, Geschwindigkeit und Beschleunigung).

> [!NOTE]
> Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Es wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieses Interface ist über die Methoden [`VRDisplay.getPose()`](/de/docs/Web/API/VRDisplay/getPose) und [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) zugänglich. [`VRDisplay.getPose()`](/de/docs/Web/API/VRDisplay/getPose) ist veraltet.

## Instanz-Eigenschaften

- [`VRPose.position`](/de/docs/Web/API/VRPose/position) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Position des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) als 3D-Vektor zurück.
- [`VRPose.linearVelocity`](/de/docs/Web/API/VRPose/linearVelocity) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die lineare Geschwindigkeit des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) in Metern pro Sekunde zurück.
- [`VRPose.linearAcceleration`](/de/docs/Web/API/VRPose/linearAcceleration) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die lineare Beschleunigung des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) in Metern pro Sekunde Quadrat zurück.
- [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Orientierung des Sensors zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) als Quaternion-Wert zurück.
- [`VRPose.angularVelocity`](/de/docs/Web/API/VRPose/angularVelocity) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Winkelgeschwindigkeit des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) in Radiant pro Sekunde zurück.
- [`VRPose.angularAcceleration`](/de/docs/Web/API/VRPose/angularAcceleration) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Winkelbeschleunigung des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) in Metern pro Sekunde Quadrat zurück.

## Beispiele

Siehe [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode.

## Spezifikationen

Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Meta-Leitfaden zur Portierung von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
