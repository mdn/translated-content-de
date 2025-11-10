---
title: "URLPattern: port-Eigenschaft"
short-title: port
slug: Web/API/URLPattern/port
l10n:
  sourceCommit: 4535090888f24ac8394e177c27260d16a53631e6
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`port`**-Eigenschaft des [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces ist ein String, der das [Muster](/de/docs/Web/API/URL_Pattern_API#pattern_syntax) enthält, das verwendet wird, um den Port-Teil einer URL zu matchen.

Dies ist der [normalisierte Wert](/de/docs/Web/API/URL_Pattern_API#pattern_normalization) des Port-Musters, das dem [Konstruktor](/de/docs/Web/API/URLPattern/URLPattern) übergeben wurde, oder ein [geerbter Wert von einer `baseURL`](/de/docs/Web/API/URLPattern/URLPattern#inheritance_from_a_baseurl), die dem Konstruktor übergeben wurde, oder der Standardwert (`"*"`), der jeden Port matched.

Beachten Sie, dass er auch implizit auf den leeren String (`""`) gesetzt werden kann, wenn das Muster unter Verwendung eines [`url` oder `baseURL`-Strings angegeben wird und der Port nicht explizit gesetzt ist](/de/docs/Web/API/URLPattern/URLPattern#hostname_in_url_or_baseurl_affects_default_port). Dieser leere String matched gegen URLs, die den Standardport (`443`) verwenden.

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `(80|443|8080)` für den `port`-Teil und protokolliert die Eigenschaft.
Dieses Muster matched jede URL, die den Port `80`, `443` oder `8080` hat.

```js
const pattern = new URLPattern({ port: "(80|443|8080)" });
console.log(pattern.port); // "(80|443|8080)"
console.log(pattern.test("http://example.com:8080/")); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
