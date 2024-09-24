---
title: "URLSearchParams: delete() Methode"
short-title: delete()
slug: Web/API/URLSearchParams/delete
l10n:
  sourceCommit: ed8ef3722c476fffa19914bef27689e7b2048b0e
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`delete()`**-Methode der {{domxref("URLSearchParams")}}-Schnittstelle löscht angegebene Parameter und ihre zugehörigen Werte aus der Liste aller Suchparameter.

Ein Parametername und ein optionaler Wert werden verwendet, um Parameter abzugleichen. Wenn nur ein Parametername angegeben ist, werden alle Suchparameter, die mit dem Namen übereinstimmen, zusammen mit ihren zugehörigen Werten gelöscht. Wenn sowohl ein Parametername als auch ein Wert angegeben sind, werden alle Suchparameter gelöscht, die sowohl mit dem Parameternamen als auch mit dem Wert übereinstimmen.

## Syntax

```js-nolint
delete(name)
delete(name, value)
```

### Parameter

- `name`
  - : Der Name der zu löschenden Parameter.
- `value` {{optional_inline}}
  - : Der Wert, mit dem Parameter zusammen mit dem angegebenen Namen übereinstimmen müssen, um gelöscht zu werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Löschen aller Parameter mit einem angegebenen Namen

Dieses Beispiel zeigt, wie alle Abfrageparameter (und Werte), die einen bestimmten Namen haben, gelöscht werden.

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3");
const params = new URLSearchParams(url.search);
console.log(`Abfragezeichenfolge (vorher):\t ${params}`);
params.delete("foo");
console.log(`Abfragezeichenfolge (nachher):\t ${params}`);
```

Die untenstehende Protokollierung zeigt, dass alle Parameter mit dem Namen `foo` gelöscht werden.

```plain
Abfragezeichenfolge (vorher):  foo=1&bar=2&foo=3
Abfragezeichenfolge (nachher):   bar=2
```

### Löschen von Parametern mit angegebenem Namen und Wert

Dieses Beispiel zeigt, wie Abfrageparameter gelöscht werden, die einem bestimmten Namen und Wert entsprechen.

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3&foo=1");
const params = new URLSearchParams(url.search);
console.log(`Abfragezeichenfolge (vorher):\t ${params}`);
params.delete("foo", "1");
console.log(`Abfragezeichenfolge (nachher):\t ${params}`);
```

Alle Parameter, die sowohl dem Parameter `name` als auch `value` entsprechen, sollten gelöscht werden (es gibt keinen Grund, zwei Parameter mit demselben Namen und Wert wie oben angegeben zu spezifizieren).

```plain
Abfragezeichenfolge (vorher):  foo=1&bar=2&foo=3&foo=1
Abfragezeichenfolge (nachher):   bar=2&foo=3
```

Wenn Ihr Browser die `value`-Option unterstützt, sollte die "nachher"-Zeichenfolge `bar=2&foo=3` sein. Andernfalls wird das Ergebnis dasselbe sein wie im vorherigen Beispiel (`bar=2`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `URLSearchParams` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
