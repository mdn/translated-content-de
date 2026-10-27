---
title: "Window: vrdisplaydeactivate-Ereignis"
short-title: vrdisplaydeactivate
slug: Web/API/Window/vrdisplaydeactivate_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("Window")}}{{Non-standard_Header}}

Das **`vrdisplaydeactivate`**-Ereignis der [WebVR API](/de/docs/Web/API/WebVR_API) wird ausgelöst, wenn Inhalte nicht mehr auf einem VR-Display dargestellt werden können, beispielsweise weil ein HMD nach einer Phase der Inaktivität in den Standby- oder Ruhemodus gewechselt ist.

> [!NOTE]
> Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("vrdisplaydeactivate", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onvrdisplaydeactivate = (event) => { }
```

## Ereignistyp

Ein [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("VRDisplayEvent")}}

## Beispiele

Sie können das Ereignis `vrdisplaydeactivate` mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
window.addEventListener("vrdisplaydeactivate", () => {
  info.textContent = "Display deactivated.";
  reportDisplays();
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onvrdisplaydeactivate` (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onvrdisplaydeactivate` hinzugefügte Event-Listener ersetzt werden):

```js
window.onvrdisplaydeactivate = () => {
  info.textContent = "Display deactivated.";
  reportDisplays();
};
```

## Spezifikationen

Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Es wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neue [WebXR Device API](https://immersive-web.github.io/webxr/) implementiert haben, empfiehlt es sich, Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Weitere Informationen finden Sie in Metas Leitfaden [Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
