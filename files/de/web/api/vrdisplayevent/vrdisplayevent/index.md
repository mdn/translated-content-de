---
title: "VRDisplayEvent: VRDisplayEvent()-Konstruktor"
short-title: VRDisplayEvent()
slug: Web/API/VRDisplayEvent/VRDisplayEvent
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Der **`VRDisplayEvent()`**-Konstruktor erstellt ein [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent)-Objekt.

> [!NOTE]
> Dieser Konstruktor war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Syntax

```js-nolint
new VRDisplayEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Events. Dabei wird zwischen Groß- und Kleinschreibung unterschieden. Browser setzen den Wert auf `vrdisplayconnect`, `vrdisplaydisconnect`, `vrdisplayactivate`, `vrdisplaydeactivate`, `vrdisplayblur`, `vrdisplaypointerrestricted`, `vrdisplaypointerunrestricted` oder `vrdisplaypresentchange`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `display`
      - : Das [`VRDisplay`](/de/docs/Web/API/VRDisplay), dem das Event zugeordnet werden soll.
    - `reason`
      - : Ein String, der den Grund für das Auslösen des Events in menschenlesbarer Form angibt (siehe [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason)).

### Rückgabewert

Ein neues [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent)-Objekt.

## Beispiele

```js
const myEventObject = new VRDisplayEvent("custom", {
  display: vrDisplay,
  reason: "Custom reason",
});
```

## Spezifikationen

Dieser Konstruktor war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Er wird nicht mehr als künftiger Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie im Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
