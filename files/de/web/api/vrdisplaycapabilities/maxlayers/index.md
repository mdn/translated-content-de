---
title: "VRDisplayCapabilities: maxLayers-Eigenschaft"
short-title: maxLayers
slug: Web/API/VRDisplayCapabilities/maxLayers
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`maxLayers`** des [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)-Interfaces gibt eine Zahl zurück, die die maximale Anzahl von [`VRLayerInit`](/de/docs/Web/API/VRLayerInit) angibt, die das VR-Display gleichzeitig präsentieren kann (z.B. die maximale Länge des Arrays, das [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) akzeptieren kann.)

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Wert

Eine Zahl, die 1 sein muss, wenn [`VRDisplayCapabilities.canPresent`](/de/docs/Web/API/VRDisplayCapabilities/canPresent) `true` ist, oder 0 andernfalls.

## Beispiele

Siehe [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden "Porting from WebVR to WebXR" von Meta](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
