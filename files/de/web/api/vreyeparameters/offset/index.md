---
title: "VREyeParameters: offset-Eigenschaft"
short-title: offset
slug: Web/API/VREyeParameters/offset
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`offset`** der Schnittstelle [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) gibt den Abstand zwischen dem Mittelpunkt der Augen der nutzenden Person und dem Mittelpunkt des jeweiligen Auges in Metern an.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Dieser Wert sollte der Hälfte des Pupillenabstands (IPD) der nutzenden Person entsprechen. Er kann jedoch auch den Abstand zwischen dem Mittelpunkt des Headsets und dem Mittelpunkt der Linse für das jeweilige Auge angeben.

## Wert

Ein {{jsxref("Float32Array")}}, der einen Vektor für den Abstand zwischen dem Mittelpunkt der Augen der nutzenden Person und dem Mittelpunkt des jeweiligen Auges in Metern beschreibt.

> [!NOTE]
> Werte für das linke Auge sind negativ; Werte für das rechte Auge sind positiv.

## Beispiele

Beispielcode finden Sie unter [`VRFieldOfView`](/de/docs/Web/API/VRFieldOfView#examples).

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden, um WebXR-Anwendungen zu entwickeln, die browserübergreifend funktionieren. Weitere Informationen finden Sie im Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
