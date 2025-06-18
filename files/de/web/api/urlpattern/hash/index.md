---
title: "URLPattern: hash-Eigenschaft"
short-title: hash
slug: Web/API/URLPattern/hash
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die **`hash`**-Eigenschaft des [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces ist eine schreibgeschützte Zeichenkette, die das Muster enthält, das verwendet wird, um den Fragmentteil einer URL zu matchen. Dieser Wert kann sich aufgrund von Normalisierung von der Eingabe im Konstruktor unterscheiden.

## Wert

Eine Zeichenkette.

## Beispiele

Das untenstehende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `books/:id` für den `hash`-Teil. Dieses Muster matcht jedes Fragment, das mit `books/` beginnt und mit einem beliebigen Zeichenketten-Identifikator endet.

```js
const pattern = new URLPattern("https://example.org#books/:id");
console.log(pattern.hash); // 'books/:id'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
