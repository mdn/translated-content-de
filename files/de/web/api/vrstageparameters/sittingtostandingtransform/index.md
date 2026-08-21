---
title: "VRStageParameters: sittingToStandingTransform-Eigenschaft"
short-title: sittingToStandingTransform
slug: Web/API/VRStageParameters/sittingToStandingTransform
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die nur lesbare **`sittingToStandingTransform`**-Eigenschaft der [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)-Schnittstelle enthält eine Matrix, die die Sitzraum-Ansichtsmatrizen von [`VRFrameData`](/de/docs/Web/API/VRFrameData) in den Stehraum transformiert.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Im Grunde kann dieser Wert in Ihren WebGL-Code eingebunden werden, um die gerenderte Ansicht von einer Sitzansicht in eine Stehansicht zu transformieren.

## Wert

Ein 16-elementiges {{jsxref("Float32Array")}}, das die Komponenten einer 4×4-Transformationsmatrix enthält.

## Beispiele

Siehe [`VRStageParameters`](/de/docs/Web/API/VRStageParameters#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu stützen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden zur Portierung von WebVR zu WebXR von Meta](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
