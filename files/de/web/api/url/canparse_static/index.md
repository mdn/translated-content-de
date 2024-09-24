---
title: "URL: canParse() statische Methode"
short-title: canParse()
slug: Web/API/URL/canParse_static
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{ApiRef("URL API")}}

Die **`URL.canParse()`** statische Methode der {{domxref("URL")}} Schnittstelle gibt einen booleschen Wert zurück, der anzeigt, ob eine absolute URL oder eine relative URL in Kombination mit einer Basis-URL analysierbar und gültig sind.

Dies ist eine schnelle und einfache Alternative zur Konstruktion einer `URL` innerhalb eines [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Blocks.
Sie gibt `true` für dieselben Werte zurück, für die der [`URL()` Konstruktor](/de/docs/Web/API/URL/URL) erfolgreich wäre, und `false` für die Werte, die dazu führen würden, dass der Konstruktor einen Fehler auslöst.

## Syntax

```js-nolint
URL.canParse(url)
URL.canParse(url, base)
```

### Parameter

- `url`
  - : Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier")}} — einschließlich beispielsweise eines {{htmlelement("a")}} oder {{htmlelement("area")}} Elements — das eine absolute oder relative URL darstellt.
    Wenn `url` eine relative URL ist, ist `base` erforderlich und wird als Basis-URL verwendet.
    Wenn `url` eine absolute URL ist, wird eine angegebene `base` ignoriert.
- `base` {{optional_inline}}
  - : Ein String, der die Basis-URL darstellt, die verwendet werden soll, wenn `url` eine relative URL ist.
    Wenn nicht angegeben, ist der Standardwert `undefined`.

> [!NOTE]
> Die Argumente `url` und `base` werden aus dem von Ihnen übergebenen Wert in einen String umgewandelt, wie es auch bei anderen Web-APIs der Fall ist, die einen String akzeptieren.
> Insbesondere können Sie ein bestehendes {{domxref("URL")}} Objekt für eines der Argumente verwenden, und es wird in die {{domxref("URL.href", "href")}} Eigenschaft des Objekts umgewandelt.

### Rückgabewert

`true` wenn die URL analysiert werden kann und gültig ist; `false` andernfalls.

## Beispiele

Dieses Live-Beispiel zeigt, wie die `URL.canParse()` statische Methode für einige verschiedene absolute und relative URL-Werte verwendet wird.

Der erste Teil des Beispiels definiert ein HTML `<pre>` Element zum Protokollieren sowie eine Protokollierungsmethode `log()`.

```html
<pre id="log"></pre>
```

```js
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Als nächstes überprüfen wir, dass die `URL.canParse()` Methode mit der Bedingung `"canParse" in URL` unterstützt wird.
Wenn die Methode unterstützt wird, protokollieren wir das Ergebnis der Überprüfung einer absoluten URL, einer relativen URL ohne Basis-URL und einer relativen URL mit einer gültigen Basis-URL.
Wir protokollieren auch den Fall, wenn `URL.canParse()` nicht unterstützt wird.

```js
if ("canParse" in URL) {
  log("Test gültige absolute URL");
  let url = "https://developer.mozilla.org/";
  let result = URL.canParse(url);
  log(` URL.canParse("${url}"): ${result}`);

  log("\nTest relative URL ohne Basis-URL");
  url = "/en-US/docs";
  result = URL.canParse(url);
  log(` URL.canParse("${url}"): ${result}`);

  log("\nTest relative URL mit gültiger Basis-URL");
  let baseUrl = "https://developer.mozilla.org/";
  result = URL.canParse(url, baseUrl);
  log(` URL.canParse("${url}","${baseUrl}"): ${result}`);
} else {
  log("URL.canParse() wird nicht unterstützt");
}
```

Zuletzt zeigt der folgende Code, dass `baseUrl` kein String sein muss.
Hier haben wir ein `URL` Objekt übergeben.

```js
if ("canParse" in URL) {
  log("\nTest relative URL mit Basis-URL als URL-Objekt bereitgestellt");
  let baseUrl = new URL("https://developer.mozilla.org/");
  let url = "/en-US/docs";
  result = URL.canParse(url, baseUrl);
  log(` URL.canParse("${url}","${baseUrl}"): ${result}`);
}
```

Die Ergebnisse jeder der Überprüfungen werden unten angezeigt.

{{EmbedLiveSample('Examples', '100%', '200')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("URL.URL", "URL()")}}
- [Ein Polyfill von `URL.canParse()`](https://github.com/zloirock/core-js#url-and-urlsearchparams) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
