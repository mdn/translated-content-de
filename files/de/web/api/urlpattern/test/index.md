---
title: "URLPattern: test() Methode"
short-title: test()
slug: Web/API/URLPattern/test
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die **`test()`** Methode des [`URLPattern`](/de/docs/Web/API/URLPattern) Interfaces nimmt eine URL-Zeichenkette oder ein Objekt von URL-Teilen und gibt einen booleschen Wert zurück, der angibt, ob der gegebene Input dem aktuellen Muster entspricht.

## Syntax

```js-nolint
test(input)
test(url)
test(url, baseURL)
```

### Parameter

- `input`
  - : Ein Objekt, das die einzelnen URL-Teile bereitstellt.
    Die Objektmitglieder können beliebige der `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash` oder `baseURL` sein.
- `url`
  - : Eine Zeichenkette, die eine absolute oder relative URL definiert.
    Bei einer relativen URL muss auch [`baseURL`](#baseurl) angegeben werden, und zusammen müssen sie zu einer absoluten URL aufgelöst werden.
    Wenn der Input nicht geparst werden kann oder eine relative URL ohne eine Basis-URL angegeben wird, gibt die Methode `false` zurück.
- `baseURL` {{optional_inline}}
  - : Eine Zeichenkette, die die Basis-URL repräsentiert, die verwendet wird, wenn [`url`](#url) eine relative URL ist.
    Wenn nicht angegeben, ist der Standardwert `undefined`.
    Wenn angegeben, die Basis-URL jedoch nicht geparst werden kann, gibt die Methode `false` zurück.

URL-Teile, die in der `url`/`input` nicht spezifiziert sind, können unter bestimmten Umständen [von einer Basis-URL geerbt werden](#vererbung_von_einer_baseurl).
Ausgelassene Teile werden als leere Zeichenfolgen behandelt.

### Rückgabewert

Ein {{jsxref("boolean")}}.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Zeigt an, dass ein `baseURL` angegeben wird, wenn ein [`input`](#input) Objekt übergeben wird (es sollte nur mit der `url` Zeichenkette übergeben werden).

## Beschreibung

Die Methode wird auf einem [`URLPattern`](/de/docs/Web/API/URLPattern) aufgerufen, wobei eine Eingabe-URL als Zeichenkette mit einer optionalen Basis-URL oder als Objekt mit Eigenschaften für jeden URL-Teil angegeben wird.

Die Methode gibt `true` zurück, wenn alle Komponenten der Test-URL/des Inputs mit allen Komponenten des Musters übereinstimmen, und `false`, wenn irgendeine Komponente nicht übereinstimmt.
Die Methode gibt auch `false` zurück, wenn eine relative `url` übergeben wird, aber `baseURL` nicht angegeben ist (eine absolute Test-URL kann nicht aufgelöst werden).
Beachten Sie, dass bei Verwendung eines `input` Objekts `input.baseURL` immer optional ist.

### Vererbung von einer BaseURL

URL-Teile, die spezifischer sind als der am wenigsten spezifische Teil, der in der `url` definiert ist, können von `baseURL` (oder von `input.baseURL` für `input`) geerbt werden.
Intuitiv bedeutet dies, dass, wenn der `pathname` Teil im Input angegeben ist, die Teile links davon in einer URL von der Basis-URL geerbt werden können (`protocol`, `hostname` und `port`), während die Teile rechts davon dies nicht können (`search` und `hash`).
Der `username` und das `password` werden nie von einer Basis-URL geerbt.

Für weitere Informationen siehe [Vererbung von einer BaseURL](/de/docs/Web/API/URL_Pattern_API#inheritance_from_a_base_url) in der API-Übersicht.

## Beispiele

Die Beispiele zeigen, wie die `test()` Methode verwendet wird, um eine URL mit einem Muster abzugleichen.
In jedem Fall wird das Ergebnis des `test()` im Konsolenfenster ausgegeben.

### Testen einer absoluten URL

Zuerst definieren wir das Muster, das für den Abgleich von URLs verwendet wird.
Dieses Muster stimmt mit URLs überein, die entweder das Protokoll `http` oder `https` haben, Unterdomänen von `.example.com` sind und einen Pfad haben, der `/books/` gefolgt von einem beliebigen Wert ist.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Anschließend vergleichen wir zwei absolute URL-Zeichenketten.
Die erste passt, die zweite nicht, weil die Test-URL keine Unterdomäne von `example.com` ist.

```js
console.log(pattern.test("https://store.example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/123")); // false
```

### Testen einer relativen URL

Dieses Beispiel verwendet das gleiche Muster wie zuvor, um es gegen eine Reihe von relativen URLs zu testen.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Anschließend vergleichen wir einige relative URLs.
Der Fall passt, da die aufgelöste URL `https://store.example.com/books/123` ist, während der zweite nicht passt, da die aufgelöste URL keine Unterdomäne von `example.com` ist.

```js
console.log(pattern.test("/books/123", "http://store.example.com")); // true
console.log(pattern.test("/books/123", "http://example.com")); // false
```

Dieser Test passt nicht, weil die bereitgestellte URL relativ ist und keine Basis-URL bereitgestellt wird.
Beachten Sie, dass Sie einen Test definieren können, der nur mit einem Pfadnamen übereinstimmt, aber Sie müssen das Objekt-Input verwenden.

```js
console.log(pattern.test("/books/123")); // false
```

Dieser Test passt nicht, weil die Basis-URL keine gültige URL ist und zusammen mit `/books/123` nicht zu einer absoluten URL aufgelöst wird.

```js
console.log(pattern.test("/books/123", "data:text/plain,hello world!")); // false
```

### Testen eines URL-Objekts

Dieses Beispiel verwendet das gleiche Muster wie zuvor, um es gegen eine Reihe von URLs zu testen, die als strukturierte Objekte definiert sind.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Der erste Fall passt, weil er genau gegen jeden Teil des Musters übereinstimmt:

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
Das Ergebnis ist dasselbe wie im vorherigen Code.

```js
console.log(
  pattern.test({
    pathname: "/books/123",
    baseURL: "http://store.example.com",
  }),
); // true
```

Diese strukturierte URL entspricht nicht dem Muster, da das Protokoll `file` ist (nicht `https` oder `http`).

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
