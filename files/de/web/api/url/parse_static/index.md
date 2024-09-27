---
title: "URL: parse() statische Methode"
short-title: parse()
slug: Web/API/URL/parse_static
l10n:
  sourceCommit: 5c569deab82d7efb49718eb64b2bda5d5b9c8954
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`URL.parse()`** statische Methode des [`URL`](/de/docs/Web/API/URL)-Interfaces gibt ein neu erstelltes [`URL`](/de/docs/Web/API/URL)-Objekt zurück, das die durch die Parameter definierte URL darstellt.

Wenn die angegebene Basis-URL oder die resultierende URL nicht analysierbar und gültig sind, wird `null` zurückgegeben. Dies ist eine Alternative zur Nutzung des [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktors, um eine `URL` innerhalb eines [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Blocks zu erstellen, oder zur Nutzung von [`canParse()`](/de/docs/Web/API/URL/canParse_static), um die Parameter zu überprüfen und `null` zurückzugeben, wenn die Methode `false` zurückgibt.

## Syntax

```js-nolint
URL.parse(url)
URL.parse(url, base)
```

### Parameter

- `url`
  - : Ein String oder ein beliebiges anderes Objekt mit einem [Stringifier](/de/docs/Glossary/stringifier), das eine absolute URL oder einen relativen Verweis auf eine URL darstellt.
    Wenn `url` ein relativer Verweis ist, ist `base` erforderlich und wird verwendet, um die endgültige URL zu ermitteln.
    Wenn `url` eine absolute URL ist, wird eine angegebene `base` nicht verwendet, um die resultierende URL zu erstellen.
- `base` {{optional_inline}}

  - : Ein String, der die Basis-URL darstellt, die in Fällen verwendet wird, in denen `url` eine relative URL ist.
    Wenn nicht angegeben, ist der Standardwert `undefined`.

    Wenn Sie eine `base`-URL angeben, ist die aufgelöste URL nicht einfach eine Verkettung von `url` und `base`.
    Relative Verweise auf das übergeordnete und aktuelle Verzeichnis werden relativ zum aktuellen Verzeichnis der `base`-URL aufgelöst, was nur Pfadsegmente bis zum letzten Schrägstrich umfasst, jedoch keine danach.
    Relative Verweise auf das Root-Verzeichnis werden relativ zum Basis-Ursprung aufgelöst.
    Weitere Informationen finden Sie unter [Auflösen relativer Verweise auf eine URL](/de/docs/Web/API/URL_API/Resolving_relative_references).

> [!NOTE]
> Die Argumente `url` und `base` werden jeweils als String aus dem von Ihnen übergebenen Wert, wie einem [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) oder einem [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Element, umgewandelt, genau wie bei anderen Web-APIs, die einen String akzeptieren.
> Insbesondere können Sie ein vorhandenes [`URL`](/de/docs/Web/API/URL)-Objekt für eines der Argumente verwenden, und es wird aus der [`href`](/de/docs/Web/API/URL/href)-Eigenschaft des Objekts in einen String umgewandelt.

### Rückgabewert

Eine `URL`, wenn die Parameter zu einer gültigen URL aufgelöst werden können; andernfalls `null`.

## Beispiele

[Auflösen relativer Verweise auf eine URL](/de/docs/Web/API/URL_API/Resolving_relative_references) und [`URL()`-Konstruktor](/de/docs/Web/API/URL/URL#examples) bieten zusätzliche Beispiele, die demonstrieren, wie verschiedene `url`- und `base`-Werte zu einer endgültigen absoluten URL aufgelöst werden (primär unter Verwendung von `URL()`).

### Verwendung von URL.parse()

Dieses Live-Beispiel zeigt, wie die `URL.parse()`-statische Methode für einige unterschiedliche absolute und relative Referenzwerte verwendet wird.

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

Zuerst prüfen wir, ob die `URL.parse()`-Methode mit der Bedingung `"parse" in URL` unterstützt wird.
Wenn die Methode unterstützt wird, protokollieren wir das Ergebnis der Überprüfung einer absoluten URL, eines relativen Verweises und einer Basis-URL, eines relativen Verweises mit einer [komplizierteren Basis-URL](/de/docs/Web/API/URL_API/Resolving_relative_references), einer gültigen absoluten URL mit einer gültigen Basis-URL (die nicht verwendet wird), und einer ungültigen Basis-URL, die dazu führt, dass die Methode `null` zurückgibt.

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

Schließlich demonstriert der unten stehende Code, dass die Argumente keine Strings sein müssen, indem ein `URL`-Objekt für den `base`-Parameter übergeben wird.

```js
if ("parse" in URL) {
  // Relative reference with base URL supplied as a URL object
  result = URL.parse("/en-US/docs", new URL("https://developer.mozilla.org/"));
  log(`[6]: ${result.href}`);
}
```

Die Ergebnisse jeder der Überprüfungen werden unten gezeigt.

{{EmbedLiveSample('URL.parse()', '100%')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`URL()`-Konstruktor](/de/docs/Web/API/URL/URL), der eine Ausnahme wirft, wenn die übergebenen Parameter eine ungültige URL definieren
- [Ein Polyfill von `URL.parse()`](https://github.com/zloirock/core-js#url-and-urlsearchparams) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
