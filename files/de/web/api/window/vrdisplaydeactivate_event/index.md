---
title: "Window: vrdisplaydeactivate Ereignis"
short-title: vrdisplaydeactivate
slug: Web/API/Window/vrdisplaydeactivate_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Window")}}{{Non-standard_Header}}

Das **`vrdisplaydeactivate`** Ereignis der [WebVR API](/de/docs/Web/API/WebVR_API) wird ausgelöst, wenn ein VR-Display nicht mehr präsentiert werden kann, zum Beispiel wenn ein HMD aufgrund einer Inaktivitätsperiode in den Standby- oder Schlafmodus wechselt.

> [!NOTE]
> Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Es wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("vrdisplaydeactivate", (event) => { })

onvrdisplaydeactivate = (event) => { }
```

## Ereignistyp

Ein [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("VRDisplayEvent")}}

## Beispiele

Sie können das `vrdisplaydeactivate` Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Methode verwenden:

```js
window.addEventListener("vrdisplaydeactivate", () => {
  info.textContent = "Display deactivated.";
  reportDisplays();
});
```

Oder verwenden Sie die `onvrdisplaydeactivate` Ereignishandler-Eigenschaft:

```js
window.onvrdisplaydeactivate = () => {
  info.textContent = "Display deactivated.";
  reportDisplays();
};
```

## Spezifikationen

Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neue [WebXR Device API](https://immersive-web.github.io/webxr/) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/), oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Meta Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) Leitfaden für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
