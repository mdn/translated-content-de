---
title: "URLPattern: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/URLPattern/pathname
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die **`pathname`** schreibgeschützte Eigenschaft der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle ist ein
String, der das Muster enthält, das verwendet wird, um den Pfadnamen-Teil einer URL zu matchen. Dieser Wert kann sich aufgrund der Normalisierung vom Eingabewert des Konstruktors unterscheiden.

## Wert

Ein String.

## Beispiele

Im folgenden Beispiel wird ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt erstellt mit
`/books/:id(\\d)` für den `pathname`-Teil. Dieses Muster matcht URLs, die mit `/books/` beginnen, gefolgt von einer ganzen Zahl.

```js
const pattern = new URLPattern({ pathname: "/books/:id(\\d)" });
console.log(pattern.pathname); // '/books/:id(\\d)'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
