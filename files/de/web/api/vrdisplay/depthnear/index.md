---
title: "VRDisplay: depthNear-Eigenschaft"
short-title: depthNear
slug: Web/API/VRDisplay/depthNear
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die **`depthNear`**-Eigenschaft des [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Interfaces erhält und setzt die Z-Tiefe, die die Nahplane der [Augenansicht-Frustum](https://en.wikipedia.org/wiki/Viewing_frustum) definiert, also die nächste sichtbare Grenze der Szene.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Im Allgemeinen sollten Sie den Wert unverändert lassen, aber möglicherweise möchten Sie ihn erhöhen, wenn Sie versuchen, die Leistung auf langsameren Computern zu verbessern und/oder Ihre Benutzeroberfläche sinnvoll ist, wenn die nahe Grenze weiter entfernt ist.

## Wert

Ein Doppelwert, der die Z-Tiefe in Metern darstellt; sein Anfangswert ist `0.01`.

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

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) umgesetzt haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren werden. Lesen Sie den [Leitfaden zur Portierung von WebVR nach WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) von Meta für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
