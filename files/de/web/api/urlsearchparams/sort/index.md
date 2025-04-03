---
title: "URLSearchParams: sort()-Methode"
short-title: sort()
slug: Web/API/URLSearchParams/sort
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`URLSearchParams.sort()`**-Methode sortiert alle Schlüssel/Wert-Paare, die in diesem Objekt enthalten sind, an Ort und Stelle und gibt `undefined` zurück. Die Sortierreihenfolge erfolgt gemäß den Unicode-Codepunkten der Schlüssel. Diese Methode verwendet einen stabilen Sortieralgorithmus (d.h. die relative Reihenfolge zwischen Schlüssel/Wert-Paaren mit gleichen Schlüsseln bleibt erhalten).

## Syntax

```js-nolint
sort()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Create a test URLSearchParams object
const searchParams = new URLSearchParams("c=4&a=2&b=3&a=1");

// Sort the key/value pairs
searchParams.sort();

// Display the sorted query string
console.log(searchParams.toString());
```

Das Ergebnis ist:

```plain
a=2&a=1&b=3&c=4
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
