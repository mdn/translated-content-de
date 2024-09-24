---
title: "URLSearchParams: getAll()-Methode"
short-title: getAll()
slug: Web/API/URLSearchParams/getAll
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`getAll()`**-Methode der {{domxref("URLSearchParams")}}-Schnittstelle gibt alle Werte zurück, die mit einem gegebenen Suchparameter assoziiert sind, als ein Array.

## Syntax

```js-nolint
getAll(name)
```

### Parameter

- `name`
  - : Der Name des Parameters, der zurückgegeben werden soll.

### Rückgabewert

Ein Array von Strings, das leer sein kann, wenn keine Werte für den gegebenen Parameter gefunden werden.

## Beispiele

```js
let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search);

// Fügen Sie einen zweiten foo-Parameter hinzu.
params.append("foo", 4);

console.log(params.getAll("foo")); // Gibt ["1","4"] aus.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
