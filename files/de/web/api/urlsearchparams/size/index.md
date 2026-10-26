---
title: "URLSearchParams: size-Eigenschaft"
short-title: size
slug: Web/API/URLSearchParams/size
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`size`** der Schnittstelle [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) gibt die Gesamtzahl der Suchparametereinträge an.

## Wert

Eine Zahl, die die Gesamtzahl der Suchparametereinträge im [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt angibt.

## Beispiele

### Anzahl der Suchparametereinträge ermitteln

Sie können die Gesamtzahl der Suchparametereinträge wie folgt ermitteln:

```js
const searchParams = new URLSearchParams("c=4&a=2&b=3&a=1");
searchParams.size; // 4
```

Beachten Sie, dass der Parameter `a` zweimal vorkommt. `size` gibt jedoch die Anzahl aller Einträge (4) zurück und nicht 3. Um die Anzahl der eindeutigen Schlüssel zu ermitteln, können Sie beispielsweise ein {{jsxref("Set")}} verwenden:

```js
[...new Set(searchParams.keys())].length; // 3
```

### Prüfen, ob Suchparameter vorhanden sind

Die Eigenschaft `size` ist nützlich, um zu prüfen, ob überhaupt Suchparameter vorhanden sind:

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
- [Polyfill für `URLSearchParams` in `core-js`](https://core-js.io/docs/features/web-standards/url)
