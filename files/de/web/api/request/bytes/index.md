---
title: "Request: bytes()-Methode"
short-title: bytes()
slug: Web/API/Request/bytes
l10n:
  sourceCommit: 9dfdc8522d5c53448643682bacaf33959487006a
---

{{APIRef("Fetch API")}}

Die **`bytes()`**-Methode des [`Request`](/de/docs/Web/API/Request)-Interfaces liest den Anfragekörper und gibt ihn als ein Versprechen (Promise) zurück, das mit einem {{jsxref("Uint8Array")}} aufgelöst wird.

## Syntax

```js-nolint
bytes()
```

### Parameter

Keine.

### Rückgabewert

Ein Versprechen (Promise), das mit einem {{jsxref("Uint8Array")}} aufgelöst wird.

## Beispiele

```js
const myArray = new Uint8Array(10);

const request = new Request("/myEndpoint", {
  method: "POST",
  body: myArray,
});

request.bytes().then((buffer) => {
  // do something with the buffer sent in the request
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
