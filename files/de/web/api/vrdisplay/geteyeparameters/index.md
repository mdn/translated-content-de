---
title: "VRDisplay: Methode getEyeParameters()"
short-title: getEyeParameters()
slug: Web/API/VRDisplay/getEyeParameters
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die **`getEyeParameters()`** Methode der [`VRDisplay`](/de/docs/Web/API/VRDisplay) Schnittstelle gibt das [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) Objekt zurück, das die Augenparameter für das angegebene Auge enthält.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Syntax

```js-nolint
getEyeParameters(whichEye)
```

### Parameter

- `whichEye`
  - : Ein String, der das Auge repräsentiert, für das Sie die Augenparameter zurückgeben möchten. Verfügbare Werte sind `left` und `right` (definiert im [VREye enum](https://w3c.github.io/webvr/spec/1.1/#interface-vreye)).

### Rückgabewert

Ein [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) Objekt oder null, wenn VR nicht in der Lage ist, Inhalte zu präsentieren (z.B. wenn [`VRDisplayCapabilities.canPresent`](/de/docs/Web/API/VRDisplayCapabilities/canPresent) `false` zurückgibt).

## Beispiele

Siehe [`VREyeParameters`](/de/docs/Web/API/VREyeParameters#examples) für Beispielcode.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) umgesetzt haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/), oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Meta's Leitfaden zur Portierung von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für mehr Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
