---
title: "URL: canParse() statische Methode"
short-title: canParse()
slug: Web/API/URL/canParse_static
l10n:
  sourceCommit: 5c569deab82d7efb49718eb64b2bda5d5b9c8954
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`URL.canParse()`** statische Methode des [`URL`](/de/docs/Web/API/URL)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob eine absolute URL oder eine relative URL in Kombination mit einer Basis-URL parsbar und gültig ist.

Dies ist eine schnelle und einfache Alternative zur Konstruktion einer `URL` innerhalb eines [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Blocks. Sie gibt `true` für dieselben Werte zurück, für die der [`URL()` Konstruktor](/de/docs/Web/API/URL/URL) erfolgreich wäre, und `false` für Werte, die den Konstruktor zum Werfen bringen würden.

## Syntax

```js-nolint
URL.canParse(url)
URL.canParse(url, base)
```

### Parameter

- `url`
  - : Ein String oder ein beliebiges anderes Objekt mit einem {{Glossary("stringifier", "Stringifier")}} — einschließlich, zum Beispiel, eines {{htmlelement("a")}} oder {{htmlelement("area")}} Elements — das eine absolute oder relative URL darstellt.
    Wenn `url` eine relative URL ist, ist `base` erforderlich und wird als Basis-URL verwendet.
    Wenn `url` eine absolute URL ist, wird eine angegebene `base` ignoriert.
- `base` {{optional_inline}}
  - : Ein String, der die Basis-URL darstellt, die verwendet wird, wenn `url` eine relative URL ist.
    Wird nichts angegeben, ist der Standardwert `undefined`.

> [!NOTE]
> Die Argumente `url` und `base` werden jeweils aus dem Wert, den Sie übergeben, stringifiziert, genau wie bei anderen Web-APIs, die einen String akzeptieren.
> Insbesondere können Sie ein bestehendes [`URL`](/de/docs/Web/API/URL)-Objekt für jedes Argument verwenden, und es wird zum [`href`](/de/docs/Web/API/URL/href)-Eigenschaft des Objekts stringifiziert.

### Rückgabewert

`true`, wenn die URL geparst werden kann und gültig ist; `false` andernfalls.

## Beispiele

Dieses Live-Beispiel zeigt, wie die `URL.canParse()` statische Methode für einige verschiedene absolute und relative URL-Werte verwendet wird.

Der erste Teil des Beispiels definiert ein HTML-<pre>-Element zum Protokollieren zusammen mit einer Protokollierungsmethode `log()`.

```html
<pre id="log"></pre>
```

```js
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Als nächstes prüfen wir, ob die `URL.canParse()` Methode mit der Bedingung `"canParse" in URL` unterstützt wird.
Wenn die Methode unterstützt wird, protokollieren wir das Ergebnis der Prüfung einer absoluten URL, einer relativen URL ohne Basis-URL und einer relativen URL mit einer gültigen Basis-URL.
Wir protokollieren auch den Fall, wenn `URL.canParse()` nicht unterstützt wird.

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

Zuletzt zeigt der untenstehende Code, dass `baseUrl` kein String sein muss.
Hier haben wir ein `URL`-Objekt übergeben.

```js
if ("canParse" in URL) {
  log("\nTest relative URL with base URL supplied as a URL object");
  let baseUrl = new URL("https://developer.mozilla.org/");
  let url = "/en-US/docs";
  result = URL.canParse(url, baseUrl);
  log(` URL.canParse("${url}","${baseUrl}"): ${result}`);
}
```

Die Ergebnisse jedes der Tests werden unten angezeigt.

{{EmbedLiveSample('Examples', '100%', '200')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`URL()`](/de/docs/Web/API/URL/URL)
- [Ein Polyfill von `URL.canParse()`](https://github.com/zloirock/core-js#url-and-urlsearchparams) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar.
