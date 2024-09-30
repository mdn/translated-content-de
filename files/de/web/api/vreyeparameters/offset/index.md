---
title: "VREyeParameters: offset-Eigenschaft"
short-title: offset
slug: Web/API/VREyeParameters/offset
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`offset`**-Eigenschaft des [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)-Interfaces, die nur gelesen werden kann, stellt den Versatz vom Mittelpunkt zwischen den Augen des Benutzers zum Mittelpunkt des Auges dar, gemessen in Metern.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieser Wert sollte die Hälfte des Augenabstands ("Interpupillary Distance", IPD) des Benutzers darstellen, kann aber auch den Abstand vom Mittelpunkt des Headsets zum Mittelpunkt der Linse für das jeweilige Auge darstellen.

## Wert

Ein {{jsxref("Float32Array")}}, das einen Vektor darstellt, der den Offset vom Mittelpunkt zwischen den Augen des Benutzers zum Mittelpunkt des Auges in Metern beschreibt.

> [!NOTE]
> Werte für das linke Auge sind negativ; Werte für das rechte Auge sind positiv.

## Beispiele

Siehe [`VRFieldOfView`](/de/docs/Web/API/VRFieldOfView#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht länger auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie die [Meta-Anleitung zur Portierung von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
