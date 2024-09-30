---
title: "URLSearchParams: append() Methode"
short-title: append()
slug: Web/API/URLSearchParams/append
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`append()`**-Methode der [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
Schnittstelle fügt ein spezifisches Schlüssel/Wert-Paar als neuen Suchparameter hinzu.

Wie im untenstehenden Beispiel gezeigt, wird der gleiche Schlüssel, wenn er mehrmals angehängt wird,
mehrmals in der Parameterzeichenfolge für jeden Wert erscheinen.

## Syntax

```js-nolint
append(name, value)
```

### Parameter

- `name`
  - : Der Name des Parameters, der hinzugefügt werden soll.
- `value`
  - : Der Wert des Parameters, der hinzugefügt werden soll.

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
