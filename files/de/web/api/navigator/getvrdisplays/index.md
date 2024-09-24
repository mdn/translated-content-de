---
title: "Navigator: getVRDisplays()-Methode"
short-title: getVRDisplays()
slug: Web/API/Navigator/getVRDisplays
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`getVRDisplays()`**-Methode des {{domxref("Navigator")}}-Interfaces gibt ein Promise zurück, das sich zu einem Array von {{domxref("VRDisplay")}}-Objekten auflöst. Diese Objekte repräsentieren verfügbare VR-Anzeigen, die mit dem Computer verbunden sind.

## Syntax

```js-nolint
getVRDisplays()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das sich zu einem Array von {{domxref("VRDisplay")}}-Objekten auflöst.

## Beispiele

Siehe [`VRDisplay`](/de/docs/Web/API/VRDisplay#examples) für Beispielcode.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Leitfaden zur Portierung von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für mehr Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API-Startseite](/de/docs/Web/API/WebVR_API)
