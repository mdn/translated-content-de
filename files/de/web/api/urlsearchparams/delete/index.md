---
title: "URLSearchParams: Methode delete()"
short-title: delete()
slug: Web/API/URLSearchParams/delete
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die Methode **`delete()`** der Schnittstelle [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) löscht bestimmte Parameter und die zugehörigen Werte aus der Liste aller Suchparameter.

Zum Abgleichen der Parameter werden ein Parametername und optional ein Wert verwendet.
Wenn nur ein Parametername angegeben wird, werden alle Suchparameter mit diesem Namen einschließlich ihrer zugehörigen Werte gelöscht.
Wenn sowohl ein Parametername als auch ein Wert angegeben werden, werden alle Suchparameter gelöscht, die sowohl mit dem Namen als auch mit dem Wert übereinstimmen.

## Syntax

```js-nolint
delete(name)
delete(name, value)
```

### Parameter

- `name`
  - : Der Name der zu löschenden Parameter.
- `value` {{optional_inline}}
  - : Der Wert, mit dem Parameter zusätzlich zum angegebenen Namen übereinstimmen müssen, damit sie gelöscht werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Alle Parameter mit einem bestimmten Namen löschen

Dieses Beispiel zeigt, wie Sie alle Abfrageparameter (und ihre Werte) mit einem bestimmten Namen löschen.

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3");
const params = new URLSearchParams(url.search);
console.log(`Query string (before):\t ${params}`);
params.delete("foo");
console.log(`Query string (after):\t ${params}`);
```

Die folgende Protokollausgabe zeigt, dass alle Parameter mit dem Namen `foo` gelöscht werden.

```plain
Query string (before):  foo=1&bar=2&foo=3
Query string (after):   bar=2
```

### Parameter mit einem bestimmten Namen und Wert löschen

Dieses Beispiel zeigt, wie Sie Abfrageparameter löschen, die mit einem bestimmten Namen und Wert übereinstimmen.

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3&foo=1");
const params = new URLSearchParams(url.search);
console.log(`Query string (before):\t ${params}`);
params.delete("foo", "1");
console.log(`Query string (after):\t ${params}`);
```

Alle Parameter, die sowohl mit `name` als auch mit `value` übereinstimmen, sollten gelöscht werden (es gibt keinen Grund, zwei Parameter mit demselben Namen und Wert wie oben gezeigt anzugeben).

```plain
Query string (before):  foo=1&bar=2&foo=3&foo=1
Query string (after):   bar=2&foo=3
```

Wenn Ihr Browser die Option `value` unterstützt, sollte der String „after“ `bar=2&foo=3` lauten.
Andernfalls ist das Ergebnis dasselbe wie im vorherigen Beispiel (`bar=2`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `URLSearchParams` in `core-js`](https://core-js.io/docs/features/web-standards/url)
