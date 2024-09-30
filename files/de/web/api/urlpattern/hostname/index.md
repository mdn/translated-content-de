---
title: "URLPattern: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/URLPattern/hostname
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die schreibgeschützte **`hostname`**-Eigenschaft des [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces ist ein String, der das Muster enthält, das zur Übereinstimmung des Hostname-Teils einer URL verwendet wird. Dieser Wert kann sich aufgrund der Normalisierung von der Eingabe in den Konstruktor unterscheiden.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `*.example.org` für den `hostname`-Teil. Dieses Muster passt zu jedem Hostname, der eine direkte Subdomain von `example.org` ist.

```js
const pattern = new URLPattern("https://*.example.org");
console.log(pattern.hostname); // '*.example.org'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
