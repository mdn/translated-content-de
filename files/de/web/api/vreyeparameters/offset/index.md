---
title: "VREyeParameters: offset-Eigenschaft"
short-title: offset
slug: Web/API/VREyeParameters/offset
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`offset`** schreibgeschützte Eigenschaft der [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)-Schnittstelle stellt den Versatz vom Mittelpunkt zwischen den Augen des Benutzers zum Mittelpunkt des Auges dar, gemessen in Metern.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Dieser Wert sollte die Hälfte des interpupillären Abstands (IPD) des Benutzers darstellen, kann aber auch die Entfernung vom Mittelpunkt des Headsets zum Mittelpunkt der Linse für das jeweilige Auge repräsentieren.

## Wert

Ein {{jsxref("Float32Array")}}, der einen Vektor beschreibt, der den Versatz vom Mittelpunkt zwischen den Augen des Benutzers zum Mittelpunkt des Auges in Metern darstellt.

> [!NOTE]
> Werte für das linke Auge werden negativ sein; Werte für das rechte Auge werden positiv sein.

## Beispiele

Sehen Sie sich [`VRFieldOfView`](/de/docs/Web/API/VRFieldOfView#examples) für Beispielcode an.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/), die von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht weiter als Standard verfolgt.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden "Porting from WebVR to WebXR"](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) von Meta für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
