---
title: "ErrorEvent: ErrorEvent() Konstruktor"
short-title: ErrorEvent()
slug: Web/API/ErrorEvent/ErrorEvent
l10n:
  sourceCommit: 2cd89ba0e74308b8f9bcd5937b76fd1188006358
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Der **`ErrorEvent()`** Konstruktor erstellt ein neues [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekt.

## Syntax

```js-nolint
new ErrorEvent(type)
new ErrorEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist case-sensitive.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den Eigenschaften, die in [`Event()`](/de/docs/Web/API/Event/Event) definiert sind_, die folgenden Eigenschaften haben kann:
    - `message` {{optional_inline}}
      - : Ein String, der eine menschenlesbare Fehlermeldung enthält, die das Problem beschreibt.
    - `filename` {{optional_inline}}
      - : Ein String, der den Namen der Skriptdatei enthält, in der der Fehler aufgetreten ist.
    - `lineno` {{optional_inline}}
      - : Ein Integer, der die Zeilennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
    - `colno` {{optional_inline}}
      - : Ein Integer, der die Spaltennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
    - `error` {{optional_inline}}
      - : Ein JavaScript-Wert, wie zum Beispiel ein {{jsxref("Error")}} oder [`DOMException`](/de/docs/Web/API/DOMException), der den mit diesem Ereignis verbundenen Fehler darstellt.

### Rückgabewert

Ein neues [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
