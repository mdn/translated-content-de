---
title: "Window: vrdisplayconnect Ereignis"
short-title: vrdisplayconnect
slug: Web/API/Window/vrdisplayconnect_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Window")}}{{Non-standard_Header}}

Das **`vrdisplayconnect`** Ereignis der [WebVR-API](/de/docs/Web/API/WebVR_API) wird ausgelöst, wenn ein kompatibles VR-Display an den Computer angeschlossen wird.

> [!NOTE]
> Dieses Ereignis war Teil der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/). Es wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieses Ereignis kann nicht abgebrochen werden und hat keine Event-Bubbling.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("vrdisplayconnect", (event) => { })

onvrdisplayconnect = (event) => { }
```

## Ereignistyp

Ein [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("VRDisplayEvent")}}

## Beispiele

Sie können das `vrdisplayconnect` Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
window.addEventListener("vrdisplayconnect", () => {
  info.textContent = "Display connected.";
  reportDisplays();
});
```

Oder die `onvrdisplayconnect` Ereignis-Handler-Eigenschaft verwenden:

```js
window.onvrdisplayconnect = () => {
  info.textContent = "Display connected.";
  reportDisplays();
};
```

## Spezifikationen

Dieses Ereignis war Teil der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neue [WebXR Device API](https://immersive-web.github.io/webxr/) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
