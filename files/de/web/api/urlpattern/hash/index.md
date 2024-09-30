---
title: "URLPattern: hash-Eigenschaft"
short-title: hash
slug: Web/API/URLPattern/hash
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`hash`**-Eigenschaft der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle ist eine
schreibgeschützte Zeichenkette, die das Muster enthält, das verwendet wird, um den Fragmentteil
einer URL zu entsprechen. Dieser Wert kann sich aufgrund von
Normalisierung von der Eingabe des Konstruktors unterscheiden.

## Wert

Eine Zeichenkette.

## Beispiele

Das untenstehende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `books/:id`
für den `hash`-Teil. Dieses Muster entspricht jedem Fragment, das mit `books/`
beginnt und mit einem beliebigen stringbasierten Bezeichner endet.

```js
const pattern = new URLPattern("https://example.org#books/:id");
console.log(pattern.hash); // 'books/:id'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
