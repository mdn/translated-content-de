---
title: "VRDisplay: isPresenting-Eigenschaft"
short-title: isPresenting
slug: Web/API/VRDisplay/isPresenting
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`isPresenting`** der Schnittstelle [`VRDisplay`](/de/docs/Web/API/VRDisplay) gibt einen booleschen Wert zurück, der angibt, ob über das `VRDisplay` derzeit Inhalte dargestellt werden.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Wert

Ein boolescher Wert: `true` bedeutet, dass das Display Inhalte darstellt; `false` bedeutet, dass es keine Inhalte darstellt.

## Beispiele

```js
function onVRExitPresent() {
  // No sense in exiting presentation if we're not actually presenting.
  // (This may happen if we get an event like vrdisplaydeactivate when
  // we weren't presenting.)
  if (!vrDisplay.isPresenting) return;
  vrDisplay.exitPresent().then(
    () => {
      // Nothing to do because we're handling things in onVRPresentChange.
    },
    (err) => {
      let errMsg = "exitPresent failed.";
      if (err && err.message) {
        errMsg += `<br/>${err.message}`;
      }
      VRSamplesUtil.addError(errMsg, 2000);
    },
  );
}
```

> [!NOTE]
> Der Codeausschnitt stammt aus [Googles Demo zur VR-Darstellung](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html).

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in [Metas Leitfaden zur Migration von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
