---
title: "URL: Statische Methode parse()"
short-title: parse()
slug: Web/API/URL/parse_static
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die statische Methode **`URL.parse()`** des Interfaces [`URL`](/de/docs/Web/API/URL) gibt ein neu erstelltes [`URL`](/de/docs/Web/API/URL)-Objekt zurück, das die durch die Parameter definierte URL repräsentiert.

Wenn die angegebene Basis-URL oder die resultierende URL nicht geparst werden kann oder keine gültige URL ist, wird `null` zurückgegeben. Dies ist eine Alternative dazu, mit dem Konstruktor [`URL()`](/de/docs/Web/API/URL/URL) innerhalb eines [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Blocks eine `URL` zu erstellen oder die Parameter mit [`canParse()`](/de/docs/Web/API/URL/canParse_static) zu prüfen und `null` zurückzugeben, falls die Methode `false` zurückgibt.

## Syntax

```js-nolint
URL.parse(url)
URL.parse(url, base)
```

### Parameter

- `url`
  - : Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "stringifier")}}, das eine absolute URL oder eine relative Referenz auf eine URL repräsentiert.
    Wenn `url` eine relative Referenz ist, ist `base` erforderlich und wird verwendet, um die endgültige URL zu ermitteln.
    Wenn `url` eine absolute URL ist, wird ein angegebenes `base` nicht zur Erstellung der resultierenden URL verwendet.
- `base` {{optional_inline}}
  - : Ein String, der die Basis-URL für den Fall repräsentiert, dass `url` eine relative URL ist.
    Wenn der Parameter nicht angegeben wird, ist sein Standardwert `undefined`.

    Wenn Sie eine `base`-URL angeben, entsteht die aufgelöste URL nicht einfach durch das Aneinanderhängen von `url` und `base`.
    Relative Referenzen auf das übergeordnete und das aktuelle Verzeichnis werden relativ zum aktuellen Verzeichnis der `base`-URL aufgelöst. Dieses umfasst nur die Pfadsegmente bis zum letzten Schrägstrich, nicht aber die danach.
    Weitere Informationen finden Sie unter [Relative Referenzen auf eine URL auflösen](/de/docs/Web/API/URL_API/Resolving_relative_references).

> [!NOTE]
> Die Argumente `url` und `base` werden jeweils unabhängig vom übergebenen Wert in einen String umgewandelt, beispielsweise wenn Sie ein [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)- oder [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Element übergeben. Dies entspricht dem Verhalten anderer Web-APIs, die einen String akzeptieren.
> Insbesondere können Sie für beide Argumente ein vorhandenes [`URL`](/de/docs/Web/API/URL)-Objekt verwenden. Es wird anhand seiner Eigenschaft [`href`](/de/docs/Web/API/URL/href) in einen String umgewandelt.

### Rückgabewert

Eine `URL`, wenn die Parameter zu einer gültigen URL aufgelöst werden können; andernfalls `null`.

## Beispiele

[Relative Referenzen auf eine URL auflösen](/de/docs/Web/API/URL_API/Resolving_relative_references) und [Konstruktor `URL()`](/de/docs/Web/API/URL/URL#examples) enthalten weitere Beispiele dafür, wie unterschiedliche Werte für `url` und `base` zu einer endgültigen absoluten URL aufgelöst werden (allerdings hauptsächlich unter Verwendung von `URL()`).

### URL.parse() verwenden

Dieses interaktive Beispiel zeigt, wie Sie die statische Methode `URL.parse()` mit verschiedenen absoluten URLs und relativen Referenzen verwenden.

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

Zunächst prüfen wir mit der Bedingung `"parse" in URL`, ob die Methode `URL.parse()` unterstützt wird.
Wenn die Methode unterstützt wird, protokollieren wir die Ergebnisse für eine absolute URL, eine relative Referenz mit einer Basis-URL, eine relative Referenz mit einer [komplexeren Basis-URL](/de/docs/Web/API/URL_API/Resolving_relative_references), eine gültige absolute URL mit einer gültigen Basis-URL (die nicht verwendet wird) sowie eine ungültige Basis-URL, bei der die Methode `null` zurückgibt.

Wir protokollieren auch den Fall, dass `URL.parse()` nicht unterstützt wird.

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

Abschließend zeigt der folgende Code, dass die Argumente keine Strings sein müssen: Für den Parameter `base` wird ein `URL`-Objekt übergeben.

```js
if ("parse" in URL) {
  // Relative reference with base URL supplied as a URL object
  result = URL.parse("/en-US/docs", new URL("https://developer.mozilla.org/"));
  log(`[6]: ${result.href}`);
}
```

Die Ergebnisse der einzelnen Prüfungen sind unten zu sehen.

{{EmbedLiveSample('using_url.parse', '100%')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konstruktor `URL()`](/de/docs/Web/API/URL/URL), der eine Ausnahme auslöst, wenn die übergebenen Parameter eine ungültige URL definieren
- [Ein Polyfill für `URL.parse()`](https://core-js.io/docs/features/web-standards/url) ist in [`core-js`](https://core-js.io/) verfügbar
