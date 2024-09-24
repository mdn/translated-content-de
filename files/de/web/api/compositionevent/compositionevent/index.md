---
title: "CompositionEvent: CompositionEvent() Konstruktor"
short-title: CompositionEvent()
slug: Web/API/CompositionEvent/CompositionEvent
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("UI Events")}}

Der **`CompositionEvent()`** Konstruktor erstellt ein neues {{domxref("CompositionEvent")}} Objekt.

## Syntax

```js-nolint
new CompositionEvent(type)
new CompositionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es auf `compositionstart`, `compositionupdate` oder `compositionend`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("UIEvent/UIEvent", "UIEvent()")}} definierten Eigenschaften_ die folgenden Eigenschaften enthält:
    - `data` {{optional_inline}}
      - : Ein String, der verwendet wird, um die {{domxref("CompositionEvent.data", "data")}} Eigenschaft des neuen
        {{domxref("CompositionEvent")}} zu initialisieren. Von Browsern generierte Ereignisse setzen es auf die durch die IME-Zusammensetzung erzeugten Zeichen.

### Rückgabewert

Ein neues {{domxref("CompositionEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CompositionEvent")}}, die Schnittstelle der Objekte, die es konstruiert.
