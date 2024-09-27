---
title: "VRDisplay: capabilities-Eigenschaft"
short-title: capabilities
slug: Web/API/VRDisplay/capabilities
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`capabilities`** schreibgeschützte Eigenschaft der [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Schnittstelle gibt ein [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)-Objekt zurück, das die verschiedenen Fähigkeiten des `VRDisplay` angibt.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Wert

Ein [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)-Objekt.

## Beispiele

Siehe [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie befindet sich nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Porting von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/)-Leitfaden von Meta für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
