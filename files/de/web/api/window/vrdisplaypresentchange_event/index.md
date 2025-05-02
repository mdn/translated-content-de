---
title: "Window: vrdisplaypresentchange Event"
short-title: vrdisplaypresentchange
slug: Web/API/Window/vrdisplaypresentchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Window")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`vrdisplaypresentchange`** Ereignis der [WebVR API](/de/docs/Web/API/WebVR_API) wird ausgelöst, wenn sich der Präsentationszustand eines VR-Displays ändert – d.h. von Präsentation zu Nicht-Präsentation wechselt oder umgekehrt.

> [!NOTE]
> Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Es wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieses Ereignis ist nicht abbrechbar und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("vrdisplaypresentchange", (event) => { })

onvrdisplaypresentchange = (event) => { }
```

## Ereignistyp

Ein [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("VRDisplayEvent")}}

## Ereigniseigenschaften

_`VRDisplayEvent` erbt auch Eigenschaften von seinem Elternobjekt, [`Event`](/de/docs/Web/API/Event)._

- [`VRDisplayEvent.display`](/de/docs/Web/API/VRDisplayEvent/display) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Das [`VRDisplay`](/de/docs/Web/API/VRDisplay), das mit diesem Ereignis verknüpft ist.
- [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Ein menschenlesbarer Grund, warum das Ereignis ausgelöst wurde.

## Beispiele

Sie können das `vrdisplaypresentchange` Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Methode verwenden:

```js
window.addEventListener("vrdisplaypresentchange", () => {
  info.textContent = vrDisplay.isPresenting
    ? "Display has started presenting."
    : "Display has stopped presenting.";
  reportDisplays();
});
```

Oder verwenden Sie die `onvrdisplaypresentchange` Ereignishandler-Eigenschaft:

```js
window.onvrdisplaypresentchange = () => {
  info.textContent = vrDisplay.isPresenting
    ? "Display has started presenting."
    : "Display has stopped presenting.";
  reportDisplays();
};
```

## Spezifikationen

Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neue [WebXR Device API](https://immersive-web.github.io/webxr/) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/), oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Porting from WebVR to WebXR von Meta](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
