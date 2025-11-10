---
title: "URLPattern: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/URLPattern/pathname
l10n:
  sourceCommit: 4535090888f24ac8394e177c27260d16a53631e6
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`pathname`** der [`URLPattern`](/de/docs/Web/API/URLPattern) Schnittstelle ist ein String, der das [Muster](/de/docs/Web/API/URL_Pattern_API#pattern_syntax) enthält, das verwendet wird, um den Pfadnamen-Teil einer URL zu matchen.

Dies ist der [normalisierte Wert](/de/docs/Web/API/URL_Pattern_API#pattern_normalization) des Pfadnamensmusters, das an den [Konstruktor](/de/docs/Web/API/URLPattern/URLPattern) übergeben wurde, ein [geerbter Wert von einer `baseURL`](/de/docs/Web/API/URLPattern/URLPattern#inheritance_from_a_baseurl), der an den Konstruktor übergeben wurde, oder der Standardwert (`"*"`), der jeden Pfad matched.

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `/books/:id(\\d)` für den `pathname`-Teil und protokolliert die Eigenschaft.
Dieses Muster matched jede URL, die mit `/books/` beginnt, gefolgt von einer ganzen Zahl.

```js
const pattern = new URLPattern({ pathname: "/books/:id(\\d)" });
console.log(pattern.pathname); // "/books/:id(\\d)"
console.log(pattern.test("https://example.com/books/8")); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
