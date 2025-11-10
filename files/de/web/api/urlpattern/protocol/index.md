---
title: "URLPattern: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/URLPattern/protocol
l10n:
  sourceCommit: 4535090888f24ac8394e177c27260d16a53631e6
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`protocol`**-Eigenschaft des [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces ist ein String, der das [Muster](/de/docs/Web/API/URL_Pattern_API#pattern_syntax) enthält, das verwendet wird, um den Protokollteil einer URL zu matchen.

Dies ist der [normalisierte Wert](/de/docs/Web/API/URL_Pattern_API#pattern_normalization) des Protokollmusters, das an den [Konstruktor](/de/docs/Web/API/URLPattern/URLPattern) übergeben wurde, ein [geerbter Wert von einer `baseURL`](/de/docs/Web/API/URLPattern/URLPattern#inheritance_from_a_baseurl), der an den Konstruktor übergeben wurde, oder der Standardwert (`"*"`), der jedes Protokoll matcht.

## Wert

Ein String.

## Beispiele

### Grundlegende Nutzung

Das folgende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `http{s}?` für den `protocol`-Teil und protokolliert die Eigenschaft. Dieses Muster passt zu jeder URL, die das `http`- oder `https`-Protokoll hat.

```js
const pattern = new URLPattern({ protocol: "http{s}?" });
console.log(pattern.protocol); // 'http{s}?'
console.log(pattern.test("https://example.com/shoes?q=baby")); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
