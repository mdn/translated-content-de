---
title: "URLSearchParams: delete() Methode"
short-title: delete()
slug: Web/API/URLSearchParams/delete
l10n:
  sourceCommit: ed8ef3722c476fffa19914bef27689e7b2048b0e
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`delete()`** Methode des [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Interfaces löscht angegebene Parameter und deren zugehörige(r) Wert(e) aus der Liste aller Suchparameter.

Ein Parametername und optional ein Wert werden verwendet, um Parameter abzugleichen. Wenn nur ein Parametername angegeben wird, werden alle Suchparameter, die dem Namen entsprechen, zusammen mit deren zugehörigen Werten gelöscht. Wenn sowohl ein Parametername als auch ein Wert angegeben werden, werden alle Suchparameter gelöscht, die sowohl dem Parameternamen als auch dem Wert entsprechen.

## Syntax

```js-nolint
delete(name)
delete(name, value)
```

### Parameter

- `name`
  - : Der Name der zu löschenden Parameter.
- `value` {{optional_inline}}
  - : Der Wert, den die Parameter zusammen mit dem angegebenen Namen erfüllen müssen, um gelöscht zu werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Löschen aller Parameter mit angegebenem Namen

Dieses Beispiel zeigt, wie alle Abfrageparameter (und Werte) gelöscht werden, die einen bestimmten Namen haben.

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3");
const params = new URLSearchParams(url.search);
console.log(`Query string (before):\t ${params}`);
params.delete("foo");
console.log(`Query string (after):\t ${params}`);
```

Das unten stehende Protokoll zeigt, dass alle Parameter mit dem Namen `foo` gelöscht werden.

```plain
Query string (before):  foo=1&bar=2&foo=3
Query string (after):   bar=2
```

### Löschen von Parametern mit angegebenem Namen und Wert

Dieses Beispiel zeigt, wie Abfrageparameter gelöscht werden, die einem bestimmten Namen und Wert entsprechen.

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3&foo=1");
const params = new URLSearchParams(url.search);
console.log(`Query string (before):\t ${params}`);
params.delete("foo", "1");
console.log(`Query string (after):\t ${params}`);
```

Alle Parameter, die sowohl dem Parameter `name` als auch `value` entsprechen, sollten gelöscht werden (es gibt keinen Grund, zwei Parameter mit demselben Namen und Wert anzugeben, wie oben gezeigt).

```plain
Query string (before):  foo=1&bar=2&foo=3&foo=1
Query string (after):   bar=2&foo=3
```

Wenn Ihr Browser die `value`-Option unterstützt, sollte die "nachher"-Zeichenfolge `bar=2&foo=3` sein. Andernfalls wird das Ergebnis das gleiche sein wie im vorherigen Beispiel (`bar=2`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `URLSearchParams` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
