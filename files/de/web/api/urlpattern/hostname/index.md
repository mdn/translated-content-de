---
title: "URLPattern: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/URLPattern/hostname
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`hostname`**-Eigenschaft der Schnittstelle [`URLPattern`](/de/docs/Web/API/URLPattern) ist schreibgeschützt und enthält eine Zeichenkette, die das Muster zur Übereinstimmung mit dem Hostnamen-Teil einer URL darstellt. Dieser Wert kann sich aufgrund der Normalisierung von der Eingabe im Konstruktor unterscheiden.

## Wert

Eine Zeichenkette.

## Beispiele

Im folgenden Beispiel wird ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `*.example.org` für den `hostname`-Teil erstellt. Dieses Muster entspricht jedem Hostnamen, der eine direkte Subdomain von `example.org` ist.

```js
const pattern = new URLPattern("https://*.example.org");
console.log(pattern.hostname); // '*.example.org'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
