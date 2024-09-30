---
title: "WorkerGlobalScope: dump()-Methode"
short-title: dump()
slug: Web/API/WorkerGlobalScope/dump
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{Non-standard_Header}}{{Deprecated_Header}}{{AvailableInWorkers("worker")}}

Die **`WorkerGlobalScope.dump()`**-Methode protokolliert Nachrichten zur Standardausgabe (`stdout`) des Browsers. Wenn der Browser von einem Terminal aus gestartet wurde, erscheint die an `dump()` gesendete Ausgabe im Terminal. Dies entspricht der [`Window.dump()`](/de/docs/Web/API/Window/dump)-Methode, jedoch für Worker.

Ausgaben von `dump()` werden _nicht_ an die Entwicklerwerkzeuge-Konsole des Browsers gesendet. Um in die Entwicklerwerkzeuge-Konsole zu protokollieren, verwenden Sie [`console.log()`](/de/docs/Web/API/console/log_static).

## Syntax

```js-nolint
dump(message)
```

### Parameter

- `message`
  - : Ein String, der die zu protokollierende Nachricht enthält.

### Rückgabewert

None ({{jsxref("undefined")}}).

## Spezifikationen

Dieses Feature ist nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}
