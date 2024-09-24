---
title: "VRDisplay: getImmediatePose()-Methode"
short-title: getImmediatePose()
slug: Web/API/VRDisplay/getImmediatePose
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{Deprecated_Header}}{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die **`getImmediatePose()`**-Methode der {{domxref("VRDisplay")}}-Schnittstelle gibt ein {{domxref("VRPose")}}-Objekt zurück, das die aktuelle Pose des `VRDisplay` definiert, ohne dass eine Vorhersage angewendet wird.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Syntax

```js-nolint
getImmediatePose()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("VRPose")}}-Objekt.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Leitfaden zum Portieren von WebVR nach WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
