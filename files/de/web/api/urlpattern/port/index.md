---
title: "URLPattern: port-Eigenschaft"
short-title: port
slug: Web/API/URLPattern/port
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`port`**-Eigenschaft des [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces ist ein String, der das Muster enthält, das zur Übereinstimmung des Port-Teils einer URL verwendet wird. Dieser Wert kann sich aufgrund der Normalisierung von der Eingabe des Konstruktors unterscheiden.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `(80|443|8080)` für den `port`-Teil. Dieses Muster entspricht den Ports `80`, `443` und `8080`.

```js
const pattern = new URLPattern({ port: "(80|443|8080)" });
console.log(pattern.port); // '(80|443|8080)'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
