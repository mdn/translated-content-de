---
title: "URL: URL()-Konstruktor"
short-title: URL()
slug: Web/API/URL/URL
l10n:
  sourceCommit: d21c47d7be2d695e8f3b3fb6f9690f3b5c929dbc
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Der **`URL()`**-Konstruktor gibt ein neu erstelltes [`URL`](/de/docs/Web/API/URL)-Objekt zurück, das die durch die Parameter angegebene URL repräsentiert.

Wenn die angegebene Basis-URL oder die resultierende URL keine gültige URL ist, wird die JavaScript-Ausnahme {{jsxref("TypeError")}} ausgelöst.

## Syntax

```js-nolint
new URL(url)
new URL(url, base)
```

### Parameter

- `url`
  - : Eine Zeichenfolge oder ein anderes Objekt mit einem {{Glossary("stringifier", "Stringifier")}}, das eine absolute URL oder einen relativen Verweis auf eine Basis-URL repräsentiert.
    Wenn `url` ein relativer Verweis ist, ist `base` erforderlich und wird verwendet, um die endgültige URL zu ermitteln.
    Wenn `url` eine absolute URL ist, wird ein angegebener Wert für `base` nicht verwendet, um die resultierende URL zu erstellen.
- `base` {{optional_inline}}
  - : Eine Zeichenfolge, die die Basis-URL angibt, die verwendet werden soll, wenn `url` ein relativer Verweis ist.
    Wenn der Wert nicht angegeben wird, ist er standardmäßig `undefined`.

    Wenn `base` angegeben ist, ergibt sich die aufgelöste URL nicht einfach durch Aneinanderhängen von `url` und `base`.
    Relative Verweise auf das übergeordnete und das aktuelle Verzeichnis werden relativ zum aktuellen Verzeichnis der `base`-URL aufgelöst. Dieses umfasst die Pfadsegmente bis zum letzten Schrägstrich, aber nicht die danach folgenden.
    Weitere Informationen finden Sie unter [Relative Verweise auf eine URL auflösen](/de/docs/Web/API/URL_API/Resolving_relative_references).

> [!NOTE]
> Die Argumente `url` und `base` werden unabhängig vom übergebenen Wert jeweils in eine Zeichenfolge umgewandelt, beispielsweise wenn Sie ein [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)- oder [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Element übergeben. Das gilt auch für andere Web-APIs, die eine Zeichenfolge akzeptieren.
> Insbesondere können Sie für beide Argumente ein vorhandenes [`URL`](/de/docs/Web/API/URL)-Objekt verwenden. Es wird anhand der [`href`](/de/docs/Web/API/URL/href)-Eigenschaft des Objekts in eine Zeichenfolge umgewandelt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : `url` (bei absoluten URLs) oder `base` + `url` (bei relativen Verweisen) ist keine gültige URL.

## Beispiele

Hier sind einige Beispiele für die Verwendung des Konstruktors.

> [!NOTE]
> Unter [Relative Verweise auf eine URL auflösen](/de/docs/Web/API/URL_API/Resolving_relative_references) finden Sie weitere Beispiele dafür, wie unterschiedliche Werte für `url` und `base` zu einer endgültigen absoluten URL aufgelöst werden.

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

new URL("https://example.com", "https://beispiel.de");
// => 'https://example.com/'
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
- Die zugehörige Schnittstelle: [`URL`](/de/docs/Web/API/URL)
