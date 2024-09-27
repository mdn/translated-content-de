---
title: "Navigator: getVRDisplays()-Methode"
short-title: getVRDisplays()
slug: Web/API/Navigator/getVRDisplays
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`getVRDisplays()`**-Methode der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt ein Promise zurück, das ein Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten auflöst, die alle verfügbaren VR-Displays repräsentieren, die mit dem Computer verbunden sind.

## Syntax

```js-nolint
getVRDisplays()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das in einem Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten aufgelöst wird.

## Beispiele

Sehen Sie sich [`VRDisplay`](/de/docs/Web/API/VRDisplay#examples) für Beispielcode an.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) zu verlassen oder ein [polyfill](https://github.com/immersive-web/webxr-polyfill) zu nutzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden "Meta's Porting from WebVR to WebXR"](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API-Startseite](/de/docs/Web/API/WebVR_API)
