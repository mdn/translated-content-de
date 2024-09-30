---
title: "URLSearchParams: has() Methode"
short-title: has()
slug: Web/API/URLSearchParams/has
l10n:
  sourceCommit: 42d23bc68c42b3eaef5a4a7990499bdf88ff680f
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`has()`**-Methode des [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob der angegebene Parameter in den Suchparametern vorhanden ist.

Ein Parametername und ein optionaler Wert werden verwendet, um Parameter abzugleichen.
Wenn nur ein Parametername angegeben ist, gibt die Methode `true` zurück, wenn irgendwelche Parameter in der Abfragezeichenfolge den Namen entsprechen, und `false` ansonsten.
Wenn sowohl ein Parametername als auch ein Wert angegeben sind, gibt die Methode `true` zurück, wenn ein Parameter sowohl den Namen als auch den Wert entspricht.

## Syntax

```js-nolint
has(name)
has(name, value)
```

### Parameter

- `name`
  - : Der Name des zu vergleichenden Parameters.
- `value`
  - : Der Wert des Parameters, zusammen mit dem angegebenen Namen, zum Abgleichen.

### Rückgabewert

Ein boolescher Wert.

## Beispiele

### Überprüfung eines Parameters mit angegebenem Namen

Dieses Beispiel zeigt, wie überprüft wird, ob die Abfragezeichenfolge Parameter mit einem bestimmten Namen hat.

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3");
const params = new URLSearchParams(url.search);

// has() returns true if the parameter is in the query string
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

### Überprüfung eines Parameters mit angegebenem Namen und Wert

Dieses Beispiel zeigt, wie überprüft wird, ob die Abfragezeichenfolge einen Parameter hat, der sowohl einem bestimmten Namen als auch einem Wert entspricht.

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3");
const params = new URLSearchParams(url.search);

// has() returns true if a parameter with the matching name and value is in the query string
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

Wenn Ihr Browser die `value`-Option nicht unterstützt, wird die Methode den Namen abgleichen, und alle Ergebnisse sollten `true` sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `URLSearchParams` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
