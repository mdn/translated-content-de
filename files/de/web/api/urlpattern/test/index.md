---
title: "URLPattern: test()-Methode"
short-title: test()
slug: Web/API/URLPattern/test
l10n:
  sourceCommit: 4535090888f24ac8394e177c27260d16a53631e6
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die **`test()`**-Methode der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle nimmt einen URL-String oder ein Objekt mit URL-Teilen und gibt einen Boolean zurück, der angibt, ob der gegebene Eingang dem aktuellen Muster entspricht.

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
    Wenn eine relative URL angegeben wird, muss auch [`baseURL`](#baseurl) bereitgestellt werden, und zusammen müssen sie sich zu einer absoluten URL auflösen.
    Wenn der Eingabewert nicht geparst werden kann oder eine relative URL ohne Basis-URL bereitgestellt wird, gibt die Methode `false` zurück.
- `baseURL` {{optional_inline}}
  - : Ein String, der die Basis-URL darstellt, die verwendet werden soll, wenn [`url`](#url) eine relative URL ist.
    Wenn nicht angegeben, ist der Standardwert `undefined`.
    Wenn angegeben, aber die Basis-URL nicht geparst werden kann, gibt die Methode `false` zurück.

URL-Teile, die in der `url`/`input` nicht angegeben sind, können unter bestimmten Umständen [von einer Basis-URL geerbt](#vererbung_von_einer_baseurl) werden.
Ausgelassene Teile werden als leere Strings behandelt.

### Rückgabewert

Ein {{jsxref("boolean")}}.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Gibt an, dass ein `baseURL` bereitgestellt wird, wenn ein [`input`](#input)-Objekt übergeben wird (es sollte nur mit dem `url`-String übergeben werden).

## Beschreibung

Die Methode wird auf einem [`URLPattern`](/de/docs/Web/API/URLPattern) aufgerufen und gibt eine Eingabe-URL als String mit einer optionalen Basis-URL oder als Objekt mit Eigenschaften für jeden URL-Teil an.

Die Methode gibt `true` zurück, wenn alle Komponenten der Test-URL/Eingabe mit allen Komponenten des Musters übereinstimmen, und `false`, wenn eine Komponente nicht übereinstimmt.
Die Methode gibt auch `false` zurück, wenn eine relative `url` übergeben wird, aber `baseURL` nicht angegeben ist (eine absolute Test-URL kann nicht aufgelöst werden).
Beachten Sie, dass `input.baseURL` beim Übergeben eines `input`-Objects immer optional ist.

### Vererbung von einer BaseURL

URL-Teile, die spezifischer als der unspezifischste Teil in der `url` definiert sind, können von `baseURL` (oder von `input.baseURL` für `input`) geerbt werden.
Intuitiv bedeutet dies, dass, wenn der `pathname`-Teil in der Eingabe angegeben ist, die Teile links davon in einer URL von der Basis-URL geerbt werden können (`protocol`, `hostname` und `port`), während die Teile rechts davon nicht geerbt werden können (`search` und `hash`).
Der `username` und das `password` werden nie von einer Basis-URL geerbt.

Für weitere Informationen siehe [Vererbung von einer BaseURL](/de/docs/Web/API/URL_Pattern_API#inheritance_from_a_base_url) in der API-Übersicht.

## Beispiele

Die Beispiele zeigen, wie die `test()`-Methode verwendet wird, um eine URL mit einem Muster abzugleichen.
In jedem Fall wird das Ergebnis der `test()` auf der Konsole ausgegeben.

### Testen einer absoluten URL

Zuerst definieren wir das Muster, das zum Abgleichen von URLs verwendet wird.
Dieses Muster stimmt mit URLs überein, die entweder das `http`- oder `https`-Protokoll benutzen, Subdomains von `.example.com` sind und einen Pfad haben, der `/books/` gefolgt von einem beliebigen Wert ist.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Als Nächstes wird mit zwei absoluten URL-Strings abgeglichen.
Die erste passt, aber die zweite nicht, da die Test-URL keine Subdomain von `example.com` ist.

```js
console.log(pattern.test("https://store.example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/123")); // false
```

### Testen einer relativen URL

Dieses Beispiel verwendet dasselbe Muster wie zuvor, um eine Reihe von relativen URLs zu testen.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Als Nächstes wird mit einigen relativen URLs abgeglichen.
Der Fall passt, da die aufgelöste URL `https://store.example.com/books/123` ist, während die zweite nicht passt, da die aufgelöste URL keine Subdomain von `example.com` ist.

```js
console.log(pattern.test("/books/123", "http://store.example.com")); // true
console.log(pattern.test("/books/123", "http://example.com")); // false
```

Dieser Test passt nicht, da die bereitgestellte URL relativ ist und keine `baseURL` bereitgestellt wird.
Beachten Sie, dass Sie einen Test definieren können, der nur mit einem `pathname` übereinstimmt, aber Sie müssen die Objekteingabe verwenden.

```js
console.log(pattern.test("/books/123")); // false
```

Dieser Test passt nicht, da die Basis-URL keine gültige URL ist und zusammen mit `/books/123` nicht zu einer absoluten URL aufgelöst werden kann.

```js
console.log(pattern.test("/books/123", "data:text/plain,hello world!")); // false
```

### Testen eines URL-Objekts

Dieses Beispiel verwendet dasselbe Muster wie zuvor, um eine Reihe von URLs zu testen, die als strukturierte Objekte definiert sind.

```js
const pattern = new URLPattern("http{s}?://*.example.com/books/:id");
```

Der erste Fall passt, da er genau gegen jeden Teil des Musters übereinstimmt:

```js
console.log(
  pattern.test({
    protocol: "https",
    hostname: "store.example.com",
    pathname: "/books/123",
  }),
); // true
```

In diesem Code ist der `pathname` vorhanden und die fehlenden Teile werden in der `baseURL` bereitgestellt.
Das Ergebnis ist dasselbe wie im vorherigen Code.

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

- Ein Polyfill für `URLPattern` ist verfügbar
  [auf GitHub](https://github.com/kenchris/urlpattern-polyfill)
