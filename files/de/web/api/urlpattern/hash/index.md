---
title: "URLPattern: hash-Eigenschaft"
short-title: hash
slug: Web/API/URLPattern/hash
l10n:
  sourceCommit: f06142077fabbb1e0fe791d74b856ae4f8d058b4
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die **`hash`**-Eigenschaft des [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces ist eine schreibgeschützte Zeichenkette, die das [Muster](/de/docs/Web/API/URL_Pattern_API#pattern_syntax) enthält, das verwendet wird, um den Fragmentteil einer URL zu matchen.

Dies ist der [normalisierte Wert](/de/docs/Web/API/URL_Pattern_API#pattern_normalization) des Hash-Musters, das an den [Konstruktor](/de/docs/Web/API/URLPattern/URLPattern) übergeben wurde, ein [geerbter Wert von einer `baseURL`](/de/docs/Web/API/URLPattern/URLPattern#inheritance_from_a_baseurl), der an den Konstruktor übergeben wurde, oder der Standardwert (`"*"`), der jedes Hash matcht.

## Wert

Eine Zeichenkette.

## Beispiele

### Grundlegende Verwendung

Das untenstehende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `books/:id` für den `hash`-Teil und gibt die Eigenschaft in der Konsole aus.
Dieses Muster matcht jeden Fragmentteil, der mit `books/` beginnt und mit einem beliebigen stringartigen Identifikator endet.

```js
const pattern = new URLPattern("https://example.org#books/:id");
console.log(pattern.hash); // 'books/:id'
console.log(pattern.test("https://example.org#books/123")); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
