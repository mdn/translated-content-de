---
title: "VRDisplayCapabilities: Eigenschaft maxLayers"
short-title: maxLayers
slug: Web/API/VRDisplayCapabilities/maxLayers
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`maxLayers`** des Interfaces [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities) gibt eine Zahl zurück, die angibt, wie viele [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)-Objekte das VR-Display gleichzeitig darstellen kann (also die maximale Länge des Arrays, das [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) akzeptieren kann).

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Wert

Eine Zahl, die 1 sein muss, wenn [`VRDisplayCapabilities.canPresent`](/de/docs/Web/API/VRDisplayCapabilities/canPresent) `true` ist, und andernfalls 0.

## Beispiele

Beispielcode finden Sie unter [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities#examples).

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in Metas Leitfaden [Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
