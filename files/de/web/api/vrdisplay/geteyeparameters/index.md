---
title: "VRDisplay: getEyeParameters()-Methode"
short-title: getEyeParameters()
slug: Web/API/VRDisplay/getEyeParameters
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`getEyeParameters()`**-Methode der Schnittstelle {{domxref("VRDisplay")}} gibt das {{domxref("VREyeParameters")}}-Objekt zurück, das die Augenparameter für das angegebene Auge enthält.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Syntax

```js-nolint
getEyeParameters(whichEye)
```

### Parameter

- `whichEye`
  - : Ein String, der das Auge darstellt, für das Sie die Augenparameter zurückgeben möchten. Verfügbare Werte sind `left` und `right` (definiert im [VREye-Enum](https://w3c.github.io/webvr/spec/1.1/#interface-vreye)).

### Rückgabewert

Ein {{domxref("VREyeParameters")}}-Objekt oder null, wenn VR nicht in der Lage ist, Inhalte darzustellen (z. B. wenn {{domxref("VRDisplayCapabilities.canPresent")}} `false` zurückgibt).

## Beispiele

Siehe [`VREyeParameters`](/de/docs/Web/API/VREyeParameters#examples) für Beispielcode.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht länger auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für mehr Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
