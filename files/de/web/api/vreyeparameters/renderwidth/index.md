---
title: "VREyeParameters: Eigenschaft renderWidth"
short-title: renderWidth
slug: Web/API/VREyeParameters/renderWidth
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`renderWidth`** der Schnittstelle [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) gibt die empfohlene Breite des Renderziels für den Viewport jedes Auges in Pixeln an.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Der Wert ist bereits in Gerätepixeln angegeben. Daher müssen Sie ihn nicht mit [Window.devicePixelRatio](/de/docs/Web/API/Window/devicePixelRatio) multiplizieren, bevor Sie ihn für [HTMLCanvasElement.width.](/de/docs/Web/API/HTMLCanvasElement/width) festlegen.

## Wert

Eine Zahl, die die Breite in Pixeln angibt.

## Beispiele

Beispielcode finden Sie unter [`VREyeParameters`](/de/docs/Web/API/VREyeParameters#examples).

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Es ist nicht mehr vorgesehen, sie zu standardisieren.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in Metas Leitfaden [Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
