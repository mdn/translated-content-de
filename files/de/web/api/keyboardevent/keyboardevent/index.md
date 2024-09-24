---
title: "KeyboardEvent: KeyboardEvent() Konstruktor"
short-title: KeyboardEvent()
slug: Web/API/KeyboardEvent/KeyboardEvent
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

Der **`KeyboardEvent()`** Konstruktor erstellt ein neues
{{domxref("KeyboardEvent")}} Objekt.

## Syntax

```js-nolint
new KeyboardEvent(type)
new KeyboardEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitive und Browser setzen es auf `keydown`, `keyup` oder `keypress`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("UIEvent/UIEvent", "UIEvent()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `key` {{optional_inline}}
      - : Ein String, der standardmäßig auf `""` gesetzt ist und den Wert von {{domxref("KeyboardEvent.key")}} festlegt.
    - `code` {{optional_inline}}
      - : Ein String, der standardmäßig auf `""` gesetzt ist und den Wert von {{domxref("KeyboardEvent.code")}} festlegt.
    - `location` {{optional_inline}}
      - : Ein String, der standardmäßig auf `0` gesetzt ist und den Wert von {{domxref("KeyboardEvent.location")}} festlegt.
    - `repeat` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist und den Wert von {{domxref("KeyboardEvent.repeat")}} festlegt.
    - `isComposing` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist und den Wert von {{domxref("KeyboardEvent.isComposing")}} festlegt.
    - `charCode` {{optional_inline}} {{deprecated_inline}}
      - : Eine Zahl, die standardmäßig auf `0` gesetzt ist und den Wert des veralteten {{domxref("KeyboardEvent.charCode")}} festlegt.
    - `keyCode` {{optional_inline}} {{deprecated_inline}}
      - : Eine Zahl, die standardmäßig auf `0` gesetzt ist und den Wert des veralteten {{domxref("KeyboardEvent.keyCode")}} festlegt.
    - `which` {{optional_inline}} {{deprecated_inline}}
      - : Eine Zahl, die standardmäßig auf `0` gesetzt ist und den Wert des veralteten {{domxref("UIEvent.which")}} festlegt.
    - `ctrlKey` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist und den Wert von {{domxref("KeyboardEvent.ctrlKey")}} festlegt.
    - `shiftKey` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist und den Wert von {{domxref("KeyboardEvent.shiftKey")}} festlegt.
    - `altKey` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist und den Wert von {{domxref("KeyboardEvent.altKey")}} festlegt.
    - `metaKey` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist und den Wert von {{domxref("KeyboardEvent.metaKey")}} festlegt.

### Rückgabewert

Ein neues {{domxref("KeyboardEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("KeyboardEvent")}}, die Schnittstelle der Objekte, die es konstruiert.
