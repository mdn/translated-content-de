---
title: "URLPattern: URLPattern()-Konstruktor"
short-title: URLPattern()
slug: Web/API/URLPattern/URLPattern
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{APIRef("URLPattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Der **`URLPattern()`**-Konstruktor gibt ein neues [`URLPattern`](/de/docs/Web/API/URLPattern)
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

  - : Das Eingabemuster, das zur Übereinstimmung verwendet wird. Dies kann entweder eine
    Zeichenkette oder ein Objekt sein, das Muster für jeden URL-Teil
    einzeln bereitstellt. Die Objektmitglieder können Folgendes sein:

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
  - : Eine Zeichenkette, die die Basis-URL darstellt, die verwendet wird, wenn
    `input` ein relatives Muster ist. Falls nicht angegeben, wird es als `undefined` behandelt.
- `options` {{Optional_Inline}}
  - : Ein Objekt, das Optionen für die Übereinstimmung mit dem angegebenen Muster bereitstellt. Mögliche Objektmitglieder sind:
    - `ignoreCase` {{Optional_Inline}}
      - : Ermöglicht die Groß-/Kleinschreibung-ignorierende Übereinstimmung, wenn auf `true` gesetzt. Wenn weggelassen oder auf `false` gesetzt, ist die Übereinstimmung groß-/kleinschreibungssensitiv.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Gibt eines der folgenden Probleme an:
    - Das gegebene `input` oder `baseURL` ist nicht gültig oder syntaktisch korrekt.
    - Das gegebene `input` ist relativ, aber es wird kein `baseURL` bereitgestellt, um eine vollständige absolute URL zu bilden.
    - Ein `baseURL` wird bereitgestellt und `input` ist ein absolutes Muster oder ein strukturiertes Objekt.

## Beispiele

### Übereinstimmen eines Pfadnamens

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

### Protokoll und Hostname übereinstimmen

```js
let pattern = new URLPattern({
  protocol: "http{s}?",
  hostname: ":subdomain.example.com",
});
```

### Alle möglichen strukturierten Teile übereinstimmen

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

### Groß-/Kleinschreibungsunabhängige Übereinstimmung

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Das Setzen der `ignoreCase`-Option auf `true` im Konstruktor schaltet alle Übereinstimmungsoperationen auf groß-/kleinschreibungsunabhängig für das gegebene Muster um:

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
Musterobjekt oder ein Musterzeichenkette und optionales `baseURL`.

```js
new URLPattern(obj);
new URLPattern(pattern);
new URLPattern(pattern, baseURL);
```

Der erste Konstruktionstyp nimmt ein Objekt an, das beschreibt,
welche URLs durch die Angabe von Mustern für jeden einzelnen URL-Teil übereinstimmen sollten.
Seine Mitglieder können `protocol`, `username`, `password`, `hostname`,
`port`, `pathname`, `search`, `hash` oder `baseURL` sein. Falls die `baseURL`-Eigenschaft
angegeben ist, wird sie als URL geparst und verwendet, um alle anderen fehlenden Eigenschaften
zu füllen. Fehlt die `baseURL`-Eigenschaft, dann werden alle anderen fehlenden
Eigenschaften standardmäßig mit dem Muster-`*`-Platzhalter versehen und akzeptieren jede Eingabe.

Der zweite Konstruktionstyp akzeptiert eine URL-Zeichenkette, die
Muster eingebettet enthält. Die URL-Zeichenkette kann relativ sein, wenn ein `baseURL` als
zweites Argument bereitgestellt wird. Beachten Sie, dass es notwendig sein könnte, einige
Zeichen in der URL-Zeichenkette zu maskieren, falls unklar ist, ob das Zeichen
verschiedene URL-Komponenten trennt oder Teil eines Musters ist. Zum
Beispiel müssen Sie `about\\:blank` schreiben, um anzuzeigen, dass das `:`
das Protokollsuffix ist und nicht der Beginn eines `:blank` genannten Gruppenmusters.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein Polyfill von `URLPattern` ist
  [auf GitHub verfügbar](https://github.com/kenchris/urlpattern-polyfill)
