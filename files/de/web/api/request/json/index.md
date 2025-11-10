---
title: "Anforderung: json()-Methode"
short-title: json()
slug: Web/API/Request/json
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`json()`**-Methode der [`Request`](/de/docs/Web/API/Request)-Schnittstelle
liest den Anforderungskörper und gibt ihn als ein Versprechen zurück, das mit dem Ergebnis der Analyse des Körpertextes als {{JSxRef("JSON")}} aufgelöst wird.

Beachten Sie, dass das Ergebnis, trotz der Bezeichnung der Methode `json()`, nicht JSON ist, sondern das Ergebnis der Verarbeitung von JSON als Eingabe, um ein JavaScript-Objekt zu erzeugen.

## Syntax

```js-nolint
json()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf ein JavaScript-Objekt aufgelöst wird. Dieses Objekt kann alles sein, was durch JSON dargestellt werden kann — ein Objekt, ein Array, ein String, eine Zahl…

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird aus einem der folgenden Gründe ausgelöst:
    - Der Anforderungskörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Körperinhalts (zum Beispiel, weil der {{httpheader("Content-Encoding")}}-Header falsch ist).
- {{jsxref("SyntaxError")}}
  - : Der Anforderungskörper kann nicht als JSON geparst werden.

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
