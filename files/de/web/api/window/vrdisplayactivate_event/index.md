---
title: "Window: vrdisplayactivate event"
short-title: vrdisplayactivate
slug: Web/API/Window/vrdisplayactivate_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Window")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`vrdisplayactivate`** Ereignis der [WebVR API](/de/docs/Web/API/WebVR_API) wird ausgelöst, wenn ein VR-Display bereit ist, präsentiert zu werden, zum Beispiel, wenn ein HMD bewegt wird, um es aus dem Standby-Modus zu holen, oder durch das Aufsetzen aufgeweckt wird.

> [!NOTE]
> Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Es wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Events in der Ereigniskette (bubbled) aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("vrdisplayactivate", (event) => { })

onvrdisplayactivate = (event) => { }
```

## Ereignistyp

Ein [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("VRDisplayEvent")}}

## Ereigniseigenschaften

_`VRDisplayEvent` erbt auch Eigenschaften von seinem übergeordneten Objekt, [`Event`](/de/docs/Web/API/Event)._

- [`VRDisplayEvent.display`](/de/docs/Web/API/VRDisplayEvent/display) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Das mit diesem Ereignis verknüpfte [`VRDisplay`](/de/docs/Web/API/VRDisplay).
- [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Ein für Menschen lesbarer Grund, warum das Ereignis ausgelöst wurde.

## Beispiele

Sie können das `vrdisplayactivate` Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Methode verwenden:

```js
window.addEventListener("vrdisplayactivate", () => {
  info.textContent = "Display activated.";
  reportDisplays();
});
```

Oder die `onvrdisplayactivate` Ereignis-Handler-Eigenschaft nutzen:

```js
window.onvrdisplayactivate = () => {
  info.textContent = "Display activated.";
  reportDisplays();
};
```

## Spezifikationen

Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Solange nicht alle Browser die neue [WebXR Device API](https://immersive-web.github.io/webxr/) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/), oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) Leitfaden von Meta für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
