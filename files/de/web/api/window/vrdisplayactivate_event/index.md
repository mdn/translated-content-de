---
title: "Fenster: vrdisplayactivate Ereignis"
short-title: vrdisplayactivate
slug: Web/API/Window/vrdisplayactivate_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Window")}}{{Non-standard_Header}}

Das **`vrdisplayactivate`** Ereignis der [WebVR API](/de/docs/Web/API/WebVR_API) wird ausgelöst, wenn ein VR-Display präsentiert werden kann, z.B. wenn ein HMD bewegt wird, um es aus dem Standby zu holen, oder durch das Aufsetzen geweckt wird.

> [!NOTE]
> Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Es wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("vrdisplayactivate", (event) => { })

onvrdisplayactivate = (event) => { }
```

## Ereignistyp

Ein [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("VRDisplayEvent")}}

## Beispiele

Sie können das `vrdisplayactivate` Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Methode verwenden:

```js
window.addEventListener("vrdisplayactivate", () => {
  info.textContent = "Display activated.";
  reportDisplays();
});
```

Oder verwenden Sie die `onvrdisplayactivate` Ereignis-Handler-Eigenschaft:

```js
window.onvrdisplayactivate = () => {
  info.textContent = "Display activated.";
  reportDisplays();
};
```

## Spezifikationen

Dieses Ereignis war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es befindet sich nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neue [WebXR Device API](https://immersive-web.github.io/webxr/) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren werden. Lesen Sie [Metas Leitfaden zur Portierung von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
