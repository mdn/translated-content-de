---
title: "KeyboardEvent: KeyboardEvent()-Konstruktor"
short-title: KeyboardEvent()
slug: Web/API/KeyboardEvent/KeyboardEvent
l10n:
  sourceCommit: db18e806c3b6d3db340c94e69739fbef966cba01
---

{{APIRef("UI Events")}}

Der **`KeyboardEvent()`**-Konstruktor erstellt ein neues [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Objekt.

## Syntax

```js-nolint
new KeyboardEvent(type)
new KeyboardEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist Groß- und Kleinschreibung empfindlich und wird von Browsern auf `keydown`, `keyup` oder `keypress` gesetzt.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `key` {{optional_inline}}
      - : Ein String, der standardmäßig `""` ist und den Wert von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) festlegt.
    - `code` {{optional_inline}}
      - : Ein String, der standardmäßig `""` ist und den Wert von [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) festlegt.
    - `location` {{optional_inline}}
      - : Eine Zahl, die standardmäßig `0` ist und den Wert von [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) festlegt.
    - `repeat` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist und den Wert von [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) festlegt.
    - `isComposing` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist und den Wert von [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) festlegt.
    - `charCode` {{optional_inline}} {{deprecated_inline}}
      - : Eine Zahl, die standardmäßig `0` ist und den Wert des veralteten [`KeyboardEvent.charCode`](/de/docs/Web/API/KeyboardEvent/charCode) festlegt.
    - `keyCode` {{optional_inline}} {{deprecated_inline}}
      - : Eine Zahl, die standardmäßig `0` ist und den Wert des veralteten [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) festlegt.
    - `which` {{optional_inline}} {{deprecated_inline}}
      - : Eine Zahl, die standardmäßig `0` ist und den Wert des veralteten [`UIEvent.which`](/de/docs/Web/API/UIEvent/which) festlegt.
    - `ctrlKey` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist und den Wert von [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) festlegt.
    - `shiftKey` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist und den Wert von [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) festlegt.
    - `altKey` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist und den Wert von [`KeyboardEvent.altKey`](/de/docs/Web/API/KeyboardEvent/altKey) festlegt.
    - `metaKey` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist und den Wert von [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) festlegt.

### Rückgabewert

Ein neues [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent), die Schnittstelle der Objekte, die es konstruiert.
