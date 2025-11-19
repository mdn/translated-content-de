---
title: "URL: Konstruktor URL()"
short-title: URL()
slug: Web/API/URL/URL
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Der **`URL()`**-Konstruktor gibt ein neu erstelltes [`URL`](/de/docs/Web/API/URL)-Objekt zurück, das die URL darstellt, die durch die Parameter definiert ist.

Wenn die angegebene Basis-URL oder die resultierende URL keine gültigen URLs sind, wird die JavaScript-Ausnahme {{jsxref("TypeError")}} ausgelöst.

## Syntax

```js-nolint
new URL(url)
new URL(url, base)
```

### Parameter

- `url`
  - : Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "Stringifier")}}, das eine absolute URL oder eine relative Referenz zu einer Basis-URL darstellt.
    Wenn `url` eine relative Referenz ist, ist `base` erforderlich und wird verwendet, um die endgültige URL aufzulösen.
    Wenn `url` eine absolute URL ist, wird ein gegebenes `base` nicht verwendet, um die resultierende URL zu erstellen.
- `base` {{optional_inline}}
  - : Ein String, der die Basis-URL darstellt, die verwendet wird, wenn `url` eine relative Referenz ist.
    Wenn nicht angegeben, ist der Standardwert `undefined`.

    Wenn ein `base` angegeben ist, ist die aufgelöste URL nicht einfach eine Verkettung von `url` und `base`.
    Relative Referenzen zum übergeordneten und aktuellen Verzeichnis werden relativ zum aktuellen Verzeichnis der `base`-URL aufgelöst, das Pfadsegmente bis zum letzten Schrägstrich enthält, aber keine danach.
    Relative Referenzen zur Wurzel werden relativ zum Basis-Ursprung aufgelöst.
    Weitere Informationen finden Sie unter [Auflösen relativer Referenzen zu einer URL](/de/docs/Web/API/URL_API/Resolving_relative_references).

> [!NOTE]
> Die `url`- und `base`-Argumente werden jeweils aus dem Wert, den Sie übergeben, in einen String umgewandelt, wie z.B. ein [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) oder [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Element, genau wie bei anderen Web-APIs, die einen String akzeptieren.
> Insbesondere können Sie ein bestehendes [`URL`](/de/docs/Web/API/URL)-Objekt für jedes Argument verwenden, und es wird aus der [`href`](/de/docs/Web/API/URL/href)-Eigenschaft des Objekts in einen String umgewandelt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : `url` (im Fall von absoluten URLs) oder `base` + `url` (im Fall von relativen Referenzen) ist keine gültige URL.

## Beispiele

Hier sind einige Beispiele für die Verwendung des Konstruktors.

> [!NOTE]
> [Auflösen relativer Referenzen zu einer URL](/de/docs/Web/API/URL_API/Resolving_relative_references) bietet zusätzliche Beispiele, die zeigen, wie unterschiedliche `url`- und `base`-Werte zu einer endgültigen absoluten URL aufgelöst werden.

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
- [Polyfill von `URL` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- Die Schnittstelle, zu der es gehört: [`URL`](/de/docs/Web/API/URL).
