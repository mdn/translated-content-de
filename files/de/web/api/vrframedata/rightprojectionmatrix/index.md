---
title: "VRFrameData: Eigenschaft rightProjectionMatrix"
short-title: rightProjectionMatrix
slug: Web/API/VRFrameData/rightProjectionMatrix
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`rightProjectionMatrix`** der Schnittstelle [`VRFrameData`](/de/docs/Web/API/VRFrameData) gibt ein {{jsxref("Float32Array")}} zurück, das eine 4×4-Matrix darstellt. Diese beschreibt die Projektion, die für das Rendering des rechten Auges verwendet werden soll.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Dieser Wert kann direkt an die WebGL-Funktion [`uniformMatrix4fv`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix) übergeben werden.

> [!WARNING]
> Es wird dringend empfohlen, diese Matrix unverändert zu verwenden. Wird beim Rendering eine andere Projektionsmatrix verwendet, kann das dargestellte Bild verzerrt oder falsch ausgerichtet sein. Dies kann bei Nutzern unterschiedlich starke Beschwerden hervorrufen.

## Wert

Ein {{jsxref("Float32Array")}}-Objekt.

## Beispiele

Beispielcode finden Sie unter [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples).

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie im Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
