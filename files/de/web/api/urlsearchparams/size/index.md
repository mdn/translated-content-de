---
title: "URLSearchParams: size-Eigenschaft"
short-title: size
slug: Web/API/URLSearchParams/size
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`size`** schreibgeschützte Eigenschaft der Schnittstelle [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) gibt die Gesamtzahl der Sucheintragparameter an.

## Wert

Eine Zahl, die die Gesamtanzahl der Sucheintragparameter im [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt angibt.

## Beispiele

### Ermitteln der Anzahl der Sucheintragparameter

Sie können die Gesamtanzahl der Sucheintragparameter folgendermaßen abrufen:

```js
const searchParams = new URLSearchParams("c=4&a=2&b=3&a=1");
searchParams.size; // 4
```

Beachten Sie, wie der `a`-Parameter zweimal angegeben wird, aber `size` gibt die Anzahl aller angegebenen Einträge (4) und nicht 3 zurück. Um die Anzahl der eindeutigen Schlüssel zu erhalten, können Sie zum Beispiel ein {{jsxref("Set")}} verwenden:

```js
[...new Set(searchParams.keys())].length; // 3
```

### Überprüfen, ob Sucheintragparameter existieren

Die `size`-Eigenschaft ist nützlich, um zu überprüfen, ob überhaupt Sucheintragparameter vorhanden sind:

```js
const url = new URL("https://example.com?foo=1&bar=2");

if (url.searchParams.size) {
  console.log("URL has search parameters!");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`URL.searchParams`](/de/docs/Web/API/URL/searchParams)
- [Polyfill von `URLSearchParams` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
