---
title: "URLPattern: URLPattern()-Konstruktor"
short-title: URLPattern()
slug: Web/API/URLPattern/URLPattern
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{APIRef("URLPattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Der **`URLPattern()`**-Konstruktor gibt ein neues {{domxref("URLPattern")}}-Objekt zurück, das das durch die Parameter definierte URL-Muster repräsentiert.

## Syntax

```js-nolint
new URLPattern(input)
new URLPattern(input, baseURL)
new URLPattern(input, options)
new URLPattern(input, baseURL, options)
```

### Parameter

- `input`

  - : Das Eingabemuster, das für das Matching verwendet wird. Dies kann entweder ein String oder ein Objekt sein, das Muster für jeden URL-Teil individuell bereitstellt. Die Objektmitglieder können sein:

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
  - : Ein String, der die Basis-URL darstellt, die verwendet werden soll, wenn `input` ein relatives Muster ist. Wenn nicht angegeben, ist der Standardwert `undefined`.
- `options` {{Optional_Inline}}
  - : Ein Objekt, das Optionen zum Abgleichen des angegebenen Musters bereitstellt. Die möglichen Objektmitglieder sind wie folgt:
    - `ignoreCase` {{Optional_Inline}}
      - : Ermöglicht case-unsensitives Matching, wenn auf `true` gesetzt. Wenn ausgelassen oder auf `false` gesetzt, wird das Matching case-sensitiv sein.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Zeigt eines der folgenden Probleme an:
    - Das angegebene `input` oder `baseURL` ist nicht gültig oder syntaktisch korrekt.
    - Das angegebene `input` ist relativ, aber es wird keine `baseURL` bereitgestellt, um eine vollständige absolute URL zu bilden.
    - Eine `baseURL` wird bereitgestellt und das `input` ist ein absolutes Muster oder ein strukturiertes Objekt.

## Beispiele

### Abgleich eines `pathname`

```js
let pattern1 = new URLPattern("https://example.com/books/:id");

// gleich wie
let pattern2 = new URLPattern("/books/:id", "https://example.com");

// oder
let pattern3 = new URLPattern({
  protocol: "https",
  hostname: "example.com",
  pathname: "/books/:id",
});

// oder
let pattern4 = new URLPattern({
  pathname: "/books/:id",
  baseURL: "https://example.com",
});
```

### Abgleich von `protocol` und `hostname`

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

### Case-insensitives Matching

```js
// Standardmäßig case-sensitives Matching
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Das Setzen der `ignoreCase`-Option auf `true` im Konstruktor schaltet alle Abgleichoperationen auf case-insensitiv für das angegebene Muster um:

```js
// Case-insensitives Matching
const pattern = new URLPattern("https://example.com/2022/feb/*", {
  ignoreCase: true,
});
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // true
```

## Nutzungshinweise

Das Eingabemuster des `URLPattern`-Konstruktors kann zwei Formen annehmen — ein Mustero bjekt oder ein Musterstring und optionale baseURL.

```js
new URLPattern(obj);
new URLPattern(pattern);
new URLPattern(pattern, baseURL);
```

Der erste Konstruktionstyp nimmt ein Objekt an, das die URLs beschreibt, die durch das Angeben von Mustern für jeden individuellen URL-Teil abgeglichen werden sollen. Seine Mitglieder können `protocol`, `username`, `password`, `hostname`, `port`, `pathname`, `search`, `hash` oder `baseURL` sein. Wenn die `baseURL`-Eigenschaft angegeben ist, wird sie als URL analysiert und verwendet, um alle anderen fehlenden Eigenschaften zu füllen. Wenn die `baseURL`-Eigenschaft fehlt, setzen alle anderen fehlenden Eigenschaften das Muster des `*`-Platzhalters als Standard, der jegliche Eingabe akzeptiert.

Der zweite Konstruktionstyp nimmt einen URL-String, der eingebettete Muster enthält. Der URL-String kann relativ sein, wenn eine `baseURL` als zweites Argument angegeben ist. Beachten Sie, dass es notwendig sein kann, einige Zeichen im URL-String zu maskieren, wenn es unklar ist, ob das Zeichen verschiedene URL-Komponenten trennt oder Teil eines Musters ist. Zum Beispiel müssen Sie `about\\:blank` schreiben, um anzuzeigen, dass das `:` das Protokollsuffix ist und nicht der Anfang eines Musters mit dem Namen `:blank`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein Polyfill von `URLPattern` ist verfügbar [auf GitHub](https://github.com/kenchris/urlpattern-polyfill)
