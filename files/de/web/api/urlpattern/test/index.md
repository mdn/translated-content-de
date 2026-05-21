---
title: "URLPattern: test() Methode"
short-title: test()
slug: Web/API/URLPattern/test
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die **`test()`**-Methode des [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces nimmt einen URL-String oder ein Objekt von URL-Teilen und gibt einen booleschen Wert zurück, der anzeigt, ob der gegebene Input dem aktuellen Muster entspricht.

## Syntax

```js-nolint
test(input)
test(url)
test(url, baseURL)
```

### Parameter

- `input`
  - : Ein Objekt, das die einzelnen URL-Teile bereitstellt.
    Die Objektmitglieder können `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash` oder `baseURL` sein.
- `url`
  - : Ein String, der eine absolute oder relative URL definiert.
    Bei einer relativen URL muss auch [`baseURL`](#baseurl) angegeben werden, und zusammen müssen sie sich zu einer absoluten URL auflösen.
    Wenn der Input nicht geparst werden kann oder eine relative URL ohne Basis-URL angegeben wird, gibt die Methode `false` zurück.
- `baseURL` {{optional_inline}}
  - : Ein String, der die Basis-URL repräsentiert, die verwendet wird, wenn [`url`](#url) eine relative URL ist.
    Wenn nicht angegeben, ist der Standardwert `undefined`.
    Wenn angegeben, aber die Basis-URL nicht geparst werden kann, gibt die Methode `false` zurück.

URL-Teile, die nicht in der `url`/`input` angegeben sind, können [von einer Basis-URL geerbt werden](#vererbung_von_einer_basis-url) unter bestimmten Umständen.
Ausgelassene Teile werden als leere Strings behandelt.

### Rückgabewert

Ein {{jsxref("Boolean")}}.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Gibt an, dass eine `baseURL` angegeben wird, wenn ein [`input`](#input) Objekt übergeben wird (sie sollte nur mit dem `url`-String übergeben werden).

## Beschreibung

Die Methode wird auf einem [`URLPattern`](/de/docs/Web/API/URLPattern) aufgerufen, indem eine Input-URL als String mit einer optionalen Basis-URL oder als Objekt mit Eigenschaften für jeden URL-Teil angegeben wird.

Die Methode gibt `true` zurück, wenn alle Komponenten der Test-URL/des Inputs mit allen Komponenten des Musters übereinstimmen, und `false`, wenn eine Komponente nicht übereinstimmt.
Die Methode gibt auch `false` zurück, wenn eine relative `url` übergeben wird, aber `baseURL` nicht angegeben ist (eine absolute Test-URL kann nicht aufgelöst werden).
Beachten Sie, dass `input.baseURL` immer optional ist, wenn ein `input`-Objekt übergeben wird.

### Vererbung von einer Basis-URL

URL-Teile, die spezifischer sind als der am wenigsten spezifische Teil, der in der `url` definiert ist, können von `baseURL` (oder von `input.baseURL` für `input`) geerbt werden.
Intuitiv bedeutet dies, dass, wenn der `pathname`-Teil im Input angegeben ist, die Teile links davon in einer URL von der Basis-URL geerbt werden können (`protocol`, `hostname` und `port`), während die Teile rechts davon nicht (`search` und `hash`).
Der `username` und das `password` werden niemals von einer Basis-URL geerbt.

Für weitere Informationen siehe [Vererbung von einer Basis-URL](/de/docs/Web/API/URL_Pattern_API#inheritance_from_a_base_url) im API-Überblick.

## Beispiele

Die Beispiele zeigen, wie Sie die `test()`-Methode verwenden, um eine URL gegen ein Muster zu testen.
In jedem Fall wird das Ergebnis der `test()`-Methode in der Konsole ausgegeben.

### Testen einer absoluten URL

Zuerst definieren wir das Muster, das für das Matching der URLs verwendet wird.
Dieses Muster stimmt mit URLs überein, die entweder `http` oder `https` als Protokoll haben, Subdomains von `.example.com` sind und einen Pfad haben, der `/books/` gefolgt von einem beliebigen Wert enthält.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Als Nächstes vergleichen wir zwei absolute URL-Strings.
Der erste stimmt überein, aber der zweite nicht, weil die Test-URL keine Subdomain von `example.com` ist.

```js
console.log(pattern.test("https://store.example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/123")); // false
```

### Testen einer relativen URL

Dieses Beispiel verwendet dasselbe Muster wie zuvor, um eine Reihe von relativen URLs zu testen.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Als Nächstes vergleichen wir einige relative URLs.
Der Fall stimmt überein, da die aufgelöste URL `https://store.example.com/books/123` ist, während der zweite nicht übereinstimmt, da die aufgelöste URL keine Subdomain von `example.com` ist.

```js
console.log(pattern.test("/books/123", "http://store.example.com")); // true
console.log(pattern.test("/books/123", "http://example.com")); // false
```

Dieser Test stimmt nicht überein, weil die angegebene URL relativ ist und keine `baseURL` bereitgestellt wird.
Beachten Sie, dass Sie einen Test definieren können, der nur gegen einen Pfadnamen testet, aber Sie müssen das Objektinput verwenden.

```js
console.log(pattern.test("/books/123")); // false
```

Dieser Test stimmt nicht überein, weil die Basis-URL keine gültige URL ist und zusammen mit dem `/books/123` nicht zu einer absoluten URL aufgelöst werden kann.

```js
console.log(pattern.test("/books/123", "data:text/plain,hello world!")); // false
```

### Testen eines URL-Objekts

Dieses Beispiel verwendet dasselbe Muster wie zuvor, um eine Reihe von URLs zu testen, die als strukturierte Objekte definiert sind.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Der erste Fall stimmt überein, da er übereinstimmend genau gegen jeden Teil des Musters definiert ist:

```js
console.log(
  pattern.test({
    protocol: "https",
    hostname: "store.example.com",
    pathname: "/books/123",
  }),
); // true
```

In diesem Code ist der Pfadname vorhanden und die fehlenden Teile werden in der `baseURL` bereitgestellt.
Das Ergebnis ist das gleiche wie beim vorherigen Code.

```js
console.log(
  pattern.test({
    pathname: "/books/123",
    baseURL: "http://store.example.com",
  }),
); // true
```

Diese strukturierte URL stimmt nicht mit dem Muster überein, da das Protokoll `file` ist (nicht `https` oder `http`).

```js
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
