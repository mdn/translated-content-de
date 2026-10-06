---
title: "VRLayerInit: leftBounds-Eigenschaft"
short-title: leftBounds
slug: Web/API/VRLayerInit/leftBounds
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die Eigenschaft **`leftBounds`** der Schnittstelle (Dictionary) [`VRLayerInit`](/de/docs/Web/API/VRLayerInit) definiert die Grenzen der linken Textur des Canvas, dessen Inhalt vom [`VRDisplay`](/de/docs/Web/API/VRDisplay) dargestellt wird.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Wert

Ein Array aus vier Gleitkommawerten im Bereich von 0.0 bis 1.0:

- Der linke Versatz der Grenzen.
- Der obere Versatz der Grenzen.
- Die Breite der Grenzen.
- Die Höhe der Grenzen.

Wenn `leftBounds` im Dictionary nicht angegeben ist, wird standardmäßig `[0.0, 0.0, 0.5, 1.0]` verwendet.

## Beispiele

Beispielcode finden Sie unter [`VRLayerInit`](/de/docs/Web/API/VRLayerInit#examples).

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Weitere Informationen finden Sie in [Metas Leitfaden zur Migration von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
