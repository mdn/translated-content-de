---
title: "VRDisplayCapabilities: canPresent-Eigenschaft"
short-title: canPresent
slug: Web/API/VRDisplayCapabilities/canPresent
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`canPresent`** der Schnittstelle [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities) gibt einen booleschen Wert zurück, der angibt, ob das VR-Display in der Lage ist, Inhalte darzustellen (z.B. über ein HMD).

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dies ist nützlich, um "Magic Window"-Geräte zu identifizieren, die 6DoF-Tracking unterstützen, für die jedoch [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) nicht sinnvoll ist. Wenn `canPresent` `false` ist, schlagen Aufrufe von [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) fehl und [`VRDisplay.getEyeParameters()`](/de/docs/Web/API/VRDisplay/getEyeParameters) gibt `null` zurück.

## Wert

Ein boolescher Wert.

## Beispiele

Siehe [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie die Anleitung [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
