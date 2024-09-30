---
title: "VRDisplay: stageParameters Eigenschaft"
short-title: stageParameters
slug: Web/API/VRDisplay/stageParameters
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`stageParameters`**-Eigenschaft des [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Interfaces ist eine schreibgeschützte Eigenschaft, die ein [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)-Objekt zurückgibt, das Raums-Parameter enthält, wenn das `VRDisplay` in der Lage ist, room-scale Erlebnisse zu unterstützen.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Wert

Ein [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)-Objekt, das die room-scale-Parameter des `VRDisplay`s enthält, oder `null`, wenn das `VRDisplay` nicht in der Lage ist, room-scale Erlebnisse zu unterstützen.

## Beispiele

Siehe [`VRStageParameters`](/de/docs/Web/API/VRStageParameters#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Es ist nicht mehr geplant, sie zu einem Standard zu machen.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden von Meta zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
