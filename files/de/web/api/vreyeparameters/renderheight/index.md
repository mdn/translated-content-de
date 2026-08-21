---
title: "VREyeParameters: renderHeight Eigenschaft"
short-title: renderHeight
slug: Web/API/VREyeParameters/renderHeight
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die **`renderHeight`** schreibgeschützte Eigenschaft des [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) Interfaces beschreibt die empfohlene Renderzielhöhe jedes Augen-Viewports in Pixeln.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Diese ist bereits in Gerätepixeleinheiten, daher ist es nicht notwendig, den Wert vor dem Setzen auf [HTMLCanvasElement.height](/de/docs/Web/API/HTMLCanvasElement/height) mit [Window.devicePixelRatio](/de/docs/Web/API/Window/devicePixelRatio) zu multiplizieren.

## Wert

Eine Zahl, die die Höhe in Pixeln repräsentiert.

## Beispiele

Siehe [`VREyeParameters`](/de/docs/Web/API/VREyeParameters#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Meta-Leitfaden zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
