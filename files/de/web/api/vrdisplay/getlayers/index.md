---
title: "VRDisplay: Methode getLayers()"
short-title: getLayers()
slug: Web/API/VRDisplay/getLayers
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die Methode **`getLayers()`** der Schnittstelle [`VRDisplay`](/de/docs/Web/API/VRDisplay) gibt die Ebenen zurück, die derzeit vom `VRDisplay` dargestellt werden.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Syntax

```js-nolint
getLayers()
```

### Parameter

Keine.

### Rückgabewert

Wenn der [`VRDisplay`](/de/docs/Web/API/VRDisplay) Inhalte darstellt, gibt diese Methode ein Array der derzeit dargestellten [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)-Objekte zurück. Derzeit enthält es genau ein Objekt, da [`VRDisplayCapabilities.maxLayers`](/de/docs/Web/API/VRDisplayCapabilities/maxLayers) derzeit immer 1 ist. Wenn der [`VRDisplay`](/de/docs/Web/API/VRDisplay) keine Inhalte darstellt, gibt die Methode ein leeres Array zurück.

## Beispiele

Beispielcode finden Sie unter [`VRLayerInit`](/de/docs/Web/API/VRLayerInit#examples).

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in Metas Leitfaden [Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
