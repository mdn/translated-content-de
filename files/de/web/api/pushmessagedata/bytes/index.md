---
title: "PushMessageData: bytes() Methode"
short-title: bytes()
slug: Web/API/PushMessageData/bytes
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Die **`bytes()`** Methode der [`PushMessageData`](/de/docs/Web/API/PushMessageData) Schnittstelle extrahiert die Push-Nachrichtendaten als ein {{jsxref("Uint8Array")}} Objekt.

## Syntax

```js-nolint
bytes()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Uint8Array")}}.

### Ausnahmen

Der zurückgegebene {{jsxref("Uint8Array")}} wird von einem {{jsxref("ArrayBuffer")}} von Bytes unterstützt.
Ausnahmen, die während der Erstellung dieses unterstützenden Puffers auftreten, werden erneut ausgelöst.

Siehe [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions).

## Beispiele

```js
self.addEventListener("push", (event) => {
  const buffer = event.data.bytes();

  // do something with your typed array
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
