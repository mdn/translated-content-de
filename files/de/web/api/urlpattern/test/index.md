---
title: "URLPattern: Methode test()"
short-title: test()
slug: Web/API/URLPattern/test
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`test()`**-Methode der {{domxref("URLPattern")}}-Schnittstelle nimmt eine URL oder ein Objekt von URL-Teilen und gibt einen booleschen Wert zurück, der angibt, ob die gegebene Eingabe mit dem aktuellen Muster übereinstimmt.

## Syntax

```js-nolint
test(input)
test(input, baseURL)
```

### Parameter

- `input`
  - : Die URL oder die URL-Teile, gegen die verglichen werden soll. Dies kann entweder ein String sein oder ein Objekt, das die einzelnen URL-Teile bereitstellt. Die Objektmitglieder können `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash` oder `baseURL` sein. Ausgelassene Teile im Objekt werden als leere Strings behandelt. Wenn die Eingabe nicht analysiert werden kann oder eine relative URL ohne Basis angegeben wird, gibt die Methode `null` zurück.
- `baseURL` {{optional_inline}}
  - : Ein String, der die Basis-URL darstellt, die in Fällen verwendet wird, in denen `input` eine relative URL ist. Wenn nicht angegeben, ist der Standardwert `undefined`. Wenn dieser Parameter nicht analysiert werden kann, gibt die Methode `false` zurück.

### Rückgabewert

Ein {{jsxref("boolean")}}.

## Beispiele

Dieses Beispiel zeigt, wie Sie die Methode `test()` verwenden können, um eine URL mit einem Muster abzugleichen. Das Beispiel gibt das Ergebnis der `test()`-Aufrufe in die Konsole aus.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");

// Absolute URL-Strings
console.log(pattern.test("https://store.example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/123")); // false

// Relative URL-Strings
console.log(pattern.test("/books/123", "http://store.example.com")); // true
console.log(pattern.test("/books/123", "data:text/plain,hello world!")); // false
console.log(pattern.test("/books/123")); // false

// Strukturierte Objekte
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
