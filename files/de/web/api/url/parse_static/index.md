---
title: "URL: parse() statische Methode"
short-title: parse()
slug: Web/API/URL/parse_static
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{ApiRef("URL API")}}

Die **`URL.parse()`** statische Methode der {{domxref("URL")}} Schnittstelle gibt ein neu erstelltes {{domxref("URL")}} Objekt zurück, das die durch die Parameter definierte URL darstellt.

Wenn die angegebene Basis-URL oder die resultierende URL nicht analysiert und als gültige URLs anerkannt werden können, wird `null` zurückgegeben. Dies ist eine Alternative zur Verwendung des {{domxref("URL.URL", "URL()")}} Konstruktors zur Konstruktion einer `URL` innerhalb eines [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Blocks oder zur Verwendung von {{domxref("URL.canParse_static", "canParse()")}}, um die Parameter zu überprüfen und `null` zurückzugeben, wenn die Methode `false` zurückgibt.

## Syntax

```js-nolint
URL.parse(url)
URL.parse(url, base)
```

### Parameter

- `url`
  - : Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier")}}, das entweder eine absolute URL oder einen relativen Verweis auf eine URL darstellt. Wenn `url` ein relativer Verweis ist, ist `base` erforderlich und wird verwendet, um die endgültige URL zu ermitteln. Wenn `url` eine absolute URL ist, wird eine angegebene `base` nicht zur Erstellung der resultierenden URL verwendet.
- `base` {{optional_inline}}

  - : Ein String, der die Basis-URL darstellt, die verwendet wird, wenn `url` eine relative URL ist. Wird sie nicht angegeben, ist der Standardwert `undefined`.

    Wenn Sie eine `base` URL angeben, ist die ermittelte URL nicht einfach eine Verkettung von `url` und `base`. Relative Verweise auf das übergeordnete und aktuelle Verzeichnis werden in Bezug auf das aktuelle Verzeichnis der `base` URL aufgelöst, die nur Pfadsegmente bis zum letzten Schrägstrich umfasst, jedoch nicht danach. Relative Verweise auf die Wurzel werden relativ zum Basis-Ursprung aufgelöst. Weitere Informationen finden Sie unter [Resolving relative references to a URL](/de/docs/Web/API/URL_API/Resolving_relative_references).

> [!NOTE]
> Die Argumente `url` und `base` werden aus den übergebenen Werten, wie z. B. einem {{domxref("HTMLAnchorElement")}} oder {{domxref("HTMLAreaElement")}} Element, stringifiziert, genau wie bei anderen Web-APIs, die einen String akzeptieren. Insbesondere können Sie ein vorhandenes {{domxref("URL")}} Objekt für jedes Argument verwenden, und es wird aus der {{domxref("URL.href", "href")}} Eigenschaft des Objekts stringifiziert.

### Rückgabewert

Eine `URL`, wenn die Parameter zu einer gültigen URL aufgelöst werden können; andernfalls `null`.

## Beispiele

[Resolving relative references to a URL](/de/docs/Web/API/URL_API/Resolving_relative_references) und [`URL()` constructor](/de/docs/Web/API/URL/URL#examples) bieten zusätzliche Beispiele, die demonstrieren, wie verschiedene `url` und `base` Werte zu einer endgültigen absoluten URL aufgelöst werden (hauptsächlich jedoch unter Verwendung von `URL()`).

### Verwendung von URL.parse()

Dieses Live-Beispiel demonstriert, wie die `URL.parse()` statische Methode für verschiedene absolute und relative Verweiswerte verwendet wird.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Zuerst überprüfen wir, ob die `URL.parse()` Methode unterstützt wird, indem wir die Bedingung `"parse" in URL` verwenden. Wenn die Methode unterstützt wird, protokollieren wir das Ergebnis der Überprüfung einer absoluten URL, eines relativen Verweises und einer Basis-URL, eines relativen Verweises mit einer komplizierteren Basis-URL](/de/docs/Web/API/URL_API/Resolving_relative_references), einer gültigen absoluten URL mit einer gültigen Basis-URL (die nicht verwendet wird) und einer ungültigen Basis-URL, was dazu führt, dass die Methode `null` zurückgibt.

Wir protokollieren auch den Fall, wenn `URL.parse()` nicht unterstützt wird.

```js
if ("parse" in URL) {
  // Absolute URL
  let result = URL.parse("https://developer.mozilla.org/en-US/docs");
  log(`[1]: ${result.href}`);

  // Relativer Verweis auf eine gültige Basis-URL
  result = URL.parse("en-US/docs", "https://developer.mozilla.org");
  log(`[2]: ${result.href}`);

  // Relativer Verweis auf eine "komplizierte" gültige Basis-URL
  // (nur das Schema und die Domain werden zur Auflösung der URL verwendet)
  result = URL.parse(
    "/different/place",
    "https://developer.mozilla.org:443/some/path?id=4",
  );
  log(`[3]: ${result.href}`);

  // Absolute URL-Argument (Basis-URL ignoriert)
  result = URL.parse(
    "https://example.org/some/docs",
    "https://developer.mozilla.org",
  );
  log(`[4]: ${result.href}`);

  // Ungültige Basis-URL (fehlender Doppelpunkt)
  result = URL.parse("en-US/docs", "https//developer.mozilla.org");
  log(`[5]: ${result}`);
} else {
  log("URL.parse() nicht unterstützt");
}
```

Zuletzt zeigt der untenstehende Code, dass die Argumente keine Strings sein müssen, indem ein `URL` Objekt für den `base` Parameter übergeben wird.

```js
if ("parse" in URL) {
  // Relativer Verweis mit einer als URL-Objekt bereitgestellten Basis-URL
  result = URL.parse("/en-US/docs", new URL("https://developer.mozilla.org/"));
  log(`[6]: ${result.href}`);
}
```

Die Ergebnisse jeder der Überprüfungen sind unten gezeigt.

{{EmbedLiveSample('URL.parse()', '100%')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`URL()` Konstruktor](/de/docs/Web/API/URL/URL), der eine Ausnahme auslöst, wenn die übergebenen Parameter eine ungültige URL definieren
- [Ein Polyfill von `URL.parse()`](https://github.com/zloirock/core-js#url-and-urlsearchparams) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
