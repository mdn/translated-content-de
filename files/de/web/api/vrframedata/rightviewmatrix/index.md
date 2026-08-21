---
title: "VRFrameData: Eigenschaft rightViewMatrix"
short-title: rightViewMatrix
slug: Web/API/VRFrameData/rightViewMatrix
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die **`rightViewMatrix`** schreibgeschützte Eigenschaft des [`VRFrameData`](/de/docs/Web/API/VRFrameData) Interfaces gibt ein {{jsxref("Float32Array")}} zurück, das eine 4x4-Matrix darstellt, die die Sichttransformation beschreibt, die für das Rendering des rechten Auges verwendet werden soll.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieser Wert kann direkt an die Funktion [`uniformMatrix4fv`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix) von WebGL übergeben werden.

> [!WARNING]
> Es wird dringend empfohlen, dass Anwendungen diese Matrix beim Rendering verwenden.

## Wert

Ein {{jsxref("Float32Array")}} Objekt.

## Beispiele

Siehe [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Solange nicht alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Anleitung für den Port von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
