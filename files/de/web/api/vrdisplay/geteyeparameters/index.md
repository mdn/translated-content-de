---
title: "VRDisplay: Methode getEyeParameters()"
short-title: getEyeParameters()
slug: Web/API/VRDisplay/getEyeParameters
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die Methode **`getEyeParameters()`** der Schnittstelle [`VRDisplay`](/de/docs/Web/API/VRDisplay) gibt das Objekt [`VREyeParameters`](/de/docs/Web/API/VREyeParameters) mit den Parametern für das angegebene Auge zurück.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Syntax

```js-nolint
getEyeParameters(whichEye)
```

### Parameter

- `whichEye`
  - : Ein String, der angibt, für welches Auge die Parameter zurückgegeben werden sollen. Mögliche Werte sind `left` und `right` (definiert im [VREye enum](https://w3c.github.io/webvr/spec/1.1/#interface-vreye)).

### Rückgabewert

Ein [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)-Objekt oder `null`, wenn das VR-Gerät keine Inhalte darstellen kann (z. B. wenn [`VRDisplayCapabilities.canPresent`](/de/docs/Web/API/VRDisplayCapabilities/canPresent) `false` zurückgibt).

## Beispiele

Beispielcode finden Sie unter [`VREyeParameters`](/de/docs/Web/API/VREyeParameters#examples).

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Ihre Standardisierung wird nicht mehr vorangetrieben.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in Metas Leitfaden [Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
