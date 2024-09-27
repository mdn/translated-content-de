---
title: "URLPattern: exec() Methode"
short-title: exec()
slug: Web/API/URLPattern/exec
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`exec()`**-Methode der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle nimmt eine URL oder ein Objekt mit URL-Teilen entgegen und gibt entweder ein Objekt zurück, das die Ergebnisse des Abgleichs der URL mit dem Muster enthält, oder `null`, wenn die URL nicht mit dem Muster übereinstimmt.

## Syntax

```js-nolint
exec(input)
exec(input, baseURL)
```

### Parameter

- `input`
  - : Die URL oder URL-Teile, die abgeglichen werden sollen. Dies kann entweder ein String oder ein Objekt sein, das die einzelnen URL-Teile bereitstellt. Die Objektmitglieder können beliebige der folgenden sein: `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash` oder `baseURL`. Ausgelassene Teile im Objekt werden als leere Strings behandelt. Wenn die Eingabe nicht analysiert werden kann oder eine relative URL ohne Basis angegeben wird, gibt die Methode `null` zurück.
- `baseURL` {{optional_inline}}
  - : Ein String, der die Basis-URL darstellt, die in Fällen verwendet wird, in denen `input` eine relative URL ist. Wenn nicht angegeben, ist sie standardmäßig `undefined`. Wenn dieser Parameter nicht analysiert werden kann, gibt die Methode `null` zurück.

### Rückgabewert

Ein {{jsxref("object")}} mit einem `inputs`-Schlüssel, der das Array der in die Funktion übergebenen Argumente enthält, und Schlüsseln für jeden der URL-Teile, die den abgeglichenen Input und abgeglichene Gruppen für diesen Teil enthalten.

## Beispiele

Dieses Beispiel zeigt, wie die `exec()`-Methode verwendet wird, um eine URL mit einem Muster abzugleichen. Das Beispiel gibt das Ergebnis der `exec()`-Aufrufe in der Konsole aus.

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

- Ein Polyfill für `URLPattern` ist [auf GitHub](https://github.com/kenchris/urlpattern-polyfill) verfügbar.
