---
title: "VRFrameData: leftProjectionMatrix-Eigenschaft"
short-title: leftProjectionMatrix
slug: Web/API/VRFrameData/leftProjectionMatrix
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die **`leftProjectionMatrix`**-Schreibgeschützte Eigenschaft der [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Schnittstelle gibt ein {{jsxref("Float32Array")}} zurück, das eine 4x4-Matrix darstellt. Diese beschreibt die Projektion, die für das Rendering des linken Auges verwendet werden soll.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieser Wert kann direkt an WebGLs [`uniformMatrix4fv`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix)-Funktion übergeben werden.

> [!WARNING]
> Es wird dringend empfohlen, dass Anwendungen diese Matrix ohne Modifikation verwenden. Wenn diese Projektionsmatrix beim Rendering nicht verwendet wird, kann das angezeigte Bild verzerrt oder schlecht ausgerichtet sein, was zu unterschiedlichem Grad an Unbehagen bei den Benutzern führen kann.

## Wert

Ein {{jsxref("Float32Array")}}-Objekt.

## Beispiele

Siehe [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie befindet sich nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/), oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Leitfaden zum Portieren von WebVR auf WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
