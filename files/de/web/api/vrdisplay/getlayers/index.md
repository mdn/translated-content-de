---
title: "VRDisplay: getLayers()-Methode"
short-title: getLayers()
slug: Web/API/VRDisplay/getLayers
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die **`getLayers()`**-Methode der [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Schnittstelle gibt die Ebenen zurück, die aktuell von dem `VRDisplay` präsentiert werden.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Syntax

```js-nolint
getLayers()
```

### Parameter

Keine.

### Rückgabewert

Falls das [`VRDisplay`](/de/docs/Web/API/VRDisplay) präsentiert, gibt diese Methode ein Array von den aktuell präsentierten [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)-Objekten zurück (dies ist momentan eines, da [`VRDisplayCapabilities.maxLayers`](/de/docs/Web/API/VRDisplayCapabilities/maxLayers) derzeit immer 1 ist). Falls das [`VRDisplay`](/de/docs/Web/API/VRDisplay) nicht präsentiert, gibt diese Methode ein leeres Array zurück.

## Beispiele

Siehe [`VRLayerInit`](/de/docs/Web/API/VRLayerInit#examples) für Beispielcode.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die mit allen Browsern funktionieren. Lesen Sie den [Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/)-Leitfaden von Meta für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
