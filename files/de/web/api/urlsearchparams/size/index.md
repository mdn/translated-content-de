---
title: "URLSearchParams: size Eigenschaft"
short-title: size
slug: Web/API/URLSearchParams/size
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`size`** des {{domxref("URLSearchParams")}}-Interfaces gibt die Gesamtzahl der Suchparameter-Einträge an.

## Wert

Eine Zahl, die die Gesamtzahl der Suchparameter-Einträge im {{domxref("URLSearchParams")}}-Objekt angibt.

## Beispiele

### Abrufen der Anzahl der Suchparameter-Einträge

Sie können die Gesamtzahl der Suchparameter-Einträge wie folgt abrufen:

```js
const searchParams = new URLSearchParams("c=4&a=2&b=3&a=1");
searchParams.size; // 4
```

Beachten Sie, dass der `a`-Parameter zweimal angegeben wird, aber `size` die Anzahl aller angegebenen Einträge (4) und nicht 3 zurückgibt. Um die Anzahl der eindeutigen Schlüssel zu erhalten, können Sie beispielsweise ein {{jsxref("Set")}} verwenden:

```js
[...new Set(searchParams.keys())].length; // 3
```

### Überprüfen, ob Suchparameter existieren

Die `size`-Eigenschaft ist nützlich, um zu überprüfen, ob überhaupt Suchparameter vorhanden sind:

```js
const url = new URL("https://example.com?foo=1&bar=2");

if (url.searchParams.size) {
  console.log("URL hat Suchparameter!");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("URL.searchParams")}}
- [Polyfill von `URLSearchParams` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
