---
title: "Navigator: activeVRDisplays-Eigenschaft"
short-title: activeVRDisplays
slug: Web/API/Navigator/activeVRDisplays
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{SecureContext_Header}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`activeVRDisplays`** der Schnittstelle [`Navigator`](/de/docs/Web/API/Navigator) gibt ein Array mit allen [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekten zurück, die derzeit Inhalte darstellen ([`VRDisplay.isPresenting`](/de/docs/Web/API/VRDisplay/isPresenting) ist `true`).

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

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

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie im [Leitfaden von Meta zur Migration von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
