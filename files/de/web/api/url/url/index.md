---
title: "URL: URL()-Konstruktor"
short-title: URL()
slug: Web/API/URL/URL
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Der **`URL()`**-Konstruktor gibt ein neu erstelltes [`URL`](/de/docs/Web/API/URL)-Objekt zurück, das die durch die Parameter definierte URL repräsentiert.

Wenn die angegebene Basis-URL oder die resultierende URL keine gültige URL ist, wird die JavaScript-Ausnahme {{jsxref("TypeError")}} ausgelöst.

## Syntax

```js-nolint
new URL(url)
new URL(url, base)
```

### Parameter

- `url`
  - : Eine Zeichenfolge oder ein anderes Objekt mit einem {{Glossary("stringifier", "stringifier")}}, das eine absolute URL oder eine relative Referenz auf eine Basis-URL repräsentiert.
    Wenn `url` eine relative Referenz ist, ist `base` erforderlich und wird verwendet, um die endgültige URL aufzulösen.
    Wenn `url` eine absolute URL ist, wird ein angegebenes `base` nicht zum Erstellen der resultierenden URL verwendet.
- `base` {{optional_inline}}
  - : Eine Zeichenfolge, die die Basis-URL für Fälle angibt, in denen `url` eine relative Referenz ist.
    Wenn der Parameter nicht angegeben wird, ist sein Standardwert `undefined`.

    Wenn `base` angegeben ist, entsteht die aufgelöste URL nicht einfach durch Aneinanderhängen von `url` und `base`.
    Relative Referenzen auf das übergeordnete und das aktuelle Verzeichnis werden relativ zum aktuellen Verzeichnis der `base`-URL aufgelöst. Dieses umfasst die Pfadsegmente bis zum letzten Schrägstrich, aber keine danach.
    Relative Referenzen auf das Stammverzeichnis werden relativ zum Ursprung der Basis-URL aufgelöst.
    Weitere Informationen finden Sie unter [Relative Referenzen auf eine URL auflösen](/de/docs/Web/API/URL_API/Resolving_relative_references).

> [!NOTE]
> Die Argumente `url` und `base` werden unabhängig davon, welchen Wert Sie übergeben, jeweils in eine Zeichenfolge umgewandelt. Das gilt beispielsweise auch für ein [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)- oder [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Element, wie bei anderen Web-APIs, die eine Zeichenfolge akzeptieren.
> Insbesondere können Sie für beide Argumente ein vorhandenes [`URL`](/de/docs/Web/API/URL)-Objekt verwenden. Es wird anhand seiner [`href`](/de/docs/Web/API/URL/href)-Eigenschaft in eine Zeichenfolge umgewandelt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : `url` (bei absoluten URLs) oder `base` + `url` (bei relativen Referenzen) ist keine gültige URL.

## Beispiele

Hier sind einige Beispiele für die Verwendung des Konstruktors.

> [!NOTE]
> [Relative Referenzen auf eine URL auflösen](/de/docs/Web/API/URL_API/Resolving_relative_references) enthält weitere Beispiele, die zeigen, wie verschiedene Werte für `url` und `base` zu einer endgültigen absoluten URL aufgelöst werden.

```js
// Base URLs:
let baseUrl = "https://developer.mozilla.org";

let a = new URL("/", baseUrl);
// => 'https://developer.mozilla.org/'

let b = new URL(baseUrl);
// => 'https://developer.mozilla.org/'

new URL("en-US/docs", b);
// => 'https://developer.mozilla.org/en-US/docs'

let d = new URL("/en-US/docs", b);
// => 'https://developer.mozilla.org/en-US/docs'

new URL("/en-US/docs", d);
// => 'https://developer.mozilla.org/en-US/docs'

new URL("/en-US/docs", a);
// => 'https://developer.mozilla.org/en-US/docs'

new URL("/en-US/docs", "https://developer.mozilla.org/fr-FR/toto");
// => 'https://developer.mozilla.org/en-US/docs'
```

Hier sind einige Beispiele für ungültige URLs:

```js
new URL("/en-US/docs", "");
// Raises a TypeError exception as '' is not a valid URL

new URL("/en-US/docs");
// Raises a TypeError exception as '/en-US/docs' is not a valid URL

// Other cases:

new URL("http://www.example.com");
// => 'http://www.example.com/'

new URL("http://www.example.com", B);
// => 'http://www.example.com/'

new URL("", "https://example.com/?query=1");
// => 'https://example.com/?query=1' (Edge before 79 removes query arguments)

new URL("/a", "https://example.com/?query=1");
// => 'https://example.com/a' (see relative URLs)

new URL("//foo.example", "https://example.com");
// => 'https://foo.example/' (see relative URLs)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`URL.parse()`](/de/docs/Web/API/URL/parse_static), eine Alternative zu diesem Konstruktor, die keine Ausnahme auslöst
- [Polyfill für `URL` in `core-js`](https://core-js.io/docs/features/web-standards/url)
- Die zugehörige Schnittstelle: [`URL`](/de/docs/Web/API/URL).
