---
title: "AudioEncoder: flush()-Methode"
short-title: flush()
slug: Web/API/AudioEncoder/flush
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`flush()`**-Methode des {{domxref("AudioEncoder")}}-Interfaces gibt ein Promise zurück, das aufgelöst wird, sobald alle ausstehenden Nachrichten in der Warteschlange abgeschlossen sind.

## Syntax

```js-nolint
flush()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit undefined aufgelöst wird.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Promise abgelehnt wird, weil der {{domxref("AudioEncoder.state","state")}} nicht `"configured"` ist.

## Beispiele

Im folgenden Beispiel wird der `AudioEncoder` geleert.

```js
AudioEncoder.flush();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
