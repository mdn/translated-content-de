---
title: "VRStageParameters: sizeY-Eigenschaft"
short-title: sizeY
slug: Web/API/VRStageParameters/sizeY
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die **`sizeY`**-Eigenschaft der [`VRStageParameters`](/de/docs/Web/API/VRStageParameters)-Schnittstelle gibt _die Tiefe_ der Spielbereichsgrenzen in Metern zurück.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Die Grenzen sind aus Sicherheitsgründen als achsenbeschränktes Rechteck auf dem Boden definiert. Inhalte sollten den Benutzer nicht dazu zwingen, über diese Grenzen hinauszugehen; es ist jedoch möglich, dass der Benutzer die Grenzen ignoriert, was zu Positionswerten außerhalb dieses Rechtecks führt. Das Zentrum des Rechtecks befindet sich bei (0,0,0) in den Koordinaten des Stehbereichs.

## Wert

Ein `float`, der die Tiefe in Metern darstellt.

## Beispiele

Sehen Sie sich [`VRStageParameters`](/de/docs/Web/API/VRStageParameters#examples) für Beispielcode an.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Metas Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
