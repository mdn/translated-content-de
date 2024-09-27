---
title: "URLSearchParams: append()-Methode"
short-title: append()
slug: Web/API/URLSearchParams/append
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`append()`**-Methode der Schnittstelle [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) fügt ein angegebenes Schlüssel/Wert-Paar als neuen Suchparameter hinzu.

Wie im folgenden Beispiel gezeigt wird, erscheint der gleiche Schlüssel, wenn er mehrfach hinzugefügt wird, mehrmals in der Parameterzeichenfolge, jeweils mit dem entsprechenden Wert.

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

//Add a second foo parameter.
params.append("foo", 4);
//Query string is now: 'foo=1&bar=2&foo=4'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`URL`](/de/docs/Web/API/URL)
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developer.chrome.com/blog/urlsearchparams/)
