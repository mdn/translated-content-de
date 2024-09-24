---
title: "VREyeParameters: Eigenschaft renderHeight"
short-title: renderHeight
slug: Web/API/VREyeParameters/renderHeight
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`renderHeight`** der {{domxref("VREyeParameters")}}-Schnittstelle beschreibt die empfohlene Renderzielhöhe der Ansicht jedes Auges, in Pixeln.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dies ist bereits in Geräte-Pixeleinheiten angegeben, daher ist es nicht notwendig, mit [Window.devicePixelRatio](/de/docs/Web/API/Window/devicePixelRatio) zu multiplizieren, bevor Sie es auf [HTMLCanvasElement.height](/de/docs/Web/API/HTMLCanvasElement/height) setzen.

## Wert

Eine Zahl, die die Höhe in Pixeln darstellt.

## Beispiele

Siehe [`VREyeParameters`](/de/docs/Web/API/VREyeParameters#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie befindet sich nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die auf allen Browsern funktionieren. Lesen Sie den Leitfaden [Metas Porting von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
