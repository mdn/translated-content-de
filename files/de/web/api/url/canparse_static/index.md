---
title: "URL: Statische Methode canParse()"
short-title: canParse()
slug: Web/API/URL/canParse_static
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die statische Methode **`URL.canParse()`** der [`URL`](/de/docs/Web/API/URL)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob eine absolute URL oder eine relative URL in Kombination mit einer Basis-URL geparst werden kann und gültig ist.

Dies ist eine schnelle und einfache Alternative dazu, eine `URL` innerhalb eines [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Blocks zu erzeugen. Die Methode gibt für dieselben Werte `true` zurück, für die der [`URL()`-Konstruktor](/de/docs/Web/API/URL/URL) erfolgreich wäre, und `false` für Werte, bei denen der Konstruktor eine Ausnahme auslösen würde.

## Syntax

```js-nolint
URL.canParse(url)
URL.canParse(url, base)
```

### Parameter

- `url`
  - : Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "Stringifier")}} – beispielsweise ein {{htmlelement("a")}}- oder {{htmlelement("area")}}-Element –, das eine absolute oder relative URL darstellt.
    Wenn `url` eine relative URL ist, ist `base` erforderlich und wird als Basis-URL verwendet.
    Wenn `url` eine absolute URL ist, wird ein angegebener Wert für `base` ignoriert.
- `base` {{optional_inline}}
  - : Ein String, der die Basis-URL angibt, die verwendet wird, wenn `url` eine relative URL ist.
    Wenn kein Wert angegeben wird, ist der Standardwert `undefined`.

> [!NOTE]
> Die Argumente `url` und `base` werden unabhängig vom übergebenen Wert jeweils in einen String umgewandelt, wie bei anderen Web-APIs, die einen String akzeptieren.
> Insbesondere können Sie für beide Argumente ein vorhandenes [`URL`](/de/docs/Web/API/URL)-Objekt verwenden. Es wird anhand der [`href`](/de/docs/Web/API/URL/href)-Eigenschaft des Objekts in einen String umgewandelt.

### Rückgabewert

`true`, wenn die URL geparst werden kann und gültig ist; andernfalls `false`.

## Beispiele

Dieses interaktive Beispiel zeigt, wie Sie die statische Methode `URL.canParse()` mit verschiedenen absoluten und relativen URL-Werten verwenden.

Im ersten Teil des Beispiels werden ein HTML-Element `<pre>` für die Protokollausgabe und eine Protokollierungsmethode `log()` definiert.

```html
<pre id="log"></pre>
```

```js
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Anschließend prüfen wir mit der Bedingung `"canParse" in URL`, ob die Methode `URL.canParse()` unterstützt wird.
Wenn die Methode unterstützt wird, protokollieren wir die Ergebnisse für eine absolute URL, eine relative URL ohne Basis-URL und eine relative URL mit einer gültigen Basis-URL.
Wir protokollieren auch den Fall, dass `URL.canParse()` nicht unterstützt wird.

```js
if ("canParse" in URL) {
  log("Test valid absolute URL");
  let url = "https://developer.mozilla.org/";
  let result = URL.canParse(url);
  log(` URL.canParse("${url}"): ${result}`);

  log("\nTest relative URL with no base URL");
  url = "/en-US/docs";
  result = URL.canParse(url);
  log(` URL.canParse("${url}"): ${result}`);

  log("\nTest relative URL with valid base URL");
  let baseUrl = "https://developer.mozilla.org/";
  result = URL.canParse(url, baseUrl);
  log(` URL.canParse("${url}","${baseUrl}"): ${result}`);
} else {
  log("URL.canParse() not supported");
}
```

Abschließend zeigt der folgende Code, dass `baseUrl` kein String sein muss.
Hier übergeben wir ein `URL`-Objekt.

```js
if ("canParse" in URL) {
  log("\nTest relative URL with base URL supplied as a URL object");
  let baseUrl = new URL("https://developer.mozilla.org/");
  let url = "/en-US/docs";
  result = URL.canParse(url, baseUrl);
  log(` URL.canParse("${url}","${baseUrl}"): ${result}`);
}
```

Die Ergebnisse der einzelnen Prüfungen sind unten zu sehen.

{{EmbedLiveSample('Examples', '100%', '200')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`URL()`](/de/docs/Web/API/URL/URL)
- [Ein Polyfill für `URL.canParse()`](https://core-js.io/docs/features/web-standards/url) ist in [`core-js`](https://core-js.io/) verfügbar.
