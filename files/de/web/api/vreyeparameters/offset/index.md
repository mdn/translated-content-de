---
title: "VREyeParameters: offset-Eigenschaft"
short-title: offset
slug: Web/API/VREyeParameters/offset
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`offset`** schreibgeschützte Eigenschaft des {{domxref("VREyeParameters")}}-Interfaces repräsentiert den Abstand vom Mittelpunkt zwischen den Augen des Benutzers zum Mittelpunkt des Auges, gemessen in Metern.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieser Wert sollte die Hälfte des interpupillaren Abstands (IPD) des Benutzers darstellen, kann aber auch den Abstand vom Mittelpunkt des Headsets zum Mittelpunkt der Linse für das jeweilige Auge darstellen.

## Wert

Ein {{jsxref("Float32Array")}}, das einen Vektor beschreibt, der den Abstand vom Mittelpunkt zwischen den Augen des Benutzers zum Mittelpunkt des Auges in Metern darstellt.

> [!NOTE]
> Werte für das linke Auge werden negativ sein; Werte für das rechte Auge positiv.

## Beispiele

Sehen Sie sich den [`VRFieldOfView`](/de/docs/Web/API/VRFieldOfView#examples) für Beispielcode an.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
