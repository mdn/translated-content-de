---
title: "Window: vrdisplayconnect-Event"
short-title: vrdisplayconnect
slug: Web/API/Window/vrdisplayconnect_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Window")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`vrdisplayconnect`**-Event der [WebVR-API](/de/docs/Web/API/WebVR_API) wird ausgelöst, wenn ein kompatibles VR-Display mit dem Computer verbunden wird.

> [!NOTE]
> Dieses Event war Teil der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/). Es wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieses Event ist nicht abbrechbar und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("vrdisplayconnect", (event) => { })

onvrdisplayconnect = (event) => { }
```

## Event-Typ

Ein [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("VRDisplayEvent")}}

## Event-Eigenschaften

_`VRDisplayEvent` erbt außerdem Eigenschaften von seinem übergeordneten Objekt, [`Event`](/de/docs/Web/API/Event)._

- [`VRDisplayEvent.display`](/de/docs/Web/API/VRDisplayEvent/display) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Das [`VRDisplay`](/de/docs/Web/API/VRDisplay), das mit diesem Event verbunden ist.
- [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Ein für Menschen lesbarer Grund, warum das Event ausgelöst wurde.

## Beispiele

Sie können das `vrdisplayconnect`-Event in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
window.addEventListener("vrdisplayconnect", () => {
  info.textContent = "Display connected.";
  reportDisplays();
});
```

Oder verwenden Sie die `onvrdisplayconnect`-Ereignishandler-Eigenschaft:

```js
window.onvrdisplayconnect = () => {
  info.textContent = "Display connected.";
  reportDisplays();
};
```

## Spezifikationen

Dieses Event war Teil der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neue [WebXR Device API](https://immersive-web.github.io/webxr/) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Anleitung zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR-API](/de/docs/Web/API/WebVR_API)
