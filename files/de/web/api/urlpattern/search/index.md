---
title: "URLPattern: search-Eigenschaft"
short-title: search
slug: Web/API/URLPattern/search
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`search`**-Eigenschaft des [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces ist ein String, der das Muster enthält, das verwendet wird, um den Suchteil einer URL zu matchen. Dieser Wert kann von der Eingabe für den Konstruktor aufgrund von Normalisierung abweichen.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `*` für den `search`-Teil. Dieses Muster ist ein Platzhalter und matcht daher jeden Suchteil.

```js
const pattern = new URLPattern("https://example.com?*");
console.log(pattern.search); // '*'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
