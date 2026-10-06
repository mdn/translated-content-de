---
title: "VRFrameData: pose-Eigenschaft"
short-title: pose
slug: Web/API/VRFrameData/pose
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`pose`** der Schnittstelle [`VRFrameData`](/de/docs/Web/API/VRFrameData) gibt die [`VRPose`](/de/docs/Web/API/VRPose) des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen Zeitpunkt [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) zurück.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Wert

Ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt.

## Beispiele

Beispielcode finden Sie unter [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples).

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie ist nicht mehr für die Standardisierung vorgesehen.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie im Leitfaden [Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/) von Meta.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
