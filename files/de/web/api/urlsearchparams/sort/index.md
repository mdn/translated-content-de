---
title: "URLSearchParams: sort()-Methode"
short-title: sort()
slug: Web/API/URLSearchParams/sort
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`URLSearchParams.sort()`**-Methode sortiert alle in diesem Objekt enthaltenen Schlüssel/Wert-Paare an Ort und Stelle und gibt `undefined` zurück. Die Sortierreihenfolge erfolgt nach den Unicode-Codepunkten der Schlüssel. Diese Methode verwendet einen stabilen Sortieralgorithmus (d.h. die relative Reihenfolge zwischen Schlüssel/Wert-Paaren mit gleichen Schlüsseln bleibt erhalten).

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
// Erstellen Sie ein Test-URLSearchParams-Objekt
const searchParams = new URLSearchParams("c=4&a=2&b=3&a=1");

// Sortieren Sie die Schlüssel/Wert-Paare
searchParams.sort();

// Anzeigen der sortierten Abfragezeichenfolge
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
