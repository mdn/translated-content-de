---
title: "VRStageParameters: sittingToStandingTransform-Eigenschaft"
short-title: sittingToStandingTransform
slug: Web/API/VRStageParameters/sittingToStandingTransform
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`sittingToStandingTransform`** des [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)-Interfaces enthält eine Matrix, die die Sitzraumansicht-Matrizen von [`VRFrameData`](/de/docs/Web/API/VRFrameData) in Stehraum transformiert.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Im Wesentlichen kann dies in Ihren WebGL-Code eingebracht werden, um die gerenderte Ansicht von einer Sitz- zu einer Stehansicht zu transformieren.

## Wert

Ein 16-Elemente umfassendes {{jsxref("Float32Array")}}, das die Komponenten einer 4×4-Transformationsmatrix enthält.

## Beispiele

Siehe [`VRStageParameters`](/de/docs/Web/API/VRStageParameters#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu stützen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Meta-Leitfaden zur Portierung von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
