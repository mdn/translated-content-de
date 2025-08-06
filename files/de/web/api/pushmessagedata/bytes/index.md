---
title: "PushMessageData: bytes() Methode"
short-title: bytes()
slug: Web/API/PushMessageData/bytes
l10n:
  sourceCommit: e709754f3e8d6cbaed0d5783cc354e0ae44795e0
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Die **`bytes()`**-Methode der [`PushMessageData`](/de/docs/Web/API/PushMessageData)-Schnittstelle extrahiert Push-Nachrichtendaten als ein {{jsxref("Uint8Array")}}-Objekt.

## Syntax

```js-nolint
bytes()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Uint8Array")}}.

### Ausnahmen

Das zurückgegebene {{jsxref("Uint8Array")}} wird durch einen {{jsxref("ArrayBuffer")}} von Bytes unterstützt.
Während der Erstellung dieses unterstützenden Puffers ausgelöste Ausnahmen werden erneut ausgelöst.

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
