---
title: "SerialPort: forget() Methode"
short-title: forget()
slug: Web/API/SerialPort/forget
l10n:
  sourceCommit: 2de8605cc697ca93b02f0b7109082b694f8950ec
---

{{securecontext_header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`SerialPort.forget()`**-Methode der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der serielle Port geschlossen und vergessen ist.

## Syntax

```js-nolint
forget()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, sobald die Verbindung geschlossen ist, das Gerät vergessen wurde und die Berechtigung zurückgesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
