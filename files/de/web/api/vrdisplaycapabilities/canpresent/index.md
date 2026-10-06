---
title: "VRDisplayCapabilities: canPresent-Eigenschaft"
short-title: canPresent
slug: Web/API/VRDisplayCapabilities/canPresent
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`canPresent`** der Schnittstelle [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities) gibt einen booleschen Wert zurück, der angibt, ob das VR-Display Inhalte darstellen kann (z. B. über ein Head-Mounted Display).

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Dies ist nützlich, um „Magic Window“-Geräte zu erkennen, die 6DoF-Tracking unterstützen, für die [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) jedoch nicht sinnvoll ist. Wenn `canPresent` den Wert `false` hat, schlagen Aufrufe von [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) fehl, und [`VRDisplay.getEyeParameters()`](/de/docs/Web/API/VRDisplay/getEyeParameters) gibt `null` zurück.

## Wert

Ein boolescher Wert.

## Beispiele

Beispielcode finden Sie unter [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities#examples).

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie im Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
