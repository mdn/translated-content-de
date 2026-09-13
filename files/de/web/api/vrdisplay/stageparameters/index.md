---
title: "VRDisplay: stageParameters-Eigenschaft"
short-title: stageParameters
slug: Web/API/VRDisplay/stageParameters
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte **`stageParameters`**-Eigenschaft des [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Interfaces gibt ein [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)-Objekt zurück, das Raummaßstabsparameter enthält, wenn das `VRDisplay` in der Lage ist, Raummaßstabserfahrungen zu unterstützen.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Wert

Ein [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)-Objekt, das die Raummaßstabsparameter des `VRDisplay` enthält, oder `null`, wenn das `VRDisplay` nicht in der Lage ist, Raummaßstabserfahrungen zu unterstützen.

## Beispiele

Siehe [`VRStageParameters`](/de/docs/Web/API/VRStageParameters#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden von Meta zur Portierung von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
