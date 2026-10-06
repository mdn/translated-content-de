---
title: "VRStageParameters: Eigenschaft sittingToStandingTransform"
short-title: sittingToStandingTransform
slug: Web/API/VRStageParameters/sittingToStandingTransform
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`sittingToStandingTransform`** der Schnittstelle [`VRStageParameters`](/de/docs/Web/API/VRStageParameters) enthält eine Matrix, die die Ansichtsmatrizen von [`VRFrameData`](/de/docs/Web/API/VRFrameData) vom Sitzen ins Stehen transformiert.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Diese Matrix kann an Ihren WebGL-Code übergeben werden, um die gerenderte Ansicht von einer sitzenden in eine stehende Perspektive umzuwandeln.

## Wert

Ein {{jsxref("Float32Array")}} mit 16 Elementen, die die Komponenten einer 4×4-Transformationsmatrix enthalten.

## Beispiele

Beispielcode finden Sie unter [`VRStageParameters`](/de/docs/Web/API/VRStageParameters#examples).

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Weitere Informationen finden Sie in Metas Leitfaden [Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
