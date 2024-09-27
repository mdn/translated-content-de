---
title: "XRLayerEvent: XRLayerEvent()-Konstruktor"
short-title: XRLayerEvent()
slug: Web/API/XRLayerEvent/XRLayerEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`XRLayerEvent`**-Konstruktor erstellt und gibt ein neues [`XRLayerEvent`](/de/docs/Web/API/XRLayerEvent)-Objekt zurück. Diese Ereignisse beziehen sich auf eine Zustandsänderung eines [`XRLayer`](/de/docs/Web/API/XRLayer)-Objekts.

## Syntax

```js-nolint
new XRLayerEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitive, und Browser setzen ihn immer auf `redraw`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `layer`
      - : Der [`XRLayer`](/de/docs/Web/API/XRLayer), an den das Ereignis geliefert werden soll.

### Rückgabewert

Ein neues [`XRLayer`](/de/docs/Web/API/XRLayer)-Objekt, das ein Objekt des angegebenen Typs darstellt und gemäß dem `eventInitDict`-Parameter konfiguriert ist.

## Beispiele

### Erstellen eines neuen `XRLayerEvent`

In diesem Beispiel wird ein neues `redraw`-Ereignis für einen [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer) erstellt.

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

- [`XRLayer`](/de/docs/Web/API/XRLayer)
- [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent)
