---
title: "XRLayerEvent: XRLayerEvent() Konstruktor"
short-title: XRLayerEvent()
slug: Web/API/XRLayerEvent/XRLayerEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`XRLayerEvent`**-Konstruktor erstellt und gibt ein neues {{domxref("XRLayerEvent")}}-Objekt zurück. Diese Ereignisse beziehen sich auf eine Statusänderung eines {{domxref("XRLayer")}}-Objekts.

## Syntax

```js-nolint
new XRLayerEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitive und Browser setzen ihn immer auf `redraw`.
- `options`
  - : Ein Objekt, das, _zusätzlich zu den im {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `layer`
      - : Der {{domxref("XRLayer")}}, an den das Ereignis übermittelt werden soll.

### Rückgabewert

Ein neues {{domxref("XRLayer")}}-Objekt, das ein Objekt des angegebenen Typs darstellt und wie durch den `eventInitDict`-Parameter beschrieben konfiguriert ist.

## Beispiele

### Erstellen eines neuen `XRLayerEvent`

In diesem Beispiel wird ein neues `redraw`-Ereignis für einen {{domxref("XRQuadLayer")}} erstellt.

```js
const redrawEvent = new XRLayerEvent("redraw", {
  layer: quadLayer,
});

quadLayer.dispatchEvent();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRLayer")}}
- {{domxref("EventTarget.dispatchEvent()")}}
