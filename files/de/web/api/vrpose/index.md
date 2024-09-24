---
title: VRPose
slug: Web/API/VRPose
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`VRPose`**-Schnittstelle der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert den Zustand eines VR-Sensors zu einem gegebenen Zeitpunkt (der Ausrichtung, Position, Geschwindigkeit und Beschleunigungsinformationen umfasst).

> [!NOTE]
> Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Diese Schnittstelle ist über die Methoden {{domxref("VRDisplay.getPose()")}} und {{domxref("VRDisplay.getFrameData()")}} zugänglich. {{domxref("VRDisplay.getPose()")}} ist veraltet.

## Instanz-Eigenschaften

- {{domxref("VRPose.position")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Position des {{domxref("VRDisplay")}} zum aktuellen {{domxref("VRFrameData.timestamp")}} als 3D-Vektor zurück.
- {{domxref("VRPose.linearVelocity")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die lineare Geschwindigkeit des {{domxref("VRDisplay")}} zum aktuellen {{domxref("VRFrameData.timestamp")}} in Metern pro Sekunde zurück.
- {{domxref("VRPose.linearAcceleration")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die lineare Beschleunigung des {{domxref("VRDisplay")}} zum aktuellen {{domxref("VRFrameData.timestamp")}} in Metern pro Sekunde² zurück.
- {{domxref("VRPose.orientation")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Ausrichtung des Sensors zum aktuellen {{domxref("VRFrameData.timestamp")}} als Quaternion-Wert zurück.
- {{domxref("VRPose.angularVelocity")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Winkelgeschwindigkeit des {{domxref("VRDisplay")}} zum aktuellen {{domxref("VRFrameData.timestamp")}} in Radiant pro Sekunde zurück.
- {{domxref("VRPose.angularAcceleration")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die Winkelbeschleunigung des {{domxref("VRDisplay")}} zum aktuellen {{domxref("VRFrameData.timestamp")}} in Metern pro Sekunde² zurück.

## Beispiele

Siehe [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode.

## Spezifikationen

Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
