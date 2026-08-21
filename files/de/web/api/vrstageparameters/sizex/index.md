---
title: "VRStageParameters: sizeX-Eigenschaft"
short-title: sizeX
slug: Web/API/VRStageParameters/sizeX
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte **`sizeX`**-Eigenschaft des [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)-Interfaces _gibt die Breite_ der Spielfeldgrenzen in Metern zurück.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Die Grenzen sind als achsenparalleles Rechteck auf dem Boden definiert, um Sicherheitszwecke zu gewährleisten. Inhalte sollten den Benutzer nicht dazu zwingen, sich außerhalb dieser Grenzen zu bewegen; es ist jedoch möglich, dass der Benutzer die Grenzen ignoriert, was zu Positionswerten außerhalb dieses Rechtecks führt. Der Mittelpunkt des Rechtecks befindet sich bei (0,0,0) in stehenden Koordinaten.

## Wert

Ein Gleitkommawert, der die Breite in Metern darstellt.

## Beispiele

Siehe [`VRStageParameters`](/de/docs/Web/API/VRStageParameters#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie dazu den [Leitfaden zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) von Meta.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
