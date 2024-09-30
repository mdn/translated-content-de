---
title: "CloseEvent: CloseEvent()-Konstruktor"
short-title: CloseEvent()
slug: Web/API/CloseEvent/CloseEvent
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("Websockets API")}}{{AvailableInWorkers}}

Der **`CloseEvent()`**-Konstruktor erstellt ein neues [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Objekt.

## Syntax

```js-nolint
new CloseEvent(type)
new CloseEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und die Browser setzen es immer auf `close`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften hat:
    - `wasClean` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Verbindung sauber geschlossen wurde oder nicht. Standardmäßig ist dies `false`.
    - `code` {{optional_inline}}
      - : Ein Integer, der den _Verbindungsschlusscode_ darstellt, der vom Server gesendet wurde. Standardmäßig ist dies `0`.
    - `reason` {{optional_inline}}
      - : Ein String, der einen menschenlesbaren Grund enthält, warum der Server die Verbindung geschlossen hat. Standardmäßig ist dies `''`.

### Rückgabewert

Ein neues [`CloseEvent`](/de/docs/Web/API/CloseEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CloseEvent`](/de/docs/Web/API/CloseEvent), das Interface der Objekte, die es konstruiert.
