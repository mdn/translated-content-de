---
title: "URLPattern: URLPattern() Konstruktor"
short-title: URLPattern()
slug: Web/API/URLPattern/URLPattern
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{APIRef("URLPattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Der **`URLPattern()`** Konstruktor gibt ein neues [`URLPattern`](/de/docs/Web/API/URLPattern)
Objekt zurück, das das durch die Parameter definierte URL-Muster repräsentiert.

## Syntax

```js-nolint
new URLPattern(input)
new URLPattern(input, baseURL)
new URLPattern(input, options)
new URLPattern(input, baseURL, options)
```

### Parameter

- `input`

  - : Das Eingabemuster, das für das Matching verwendet wird. Dies kann entweder eine
    Zeichenfolge sein oder ein Objekt, das Muster für jedes URL-Teil
    einzeln bereitstellt. Die Objektelemente können eines der folgenden sein:

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
  - : Eine Zeichenfolge, die die Basis-URL darstellt, die verwendet wird, wenn
    `input` ein relatives Muster ist. Wird sie nicht angegeben, wird standardmäßig `undefined` verwendet.
- `options` {{Optional_Inline}}
  - : Ein Objekt, das Optionen für das Matching des gegebenen Musters bereitstellt. Die möglichen Objektelemen sind wie folgt:
    - `ignoreCase` {{Optional_Inline}}
      - : Ermöglicht ein case-insensitives Matching, wenn auf `true` gesetzt. Wenn es weggelassen wird oder auf `false` gesetzt ist, wird das Matching case-sensitiv sein.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Weist auf eines der folgenden Probleme hin:
    - Das gegebene `input` oder `baseURL` ist nicht gültig oder syntaktisch korrekt.
    - Das gegebene `input` ist relativ, aber es wurde keine `baseURL` angegeben, um eine vollständige absolute URL zu bilden.
    - Eine `baseURL` wird bereitgestellt, und `input` ist ein absolutes Muster oder ein strukturiertes Objekt.

## Beispiele

### Pfadname abgleichen

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

### Protokoll und Hostname abgleichen

```js
let pattern = new URLPattern({
  protocol: "http{s}?",
  hostname: ":subdomain.example.com",
});
```

### Alle möglichen strukturierten Teile abgleichen

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

### Case-insensitives Matching

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Das Setzen der `ignoreCase` Option auf `true` im Konstruktor schaltet alle Matching-Operationen für das gegebene Muster auf case-insensitive um:

```js
// Case-insensitive matching
const pattern = new URLPattern("https://example.com/2022/feb/*", {
  ignoreCase: true,
});
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // true
```

## Anwendungshinweise

Das Eingabemuster des `URLPattern` Konstruktors kann zwei Formen annehmen — ein
Musterobjekt oder eine Musterzeichenfolge und optional eine baseURL.

```js
new URLPattern(obj);
new URLPattern(pattern);
new URLPattern(pattern, baseURL);
```

Der erste Konstruktortyp nimmt ein Objekt, das die
URLs beschreibt, die durch das Angeben von Mustern für jedes einzelne URL-Teil übereinstimmen sollen.
Seine Elemente können eines der `protocol`, `username`, `password`, `hostname`,
`port`, `pathname`, `search`, `hash` oder `baseURL` sein. Wenn die `baseURL`-Eigenschaft
bereitgestellt wird, wird sie als URL geparst und verwendet, um andere fehlende Eigenschaften
zu füllen. Wenn die `baseURL`-Eigenschaft fehlt, dann standardisieren sich alle fehlenden
Eigenschaften auf das Muster `*` Platzhalter, der jeden Input akzeptiert.

Der zweite Konstruktortyp nimmt eine URL-Zeichenfolge an, die
Muster darin eingebettet hat. Die URL-Zeichenfolge kann relativ sein, wenn eine `baseURL` als zweites Argument bereitgestellt wird. Beachten Sie, dass es notwendig sein kann, einige
Zeichen in der URL-Zeichenfolge zu maskieren, wenn nicht klar ist, ob das Zeichen
verschiedene URL-Komponenten trennt oder Teil eines Musters ist. Zum Beispiel müssen Sie `about\\:blank` schreiben, um anzuzeigen, dass `:` das Protokollsuffix ist und nicht der Beginn eines `:blank` benannten Gruppenmusters.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein Polyfill von `URLPattern` ist verfügbar
  [auf GitHub](https://github.com/kenchris/urlpattern-polyfill)
