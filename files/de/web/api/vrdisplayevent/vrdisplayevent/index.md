---
title: "VRDisplayEvent: VRDisplayEvent() Konstruktor"
short-title: VRDisplayEvent()
slug: Web/API/VRDisplayEvent/VRDisplayEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Der **`VRDisplayEvent()`** Konstruktor erstellt ein [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent) Objekt.

> [!NOTE]
> Dieser Konstruktor war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Syntax

```js-nolint
new VRDisplayEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß- und kleinschreibungssensitiv und Browser setzen ihn auf `vrdisplayconnect`, `vrdisplaydisconnect`, `vrdisplayactivate`, `vrdisplaydeactivate`, `vrdisplayblur`,
    `vrdisplaypointerrestricted`, `vrdisplaypointerunrestricted` oder `vrdisplaypresentchange`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `display`
      - : Der [`VRDisplay`](/de/docs/Web/API/VRDisplay), mit dem das Ereignis verknüpft werden soll.
    - `reason`
      - : Ein String, der den menschenlesbaren Grund darstellt, warum das Ereignis ausgelöst werden soll (siehe [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason)).

### Rückgabewert

Ein neues [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent) Objekt.

## Beispiele

```js
const myEventObject = new VRDisplayEvent("custom", {
  display: vrDisplay,
  reason: "Custom reason",
});
```

## Spezifikationen

Dieser Konstruktor war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Er ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
