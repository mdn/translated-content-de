---
title: "URLPattern: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/URLPattern/hostname
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`hostname`**-Eigenschaft der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle ist ein
String, der das Muster enthält, das verwendet wird, um den Hostnamen-Teil
einer URL abzugleichen. Dieser Wert kann sich aufgrund von Normalisierung
vom Eingangswert des Konstruktors unterscheiden.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit
`*.example.org` für den `hostname`-Teil. Dieses Muster entspricht jedem Hostnamen, der
ein direktes Subdomain von `example.org` ist.

```js
const pattern = new URLPattern("https://*.example.org");
console.log(pattern.hostname); // '*.example.org'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
