---
title: "URLPattern: exec() Methode"
short-title: exec()
slug: Web/API/URLPattern/exec
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die **`exec()`** Methode des [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces nimmt eine URL oder ein Objekt von URL-Teilen und gibt entweder ein Objekt zurück, das die Ergebnisse des Vergleichs der URL mit dem Muster enthält, oder `null`, wenn die URL nicht mit dem Muster übereinstimmt.

## Syntax

```js-nolint
exec(input)
exec(input, baseURL)
```

### Parameter

- `input`
  - : Die URL oder die URL-Teile, die verglichen werden sollen. Dies kann entweder ein String sein oder ein Objekt, das die individuellen URL-Teile bereitstellt. Die Objektmitglieder können `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash` oder `baseURL` sein. Nicht angegebene Teile im Objekt werden als leere Strings behandelt. Wenn die Eingabe nicht geparst werden kann oder eine relative URL ohne Basis angegeben wird, gibt die Methode `null` zurück.
- `baseURL` {{optional_inline}}
  - : Ein String, der die Basis-URL darstellt, die in Fällen verwendet wird, in denen `input` eine relative URL ist. Wenn nicht angegeben, ist der Standardwert `undefined`. Wenn dieser Parameter nicht geparst werden kann, gibt die Methode `null` zurück.

### Rückgabewert

Ein {{jsxref("object")}} mit einem `inputs` Schlüssel, der das Array der an die Funktion übergebenen Argumente enthält, sowie Schlüsseln für jeden der URL-Teile, die die übereinstimmende Eingabe und die übereinstimmenden Gruppen für diesen Teil enthalten.

## Beispiele

Dieses Beispiel zeigt, wie die `exec()` Methode verwendet wird, um eine URL mit einem Muster abzugleichen. Das Beispiel druckt das Ergebnis der `exec()` Aufrufe in die Konsole.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");

// Absolute URL strings
console.log(pattern.exec("https://example.com/books/123")); // null
let match = pattern.exec("https://store.example.com/books/123");
console.log(match.inputs); // ['https://store.example.com/books/123']
console.log(match.protocol); // { input: "https", groups: {} }
console.log(match.username); // { input: "", groups: {} }
console.log(match.password); // { input: "", groups: {} }
console.log(match.hostname); // { input: "store.example.com", groups: { "0": "store" } }
console.log(match.port); // { input: "", groups: {} }
console.log(match.pathname); // { input: "/books/123", groups: { "id": "123" } }
console.log(match.search); // { input: "", groups: {} }
console.log(match.hash); // { input: "", groups: {} }

// Relative URL strings
pattern.exec("/books/123", "http://store.example.com"); // returns object
pattern.exec("/books/123", "data:text/plain,hello world!"); // returns object
pattern.exec("/books/123"); // returns null

// Structured objects
pattern.exec({
  pathname: "/books/123",
  baseURL: "http://store.example.com",
}); // returns object
pattern.exec({
  protocol: "https",
  hostname: "store.example.com",
  pathname: "/books/123",
}); // returns object
pattern.exec({
  protocol: "file",
  hostname: "store.example.com",
  pathname: "/books/123",
}); // returns null
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein Polyfill von `URLPattern` ist verfügbar
  [auf GitHub](https://github.com/kenchris/urlpattern-polyfill)
