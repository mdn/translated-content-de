---
title: "Anforderung: bytes() Methode"
short-title: bytes()
slug: Web/API/Request/bytes
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`bytes()`**-Methode des [`Request`](/de/docs/Web/API/Request)-Interfaces liest den Anforderungskörper und gibt ihn als ein Promise zurück, das mit einem {{jsxref("Uint8Array")}} aufgelöst wird.

## Syntax

```js-nolint
bytes()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das mit einem {{jsxref("Uint8Array")}} aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird aus einem der folgenden Gründe ausgelöst:
    - Der Anforderungskörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Inhalts des Körpers (zum Beispiel, weil der {{httpheader("Content-Encoding")}}-Header falsch ist).
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn ein Problem beim Erstellen des zugehörigen `ArrayBuffer` besteht (zum Beispiel, wenn die Datengröße zu groß ist).

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
