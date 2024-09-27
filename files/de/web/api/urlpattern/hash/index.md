---
title: "URLPattern: hash-Eigenschaft"
short-title: hash
slug: Web/API/URLPattern/hash
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die schreibgeschützte **`hash`**-Eigenschaft des [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces ist ein String, der das Muster enthält, das verwendet wird, um den Fragmentteil einer URL zu matchen. Dieser Wert kann aufgrund von Normalisierung von der Eingabe des Konstruktors abweichen.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `books/:id` für den `hash`-Teil. Dieses Muster matcht jedes Fragment, das mit `books/` beginnt und mit einem beliebigen Zeichenfolgen-Identifikator endet.

```js
const pattern = new URLPattern("https://example.org#books/:id");
console.log(pattern.hash); // 'books/:id'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
