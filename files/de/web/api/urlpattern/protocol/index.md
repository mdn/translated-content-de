---
title: "URLPattern: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/URLPattern/protocol
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die schreibgeschützte **`protocol`**-Eigenschaft des [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces ist ein Zeichenfolgenwert, der das Muster enthält, das verwendet wird, um den Protokollteil einer URL zu matchen. Dieser Wert kann aufgrund der Normalisierung vom Eingabewert des Konstruktors abweichen.

## Wert

Eine Zeichenfolge.

## Beispiele

Das folgende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `http{s}?` für den `protocol`-Teil. Dieses Muster matcht die `http`- und `https`-Protokolle.

```js
const pattern = new URLPattern({ protocol: "http{s}?" });
console.log(pattern.protocol); // 'http{s}?'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
