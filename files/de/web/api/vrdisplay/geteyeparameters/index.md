---
title: "VRDisplay: getEyeParameters() Methode"
short-title: getEyeParameters()
slug: Web/API/VRDisplay/getEyeParameters
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`getEyeParameters()`** Methode der [`VRDisplay`](/de/docs/Web/API/VRDisplay) Schnittstelle gibt das [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) Objekt zurück, das die Augenparameter für das angegebene Auge enthält.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Syntax

```js-nolint
getEyeParameters(whichEye)
```

### Parameter

- `whichEye`
  - : Ein String, der das Auge repräsentiert, für das Sie die Augenparameter zurückgeben möchten. Verfügbare Werte sind `left` und `right` (definiert im [VREye-Enum](https://w3c.github.io/webvr/spec/1.1/#interface-vreye)).

### Rückgabewert

Ein [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) Objekt oder null, wenn VR nicht in der Lage ist, Inhalte darzustellen (z. B. wenn [`VRDisplayCapabilities.canPresent`](/de/docs/Web/API/VRDisplayCapabilities/canPresent) `false` zurückgibt).

## Beispiele

Siehe [`VREyeParameters`](/de/docs/Web/API/VREyeParameters#examples) für Beispielcode.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie wird nicht mehr als Standard weiterverfolgt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Leitfaden zum Umstellen von WebVR auf WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
