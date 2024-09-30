---
title: "Navigator: getVRDisplays()-Methode"
short-title: getVRDisplays()
slug: Web/API/Navigator/getVRDisplays
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`getVRDisplays()`**-Methode des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt ein Promise zurück, das auf ein Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten auflöst. Diese Objekte repräsentieren alle verfügbaren VR-Displays, die mit dem Computer verbunden sind.

## Syntax

```js-nolint
getVRDisplays()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das auf ein Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten auflöst.

## Beispiele

Siehe [`VRDisplay`](/de/docs/Web/API/VRDisplay#examples) für Beispielcode.

## Spezifikationen

Diese Methode war Teil des alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), das durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Anleitung zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API-Startseite](/de/docs/Web/API/WebVR_API)
