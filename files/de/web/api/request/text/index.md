---
title: "Request: text() Methode"
short-title: text()
slug: Web/API/Request/text
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`text()`**-Methode des [`Request`](/de/docs/Web/API/Request)-Interfaces liest den Anfragetext aus und gibt ihn als ein Promise zurück, das mit einem {{jsxref("String")}} aufgelöst wird. Die Antwort wird _immer_ mit UTF-8 dekodiert.

## Syntax

```js-nolint
text()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das mit einem {{jsxref("String")}} aufgelöst wird.

## Beispiele

```js
const text = "Hello world";

const request = new Request("/myEndpoint", {
  method: "POST",
  body: text,
});

request.text().then((text) => {
  // do something with the text sent in the request
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Response.text()`](/de/docs/Web/API/Response/text)
