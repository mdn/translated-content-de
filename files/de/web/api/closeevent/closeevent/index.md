---
title: "CloseEvent: CloseEvent() Konstruktor"
short-title: CloseEvent()
slug: Web/API/CloseEvent/CloseEvent
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("Websockets API")}}

Der **`CloseEvent()`** Konstruktor erstellt ein neues {{domxref("CloseEvent")}} Objekt.

## Syntax

```js-nolint
new CloseEvent(type)
new CloseEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß- und kleinschreibungssensitiv und Browser setzen ihn immer auf `close`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften besitzt:
    - `wasClean` {{optional_inline}}
      - : Ein boolescher Wert, der anzeigt, ob die Verbindung sauber geschlossen wurde oder nicht. Standardmäßig ist er `false`.
    - `code` {{optional_inline}}
      - : Eine Ganzzahl, die den _Verbindungsschlusscode_ repräsentiert, der vom Server gesendet wurde. Standardmäßig ist er `0`.
    - `reason` {{optional_inline}}
      - : Ein String, der einen menschenlesbaren Grund enthält, warum der Server die Verbindung geschlossen hat. Standardmäßig ist er `''`.

### Rückgabewert

Ein neues {{domxref("CloseEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CloseEvent")}}, die Schnittstelle der Objekte, die es konstruiert.
