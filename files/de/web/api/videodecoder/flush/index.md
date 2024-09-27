---
title: "VideoDecoder: flush() Methode"
short-title: flush()
slug: Web/API/VideoDecoder/flush
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`flush()`**-Methode des [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)-Interfaces gibt ein Promise zurück, das aufgelöst wird, sobald alle ausstehenden Nachrichten in der Warteschlange bearbeitet wurden.

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
  - : Wird zurückgegeben, wenn das Promise abgelehnt wird, weil der [`state`](/de/docs/Web/API/VideoDecoder/state) nicht `configured` ist.

## Beispiele

Das folgende Beispiel leert den `VideoDecoder`.

```js
VideoDecoder.flush();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
