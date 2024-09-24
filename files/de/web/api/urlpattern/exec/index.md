---
title: "URLPattern: exec()-Methode"
short-title: exec()
slug: Web/API/URLPattern/exec
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`exec()`**-Methode der {{domxref("URLPattern")}}-Schnittstelle nimmt eine URL oder
ein Objekt aus URL-Teilen und gibt entweder ein Objekt zurück, das die Ergebnisse
des Abgleichs der URL mit dem Muster enthält, oder `null`, wenn die URL nicht mit dem
Muster übereinstimmt.

## Syntax

```js-nolint
exec(input)
exec(input, baseURL)
```

### Parameter

- `input`
  - : Die URL oder URL-Teile, gegen die abgeglichen werden soll. Dies kann entweder ein
    String oder ein Objekt sein, das die einzelnen URL-Teile bereitstellt.
    Die Objektmitglieder können `protocol`, `username`, `password`,
    `hostname`, `port`, `pathname`, `search`, `hash` oder `baseURL` sein. Ausgelassene
    Teile im Objekt werden als leere Zeichenfolgen behandelt. Wenn die Eingabe nicht
    analysiert werden kann oder eine relative URL ohne Basis bereitgestellt wird, gibt die Methode `null` zurück.
- `baseURL` {{optional_inline}}
  - : Ein String, der die Basis-URL darstellt, die verwendet werden soll, wenn
    `input` eine relative URL ist. Wenn nicht angegeben, ist der Standardwert `undefined`. Wenn
    dieser Parameter nicht analysiert werden kann, wird die Methode `null` zurückgeben.

### Rückgabewert

Ein {{jsxref("object")}} mit einem `inputs`-Schlüssel, der das Array der Argumente
enthält, die der Funktion übergeben wurden, sowie Schlüsseln für jeden der URL-Teile, die
die abgeglichene Eingabe und abgeglichene Gruppen für diesen Teil enthalten.

## Beispiele

Dieses Beispiel zeigt, wie die `exec()`-Methode verwendet wird, um eine URL mit einem
Muster abzugleichen. Das Beispiel gibt das Ergebnis der `exec()`-Aufrufe auf der Konsole aus.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");

// Absolute URL-Strings
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

// Relative URL-Strings
pattern.exec("/books/123", "http://store.example.com"); // gibt Objekt zurück
pattern.exec("/books/123", "data:text/plain,hello world!"); // gibt Objekt zurück
pattern.exec("/books/123"); // gibt null zurück

// Strukturierte Objekte
pattern.exec({
  pathname: "/books/123",
  baseURL: "http://store.example.com",
}); // gibt Objekt zurück
pattern.exec({
  protocol: "https",
  hostname: "store.example.com",
  pathname: "/books/123",
}); // gibt Objekt zurück
pattern.exec({
  protocol: "file",
  hostname: "store.example.com",
  pathname: "/books/123",
}); // gibt null zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein Polyfill von `URLPattern` ist verfügbar
  [auf GitHub](https://github.com/kenchris/urlpattern-polyfill)
