---
title: "WorkerGlobalScope: dump()-Methode"
short-title: dump()
slug: Web/API/WorkerGlobalScope/dump
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Web Workers API")}}{{Non-standard_Header}}{{AvailableInWorkers("worker")}}

Die **`WorkerGlobalScope.dump()`**-Methode protokolliert Nachrichten an die Standardausgabe (`stdout`) des Browsers. Wenn der Browser von einem Terminal aus gestartet wurde, wird die an `dump()` gesendete Ausgabe im Terminal angezeigt. Dies entspricht der Verwendung von [`Window.dump()`](/de/docs/Web/API/Window/dump), aber für Worker.

Ausgaben von `dump()` werden _nicht_ an die Entwicklerwerkzeuge-Konsole des Browsers gesendet. Um in die Entwicklerwerkzeuge-Konsole zu protokollieren, verwenden Sie [`console.log()`](/de/docs/Web/API/console/log_static).

## Syntax

```js-nolint
dump(message)
```

### Parameter

- `message`
  - : Ein String, der die zu protokollierende Nachricht enthält.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

Dieses Feature ist Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}
