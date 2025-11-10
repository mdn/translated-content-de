---
title: "URL: URL() Konstruktor"
short-title: URL()
slug: Web/API/URL/URL
l10n:
  sourceCommit: 28dc72ec7ffb357c879915caa51a07f5b4396c9e
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Der **`URL()`** Konstruktor gibt ein neu erstelltes [`URL`](/de/docs/Web/API/URL)-Objekt zurück, das die durch die Parameter definierte URL repräsentiert.

Falls die angegebene Basis-URL oder die resultierende URL keine gültigen URLs sind, wird die JavaScript-{{jsxref("TypeError")}}-Ausnahme ausgelöst.

## Syntax

```js-nolint
new URL(url)
new URL(url, base)
```

### Parameter

- `url`
  - : Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "Stringifier")}}, das eine absolute URL oder einen relativen Verweis auf eine Basis-URL darstellt.
    Wenn `url` ein relativer Verweis ist, ist `base` erforderlich und wird zum Lösen der finalen URL verwendet.
    Wenn `url` eine absolute URL ist, wird eine angegebene `base` nicht verwendet, um die resultierende URL zu erstellen.
- `base` {{optional_inline}}
  - : Ein String, der die Basis-URL darstellt, die in Fällen verwendet wird, in denen `url` ein relativer Verweis ist.
    Wird nichts angegeben, ist der Standardwert `undefined`.

    Wenn eine `base` angegeben ist, ist die aufgelöste URL nicht einfach eine Verkettung von `url` und `base`.
    Relative Bezüge zum übergeordneten und aktuellen Verzeichnis werden relativ zum aktuellen Verzeichnis der `base`-URL aufgelöst, das Pfadsegmente bis zum letzten Schrägstrich, jedoch keine danach, einschließt.
    Relative Bezüge zur Wurzel werden relativ zum Basis-Ursprung aufgelöst.
    Für mehr Informationen siehe [Lösen von relativen Verweisen zu einer URL](/de/docs/Web/API/URL_API/Resolving_relative_references).

> [!NOTE]
> Die Argumente `url` und `base` werden jeweils aus dem von Ihnen übergebenen Wert, wie einem [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) oder [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Element, in einen String umgewandelt, genau wie bei anderen Web-APIs, die einen String akzeptieren.
> Insbesondere können Sie ein bestehendes [`URL`](/de/docs/Web/API/URL)-Objekt für jedes Argument verwenden, und es wird aus der [`href`](/de/docs/Web/API/URL/href)-Eigenschaft des Objekts in einen String umgewandelt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : `url` (im Falle von absoluten URLs) oder `base` + `url` (im Falle von relativen Verweisen) ist keine gültige URL.

## Beispiele

Hier sind einige Beispiele für die Verwendung des Konstruktors.

> [!NOTE]
> [Lösen von relativen Verweisen zu einer URL](/de/docs/Web/API/URL_API/Resolving_relative_references) bietet zusätzliche Beispiele, die zeigen, wie verschiedene `url`- und `base`-Werte zu einer finalen absoluten URL aufgelöst werden.

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

new URL("//foo.com", "https://example.com");
// => 'https://foo.com/' (see relative URLs)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`URL.parse()`](/de/docs/Web/API/URL/parse_static), eine nicht auslösende Alternative zu diesem Konstruktor
- [Polyfill von `URL` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- Die Schnittstelle, zu der es gehört: [`URL`](/de/docs/Web/API/URL).
