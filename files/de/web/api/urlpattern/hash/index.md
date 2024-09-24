---
title: "URLPattern: hash-Eigenschaft"
short-title: hash
slug: Web/API/URLPattern/hash
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`hash`** schreibgeschützte Eigenschaft der {{domxref("URLPattern")}}-Schnittstelle ist ein String, der das Muster enthält, das verwendet wird, um den Fragmentteil einer URL abzugleichen. Dieser Wert kann sich aufgrund der Normalisierung von der Eingabe des Konstruktors unterscheiden.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel erstellt ein {{domxref("URLPattern")}}-Objekt mit `books/:id` für den `hash`-Teil. Dieses Muster stimmt mit jedem Fragment überein, das mit `books/` beginnt und mit einem beliebigen String-Identifier endet.

```js
const pattern = new URLPattern("https://example.org#books/:id");
console.log(pattern.hash); // 'books/:id'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
