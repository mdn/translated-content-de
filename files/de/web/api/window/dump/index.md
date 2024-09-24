---
title: "Window: dump()-Methode"
short-title: dump()
slug: Web/API/Window/dump
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{APIRef}} {{Non-standard_header}}

Die **`Window.dump()`**-Methode protokolliert Nachrichten an die Standardausgabe (`stdout`) des Browsers. Wenn der Browser von einem Terminal aus gestartet wurde, erscheinen die an `dump()` gesendeten Ausgaben im Terminal.

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

Diese Funktion ist nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}
