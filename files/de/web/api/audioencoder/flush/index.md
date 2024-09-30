---
title: "AudioEncoder: flush() Methode"
short-title: flush()
slug: Web/API/AudioEncoder/flush
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`flush()`**-Methode der [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)-Schnittstelle gibt ein Promise zurück, das aufgelöst wird, sobald alle ausstehenden Nachrichten in der Warteschlange abgeschlossen sind.

## Syntax

```js-nolint
flush()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit undefined aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Promise abgelehnt wird, weil der [`state`](/de/docs/Web/API/AudioEncoder/state) nicht `"configured"` ist.

## Beispiele

Das folgende Beispiel leert den `AudioEncoder`.

```js
AudioEncoder.flush();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
