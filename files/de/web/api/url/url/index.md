---
title: "URL: URL()-Konstruktor"
short-title: URL()
slug: Web/API/URL/URL
l10n:
  sourceCommit: ff6ea228e06e7dcb616b848ae04f0469d67529f7
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Der **`URL()`**-Konstruktor gibt ein neu erstelltes [`URL`](/de/docs/Web/API/URL)-Objekt zurück, das die durch die Parameter definierte URL repräsentiert.

Wenn die angegebene Basis-URL oder die resultierende URL keine gültige absolute URL ist, wird die JavaScript-Ausnahme {{jsxref("TypeError")}} ausgelöst.

## Syntax

```js-nolint
new URL(url)
new URL(url, base)
```

### Parameter

- `url`
  - : Eine Zeichenfolge oder ein anderes Objekt mit einem {{Glossary("stringifier", "Stringifier")}}, das eine absolute URL oder eine relative Referenz auf eine Basis-URL repräsentiert.
    Wenn `url` eine relative Referenz ist, ist `base` erforderlich und wird verwendet, um die endgültige URL aufzulösen.
    Wenn `url` eine absolute URL ist, wird ein angegebenes `base` nicht verwendet, um die resultierende URL zu erstellen.
- `base` {{optional_inline}}
  - : Eine Zeichenfolge, die die Basis-URL repräsentiert, die verwendet wird, wenn `url` eine relative Referenz ist. Falls angegeben, muss sie eine absolute URL sein.

    Wenn `base` angegeben ist, entsteht die aufgelöste URL nicht einfach durch das Aneinanderhängen von `url` und `base`.
    Relative Referenzen auf das übergeordnete und das aktuelle Verzeichnis werden relativ zum aktuellen Verzeichnis der `base`-URL aufgelöst. Dieses umfasst die Pfadsegmente bis zum letzten Schrägstrich, jedoch keine danach.
    Relative Referenzen auf das Wurzelverzeichnis werden relativ zum Ursprung der Basis-URL aufgelöst.
    Weitere Informationen finden Sie unter [Relative Referenzen auf eine URL auflösen](/de/docs/Web/API/URL_API/Resolving_relative_references).

> [!NOTE]
> Die Argumente `url` und `base` werden unabhängig vom übergebenen Wert jeweils in eine Zeichenfolge umgewandelt, beispielsweise wenn Sie ein [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)- oder [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Element übergeben. Dies entspricht dem Verhalten anderer Web-APIs, die eine Zeichenfolge akzeptieren.
> Insbesondere können Sie für beide Argumente ein vorhandenes [`URL`](/de/docs/Web/API/URL)-Objekt verwenden. Es wird anhand seiner [`href`](/de/docs/Web/API/URL/href)-Eigenschaft in eine Zeichenfolge umgewandelt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : `url` (bei absoluten URLs) oder `base` + `url` (bei relativen Referenzen) ist keine gültige URL.

## Beispiele

> [!NOTE]
> Unter [Relative Referenzen auf eine URL auflösen](/de/docs/Web/API/URL_API/Resolving_relative_references) finden Sie weitere Beispiele dafür, wie verschiedene Werte für `url` und `base` zu einer endgültigen absoluten URL aufgelöst werden.

### Verwendung ohne Basis-URL

```js
new URL("https://example.org");
// => 'https://example.org/'
```

### Verwendung mit Basis-URLs

Wenn `url` eine absolute URL ist, wird `base` nicht verwendet, um das Ergebnis zu erstellen:

```js
new URL("https://example.org", "https://example.com");
// => 'https://example.org/'

new URL("https://example.org", "https://example.com/base1/base2");
// => 'https://example.org/'
```

Wenn `url` mit `//` beginnt, wird sie mit dem [Schema](/de/docs/Web/URI/Reference/Schemes) von `base` aufgelöst:

```js
new URL("//example.org", "wss://example.com");
// => 'wss://example.org/'
```

Wenn `url` mit `/` beginnt, wird sie vom Wurzelverzeichnis von `base` aus aufgelöst:

```js
new URL("/", "https://example.com");
// => 'https://example.com/'

new URL("/url1/url2", "https://example.com/");
// => 'https://example.com/url1/url2'

new URL("/url1/url2", "https://example.com/base1/base2");
// => 'https://example.com/url1/url2'
```

Andernfalls wird `url` vom letzten Verzeichnis von `base` aus aufgelöst:

```js
new URL("url1/url2", "https://example.com/base1/base2");
// => 'https://example.com/base1/url1/url2'

new URL("url1/url2", "https://example.com/base1/base2/");
// => 'https://example.com/base1/base2/url1/url2'
```

### URL-Parameter

Wenn `url` Parameter enthält, bleiben diese im Ergebnis erhalten:

```js
new URL("/url1?query1", "https://example.com/base1");
// => 'https://example.com/url1?query1'
```

Wenn `url` keine leere Zeichenfolge ist, werden alle Parameter aus `base` entfernt:

```js
new URL("/url1", "https://example.com/base1?query=1");
// => 'https://example.com/url1'

new URL("", "https://example.com/base1?query=1");
// => 'https://example.com/base1?query=1'
```

### Verwendung mit `URL`-Objekten

Da `URL`-Objekte in Zeichenfolgen umgewandelt werden können, können sie auch an den Konstruktor übergeben werden:

```js
const example = new URL("https://example.com/");

new URL(example);
// => "https://example.com/"

new URL("/url1/url2", example);
// => 'https://example.com/url1/url2'
```

### Fehlerfälle

Wenn `url` relativ ist, muss `base` angegeben werden:

```js
new URL("/url1/url2");
// TypeError exception: '/url1/url2' cannot be resolved
```

Wenn `base` angegeben wird, muss es eine absolute URL sein (auch wenn `url` absolut ist):

```js
new URL("https://example.org/url1/url2", "/base1/base2");
// TypeError exception: `base` not an absolute URL
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`URL.parse()`](/de/docs/Web/API/URL/parse_static), eine Alternative zu diesem Konstruktor, die keine Ausnahme auslöst
- [Polyfill für `URL` in `core-js`](https://core-js.io/docs/features/web-standards/url)
- Die zugehörige Schnittstelle: [`URL`](/de/docs/Web/API/URL).
