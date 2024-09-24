---
title: "URLPattern: pathname Eigenschaft"
short-title: pathname
slug: Web/API/URLPattern/pathname
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die schreibgeschützte **`pathname`**-Eigenschaft des {{domxref("URLPattern")}}-Interfaces ist ein String, der das Muster enthält, das verwendet wird, um den Pfadnamen-Teil einer URL zu matchen. Dieser Wert kann sich aufgrund der Normalisierung vom Eingabewert des Konstruktors unterscheiden.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel erstellt ein {{domxref("URLPattern")}}-Objekt mit `/books/:id(\\d)` für den `pathname`-Teil. Dieses Muster passt zu URLs, die mit `/books/` beginnen, gefolgt von einer ganzen Zahl.

```js
const pattern = new URLPattern({ pathname: "/books/:id(\\d)" });
console.log(pattern.pathname); // '/books/:id(\\d)'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
