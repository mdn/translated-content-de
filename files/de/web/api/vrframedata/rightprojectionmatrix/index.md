---
title: "VRFrameData: rightProjectionMatrix-Eigenschaft"
short-title: rightProjectionMatrix
slug: Web/API/VRFrameData/rightProjectionMatrix
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`rightProjectionMatrix`** des [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Interfaces gibt ein {{jsxref("Float32Array")}} zurück, das eine 4x4-Matrix darstellt, die die Projektion für das Rendering des rechten Auges beschreibt.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieser Wert kann direkt an die `uniformMatrix4fv`-Funktion von WebGL übergeben werden.

> [!WARNING]
> Es wird dringend empfohlen, diese Matrix unverändert zu verwenden. Die Präsentation des gerenderten Frames kann verzerrt oder schlecht ausgerichtet sein und dadurch zu unterschiedlichen Graden von Unbehagen beim Benutzer führen, wenn diese Projektionsmatrix nicht verwendet wird.

## Wert

Ein {{jsxref("Float32Array")}}-Objekt.

## Beispiele

Beispielcode finden Sie unter [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples).

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde und nicht mehr auf dem Weg ist, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Anleitung zur Portierung von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
