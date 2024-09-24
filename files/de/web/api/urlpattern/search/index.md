---
title: "URLPattern: search-Eigenschaft"
short-title: search
slug: Web/API/URLPattern/search
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`search`**-Eigenschaft der schreibgeschützten {{domxref("URLPattern")}}-Schnittstelle ist ein String, der das Muster enthält, das verwendet wird, um den Suchteil einer URL zu matchen. Dieser Wert kann sich aufgrund von Normalisierung von der Eingabe des Konstruktors unterscheiden.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel erstellt ein {{domxref("URLPattern")}}-Objekt mit `*` für den `search`-Teil. Dieses Muster ist ein Platzhalter und matcht daher jeden Suchteil.

```js
const pattern = new URLPattern("https://example.com?*");
console.log(pattern.search); // '*'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
