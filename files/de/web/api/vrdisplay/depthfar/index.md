---
title: "VRDisplay: depthFar-Eigenschaft"
short-title: depthFar
slug: Web/API/VRDisplay/depthFar
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die **`depthFar`**-Eigenschaft der Schnittstelle [`VRDisplay`](/de/docs/Web/API/VRDisplay) ruft die z-Tiefe ab, die die hintere Begrenzung des [Sichtfrustums](https://en.wikipedia.org/wiki/Viewing_frustum) eines Auges definiert, oder legt sie fest. Diese Begrenzung ist der am weitesten entfernte sichtbare Bereich der Szene.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Im Allgemeinen sollten Sie den Wert unverändert lassen. Wenn Sie jedoch die Leistung auf langsameren Computern verbessern möchten, können Sie ihn verringern.

## Wert

Eine Gleitkommazahl doppelter Genauigkeit, die die z-Tiefe in Metern angibt.
Der Anfangswert ist `10000.0`.

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

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in Metas [Leitfaden zur Migration von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
