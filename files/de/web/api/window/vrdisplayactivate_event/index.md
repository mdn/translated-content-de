---
title: "Window: vrdisplayactivate-Ereignis"
short-title: vrdisplayactivate
slug: Web/API/Window/vrdisplayactivate_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("Window")}}{{Non-standard_Header}}

Das **`vrdisplayactivate`**-Ereignis der [WebVR API](/de/docs/Web/API/WebVR_API) wird ausgelöst, wenn Inhalte auf einem VR-Display dargestellt werden können, beispielsweise wenn ein HMD bewegt wurde und dadurch den Standby-Modus verlässt oder wenn es durch Aufsetzen aktiviert wurde.

> [!NOTE]
> Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Diese wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht im DOM-Baum auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("vrdisplayactivate", (event) => { })
```

Alternativ können Sie ihn der [Ereignisbehandlungs-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onvrdisplayactivate = (event) => { }
```

## Ereignistyp

Ein [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("VRDisplayEvent")}}

## Beispiele

Sie können das `vrdisplayactivate`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
window.addEventListener("vrdisplayactivate", () => {
  info.textContent = "Display activated.";
  reportDisplays();
});
```

Oder verwenden Sie die Ereignisbehandlungs-Eigenschaft `onvrdisplayactivate`. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onvrdisplayactivate` hinzugefügte Ereignis-Listener ersetzt werden:

```js
window.onvrdisplayactivate = () => {
  info.textContent = "Display activated.";
  reportDisplays();
};
```

## Spezifikationen

Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neue [WebXR Device API](https://immersive-web.github.io/webxr/) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in [Metas Leitfaden zur Migration von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
