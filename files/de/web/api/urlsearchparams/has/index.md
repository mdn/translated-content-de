---
title: "URLSearchParams: has() Methode"
short-title: has()
slug: Web/API/URLSearchParams/has
l10n:
  sourceCommit: 42d23bc68c42b3eaef5a4a7990499bdf88ff680f
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`has()`** Methode der {{domxref("URLSearchParams")}} Schnittstelle gibt einen booleschen Wert zurück, der anzeigt, ob der angegebene Parameter in den Suchparametern enthalten ist.

Ein Parametername und ein optionaler Wert werden verwendet, um Parameter zu vergleichen. Wenn nur ein Parametername angegeben ist, gibt die Methode `true` zurück, wenn ein beliebiger Parameter im Abfragezeichenfolgen den Namen matcht, ansonsten `false`. Wenn sowohl ein Parametername als auch ein Wert angegeben sind, gibt die Methode `true` zurück, wenn ein Parameter sowohl den Namen als auch den Wert matcht.

## Syntax

```js-nolint
has(name)
has(name, value)
```

### Parameter

- `name`
  - : Der Name des Parameters, der verglichen werden soll.
- `value`
  - : Der Wert des Parameters, der zusammen mit dem angegebenen Namen verglichen werden soll.

### Rückgabewert

Ein boolescher Wert.

## Beispiele

### Überprüfung auf Parameter mit angegebenem Namen

Dieses Beispiel zeigt, wie überprüft wird, ob die Abfragezeichenfolge Parameter mit einem bestimmten Namen enthält.

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3");
const params = new URLSearchParams(url.search);

// has() gibt true zurück, wenn der Parameter in der Abfragezeichenfolge ist
console.log(`bar?:\t${params.has("bar")}`);
console.log(`bark?:\t${params.has("bark")}`);
console.log(`foo?:\t${params.has("foo")}`);
```

Das untenstehende Protokoll zeigt, ob die Parameter `bar`, `bark` und `foo` in der Abfragezeichenfolge vorhanden sind.

```plain
bar?:  true
bark?: false
foo?:  true
```

### Überprüfung auf Parameter mit angegebenem Namen und Wert

Dieses Beispiel zeigt, wie überprüft wird, ob die Abfragezeichenfolge einen Parameter enthält, der sowohl einem bestimmten Namen als auch einem Wert entspricht.

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3");
const params = new URLSearchParams(url.search);

// has() gibt true zurück, wenn ein Parameter mit passendem Namen und Wert in der Abfragezeichenfolge ist
console.log(`bar=1?:\t${params.has("bar", "1")}`);
console.log(`bar=2?:\t${params.has("bar", "2")}`);
console.log(`foo=4?:\t${params.has("foo", "4")}`);
```

Nur der zweite Wert sollte `true` sein, da nur der Parametername `bar` mit dem Wert `2` übereinstimmt.

```plain
bar=1?: false
bar=2?: true
foo=4?: false
```

Wenn Ihr Browser die `value`-Option nicht unterstützt, wird die Methode auf den Namen matchen, und alle Ergebnisse sollten `true` sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `URLSearchParams` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
