---
title: "Window: dump()-Methode"
short-title: dump()
slug: Web/API/Window/dump
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{APIRef}} {{Non-standard_header}}

Die **`Window.dump()`**-Methode protokolliert Nachrichten an die Standardeingabe des Browsers (`stdout`). Wenn der Browser von einem Terminal aus gestartet wurde, wird die Ausgabe, die an `dump()` gesendet wird, im Terminal angezeigt.

Die Ausgabe von `dump()` wird _nicht_ an die Entwicklerwerkzeuge-Konsole des Browsers gesendet. Um in die Entwicklerwerkzeuge-Konsole zu protokollieren, verwenden Sie [`console.log()`](/de/docs/Web/API/console/log_static).

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

Diese Funktion ist nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}
