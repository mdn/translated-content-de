---
title: "VREyeParameters: fieldOfView-Eigenschaft"
short-title: fieldOfView
slug: Web/API/VREyeParameters/fieldOfView
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`fieldOfView`**-Eigenschaft des [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)-Interfaces gibt ein [`VRFieldOfView`](/de/docs/Web/API/VRFieldOfView)-Objekt zurück, das das aktuelle Sichtfeld für das Auge beschreibt, welches sich ändern kann, wenn der Benutzer seinen interpupillaren Abstand (IPD) anpasst.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Wert

Ein [`VRFieldOfView`](/de/docs/Web/API/VRFieldOfView)-Objekt.

## Beispiele

Siehe [`VRFieldOfView`](/de/docs/Web/API/VRFieldOfView#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden von Meta zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
