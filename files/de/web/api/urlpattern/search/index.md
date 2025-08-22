---
title: "URLPattern: search-Eigenschaft"
short-title: search
slug: Web/API/URLPattern/search
l10n:
  sourceCommit: 4535090888f24ac8394e177c27260d16a53631e6
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die **`search`**-Schreibgeschützte-Eigenschaft des [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces ist ein String, der das [Muster](/de/docs/Web/API/URL_Pattern_API#pattern_syntax) enthält, das verwendet wird, um den Suchteil einer URL zu matchen.

Dies ist der [normalisierte Wert](/de/docs/Web/API/URL_Pattern_API#pattern_normalization) des Suchmusters, das dem [Konstruktor](/de/docs/Web/API/URLPattern/URLPattern) übergeben wurde, ein [geerbter Wert von einer `baseURL`](/de/docs/Web/API/URLPattern/URLPattern#inheritance_from_a_baseurl), die an den Konstruktor übergeben wurde, oder der Standardwert (`"*"`), der jeden Suchteil matcht.

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `'q=baby'` für den `search`-Teil und protokolliert die Eigenschaft.
Dieses Muster matcht jede URL, bei der der Suchteil genau diesen Text enthält.

```js
const pattern = new URLPattern({
  search: "q=baby",
});
console.log(pattern.search); // "q=baby"
console.log(pattern.test("https://example.com/shoes?q=baby")); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
