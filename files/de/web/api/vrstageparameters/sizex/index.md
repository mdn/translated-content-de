---
title: "VRStageParameters: sizeX-Eigenschaft"
short-title: sizeX
slug: Web/API/VRStageParameters/sizeX
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`sizeX`** der Schnittstelle [`VRStageParameters`](/de/docs/Web/API/VRStageParameters) _gibt die Breite_ der Grenzen des Spielbereichs in Metern zurück.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Die Grenzen sind aus Sicherheitsgründen als achsenparalleles Rechteck auf dem Boden definiert. Inhalte sollten nicht erfordern, dass sich Benutzer über diese Grenzen hinausbewegen. Benutzer können die Grenzen jedoch ignorieren, sodass Positionswerte außerhalb dieses Rechtecks entstehen. Der Mittelpunkt des Rechtecks liegt bei (0,0,0) in Koordinaten des stehenden Raums.

## Wert

Eine Gleitkommazahl, die die Breite in Metern angibt.

## Beispiele

Beispielcode finden Sie unter [`VRStageParameters`](/de/docs/Web/API/VRStageParameters#examples).

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie im Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
