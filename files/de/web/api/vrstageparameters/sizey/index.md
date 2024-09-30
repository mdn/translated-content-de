---
title: "VRStageParameters: sizeY-Eigenschaft"
short-title: sizeY
slug: Web/API/VRStageParameters/sizeY
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`sizeY`**-Eigenschaft des schreibgeschützten Interfaces [`VRStageParameters`](/de/docs/Web/API/VRStageParameters) _gibt die Tiefe_ der Spielfeldgrenzen in Metern zurück.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Die Grenzen sind zur Sicherheit als achsenorientiertes Rechteck auf dem Boden definiert. Inhalte sollten nicht erfordern, dass der Benutzer diese Grenzen überschreitet; es ist jedoch möglich, dass der Benutzer die Grenzen ignoriert, was zu Positionswerten außerhalb dieses Rechtecks führt. Der Mittelpunkt des Rechtecks liegt bei (0,0,0) in stehenden Koordinaten.

## Wert

Ein Float, der die Tiefe in Metern darstellt.

## Beispiele

Siehe [`VRStageParameters`](/de/docs/Web/API/VRStageParameters#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Anleitung zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR-API](/de/docs/Web/API/WebVR_API)
