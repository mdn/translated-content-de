---
title: "VRDisplay: Eigenschaft stageParameters"
short-title: stageParameters
slug: Web/API/VRDisplay/stageParameters
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`stageParameters`** der Schnittstelle [`VRDisplay`](/de/docs/Web/API/VRDisplay) gibt ein [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)-Objekt mit Parametern für raumfüllende Erlebnisse zurück, sofern das `VRDisplay` solche Erlebnisse unterstützt.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Wert

Ein [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)-Objekt mit den Parametern des `VRDisplay` für raumfüllende Erlebnisse oder `null`, wenn das `VRDisplay` solche Erlebnisse nicht unterstützt.

## Beispiele

Beispielcode finden Sie unter [`VRStageParameters`](/de/docs/Web/API/VRStageParameters#examples).

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in [Metas Leitfaden zur Migration von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
