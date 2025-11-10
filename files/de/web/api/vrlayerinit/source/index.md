---
title: "VRLayerInit: source-Eigenschaft"
short-title: source
slug: Web/API/VRLayerInit/source
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`source`**-Eigenschaft des [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)-Interfaces (Dictionary) definiert die Leinwand (`canvas`), deren Inhalte von der [`VRDisplay`](/de/docs/Web/API/VRDisplay) präsentiert werden.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Wert

Ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)- oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt.

## Beispiele

Siehe [`VRLayerInit`](/de/docs/Web/API/VRLayerInit#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Leitfaden zur Portierung von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
