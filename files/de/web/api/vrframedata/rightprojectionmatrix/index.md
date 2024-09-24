---
title: "VRFrameData: rightProjectionMatrix-Eigenschaft"
short-title: rightProjectionMatrix
slug: Web/API/VRFrameData/rightProjectionMatrix
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`rightProjectionMatrix`**-Eigenschaft des {{domxref("VRFrameData")}}-Interfaces gibt ein {{jsxref("Float32Array")}} zurück, das eine 4x4-Matrix darstellt, die die Projektion beschreibt, die für das Rendering des rechten Auges verwendet werden soll.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieser Wert kann direkt an die {{domxref("WebGLRenderingContext.uniformMatrix", "uniformMatrix4fv")}}-Funktion von WebGL übergeben werden.

> [!WARNING]
> Es wird dringend empfohlen, dass Anwendungen diese Matrix unverändert verwenden. Wird diese Projektionsmatrix beim Rendering nicht verwendet, kann das dargestellte Bild verzerrt oder schlecht ausgerichtet sein, was zu unterschiedlichen Graden von Unbehagen für den Benutzer führen kann.

## Wert

Ein {{jsxref("Float32Array")}}-Objekt.

## Beispiele

Siehe [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht mehr vorgesehen, dass es ein Standard wird.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
