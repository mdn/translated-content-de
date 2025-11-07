---
title: "Anfrage: blob()-Methode"
short-title: blob()
slug: Web/API/Request/blob
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`blob()`**-Methode des [`Request`](/de/docs/Web/API/Request)-Interfaces liest den Anforderungstext und gibt ihn als ein `Promise` zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) aufgelöst wird.

## Syntax

```js-nolint
blob()
```

### Parameter

Keine.

### Rückgabewert

Ein `Promise`, das mit einem [`Blob`](/de/docs/Web/API/Blob) aufgelöst wird, dessen Daten die Bytes des Anforderungstextes sind und dessen Medientyp der Wert des `Content-Type`-Headers der Anfrage ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird aus einem der folgenden Gründe ausgelöst:
    - Der Anforderungstext ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Textinhalts (zum Beispiel, weil der {{httpheader("Content-Encoding")}}-Header falsch ist).

## Beispiele

```js
const obj = { hello: "world" };
const myBlob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});

const request = new Request("/myEndpoint", {
  method: "POST",
  body: myBlob,
});

request.blob().then((myBlob) => {
  // do something with the blob sent in the request
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Response.blob()`](/de/docs/Web/API/Response/blob)
