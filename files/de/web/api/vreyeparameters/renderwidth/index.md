---
title: "VREyeParameters: renderWidth-Eigenschaft"
short-title: renderWidth
slug: Web/API/VREyeParameters/renderWidth
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`renderWidth`** der Schnittstelle [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) beschreibt die empfohlene Breitteneinstellung des Renderziels jedes Augenansichtbereichs, in Pixeln.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dies ist bereits in Geräte-Pixeleinheiten angegeben, daher ist es nicht nötig, mit [Window.devicePixelRatio](/de/docs/Web/API/Window/devicePixelRatio) zu multiplizieren, bevor es auf [HTMLCanvasElement.width](/de/docs/Web/API/HTMLCanvasElement/width) gesetzt wird.

## Wert

Eine Zahl, die die Breite in Pixeln darstellt.

## Beispiele

Siehe [`VREyeParameters`](/de/docs/Web/API/VREyeParameters#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr dabei, zu einem Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren werden. Lesen Sie in [Metas Leitfaden zur Portierung von WebVR auf WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) mehr darüber.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
