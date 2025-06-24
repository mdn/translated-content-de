---
title: "URLSearchParams: sort() Methode"
short-title: sort()
slug: Web/API/URLSearchParams/sort
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`URLSearchParams.sort()`**-Methode sortiert alle Schlüssel/Wert-Paare, die in diesem Objekt enthalten sind, an Ort und Stelle und gibt `undefined` zurück. Die Schlüssel/Wert-Paare werden nach den Werten der {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} der Schlüssel sortiert. Diese Methode verwendet einen stabilen Sortieralgorithmus (d.h. die relative Reihenfolge zwischen Schlüssel/Wert-Paaren mit gleichen Schlüsseln bleibt erhalten).

## Syntax

```js-nolint
sort()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

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
