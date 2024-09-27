---
title: "URLSearchParams: delete() Methode"
short-title: delete()
slug: Web/API/URLSearchParams/delete
l10n:
  sourceCommit: ed8ef3722c476fffa19914bef27689e7b2048b0e
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`delete()`** Methode des [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Interfaces löscht angegebene Parameter und deren zugehörige Werte aus der Liste aller Suchparameter.

Ein Parametername und ein optionaler Wert werden verwendet, um Parameter abzugleichen. Wenn nur ein Parametername angegeben wird, werden alle Suchparameter, die mit dem Namen übereinstimmen, zusammen mit ihren zugehörigen Werten gelöscht. Wenn sowohl ein Parametername als auch ein Wert angegeben werden, werden alle Suchparameter gelöscht, die sowohl mit dem Parameternamen als auch mit dem Wert übereinstimmen.

## Syntax

```js-nolint
delete(name)
delete(name, value)
```

### Parameter

- `name`
  - : Der Name der zu löschenden Parameter.
- `value` {{optional_inline}}
  - : Der Wert, mit dem die Parameter zusammen mit dem angegebenen Namen übereinstimmen müssen, um gelöscht zu werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Alle Parameter mit angegebenem Namen löschen

Dieses Beispiel zeigt, wie man alle Abfrageparameter (und Werte) löscht, die einen bestimmten Namen haben.

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3");
const params = new URLSearchParams(url.search);
console.log(`Query string (before):\t ${params}`);
params.delete("foo");
console.log(`Query string (after):\t ${params}`);
```

Das untenstehende Protokoll zeigt, dass alle Parameter, die den Namen `foo` haben, gelöscht werden.

```plain
Query string (before):  foo=1&bar=2&foo=3
Query string (after):   bar=2
```

### Parameter mit angegebenem Namen und Wert löschen

Dieses Beispiel zeigt, wie man Abfrageparameter löscht, die mit einem bestimmten Namen und Wert übereinstimmen.

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3&foo=1");
const params = new URLSearchParams(url.search);
console.log(`Query string (before):\t ${params}`);
params.delete("foo", "1");
console.log(`Query string (after):\t ${params}`);
```

Alle Parameter, die sowohl mit dem Parameter `name` als auch `value` übereinstimmen, sollten gelöscht werden (es gibt keinen Grund, zwei Parameter mit demselben Namen und Wert wie oben gezeigt anzugeben).

```plain
Query string (before):  foo=1&bar=2&foo=3&foo=1
Query string (after):   bar=2&foo=3
```

Wenn Ihr Browser die `value`-Option unterstützt, sollte der "after"-String `bar=2&foo=3` sein. Andernfalls wird das Ergebnis dasselbe sein wie im vorherigen Beispiel (`bar=2`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `URLSearchParams` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
