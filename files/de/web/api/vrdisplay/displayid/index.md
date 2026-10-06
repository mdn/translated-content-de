---
title: "VRDisplay: Eigenschaft displayId"
short-title: displayId
slug: Web/API/VRDisplay/displayId
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`displayId`** der Schnittstelle [`VRDisplay`](/de/docs/Web/API/VRDisplay) gibt eine Kennung für dieses bestimmte `VRDisplay` zurück. Sie dient auch als Zuordnungspunkt in der [Gamepad API](/de/docs/Web/API/Gamepad_API) (siehe [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId)).

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Wert

Eine Zahl, die die ID des jeweiligen `VRDisplay` angibt.

## Beispiele

Beispielcode finden Sie unter [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities#examples).

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie im Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
