---
title: "Navigator: getVRDisplays()-Methode"
short-title: getVRDisplays()
slug: Web/API/Navigator/getVRDisplays
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die Methode **`getVRDisplays()`** der Schnittstelle [`Navigator`](/de/docs/Web/API/Navigator) gibt ein Promise zurück, das mit einem Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten erfüllt wird. Diese repräsentieren alle verfügbaren VR-Displays, die mit dem Computer verbunden sind.

## Syntax

```js-nolint
getVRDisplays()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das mit einem Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten erfüllt wird.

## Beispiele

Beispielcode finden Sie unter [`VRDisplay`](/de/docs/Web/API/VRDisplay#examples).

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in [Metas Leitfaden zur Migration von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API-Startseite](/de/docs/Web/API/WebVR_API)
