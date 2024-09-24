---
title: "Request: json() Methode"
short-title: json()
slug: Web/API/Request/json
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die **`json()`** Methode der {{domxref("Request")}} Schnittstelle
liest den Anfragekörper und gibt ihn als ein Promise zurück, das mit dem Ergebnis der Analyse des Körpertextes als {{JSxRef("JSON")}} aufgelöst wird.

Beachten Sie, dass das Ergebnis trotz der Bezeichnung der Methode `json()` nicht JSON ist, sondern das Ergebnis der Interpretation von JSON als Eingabe ist, um ein JavaScript-Objekt zu erstellen.

## Syntax

```js-nolint
json()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein JavaScript-Objekt aufgelöst wird. Dieses Objekt könnte alles sein, was durch JSON dargestellt werden kann — ein Objekt, ein Array, ein String, eine Zahl…

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

- {{domxref("Response.json()")}}
