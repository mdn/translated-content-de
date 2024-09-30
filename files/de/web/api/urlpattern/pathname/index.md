---
title: "URLPattern: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/URLPattern/pathname
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`pathname`** der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle ist ein String, der das Muster enthält, das verwendet wird, um den Pfadnamen-Teil einer URL zu matchen. Dieser Wert kann sich aufgrund der Normalisierung von der Eingabe im Konstruktor unterscheiden.

## Wert

Ein String.

## Beispiele

Im folgenden Beispiel wird ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt erstellt, wobei `/books/:id(\\d)` für den `pathname`-Teil verwendet wird. Dieses Muster matched URLs, die mit `/books/` beginnen, gefolgt von einer Ganzzahl.

```js
const pattern = new URLPattern({ pathname: "/books/:id(\\d)" });
console.log(pattern.pathname); // '/books/:id(\\d)'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
