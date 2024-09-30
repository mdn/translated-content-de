---
title: "VRStageParameters: sizeX-Eigenschaft"
short-title: sizeX
slug: Web/API/VRStageParameters/sizeX
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`sizeX`**-Eigenschaft des [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)-Interfaces ist eine schreibgeschützte Eigenschaft, die _die Breite_ der Spielfeldgrenzen in Metern zurückgibt.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Die Grenzen sind zur Sicherheit als achsenparalleles Rechteck auf dem Boden definiert. Der Inhalt sollte nicht verlangen, dass der Benutzer sich über diese Grenzen hinaus bewegt; es ist jedoch möglich, dass der Benutzer die Grenzen ignoriert, was zu Positionswerten außerhalb dieses Rechtecks führt. Der Mittelpunkt des Rechtecks befindet sich bei (0,0,0) in stehenden Raumkoordinaten.

## Wert

Ein Float, der die Breite in Metern darstellt.

## Beispiele

Beispiele finden Sie bei [`VRStageParameters`](/de/docs/Web/API/VRStageParameters#examples).

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu stützen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden von Meta zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
