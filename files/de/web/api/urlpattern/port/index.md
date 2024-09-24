---
title: "URLPattern: port-Eigenschaft"
short-title: port
slug: Web/API/URLPattern/port
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`port`** schreibgeschützte Eigenschaft des {{domxref("URLPattern")}} Interfaces ist ein String, der das Muster enthält, das verwendet wird, um den Port-Teil einer URL abzugleichen. Dieser Wert kann sich aufgrund der Normalisierung von der Eingabe des Konstruktors unterscheiden.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel erstellt ein {{domxref("URLPattern")}} Objekt mit `(80|443|8080)` für den `port`-Teil. Dieses Muster passt zu den Ports `80`, `443` und `8080`.

```js
const pattern = new URLPattern({ port: "(80|443|8080)" });
console.log(pattern.port); // '(80|443|8080)'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
