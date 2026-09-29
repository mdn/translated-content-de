---
title: "VRStageParameters: sizeZ-Eigenschaft"
short-title: sizeZ
slug: Web/API/VRStageParameters/sizeZ
l10n:
  sourceCommit: 5351b03470685486d841a3340c6971351058194f
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`sizeZ`** der Schnittstelle [`VRStageParameters`](/de/docs/Web/API/VRStageParameters) gibt die _Tiefe der Begrenzung des Spielbereichs_ in Metern zurück.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Die Begrenzung ist aus Sicherheitsgründen als achsenparalleles Rechteck auf dem Boden definiert. Inhalte sollten nicht erfordern, dass sich Benutzer über diese Begrenzung hinausbewegen. Benutzer können die Begrenzung jedoch ignorieren, sodass Positionswerte außerhalb des Rechtecks entstehen. Der Mittelpunkt des Rechtecks liegt bei (0,0,0) in den Koordinaten des Stehraums.

## Wert

Eine Gleitkommazahl, die die Tiefe in Metern angibt.

## Beispiele

Beispielcode finden Sie unter [`VRStageParameters`](/de/docs/Web/API/VRStageParameters#examples).

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) beziehungsweise einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in [Metas Leitfaden zur Portierung von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
