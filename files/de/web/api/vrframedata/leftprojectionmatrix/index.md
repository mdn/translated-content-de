---
title: "VRFrameData: leftProjectionMatrix-Eigenschaft"
short-title: leftProjectionMatrix
slug: Web/API/VRFrameData/leftProjectionMatrix
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`leftProjectionMatrix`**-Eigenschaft der [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Schnittstelle gibt ein {{jsxref("Float32Array")}} zurück, das eine 4x4-Matrix darstellt, die die Projektion beschreibt, die für das Rendering des linken Auges verwendet werden soll.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieser Wert kann direkt an die [`uniformMatrix4fv`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix)-Funktion von WebGL übergeben werden.

> [!WARNING]
> Es wird dringend empfohlen, diese Matrix unverändert zu verwenden. Das Nichthandhaben dieser Projektionsmatrix beim Rendering kann dazu führen, dass der dargestellte Frame verzerrt oder schlecht ausgerichtet ist, was zu unterschiedlich starkem Unbehagen bei den Benutzern führen kann.

## Wert

Ein {{jsxref("Float32Array")}}-Objekt.

## Beispiele

Sehen Sie sich [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode an.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie wird nicht mehr auf dem Weg zu einem Standard verfolgt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden von Meta zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
