---
title: "VRLayerInit: rightBounds-Eigenschaft"
short-title: rightBounds
slug: Web/API/VRLayerInit/rightBounds
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die Eigenschaft **`rightBounds`** des Interfaces (Dictionary) [`VRLayerInit`](/de/docs/Web/API/VRLayerInit) definiert die Grenzen der rechten Textur des Canvas, dessen Inhalt vom [`VRDisplay`](/de/docs/Web/API/VRDisplay) dargestellt wird.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Wert

Ein Array aus vier Fließkommawerten im Bereich von 0,0 bis 1,0:

1. Der linke Versatz der Grenzen.
2. Der obere Versatz der Grenzen.
3. Die Breite der Grenzen.
4. Die Höhe der Grenzen.

Wenn `leftBounds` im Dictionary nicht angegeben ist, wird der Standardwert `[0.5, 0.0, 0.5, 1.0]` verwendet.

## Beispiele

Beispielcode finden Sie unter [`VRLayerInit`](/de/docs/Web/API/VRLayerInit#examples).

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als künftiger Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in [Metas Leitfaden zur Migration von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
