---
title: "Navigator: getVRDisplays() Methode"
short-title: getVRDisplays()
slug: Web/API/Navigator/getVRDisplays
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die **`getVRDisplays()`**-Methode des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt ein Promise zurück, das zu einem Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten aufgelöst wird, die alle verfügbaren VR-Displays repräsentieren, die mit dem Computer verbunden sind.

## Syntax

```js-nolint
getVRDisplays()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das zu einem Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten aufgelöst wird.

## Beispiele

Siehe [`VRDisplay`](/de/docs/Web/API/VRDisplay#examples) für Beispielcode.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Metas Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API Homepage](/de/docs/Web/API/WebVR_API)
