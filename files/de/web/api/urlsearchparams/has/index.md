---
title: "URLSearchParams: has()-Methode"
short-title: has()
slug: Web/API/URLSearchParams/has
l10n:
  sourceCommit: 42d23bc68c42b3eaef5a4a7990499bdf88ff680f
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`has()`**-Methode der [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob der angegebene Parameter in den Suchparametern enthalten ist.

Ein Parametername und ein optionaler Wert werden verwendet, um Parameter abzugleichen. Wenn nur ein Parametername angegeben wird, gibt die Methode `true` zurück, wenn ein Parameter im Abfrage-String mit dem Namen übereinstimmt, andernfalls `false`. Wenn sowohl ein Parametername als auch ein Wert angegeben sind, gibt die Methode `true` zurück, wenn ein Parameter sowohl mit dem Namen als auch mit dem Wert übereinstimmt.

## Syntax

```js-nolint
has(name)
has(name, value)
```

### Parameter

- `name`
  - : Der Name des zu suchenden Parameters.
- `value`
  - : Der Wert des Parameters, zusammen mit dem angegebenen Namen, der abgeglichen werden soll.

### Rückgabewert

Ein boolescher Wert.

## Beispiele

### Überprüfen auf Parameter mit angegebenem Namen

Dieses Beispiel zeigt, wie überprüft wird, ob der Abfrage-String einen Parameter mit einem bestimmten Namen enthält.

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3");
const params = new URLSearchParams(url.search);

// has() returns true if the parameter is in the query string
console.log(`bar?:\t${params.has("bar")}`);
console.log(`bark?:\t${params.has("bark")}`);
console.log(`foo?:\t${params.has("foo")}`);
```

Das untenstehende Log zeigt, ob die Parameter `bar`, `bark` und `foo` im Abfrage-String vorhanden sind.

```plain
bar?:  true
bark?: false
foo?:  true
```

### Überprüfen auf Parameter mit angegebenem Namen und Wert

Dieses Beispiel zeigt, wie überprüft wird, ob der Abfrage-String einen Parameter enthält, der mit einem bestimmten Namen und Wert übereinstimmt.

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3");
const params = new URLSearchParams(url.search);

// has() returns true if a parameter with the matching name and value is in the query string
console.log(`bar=1?:\t${params.has("bar", "1")}`);
console.log(`bar=2?:\t${params.has("bar", "2")}`);
console.log(`foo=4?:\t${params.has("foo", "4")}`);
```

Nur der zweite Wert oben sollte `true` sein, da nur der Parametername `bar` mit dem Wert `2` übereinstimmt.

```plain
bar=1?: false
bar=2?: true
foo=4?: false
```

Wenn Ihr Browser die `value`-Option nicht unterstützt, wird die Methode nur nach dem Namen abgleichen, und alle Ergebnisse sollten `true` sein.

## Specifications

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `URLSearchParams` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
