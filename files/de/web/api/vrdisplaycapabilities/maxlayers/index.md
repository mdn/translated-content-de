---
title: "VRDisplayCapabilities: maxLayers-Eigenschaft"
short-title: maxLayers
slug: Web/API/VRDisplayCapabilities/maxLayers
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte **`maxLayers`**-Eigenschaft des [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)-Interfaces gibt eine Zahl zurück, die die maximale Anzahl von [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)s angibt, die das VR-Display gleichzeitig darstellen kann (z. B. die maximale Länge des Arrays, das [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) akzeptieren kann.)

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Wert

Eine Zahl, die 1 sein muss, wenn [`VRDisplayCapabilities.canPresent`](/de/docs/Web/API/VRDisplayCapabilities/canPresent) `true` ist, oder andernfalls 0.

## Beispiele

Sehen Sie sich für Beispielcode [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities#examples) an.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Meta-Leitfaden zur Portierung von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
