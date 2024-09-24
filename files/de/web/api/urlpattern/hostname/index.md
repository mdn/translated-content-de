---
title: "URLPattern: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/URLPattern/hostname
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`hostname`** schreibgeschützte Eigenschaft der {{domxref("URLPattern")}}-Schnittstelle ist ein String, der das Muster enthält, das verwendet wird, um den Hostnamen-Teil einer URL zu matchen. Dieser Wert kann aufgrund von Normalisierung vom Input des Konstruktors abweichen.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel erstellt ein {{domxref("URLPattern")}}-Objekt mit `*.example.org` für den `hostname`-Teil. Dieses Muster passt auf jeden Hostnamen, der eine direkte Subdomain von `example.org` ist.

```js
const pattern = new URLPattern("https://*.example.org");
console.log(pattern.hostname); // '*.example.org'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
