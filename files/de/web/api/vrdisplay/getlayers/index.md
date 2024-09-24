---
title: "VRDisplay: getLayers()-Methode"
short-title: getLayers()
slug: Web/API/VRDisplay/getLayers
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`getLayers()`**-Methode der Schnittstelle {{domxref("VRDisplay")}} gibt die Ebenen zurück, die derzeit von der `VRDisplay` präsentiert werden.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Syntax

```js-nolint
getLayers()
```

### Parameter

Keine.

### Rückgabewert

Wenn die {{domxref("VRDisplay")}} präsentiert, gibt diese Methode ein Array der {{domxref("VRLayerInit")}}-Objekte zurück, die derzeit präsentiert werden (dies wird derzeit eins sein, da {{domxref("VRDisplayCapabilities.maxLayers")}} derzeit immer 1 ist). Wenn die {{domxref("VRDisplay")}} nicht präsentiert, gibt diese Methode ein leeres Array zurück.

## Beispiele

Siehe [`VRLayerInit`](/de/docs/Web/API/VRLayerInit#examples) für Beispielcode.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu stützen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
