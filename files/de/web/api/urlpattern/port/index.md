---
title: "URLPattern: port-Eigenschaft"
short-title: port
slug: Web/API/URLPattern/port
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`port`** des [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces ist ein String, der das Muster enthält, das verwendet wird, um den Port-Teil einer URL zu matchen. Dieser Wert kann sich aufgrund der Normalisierung von der Eingabe im Konstruktor unterscheiden.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `(80|443|8080)` für den `port`-Teil. Dieses Muster matcht die Ports `80`, `443` und `8080`.

```js
const pattern = new URLPattern({ port: "(80|443|8080)" });
console.log(pattern.port); // '(80|443|8080)'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
