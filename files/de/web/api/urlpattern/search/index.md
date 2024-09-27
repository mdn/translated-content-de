---
title: "URLPattern: search-Eigenschaft"
short-title: search
slug: Web/API/URLPattern/search
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`search`**-Eigenschaft des [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces ist eine
schreibgeschützte Zeichenkette, die das Muster enthält, das für den Abgleich des Suchteils einer URL verwendet wird. Dieser Wert kann sich von der Eingabe des Konstruktors aufgrund der Normalisierung unterscheiden.

## Wert

Eine Zeichenkette.

## Beispiele

Das folgende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `*` für den
`search`-Teil. Dieses Muster ist ein Platzhalter und passt somit auf jeden Suchteil.

```js
const pattern = new URLPattern("https://example.com?*");
console.log(pattern.search); // '*'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
