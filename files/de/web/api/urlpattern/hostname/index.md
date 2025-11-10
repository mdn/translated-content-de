---
title: "URLPattern: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/URLPattern/hostname
l10n:
  sourceCommit: 4535090888f24ac8394e177c27260d16a53631e6
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die **`hostname`**-Eigenschaft, die nur lesbar ist, des [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces ist ein String, der das [Muster](/de/docs/Web/API/URL_Pattern_API#pattern_syntax) enthält, das verwendet wird, um den Hostnamen-Teil einer URL zu matchen.

Dies ist der [normalisierte Wert](/de/docs/Web/API/URL_Pattern_API#pattern_normalization) des Hostnamen-Musters, das dem [Konstruktor](/de/docs/Web/API/URLPattern/URLPattern) übergeben wurde, ein [geerbter Wert von einer `baseURL`](/de/docs/Web/API/URLPattern/URLPattern#inheritance_from_a_baseurl), der dem Konstruktor übergeben wurde, oder der Standardwert (`"*"`), der jeden Hostnamen matcht.

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `*.example.org` für den `hostname`-Teil und protokolliert die Eigenschaft.
Dieses Muster matcht jeden Hostnamen, der eine direkte Subdomain von `example.org` ist.

```js
const pattern = new URLPattern("https://*.example.org");
console.log(pattern.hostname); // '*.example.org'
console.log(pattern.test("https://horses.example.org")); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
