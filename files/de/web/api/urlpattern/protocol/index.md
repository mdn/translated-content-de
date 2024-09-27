---
title: "URLPattern: protocol Eigenschaft"
short-title: protocol
slug: Web/API/URLPattern/protocol
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`protocol`** der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle ist ein
String, der das Muster enthält, das verwendet wird, um den Protokollteil einer URL zu matchen. Dieser Wert kann sich aufgrund der Normalisierung von der Eingabe des Konstruktors unterscheiden.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `http{s}?` für den `protocol`-Teil. Dieses Muster passt zu den Protokollen `http` und `https`.

```js
const pattern = new URLPattern({ protocol: "http{s}?" });
console.log(pattern.protocol); // 'http{s}?'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
