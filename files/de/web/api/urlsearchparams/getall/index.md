---
title: "URLSearchParams: getAll() Methode"
short-title: getAll()
slug: Web/API/URLSearchParams/getAll
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`getAll()`** Methode der [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Schnittstelle gibt alle mit einem bestimmten Suchparameter verknüpften Werte als Array zurück.

## Syntax

```js-nolint
getAll(name)
```

### Parameter

- `name`
  - : Der Name des Parameters, der zurückgegeben werden soll.

### Rückgabewert

Ein Array von Zeichenketten, das leer sein kann, wenn keine Werte für den angegebenen Parameter gefunden werden.

## Beispiele

```js
let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search);

//Add a second foo parameter.
params.append("foo", 4);

console.log(params.getAll("foo")); //Prints ["1","4"].
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
