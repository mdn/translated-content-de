---
title: "VRLayerInit: source Eigenschaft"
short-title: source
slug: Web/API/VRLayerInit/source
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

Die **`source`**-Eigenschaft des [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)-Interfaces (Dictionary) definiert das Canvas, dessen Inhalt durch das [`VRDisplay`](/de/docs/Web/API/VRDisplay) dargestellt wird.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Wert

Ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt.

## Beispiele

Siehe [`VRLayerInit`](/de/docs/Web/API/VRLayerInit#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Anleitung zur Portierung von WebVR zu WebXR von Meta](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
