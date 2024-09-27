---
title: "URLPattern: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/URLPattern/pathname
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die read-only Eigenschaft **`pathname`** der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle ist ein String, der das Muster enthält, das verwendet wird, um den `pathname`-Teil einer URL zu matchen. Dieser Wert kann aufgrund von Normalisierungen von der Eingabe im Konstruktor abweichen.

## Wert

Ein String.

## Beispiele

Im folgenden Beispiel wird ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `/books/:id(\\d)` für den `pathname`-Teil erstellt. Dieses Muster matcht URLs, die mit `/books/` beginnen, gefolgt von einer ganzen Zahl.

```js
const pattern = new URLPattern({ pathname: "/books/:id(\\d)" });
console.log(pattern.pathname); // '/books/:id(\\d)'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
