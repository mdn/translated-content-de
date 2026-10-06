---
title: "Window: vrdisplaypresentchange-Ereignis"
short-title: vrdisplaypresentchange
slug: Web/API/Window/vrdisplaypresentchange_event
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("Window")}}{{Non-standard_Header}}

Das **`vrdisplaypresentchange`**-Ereignis der [WebVR API](/de/docs/Web/API/WebVR_API) wird ausgelöst, wenn sich der Präsentationszustand eines VR-Displays ändert – also wenn es von „präsentierend“ zu „nicht präsentierend“ wechselt oder umgekehrt.

> [!NOTE]
> Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Event-Handler-Eigenschaft fest.

```js-nolint
addEventListener("vrdisplaypresentchange", (event) => { })

onvrdisplaypresentchange = (event) => { }
```

## Ereignistyp

Ein [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("VRDisplayEvent")}}

## Beispiele

Sie können das `vrdisplaypresentchange`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
window.addEventListener("vrdisplaypresentchange", () => {
  info.textContent = vrDisplay.isPresenting
    ? "Display has started presenting."
    : "Display has stopped presenting.";
  reportDisplays();
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onvrdisplaypresentchange`:

```js
window.onvrdisplaypresentchange = () => {
  info.textContent = vrDisplay.isPresenting
    ? "Display has started presenting."
    : "Display has stopped presenting.";
  reportDisplays();
};
```

## Spezifikationen

Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Es ist nicht mehr vorgesehen, dieses Ereignis zu standardisieren.

Bis alle Browser die neue [WebXR Device API](https://immersive-web.github.io/webxr/) implementiert haben, empfiehlt es sich, Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden, um WebXR-Anwendungen zu entwickeln, die browserübergreifend funktionieren. Weitere Informationen finden Sie in [Metas Leitfaden zur Portierung von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
