---
title: "Request: json() Methode"
short-title: json()
slug: Web/API/Request/json
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die **`json()`**-Methode des [`Request`](/de/docs/Web/API/Request)-Interfaces liest den Anfragetext und gibt ihn als ein Promise zurück, das mit dem Ergebnis des Parsens des Textes als {{JSxRef("JSON")}} aufgelöst wird.

Beachten Sie, dass das Ergebnis trotz der Bezeichnung `json()` nicht JSON ist, sondern das Ergebnis der Eingabe von JSON und deren Parsen zu einem JavaScript-Objekt.

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
