---
title: "URLPattern: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/URLPattern/protocol
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die **`protocol`**-Eigenschaft des schreibgeschützten [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces ist ein String, der das Muster enthält, das verwendet wird, um den Protokollteil einer URL zu matchen. Dieser Wert kann aufgrund von Normalisierung vom Eingabewert des Konstruktors abweichen.

## Wert

Ein String.

## Beispiele

Das untenstehende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `http{s}?` für den `protocol`-Teil. Dieses Muster matcht die `http`- und `https`-Protokolle.

```js
const pattern = new URLPattern({ protocol: "http{s}?" });
console.log(pattern.protocol); // 'http{s}?'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
