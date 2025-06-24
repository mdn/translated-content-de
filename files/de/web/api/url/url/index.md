---
title: "URL: URL() Konstruktor"
short-title: URL()
slug: Web/API/URL/URL
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Der **`URL()`** Konstruktor gibt ein neu erstelltes [`URL`](/de/docs/Web/API/URL) Objekt zurück, das die durch die Parameter definierte URL darstellt.

Falls die angegebene Basis-URL oder die resultierende URL keine gültigen URLs sind, wird die JavaScript-Ausnahme {{jsxref("TypeError")}} ausgelöst.

## Syntax

```js-nolint
new URL(url)
new URL(url, base)
```

### Parameter

- `url`
  - : Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "stringifier")}}, das eine absolute URL oder eine relative Referenz zu einer Basis-URL darstellt.
    Wenn `url` eine relative Referenz ist, ist `base` erforderlich und wird verwendet, um die endgültige URL zu lösen.
    Wenn `url` eine absolute URL ist, wird eine angegebene `base` nicht zur Erstellung der resultierenden URL verwendet.
- `base` {{optional_inline}}

  - : Ein String, der die Basis-URL darstellt, die in Fällen verwendet wird, in denen `url` eine relative Referenz ist.
    Falls nicht angegeben, ist der Standardwert `undefined`.

    Wenn eine `base` angegeben wird, ist die aufgelöste URL nicht einfach eine Verkettung von `url` und `base`.
    Relative Referenzen zum übergeordneten und aktuellen Verzeichnis werden relativ zum aktuellen Verzeichnis der `base` URL aufgelöst und beinhalten Pfadsegmente bis zum letzten Schrägstrich, aber keine danach.
    Relative Referenzen zur Wurzel werden relativ zum Basis-Ursprung aufgelöst.
    Weitere Informationen finden Sie unter [Auflösen relativer Referenzen zu einer URL](/de/docs/Web/API/URL_API/Resolving_relative_references).

> [!NOTE]
> Die Argumente `url` und `base` werden jeder für sich zu einem String umgewandelt, unabhängig von dem Wert, den Sie übergeben, wie etwa ein [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) oder [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) Element, genau wie bei anderen Web-APIs, die einen String akzeptieren.
> Insbesondere können Sie ein existierendes [`URL`](/de/docs/Web/API/URL) Objekt für beide Argumente verwenden, und es wird aus der [`href`](/de/docs/Web/API/URL/href) Eigenschaft des Objekts in einen String umgewandelt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : `url` (im Fall von absoluten URLs) oder `base` + `url` (im Fall von relativen Referenzen) ist keine gültige URL.

## Beispiele

Hier sind einige Beispiele für die Verwendung des Konstruktors.

> [!NOTE] > [Auflösen relativer Referenzen zu einer URL](/de/docs/Web/API/URL_API/Resolving_relative_references) bietet zusätzliche Beispiele, die demonstrieren, wie verschiedene `url` und `base` Werte zu einer endgültigen absoluten URL aufgelöst werden.

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
- Das Interface, zu dem es gehört: [`URL`](/de/docs/Web/API/URL).
