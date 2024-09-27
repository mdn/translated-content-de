---
title: "VRStageParameters: sizeX-Eigenschaft"
short-title: sizeX
slug: Web/API/VRStageParameters/sizeX
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`sizeX`** der [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)-Schnittstelle _gibt die Breite_ der Spielbereichsgrenzen in Metern zurück.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Die Grenzen sind aus Sicherheitsgründen als achsenparallel ausgerichtetes Rechteck auf dem Boden definiert. Inhalte sollten nicht verlangen, dass der Benutzer sich über diese Grenzen hinaus bewegt; dennoch ist es möglich, dass der Benutzer die Grenzen ignoriert, was zu Positionswerten außerhalb dieses Rechtecks führen kann. Das Zentrum des Rechtecks befindet sich bei (0,0,0) in den Koordinaten des Stehbereichs.

## Wert

Ein Fließkommawert, der die Breite in Metern darstellt.

## Beispiele

Siehe [`VRStageParameters`](/de/docs/Web/API/VRStageParameters#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie steht nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie die [Meta-Anleitung zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
