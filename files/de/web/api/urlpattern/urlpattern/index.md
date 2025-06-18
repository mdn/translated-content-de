---
title: "URLPattern: URLPattern() Konstruktor"
short-title: URLPattern()
slug: Web/API/URLPattern/URLPattern
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("URLPattern API")}} {{AvailableInWorkers}}

Der **`URLPattern()`** Konstruktor gibt ein neues [`URLPattern`](/de/docs/Web/API/URLPattern)
Objekt zurück, das das URL-Muster darstellt, das durch die Parameter definiert wird.

## Syntax

```js-nolint
new URLPattern(input)
new URLPattern(input, baseURL)
new URLPattern(input, options)
new URLPattern(input, baseURL, options)
```

### Parameter

- `input`

  - : Das Eingabemuster, das zum Abgleichen verwendet wird. Dies kann entweder ein
    String oder ein Objekt sein, das Muster für jeden URL-Teil
    individuell bereitstellt. Die Objektmitglieder können folgende sein:

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
    > Ausgelassene Teile des Objekts werden als Platzhalter (`*`) behandelt.

- `baseURL` {{Optional_Inline}}
  - : Ein String, der die Basis-URL darstellt, die verwendet wird, wenn
    `input` ein relatives Muster ist. Falls nicht angegeben, ist der Standardwert `undefined`.
- `options` {{Optional_Inline}}
  - : Ein Objekt, das Optionen zum Abgleich des gegebenen Musters bereitstellt. Die möglichen Objektmitglieder sind wie folgt:
    - `ignoreCase` {{Optional_Inline}}
      - : Ermöglicht fallunabhängiges Matching, wenn auf `true` gesetzt. Falls weggelassen oder auf `false` gesetzt, erfolgt der Abgleich fallabhängig.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Bezeichnet einen der folgenden Punkte:
    - Das gegebene `input` oder `baseURL` ist nicht gültig oder syntaktisch korrekt.
    - Das gegebene `input` ist relativ, aber es wird kein `baseURL` bereitgestellt, um eine vollständige absolute URL zu bilden.
    - Eine `baseURL` wird bereitgestellt, und `input` ist ein absolutes Muster oder ein strukturiertes Objekt.

## Beispiele

### Abgleichen eines Pfadnamens

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

### Abgleich von Protokoll und Hostname

```js
let pattern = new URLPattern({
  protocol: "http{s}?",
  hostname: ":subdomain.example.com",
});
```

### Abgleich aller möglichen strukturierten Teile

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

### Fallunabhängiges Matching

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Das Setzen der `ignoreCase`-Option auf `true` im Konstruktor schaltet alle Abgleichsvorgänge auf fallunabhängig für das gegebene Muster:

```js
// Case-insensitive matching
const pattern = new URLPattern("https://example.com/2022/feb/*", {
  ignoreCase: true,
});
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // true
```

## Verwendungshinweise

Das Eingabemuster des `URLPattern`-Konstruktors kann zwei Formen annehmen — ein
Musterobjekt oder ein Musterstring und optional `baseURL`.

```js
new URLPattern(obj);
new URLPattern(pattern);
new URLPattern(pattern, baseURL);
```

Der erste Konstruktionstyp nimmt ein Objekt, das die
URLs beschreibt, die abgeglichen werden sollen, indem Muster für jeden einzelnen URL-Teil angegeben werden.
Seine Mitglieder können `protocol`, `username`, `password`, `hostname`,
`port`, `pathname`, `search`, `hash` oder `baseURL` sein. Wenn die `baseURL`-Eigenschaft
angegeben wird, wird sie als URL geparst und verwendet, um andere fehlende Eigenschaften
zu füllen. Wenn die `baseURL`-Eigenschaft fehlt, setzen sich alle anderen fehlenden
Eigenschaften auf den Musterplatzhalter `*` zurück, der jede Eingabe akzeptiert.

Der zweite Konstruktionstyp nimmt einen URL-String, der
eingebettete Muster enthält. Der URL-String kann relativ sein, wenn ein `baseURL`
als zweites Argument angegeben wird. Es kann erforderlich sein, einige
Zeichen im URL-String zu maskieren, wenn es unklar ist, ob das Zeichen
verschiedene URL-Komponenten trennt oder Teil eines Musters ist. Zum
Beispiel müssen Sie `about\\:blank` schreiben, um anzuzeigen, dass das `:` das Protokollsuffix ist und nicht der Beginn eines `:blank`-benannten Gruppenmusters.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein Polyfill für `URLPattern` ist verfügbar
  [auf GitHub](https://github.com/kenchris/urlpattern-polyfill)
