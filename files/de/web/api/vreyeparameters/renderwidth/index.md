---
title: "VREyeParameters: renderWidth-Eigenschaft"
short-title: renderWidth
slug: Web/API/VREyeParameters/renderWidth
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`renderWidth`** der Schnittstelle [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) beschreibt die empfohlene Renderzielbreite des Ansichtsfensters für jedes Auge, angegeben in Pixeln.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Diese Eigenschaft ist bereits in Geräte-Pixeleinheiten, daher ist es nicht notwendig, mit dem [Window.devicePixelRatio](/de/docs/Web/API/Window/devicePixelRatio) zu multiplizieren, bevor es der [HTMLCanvasElement.width](/de/docs/Web/API/HTMLCanvasElement/width) zugewiesen wird.

## Wert

Eine Zahl, die die Breite in Pixeln darstellt.

## Beispiele

Siehe [`VREyeParameters`](/de/docs/Web/API/VREyeParameters#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), oder [Three.js](https://threejs.org/), oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Leitfaden zur Portierung von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
