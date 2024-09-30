---
title: "Navigator: activeVRDisplays-Eigenschaft"
short-title: activeVRDisplays
slug: Web/API/Navigator/activeVRDisplays
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`activeVRDisplays`** der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt ein Array zurück, das jedes [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt enthält, das derzeit präsentiert wird ([`VRDisplay.ispresenting`](/de/docs/Web/API/VRDisplay/ispresenting) ist `true`).

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Wert

Ein Array von [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten.

## Beispiele

```js
function showActive() {
  const displays = navigator.activeVRDisplays;
  for (const display of displays) {
    console.log(`Display ${display.displayId} is active.`);
  }
}
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/), oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Portierungsleitfaden von Meta von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
