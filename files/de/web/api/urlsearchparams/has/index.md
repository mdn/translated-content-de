---
title: "URLSearchParams: has()-Methode"
short-title: has()
slug: Web/API/URLSearchParams/has
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`has()`**-Methode der [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob der angegebene Parameter in den Suchparametern enthalten ist.

Für den Abgleich werden ein Parametername und optional ein Wert verwendet.
Wenn nur ein Parametername angegeben wird, gibt die Methode `true` zurück, falls ein Parameter im Query-String mit dem Namen übereinstimmt, andernfalls `false`.
Wenn sowohl ein Parametername als auch ein Wert angegeben werden, gibt die Methode `true` zurück, falls ein Parameter sowohl mit dem Namen als auch mit dem Wert übereinstimmt.

## Syntax

```js-nolint
has(name)
has(name, value)
```

### Parameter

- `name`
  - : Der Name des Parameters, mit dem abgeglichen werden soll.
- `value`
  - : Der Wert, mit dem zusammen mit dem angegebenen Namen abgeglichen werden soll.

### Rückgabewert

Ein boolescher Wert.

## Beispiele

### Auf einen Parameter mit einem bestimmten Namen prüfen

Dieses Beispiel zeigt, wie Sie prüfen, ob der Query-String einen Parameter mit einem bestimmten Namen enthält.

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3");
const params = new URLSearchParams(url.search);

// has() returns true if the parameter is in the query string
console.log(`bar?:\t${params.has("bar")}`);
console.log(`bark?:\t${params.has("bark")}`);
console.log(`foo?:\t${params.has("foo")}`);
```

Die folgende Protokollausgabe zeigt, ob die Parameter `bar`, `bark` und `foo` im Query-String vorhanden sind.

```plain
bar?:  true
bark?: false
foo?:  true
```

### Auf einen Parameter mit einem bestimmten Namen und Wert prüfen

Dieses Beispiel zeigt, wie Sie prüfen, ob der Query-String einen Parameter enthält, der sowohl mit einem bestimmten Namen als auch mit einem bestimmten Wert übereinstimmt.

```js
const url = new URL("https://example.com?foo=1&bar=2&foo=3");
const params = new URLSearchParams(url.search);

// has() returns true if a parameter with the matching name and value is in the query string
console.log(`bar=1?:\t${params.has("bar", "1")}`);
console.log(`bar=2?:\t${params.has("bar", "2")}`);
console.log(`foo=4?:\t${params.has("foo", "4")}`);
```

Nur der zweite der obigen Werte sollte `true` sein, da nur der Parameter mit dem Namen `bar` und dem Wert `2` übereinstimmt.

```plain
bar=1?: false
bar=2?: true
foo=4?: false
```

Wenn Ihr Browser die Option `value` nicht unterstützt, gleicht die Methode nur den Namen ab, und alle Ergebnisse sollten `true` sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `URLSearchParams` in `core-js`](https://core-js.io/docs/features/web-standards/url)
