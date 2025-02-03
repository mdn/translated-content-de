---
title: "URLSearchParams: `append()` Methode"
short-title: append()
slug: Web/API/URLSearchParams/append
l10n:
  sourceCommit: bfe3107430ad0646713b57262e02625a2e155fd4
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`append()`**-Methode des [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
Interfaces fügt ein bestimmtes Schlüssel/Wert-Paar als neuen Suchparameter hinzu.

Wie im folgenden Beispiel gezeigt, erscheint derselbe Schlüssel in der Parameterzeichenkette mehrfach, wenn er mehrmals hinzugefügt wird, und zwar für jeden Wert.

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

### Hinzufügen desselben Parameters mehrfach

```js
const url = new URL("https://example.com?foo=1&bar=2");
const params = new URLSearchParams(url.search);

// Add a second foo parameter.
params.append("foo", 4);
// Query string is now: 'foo=1&bar=2&foo=4'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`URL`](/de/docs/Web/API/URL)
- [Google Developers: Einfache URL-Manipulation mit URLSearchParams](https://developer.chrome.com/blog/urlsearchparams/)
