---
title: "VRFrameData: rightViewMatrix-Eigenschaft"
short-title: rightViewMatrix
slug: Web/API/VRFrameData/rightViewMatrix
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`rightViewMatrix`** des [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Interfaces gibt ein {{jsxref("Float32Array")}} zurück, das eine 4x4-Matrix darstellt und die Sichttransformation beschreibt, die für das Rendern des rechten Auges verwendet werden soll.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieser Wert kann direkt an die [`uniformMatrix4fv`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix)-Funktion von WebGL übergeben werden.

> [!WARNING]
> Es wird dringend empfohlen, dass Anwendungen diese Matrix beim Rendern verwenden.

## Wert

Ein {{jsxref("Float32Array")}}-Objekt.

## Beispiele

Siehe [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Anleitung von Meta zum Portieren von WebVR nach WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
