---
title: "URL: URL()-Konstruktor"
short-title: URL()
slug: Web/API/URL/URL
l10n:
  sourceCommit: 5a7fae1cc8df27d50c9365511a714f3c2fa4bfc1
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Der **`URL()`**-Konstruktor gibt ein neu erstelltes {{domxref("URL")}}-Objekt zurück, das die durch die Parameter definierte URL darstellt.

Wenn die angegebene Basis-URL oder die resultierende URL keine gültigen URLs sind, wird die JavaScript-{{jsxref("TypeError")}}-Ausnahme ausgelöst.

## Syntax

```js-nolint
new URL(url)
new URL(url, base)
```

### Parameter

- `url`
  - : Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier")}}, das eine absolute URL oder einen relativen Bezug zu einer Basis-URL darstellt.
    Wenn `url` ein relativer Bezug ist, ist `base` erforderlich und wird verwendet, um die endgültige URL zu ermitteln.
    Wenn `url` eine absolute URL ist, wird eine angegebene `base` nicht verwendet, um die resultierende URL zu erstellen.
- `base` {{optional_inline}}

  - : Ein String, der die Basis-URL darstellt, die in Fällen verwendet wird, in denen `url` ein relativer Bezug ist.
    Wenn nicht angegeben, ist der Standardwert `undefined`.

    Wenn eine `base` angegeben ist, ist die ermittelte URL nicht einfach eine Verkettung von `url` und `base`.
    Relative Bezüge zum übergeordneten und aktuellen Verzeichnis werden relativ zum aktuellen Verzeichnis der `base`-URL aufgelöst, was Pfadsegmente bis hin zum letzten Schrägstrich, aber keine danach, umfasst.
    Relative Bezüge zur Wurzel werden relativ zum Basisursprung aufgelöst.
    Weitere Informationen finden Sie unter [Auflösen relativer Bezüge zu einer URL](/de/docs/Web/API/URL_API/Resolving_relative_references).

> [!NOTE]
> Die Argumente `url` und `base` werden aus dem von Ihnen übergebenen Wert, wie einem {{domxref("HTMLAnchorElement")}}- oder {{domxref("HTMLAreaElement")}}-Element, stringifiziert, genau wie bei anderen Web-APIs, die einen String akzeptieren.
> Insbesondere können Sie ein bestehendes {{domxref("URL")}}-Objekt für ein beliebiges Argument verwenden, und es wird aus der {{domxref("URL.href", "href")}}-Eigenschaft des Objekts stringifiziert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : `url` (bei absoluten URLs) oder `base` + `url` (bei relativen Bezügen) ist keine gültige URL.

## Beispiele

Hier sind einige Beispiele für die Verwendung des Konstruktors.

> **Hinweis:** [Auflösen relativer Bezüge zu einer URL](/de/docs/Web/API/URL_API/Resolving_relative_references) bietet zusätzliche Beispiele, die zeigen, wie unterschiedliche `url`- und `base`-Werte zu einer endgültigen absoluten URL aufgelöst werden.

```js
// Basis-URLs:
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
// Löst eine TypeError-Ausnahme aus, da '' keine gültige URL ist

new URL("/en-US/docs");
// Löst eine TypeError-Ausnahme aus, da '/en-US/docs' keine gültige URL ist

// Andere Fälle:

new URL("http://www.example.com");
// => 'http://www.example.com/'

new URL("http://www.example.com", B);
// => 'http://www.example.com/'

new URL("", "https://example.com/?query=1");
// => 'https://example.com/?query=1' (Edge before 79 entfernt Abfrageargumente)

new URL("/a", "https://example.com/?query=1");
// => 'https://example.com/a' (siehe relative URLs)

new URL("//foo.com", "https://example.com");
// => 'https://foo.com/' (siehe relative URLs)
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("URL.parse_static", "URL.parse()")}}, eine alternative Methode zu diesem Konstruktor, die keine Ausnahme wirft
- [Polyfill von `URL` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- Die zugehörige Schnittstelle: {{domxref("URL")}}.
