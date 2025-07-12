---
title: "VRLayerInit: rightBounds-Eigenschaft"
short-title: rightBounds
slug: Web/API/VRLayerInit/rightBounds
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`rightBounds`**-Eigenschaft des [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)-Interfaces (Dictionary) definiert die rechten Texturgrenzen der Leinwand, deren Inhalt vom [`VRDisplay`](/de/docs/Web/API/VRDisplay) präsentiert wird.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Wert

Ein Array von vier Gleitkommawerten, die Werte von 0,0–1,0 annehmen können:

1. Der linke Versatz der Grenzen.
2. Der obere Versatz der Grenzen.
3. Die Breite der Grenzen.
4. Die Höhe der Grenzen.

Wenn `leftBounds` im Dictionary nicht angegeben ist, wird der Standardwert `[0.5, 0.0, 0.5, 1.0]` verwendet.

## Beispiele

Sehen Sie sich [`VRLayerInit`](/de/docs/Web/API/VRLayerInit#examples) für Beispielcode an.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie wird nicht mehr im Hinblick auf einen Standard weiterverfolgt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/), oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren werden. Lesen Sie den [Meta-Leitfaden zum Portieren von WebVR auf WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
