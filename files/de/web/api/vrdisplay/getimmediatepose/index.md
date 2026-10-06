---
title: "VRDisplay: Methode getImmediatePose()"
short-title: getImmediatePose()
slug: Web/API/VRDisplay/getImmediatePose
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die Methode **`getImmediatePose()`** der Schnittstelle [`VRDisplay`](/de/docs/Web/API/VRDisplay) gibt ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt zurück, das die aktuelle Pose des `VRDisplay` ohne angewendete Vorhersage beschreibt.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Syntax

```js-nolint
getImmediatePose()
```

### Parameter

Keine.

### Rückgabewert

Ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Es ist nicht mehr vorgesehen, sie zu standardisieren.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung von WebXR-Anwendungen, die in allen Browsern funktionieren, Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in Metas Leitfaden [Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
