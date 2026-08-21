---
title: "VRDisplay: depthFar-Eigenschaft"
short-title: depthFar
slug: Web/API/VRDisplay/depthFar
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die **`depthFar`**-Eigenschaft des [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Interfaces erhält und setzt die z-Tiefe, die die Fernsicht-Ebene der [Augenansichtsfrustum](https://en.wikipedia.org/wiki/Viewing_frustum) definiert, d.h. die am weitesten sichtbare Grenze der Szene.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

In der Regel sollten Sie den Wert unverändert lassen, aber Sie könnten ihn reduzieren, wenn Sie versuchen, die Leistung auf langsameren Computern zu verbessern.

## Wert

Ein Double, das die z-Tiefe in Metern darstellt.
Der anfängliche Wert ist `10000.0`.

## Beispiele

```js
let vrDisplay;

navigator.getVRDisplays().then((displays) => {
  vrDisplay = displays[0];
  vrDisplay.depthNear = 1.0;
  vrDisplay.depthFar = 7500.0;
});
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Portierungsleitfaden von Meta von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
