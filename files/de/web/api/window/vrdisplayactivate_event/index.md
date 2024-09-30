---
title: "Window: vrdisplayactivate-Ereignis"
short-title: vrdisplayactivate
slug: Web/API/Window/vrdisplayactivate_event
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("Window")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`vrdisplayactivate`**-Ereignis der [WebVR API](/de/docs/Web/API/WebVR_API) wird ausgelöst, wenn ein VR-Display in der Lage ist, präsentiert zu werden, zum Beispiel, wenn ein HMD bewegt wurde, um es aus dem Standby-Modus zu holen, oder wenn es durch Aufsetzen aktiviert wird.

> [!NOTE]
> Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Es wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieses Ereignis ist nicht abbruchfähig und firet nicht weiter durch den Ereignisbaum.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js
addEventListener("vrdisplayactivate", (event) => {});

onvrdisplayactivate = (event) => {};
```

## Ereignistyp

Ein [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("VRDisplayEvent")}}

## Ereigniseigenschaften

_`VRDisplayEvent` erbt auch Eigenschaften von seinem Elter-Objekt, [`Event`](/de/docs/Web/API/Event)._

- [`VRDisplayEvent.display`](/de/docs/Web/API/VRDisplayEvent/display) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Das mit diesem Ereignis assoziierte [`VRDisplay`](/de/docs/Web/API/VRDisplay).
- [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Ein lesbarer Grund, warum das Ereignis ausgelöst wurde.

## Beispiele

Sie können das `vrdisplayactivate`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
window.addEventListener("vrdisplayactivate", () => {
  info.textContent = "Display activated.";
  reportDisplays();
});
```

Oder verwenden Sie die `onvrdisplayactivate`-Ereignis-Handler-Eigenschaft:

```js
window.onvrdisplayactivate = () => {
  info.textContent = "Display activated.";
  reportDisplays();
};
```

## Spezifikationen

Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neue [WebXR Device API](https://immersive-web.github.io/webxr/) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden zum Portieren von WebVR auf WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) von Meta für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
