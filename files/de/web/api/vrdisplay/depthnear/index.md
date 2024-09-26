---
title: "VRDisplay: depthNear-Eigenschaft"
short-title: depthNear
slug: Web/API/VRDisplay/depthNear
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`depthNear`**-Eigenschaft der {{domxref("VRDisplay")}}-Schnittstelle erhält und setzt die z-Tiefe, die die Naheebene des [Eye View Frustum](https://en.wikipedia.org/wiki/Viewing_frustum) definiert, d.h. die nächstgelegene sichtbare Grenze der Szene.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Im Allgemeinen sollten Sie den Wert unverändert lassen. Sie könnten ihn jedoch erhöhen, wenn Sie die Leistung auf langsameren Computern verbessern möchten und/oder Ihre Benutzeroberfläche Sinn ergibt, wenn die Nahegrenze weiter entfernt ist.

## Wert

Ein Double-Wert, der die z-Tiefe in Metern repräsentiert; sein Anfangswert ist `0.01`.

## Beispiele

```js
let vrDisplay;

navigator.getVRDisplays().then((displays) => {
  vrDisplay = displays[0];
  vrDisplay.depthNear = 1.0;
  vrDisplay.depthFar = 7500.0;
});
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/)-Guide für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)