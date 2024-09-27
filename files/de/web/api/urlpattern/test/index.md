---
title: "URLPattern: Methode test()"
short-title: test()
slug: Web/API/URLPattern/test
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`test()`**-Methode der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle akzeptiert eine URL oder ein Objekt mit URL-Teilen und gibt einen booleschen Wert zurück, der angibt, ob die gegebene Eingabe mit dem aktuellen Muster übereinstimmt.

## Syntax

```js-nolint
test(input)
test(input, baseURL)
```

### Parameter

- `input`
  - : Die URL oder die URL-Teile, die abgeglichen werden sollen. Dies kann entweder ein String oder ein Objekt sein, das die einzelnen URL-Teile bereitstellt. Die Objektmitglieder können `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash` oder `baseURL` sein. Ausgelassene Teile im Objekt werden als leere Zeichenfolgen behandelt. Wenn die Eingabe nicht analysiert werden kann oder eine relative URL ohne Basis angegeben wird, gibt die Methode `null` zurück.
- `baseURL` {{optional_inline}}
  - : Ein String, der die Basis-URL darstellt, die verwendet wird, wenn `input` eine relative URL ist. Wenn nicht angegeben, ist der Standardwert `undefined`. Wenn dieser Parameter nicht analysiert werden kann, wird die Methode `false` zurückgeben.

### Rückgabewert

Ein {{jsxref("boolean")}}.

## Beispiele

Dieses Beispiel zeigt, wie die `test()`-Methode verwendet wird, um eine URL mit einem Muster abzugleichen. Das Beispiel gibt das Ergebnis der `test()`-Aufrufe in der Konsole aus.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");

// Absolute URL strings
console.log(pattern.test("https://store.example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/123")); // false

// Relative URL strings
console.log(pattern.test("/books/123", "http://store.example.com")); // true
console.log(pattern.test("/books/123", "data:text/plain,hello world!")); // false
console.log(pattern.test("/books/123")); // false

// Structured objects
console.log(
  pattern.test({
    pathname: "/books/123",
    baseURL: "http://store.example.com",
  }),
); // true
console.log(
  pattern.test({
    protocol: "https",
    hostname: "store.example.com",
    pathname: "/books/123",
  }),
); // true
console.log(
  pattern.test({
    protocol: "file",
    hostname: "store.example.com",
    pathname: "/books/123",
  }),
); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein Polyfill von `URLPattern` ist [auf GitHub](https://github.com/kenchris/urlpattern-polyfill) verfügbar.
