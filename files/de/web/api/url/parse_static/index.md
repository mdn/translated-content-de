---
title: "URL: parse() statische Methode"
short-title: parse()
slug: Web/API/URL/parse_static
l10n:
  sourceCommit: 5c569deab82d7efb49718eb64b2bda5d5b9c8954
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`URL.parse()`** statische Methode des [`URL`](/de/docs/Web/API/URL) Interfaces gibt ein neu erstelltes [`URL`](/de/docs/Web/API/URL) Objekt zurück, das die URL darstellt, die durch die Parameter definiert ist.

Wenn die angegebene Basis-URL oder die resultierende URL nicht analysierbar und gültig sind, wird `null` zurückgegeben.
Dies ist eine Alternative zur Verwendung des [`URL()`](/de/docs/Web/API/URL/URL) Konstruktors, um innerhalb eines [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Blocks eine `URL` zu konstruieren, oder [`canParse()`](/de/docs/Web/API/URL/canParse_static) zu verwenden, um die Parameter zu überprüfen und `null` zurückzugeben, wenn die Methode `false` zurückgibt.

## Syntax

```js-nolint
URL.parse(url)
URL.parse(url, base)
```

### Parameter

- `url`
  - : Ein String oder ein anderes Objekt mit einem [Stringifier](/de/docs/Glossary/stringifier), das eine absolute URL oder einen relativen Verweis auf eine URL darstellt.
    Wenn `url` ein relativer Verweis ist, ist `base` erforderlich und wird verwendet, um die endgültige URL zu erstellen.
    Wenn `url` eine absolute URL ist, wird eine angegebene `base` nicht verwendet, um die resultierende URL zu erstellen.
- `base` {{optional_inline}}

  - : Ein String, der die Basis-URL darstellt, die verwendet wird, wenn `url` eine relative URL ist.
    Wenn nicht angegeben, ist der Standardwert `undefined`.

    Wenn Sie eine `base` URL angeben, ist die aufgelöste URL nicht einfach eine Verkettung von `url` und `base`.
    Relative Verweise auf das übergeordnete und aktuelle Verzeichnis werden relativ zum aktuellen Verzeichnis der `base` URL aufgelöst, das nur Pfadsegmente bis zum letzten Schrägstrich enthält, jedoch keine danach.
    Relative Verweise auf das Wurzelverzeichnis werden relativ zum Basis-Ursprung aufgelöst.
    Für weitere Informationen siehe [Resolving relative references to a URL](/de/docs/Web/API/URL_API/Resolving_relative_references).

> [!NOTE]
> Die Argumente `url` und `base` werden jeweils aus dem von Ihnen übergebenen Wert als String dargestellt, wie z.B. einem [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) oder [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) Element, ähnlich wie bei anderen Web-APIs, die einen String akzeptieren.
> Insbesondere können Sie ein vorhandenes [`URL`](/de/docs/Web/API/URL) Objekt für eines der Argumente verwenden, und es wird aus der [`href`](/de/docs/Web/API/URL/href) Eigenschaft des Objekts stringifiziert.

### Rückgabewert

Eine `URL`, wenn die Parameter zu einer gültigen URL aufgelöst werden können; sonst `null`.

## Beispiele

[Resolving relative references to a URL](/de/docs/Web/API/URL_API/Resolving_relative_references) und [`URL()` constructor](/de/docs/Web/API/URL/URL#examples) bieten zusätzliche Beispiele, die zeigen, wie unterschiedliche `url` und `base` Werte zu einer endgültigen absoluten URL aufgelöst werden (obwohl hauptsächlich `URL()` verwendet wird).

### Verwendung von URL.parse()

Dieses Live-Beispiel zeigt, wie die `URL.parse()` statische Methode für einige unterschiedliche absolute und relative Referenzwerte verwendet wird.

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

Zuerst überprüfen wir, ob die `URL.parse()` Methode unterstützt wird, indem wir die Bedingung `"parse" in URL` verwenden.
Wenn die Methode unterstützt wird, protokollieren wir das Ergebnis eines Tests mit einer absoluten URL, einem relativen Verweis und einer Basis-URL, einem relativen Verweis mit einer [komplizierteren Basis-URL](/de/docs/Web/API/URL_API/Resolving_relative_references), einer gültigen absoluten URL mit einer gültigen Basis-URL (die nicht verwendet wird) und einer ungültigen Basis-URL, die dazu führt, dass die Methode `null` zurückgibt.

Wir protokollieren auch den Fall, wenn `URL.parse()` nicht unterstützt wird.

```js
if ("parse" in URL) {
  // Absolute URL
  let result = URL.parse("https://developer.mozilla.org/en-US/docs");
  log(`[1]: ${result.href}`);

  // Relative reference to a valid base URL
  result = URL.parse("en-US/docs", "https://developer.mozilla.org");
  log(`[2]: ${result.href}`);

  // Relative reference to a "complicated" valid base URL
  // (only the scheme and domain are used to resolve url)
  result = URL.parse(
    "/different/place",
    "https://developer.mozilla.org:443/some/path?id=4",
  );
  log(`[3]: ${result.href}`);

  // Absolute url argument (base URL ignored)
  result = URL.parse(
    "https://example.org/some/docs",
    "https://developer.mozilla.org",
  );
  log(`[4]: ${result.href}`);

  // Invalid base URL (missing colon)
  result = URL.parse("en-US/docs", "https//developer.mozilla.org");
  log(`[5]: ${result}`);
} else {
  log("URL.parse() not supported");
}
```

Zuletzt zeigt der folgende Code, dass die Argumente keine Strings sein müssen, indem ein `URL` Objekt als `base` Parameter übergeben wird.

```js
if ("parse" in URL) {
  // Relative reference with base URL supplied as a URL object
  result = URL.parse("/en-US/docs", new URL("https://developer.mozilla.org/"));
  log(`[6]: ${result.href}`);
}
```

Die Ergebnisse der einzelnen Prüfungen werden unten angezeigt.

{{EmbedLiveSample('URL.parse()', '100%')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`URL()` constructor](/de/docs/Web/API/URL/URL), der eine Ausnahme auslöst, wenn die übergebenen Parameter eine ungültige URL definieren
- [Ein Polyfill von `URL.parse()`](https://github.com/zloirock/core-js#url-and-urlsearchparams) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
