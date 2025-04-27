---
title: "URLSearchParams: getAll() Methode"
short-title: getAll()
slug: Web/API/URLSearchParams/getAll
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`getAll()`**-Methode des [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
Interfaces gibt alle Werte, die einem bestimmten Suchparameter zugeordnet sind, als Array zurück.

## Syntax

```js-nolint
getAll(name)
```

### Parameter

- `name`
  - : Der Name des Parameters, der zurückgegeben werden soll.

### Rückgabewert

Ein Array von Zeichenfolgen, das möglicherweise leer ist, wenn keine Werte für den angegebenen Parameter gefunden werden.

## Beispiele

```js
const url = new URL("https://example.com?foo=1&bar=2");
const params = new URLSearchParams(url.search);

// Add a second foo parameter.
params.append("foo", 4);

console.log(params.getAll("foo")); // ["1", "4"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
