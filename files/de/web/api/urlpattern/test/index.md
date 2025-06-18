---
title: "URLPattern: `test()`-Methode"
short-title: test()
slug: Web/API/URLPattern/test
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die **`test()`**-Methode der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle nimmt eine URL oder ein Objekt mit URL-Teilen und gibt einen booleschen Wert zurück, der anzeigt, ob die gegebene Eingabe mit dem aktuellen Muster übereinstimmt.

## Syntax

```js-nolint
test(input)
test(input, baseURL)
```

### Parameter

- `input`
  - : Die URL oder die URL-Teile, die abgeglichen werden sollen. Dies kann entweder ein String oder ein Objekt sein, das die einzelnen URL-Teile bereitstellt. Die Objektmitglieder können `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash` oder `baseURL` sein. Ausgelassene Teile im Objekt werden als leere Zeichenfolgen behandelt. Wenn die Eingabe nicht geparst werden kann oder eine relative URL ohne Basis angegeben wird, gibt die Methode `null` zurück.
- `baseURL` {{optional_inline}}
  - : Ein String, der die Basis-URL darstellt, die in Fällen verwendet werden soll, in denen `input` eine relative URL ist. Wenn nicht angegeben, wird `undefined` als Standard verwendet. Wenn dieser Parameter nicht geparst werden kann, gibt die Methode `false` zurück.

### Rückgabewert

Ein {{jsxref("boolean")}}.

## Beispiele

Dieses Beispiel zeigt, wie die `test()`-Methode verwendet wird, um eine URL mit einem Muster abzugleichen. Das Beispiel druckt das Ergebnis der `test()`-Aufrufe in die Konsole.

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

- Ein Polyfill von `URLPattern` ist verfügbar
  [auf GitHub](https://github.com/kenchris/urlpattern-polyfill)
