---
title: "Window: vrdisplaydisconnect-Ereignis"
short-title: vrdisplaydisconnect
slug: Web/API/Window/vrdisplaydisconnect_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("Window")}}{{Non-standard_Header}}

Das **`vrdisplaydisconnect`**-Ereignis der [WebVR API](/de/docs/Web/API/WebVR_API) wird ausgelöst, wenn ein kompatibles VR-Display vom Computer getrennt wird.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht im DOM-Baum nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("vrdisplaydisconnect", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onvrdisplaydisconnect = (event) => { }
```

## Ereignistyp

Ein [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("VRDisplayEvent")}}

## Beispiele

Sie können das `vrdisplaydisconnect`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

> [!NOTE]
> Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

```js
window.addEventListener("vrdisplaydisconnect", () => {
  info.textContent = "Display disconnected.";
  reportDisplays();
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onvrdisplaydisconnect`. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onvrdisplaydisconnect` hinzugefügte Event-Listener ersetzt werden:

```js
window.onvrdisplaydisconnect = () => {
  info.textContent = "Display disconnected.";
  reportDisplays();
};
```

## Spezifikationen

Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Es ist nicht mehr vorgesehen, dieses Ereignis zu standardisieren.

Bis alle Browser die neue [WebXR Device API](https://immersive-web.github.io/webxr/) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie im Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
