---
title: "VRLayerInit: leftBounds-Eigenschaft"
short-title: leftBounds
slug: Web/API/VRLayerInit/leftBounds
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`leftBounds`**-Eigenschaft des [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)-Interfaces (Dictionary) definiert die linken Texturgrenzen des Canvas, dessen Inhalt vom [`VRDisplay`](/de/docs/Web/API/VRDisplay) dargestellt wird.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Wert

Ein Array von vier Gleitkommawerten, die Werte von 0,0–1,0 annehmen können.

- Der linke Versatz der Grenzen.
- Der obere Versatz der Grenzen.
- Die Breite der Grenzen.
- Die Höhe der Grenzen.

Wenn `leftBounds` im Dictionary nicht angegeben ist, wird der Standardwert `[0.0, 0.0, 0.5, 1.0]` verwendet.

## Beispiele

Siehe [`VRLayerInit`](/de/docs/Web/API/VRLayerInit#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Leitfaden zur Umstellung von WebVR auf WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
