---
title: "URL: URL()-Konstruktor"
short-title: URL()
slug: Web/API/URL/URL
l10n:
  sourceCommit: 5a7fae1cc8df27d50c9365511a714f3c2fa4bfc1
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Der **`URL()`**-Konstruktor gibt ein neu erstelltes [`URL`](/de/docs/Web/API/URL)-Objekt zurück, das die URL darstellt, die durch die Parameter definiert wird.

Wenn die angegebene Basis-URL oder die resultierende URL keine gültigen URLs sind, wird die JavaScript-{{jsxref("TypeError")}}-Ausnahme ausgelöst.

## Syntax

```js-nolint
new URL(url)
new URL(url, base)
```

### Parameter

- `url`
  - : Ein String oder ein beliebiges anderes Objekt mit einem {{Glossary("stringifier", "Stringifier")}}, der eine absolute URL oder einen relativen Verweis auf eine Basis-URL darstellt.
    Wenn `url` ein relativer Verweis ist, ist `base` erforderlich und wird verwendet, um die finale URL aufzulösen.
    Wenn `url` eine absolute URL ist, wird eine angegebene `base` nicht verwendet, um die resultierende URL zu erstellen.
- `base` {{optional_inline}}

  - : Ein String, der die Basis-URL darstellt, die in Fällen verwendet wird, in denen `url` ein relativer Verweis ist.
    Wenn nicht angegeben, ist der Standardwert `undefined`.

    Wenn eine `base` angegeben ist, ist die aufgelöste URL nicht einfach eine Verkettung von `url` und `base`.
    Relative Verweise auf das übergeordnete und aktuelle Verzeichnis werden relativ zum aktuellen Verzeichnis der `base`-URL aufgelöst, was Pfadsegmente bis zum letzten Schrägstrich einschließt, aber keine danach.
    Relative Verweise auf das Stammverzeichnis werden relativ zum Basis-Ursprung aufgelöst.
    Weitere Informationen finden Sie unter [Auflösen relativer Verweise auf eine URL](/de/docs/Web/API/URL_API/Resolving_relative_references).

> [!NOTE]
> Die Argumente `url` und `base` werden aus dem von Ihnen übergebenen Wert serialisiert, z.B. einem [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) oder einem [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Element, genau wie bei anderen Web-APIs, die einen String akzeptieren.
> Insbesondere können Sie ein bestehendes [`URL`](/de/docs/Web/API/URL)-Objekt für eines der Argumente verwenden, und es wird aus der [`href`](/de/docs/Web/API/URL/href)-Eigenschaft des Objekts serialisiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : `url` (im Falle von absoluten URLs) oder `base` + `url` (im Falle von relativen Verweisen) ist keine gültige URL.

## Beispiele

Hier sind einige Beispiele für die Verwendung des Konstruktors.

> **Hinweis:** [Auflösen relativer Verweise auf eine URL](/de/docs/Web/API/URL_API/Resolving_relative_references) bietet zusätzliche Beispiele, die zeigen, wie verschiedene `url`- und `base`-Werte zu einer endgültigen absoluten URL aufgelöst werden.

```js
// Base URLs:
let baseUrl = "https://developer.mozilla.org";

let A = new URL("/", baseUrl);
// => 'https://developer.mozilla.org/'

let B = new URL(baseUrl);
// => 'https://developer.mozilla.org/'

new URL("en-US/docs", B);
// => 'https://developer.mozilla.org/en-US/docs'

let D = new URL("/en-US/docs", B);
// => 'https://developer.mozilla.org/en-US/docs'

new URL("/en-US/docs", D);
// => 'https://developer.mozilla.org/en-US/docs'

new URL("/en-US/docs", A);
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

new URL("//foo.com", "https://example.com");
// => 'https://foo.com/' (see relative URLs)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`URL.parse()`](/de/docs/Web/API/URL/parse_static), eine nicht-auslösende Alternative zu diesem Konstruktor
- [Polyfill von `URL` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- Das zugehörige Interface: [`URL`](/de/docs/Web/API/URL).
