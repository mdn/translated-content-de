---
title: "Window: vrdisplaypresentchange-Ereignis"
short-title: vrdisplaypresentchange
slug: Web/API/Window/vrdisplaypresentchange_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("Window")}}{{Non-standard_Header}}

Das **`vrdisplaypresentchange`**-Ereignis der [WebVR API](/de/docs/Web/API/WebVR_API) wird ausgelöst, wenn sich der Präsentationszustand eines VR-Displays ändert – wenn es also vom Präsentieren zum Nicht-Präsentieren wechselt oder umgekehrt.

> [!NOTE]
> Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht (Bubbling).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("vrdisplaypresentchange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
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

Oder verwenden Sie die Event-Handler-Eigenschaft `onvrdisplaypresentchange`. Beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onvrdisplaypresentchange` hinzugefügte Event-Listener ersetzt werden:

```js
window.onvrdisplaypresentchange = () => {
  info.textContent = vrDisplay.isPresenting
    ? "Display has started presenting."
    : "Display has stopped presenting.";
  reportDisplays();
};
```

## Spezifikationen

Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Es wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neue [WebXR Device API](https://immersive-web.github.io/webxr/) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in [Metas Leitfaden zur Portierung von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
