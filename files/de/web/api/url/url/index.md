---
title: "URL: URL() Konstruktor"
short-title: URL()
slug: Web/API/URL/URL
l10n:
  sourceCommit: 870c21b730828c20ce7059dbd358eec8bed1a4c5
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Der **`URL()`** Konstruktor gibt ein neu erstelltes [`URL`](/de/docs/Web/API/URL)-Objekt zurück, das die URL repräsentiert, die durch die Parameter definiert wird.

Falls die angegebene Basis-URL oder die resultierende URL keine gültigen URLs sind, wird die JavaScript-{{jsxref("TypeError")}}-Ausnahme ausgelöst.

## Syntax

```js-nolint
new URL(url)
new URL(url, base)
```

### Parameter

- `url`
  - : Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "stringifier")}}, das eine absolute URL oder einen relativen Verweis auf eine Basis-URL darstellt.
    Wenn `url` ein relativer Verweis ist, ist `base` erforderlich und wird verwendet, um die finale URL zu ermitteln.
    Wenn `url` eine absolute URL ist, wird eine angegebene `base` nicht zur Erzeugung der resultierenden URL verwendet.
- `base` {{optional_inline}}

  - : Ein String, der die Basis-URL repräsentiert, die in Fällen verwendet wird, in denen `url` ein relativer Verweis ist.
    Falls nicht angegeben, ist der Standardwert `undefined`.

    Wenn eine `base` angegeben ist, ist die aufgelöste URL nicht einfach eine Verkettung von `url` und `base`.
    Relative Verweise auf das übergeordnete und aktuelle Verzeichnis werden relativ zum aktuellen Verzeichnis der `base`-URL aufgelöst, welches die Pfadsegmente bis zum letzten Schrägstrich, aber keine danach, umfasst.
    Relative Verweise auf das Stammverzeichnis werden relativ zum Basisursprung aufgelöst.
    Weitere Informationen finden Sie unter [Resolving relative references to a URL](/de/docs/Web/API/URL_API/Resolving_relative_references).

> [!NOTE]
> Die Argumente `url` und `base` werden jeweils aus dem Wert, den Sie übergeben, in einen String umgewandelt, wie z.B. ein [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) oder ein [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) Element, ähnlich wie bei anderen Web-APIs, die einen String akzeptieren.
> Insbesondere können Sie ein vorhandenes [`URL`](/de/docs/Web/API/URL)-Objekt für eines der Argumente verwenden, und es wird aus der [`href`](/de/docs/Web/API/URL/href)-Eigenschaft des Objekts in einen String umgewandelt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : `url` (im Falle von absoluten URLs) oder `base` + `url` (im Falle von relativen Verweisen) ist keine gültige URL.

## Beispiele

Hier sind einige Beispiele für die Verwendung des Konstruktors.

> **Hinweis:** [Resolving relative references to a URL](/de/docs/Web/API/URL_API/Resolving_relative_references) bietet zusätzliche Beispiele, die zeigen, wie unterschiedliche `url`- und `base`-Werte zu einer finalen absoluten URL aufgelöst werden.

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

Hier einige Beispiele für ungültige URLs:

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

- [`URL.parse()`](/de/docs/Web/API/URL/parse_static), eine Alternative zu diesem Konstruktor, die keine Ausnahme auslöst
- [Polyfill von `URL` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- Die Schnittstelle, zu der es gehört: [`URL`](/de/docs/Web/API/URL).
