---
title: "Window: vrdisplaydeactivate Ereignis"
short-title: vrdisplaydeactivate
slug: Web/API/Window/vrdisplaydeactivate_event
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("Window")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`vrdisplaydeactivate`** Ereignis der [WebVR API](/de/docs/Web/API/WebVR_API) wird ausgelöst, wenn ein VR-Display nicht mehr dargestellt werden kann, beispielsweise wenn ein HMD aufgrund einer Inaktivitätsperiode in den Standby- oder Schlafmodus gewechselt ist.

> [!NOTE]
> Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Es wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben vererbt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("vrdisplaydeactivate", (event) => {});

onvrdisplaydeactivate = (event) => {};
```

## Ereignistyp

Ein [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("VRDisplayEvent")}}

## Ereigniseigenschaften

_`VRDisplayEvent` erbt auch Eigenschaften von seinem Elternobjekt [`Event`](/de/docs/Web/API/Event)._

- [`VRDisplayEvent.display`](/de/docs/Web/API/VRDisplayEvent/display) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Das [`VRDisplay`](/de/docs/Web/API/VRDisplay), das mit diesem Ereignis verbunden ist.
- [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Ein menschenleslicher Grund, warum das Ereignis ausgelöst wurde.

## Beispiele

Sie können das `vrdisplaydeactivate` Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Methode verwenden:

```js
window.addEventListener("vrdisplaydeactivate", () => {
  info.textContent = "Display deactivated.";
  reportDisplays();
});
```

Oder die `onvrdisplaydeactivate` Ereignis-Handler-Eigenschaft verwenden:

```js
window.onvrdisplaydeactivate = () => {
  info.textContent = "Display deactivated.";
  reportDisplays();
};
```

## Spezifikationen

Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neue [WebXR Device API](https://immersive-web.github.io/webxr/) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Meta-Leitfaden zur Portierung von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
