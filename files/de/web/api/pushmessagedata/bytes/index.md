---
title: "PushMessageData: bytes() Methode"
short-title: bytes()
slug: Web/API/PushMessageData/bytes
l10n:
  sourceCommit: de2ef1e9950eebbacdd55f072dfe03014d113bbd
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Die **`bytes()`** Methode des [`PushMessageData`](/de/docs/Web/API/PushMessageData) Interfaces extrahiert Push-Nachrichtendaten als ein {{jsxref("Uint8Array")}} Objekt.

## Syntax

```js-nolint
bytes()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Uint8Array")}}.

### Ausnahmen

Der zurückgegebene {{jsxref("Uint8Array")}} wird durch einen {{jsxref("ArrayBuffer")}} von Bytes unterstützt.
Ausnahmen, die während der Erstellung dieses unterstützenden Puffers auftreten, werden erneut ausgelöst.

Siehe [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions).

## Beispiele

```js
self.addEventListener("push", (event) => {
  const buffer = event.data.Uint8Array();

  // do something with your typed array
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
