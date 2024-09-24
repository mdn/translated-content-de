---
title: "URLSearchParams: append()-Methode"
short-title: append()
slug: Web/API/URLSearchParams/append
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`append()`**-Methode des {{domxref("URLSearchParams")}}-Interfaces fügt ein angegebenes Schlüssel/Wert-Paar als neuen Suchparameter hinzu.

Wie im unten stehenden Beispiel gezeigt, erscheint derselbe Schlüssel, wenn er mehrmals hinzugefügt wird, mehrfach in der Parameterzeichenfolge, jeweils für jeden Wert.

## Syntax

```js-nolint
append(name, value)
```

### Parameter

- `name`
  - : Der Name des hinzuzufügenden Parameters.
- `value`
  - : Der Wert des hinzuzufügenden Parameters.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search);

//Fügen Sie einen zweiten foo-Parameter hinzu.
params.append("foo", 4);
//Die Abfragezeichenfolge ist jetzt: 'foo=1&bar=2&foo=4'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("URL")}}
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developer.chrome.com/blog/urlsearchparams/)
