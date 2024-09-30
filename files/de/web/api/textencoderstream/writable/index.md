---
title: "TextEncoderStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/TextEncoderStream/writable
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`writable`** schreibgeschützte Eigenschaft der [`TextEncoderStream`](/de/docs/Web/API/TextEncoderStream)-Schnittstelle gibt einen [`WritableStream`](/de/docs/Web/API/WritableStream) zurück.

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Das folgende Beispiel zeigt, wie ein `WritableStream` von einem `TextEncoderStream`-Objekt zurückgegeben wird.

```js
stream = new TextEncoderStream();
console.log(stream.writable); // A WritableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
