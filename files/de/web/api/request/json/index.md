---
title: "Request: json() Methode"
short-title: json()
slug: Web/API/Request/json
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`json()`** Methode des [`Request`](/de/docs/Web/API/Request) Interfaces
liest den Anfragetext und gibt ihn als Promise zurück, das mit dem Ergebnis des Parsens des Textes als {{JSxRef("JSON")}} aufgelöst wird.

Beachten Sie, dass das Ergebnis, trotz des Namens der Methode `json()`, kein JSON ist, sondern das Ergebnis des Parsens von JSON als Eingabe, um ein JavaScript-Objekt zu erzeugen.

## Syntax

```js-nolint
json()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein JavaScript-Objekt aufgelöst wird. Dieses Objekt kann alles sein, was durch JSON dargestellt werden kann — ein Objekt, ein Array, ein String, eine Zahl…

## Beispiele

```js
const obj = { hello: "world" };

const request = new Request("/myEndpoint", {
  method: "POST",
  body: JSON.stringify(obj),
});

request.json().then((data) => {
  // do something with the data sent in the request
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Response.json()`](/de/docs/Web/API/Response/json)
