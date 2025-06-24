---
title: "URLPattern: URLPattern() Konstruktor"
short-title: URLPattern()
slug: Web/API/URLPattern/URLPattern
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("URLPattern API")}} {{AvailableInWorkers}}

Der **`URLPattern()`** Konstruktor gibt ein neues [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt zurück, das das durch die Parameter definierte URL-Muster darstellt.

## Syntax

```js-nolint
new URLPattern(input)
new URLPattern(input, baseURL)
new URLPattern(input, options)
new URLPattern(input, baseURL, options)
```

### Parameter

- `input`

  - : Das Eingabemuster, das für die Übereinstimmung verwendet wird. Dies kann entweder ein String sein oder ein Objekt, das Muster für jeden URL-Teil einzeln bereitstellt. Die Objektmitglieder können sein:

    - `protocol`
    - `username`
    - `password`
    - `hostname`
    - `port`
    - `pathname`
    - `search`
    - `hash`
    - `baseURL`

    > [!NOTE]
    > Nicht angegebene Teile des Objekts werden als Platzhalter (`*`) behandelt.

- `baseURL` {{Optional_Inline}}
  - : Ein String, der die Basis-URL darstellt, die in Fällen verwendet wird, in denen `input` ein relatives Muster ist. Wenn nicht angegeben, ist der Standardwert `undefined`.
- `options` {{Optional_Inline}}
  - : Ein Objekt, das Optionen zum Abgleichen des gegebenen Musters bereitstellt. Die möglichen Objektmitglieder sind wie folgt:
    - `ignoreCase` {{Optional_Inline}}
      - : Ermöglicht eine nicht unterscheidende Groß-/Kleinschreibung, wenn auf `true` gesetzt. Wenn weggelassen oder auf `false` gesetzt, wird die Übereinstimmung groß-/klein-schreibungssensitiv sein.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Weist auf eines der folgenden Probleme hin:
    - Das gegebene `input` oder `baseURL` ist nicht gültig oder syntaktisch korrekt.
    - Das gegebene `input` ist relativ, aber es wurde keine `baseURL` bereitgestellt, um eine vollständige absolute URL zu erstellen.
    - Eine `baseURL` wird bereitgestellt, und `input` ist ein absolutes Muster oder ein strukturiertes Objekt.

## Beispiele

### Übereinstimmung eines Pfadnamens

```js
let pattern1 = new URLPattern("https://example.com/books/:id");

// same as
let pattern2 = new URLPattern("/books/:id", "https://example.com");

// or
let pattern3 = new URLPattern({
  protocol: "https",
  hostname: "example.com",
  pathname: "/books/:id",
});

// or
let pattern4 = new URLPattern({
  pathname: "/books/:id",
  baseURL: "https://example.com",
});
```

### Übereinstimmung des Protokolls und Hostnamens

```js
let pattern = new URLPattern({
  protocol: "http{s}?",
  hostname: ":subdomain.example.com",
});
```

### Übereinstimmung aller möglichen strukturierten Teile

```js
let pattern = new URLPattern({
  protocol: "http{s}?",
  username: ":username",
  password: ":password",
  hostname: ":subdomain.example.com",
  port: ":port(80|443)",
  pathname: "/:path",
  search: "*",
  hash: "*",
});
```

### Nicht unterscheidende Groß-/Kleinschreibung

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Wenn die `ignoreCase`-Option im Konstruktor auf `true` gesetzt wird, werden alle Übereinstimmungsoperationen für das gegebene Muster ohne Berücksichtigung der Groß-/Kleinschreibung durchgeführt:

```js
// Case-insensitive matching
const pattern = new URLPattern("https://example.com/2022/feb/*", {
  ignoreCase: true,
});
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // true
```

## Hinweise zur Verwendung

Das Eingabemuster des `URLPattern`-Konstruktors kann zwei Formen annehmen — ein Musternobjekt oder ein Musternstring und optional eine baseURL.

```js
new URLPattern(obj);
new URLPattern(pattern);
new URLPattern(pattern, baseURL);
```

Der erste Typ des Konstruktors nimmt ein Objekt, das die URLs beschreibt, die durch Angabe von Mustern für jeden einzelnen URL-Teil abgeglichen werden sollen. Seine Mitglieder können `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash` oder `baseURL` sein. Wenn die `baseURL`-Eigenschaft angegeben ist, wird sie als URL analysiert und verwendet, um alle anderen fehlenden Eigenschaften zu füllen. Fehlt die `baseURL`-Eigenschaft, erhalten alle anderen fehlenden Eigenschaften standardmäßig das Muster `*`, das jede Eingabe akzeptiert.

Der zweite Typ des Konstruktors nimmt einen URL-String, der eingebettete Muster enthält. Der URL-String kann relativ sein, wenn eine `baseURL` als zweites Argument angegeben wird. Beachten Sie, dass es notwendig sein kann, einige Zeichen im URL-String zu maskieren, wenn es unklar ist, ob das Zeichen verschiedene URL-Komponenten trennt oder Teil eines Musters ist. Zum Beispiel muss `about\\:blank` geschrieben werden, um anzuzeigen, dass das `:` das Protokollsuffix ist und nicht der Beginn eines `:blank`-benannten Gruppenmusters.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein Polyfill von `URLPattern` ist [auf GitHub](https://github.com/kenchris/urlpattern-polyfill) verfügbar.
