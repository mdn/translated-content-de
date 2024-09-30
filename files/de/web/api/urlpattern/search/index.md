---
title: "URLPattern: search-Eigenschaft"
short-title: search
slug: Web/API/URLPattern/search
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die schreibgeschützte **`search`**-Eigenschaft des [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces ist ein String, der das Muster enthält, das zum Abgleichen des Suchteils einer URL verwendet wird. Dieser Wert kann sich aufgrund der Normalisierung von der Eingabe des Konstruktors unterscheiden.

## Wert

Ein String.

## Beispiele

Im folgenden Beispiel wird ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `*` für den `search`-Teil erstellt. Dieses Muster ist ein Platzhalter, der somit jeden Suchteil abgleicht.

```js
const pattern = new URLPattern("https://example.com?*");
console.log(pattern.search); // '*'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
