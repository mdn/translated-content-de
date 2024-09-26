---
title: "AudioDecoder: flush()-Methode"
short-title: flush()
slug: Web/API/AudioDecoder/flush
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`flush()`**-Methode des {{domxref("AudioDecoder")}}-Interfaces gibt ein Promise zurück, das aufgelöst wird, sobald alle ausstehenden Nachrichten in der Warteschlange abgeschlossen sind.

## Syntax

```js-nolint
flush()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit undefined aufgelöst wird.

### Ausnahmen

Wenn ein Fehler auftritt, wird das Promise mit einer der folgenden Ausnahmen aufgelöst:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn das Promise abgelehnt wird, weil der {{domxref("AudioDecoder.state","state")}} nicht `configured` ist.

## Beispiele

Das folgende Beispiel leert den `AudioDecoder`.

```js
await audioDecoder.flush();
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}