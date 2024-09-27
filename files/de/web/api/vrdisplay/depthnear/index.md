---
title: "VRDisplay: depthNear-Eigenschaft"
short-title: depthNear
slug: Web/API/VRDisplay/depthNear
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`depthNear`**-Eigenschaft der [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Schnittstelle wird verwendet, um die z-Tiefe zu erhalten und festzulegen, die die Nahebene des [Sichtkegelansichtsfensters](https://en.wikipedia.org/wiki/Viewing_frustum) definiert, d. h. die nächstgelegene sichtbare Grenze der Szene.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Im Allgemeinen sollten Sie den Wert unverändert lassen, aber Sie könnten ihn erhöhen, wenn Sie versuchen, die Leistung auf langsameren Computern zu verbessern und/oder Ihre Benutzeroberfläche mit einer weiter entfernten nahen Grenze sinnvoll ist.

## Wert

Ein Gleitkommawert, der die z-Tiefe in Metern darstellt; sein Anfangswert ist `0.01`.

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

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden zum Portieren von WebVR zu WebXR von Meta](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
