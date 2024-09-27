---
title: "URLSearchParams: toString()-Methode"
short-title: toString()
slug: Web/API/URLSearchParams/toString
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`toString()`**-Methode des [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Interfaces gibt einen Abfragezeichensatz zurück, der für die Verwendung in einer URL geeignet ist.

> [!NOTE]
> Diese Methode gibt den Abfragezeichensatz ohne das Fragezeichen zurück. Das unterscheidet sich von [`Location.search`](/de/docs/Web/API/Location/search), [`HTMLAnchorElement.search`](/de/docs/Web/API/HTMLAnchorElement/search) und [`URL.search`](/de/docs/Web/API/URL/search), die alle das Fragezeichen einschließen.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein Zeichenkette ohne Fragezeichen. (Gibt eine leere Zeichenkette zurück, wenn keine Suchparameter gesetzt wurden.)

## Beispiele

```js
const url = new URL("https://example.com?foo=1&bar=2");
const params = new URLSearchParams(url.search);

// Add a second foo parameter.
params.append("foo", 4);
console.log(params.toString()); // Prints 'foo=1&bar=2&foo=4'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`URL`](/de/docs/Web/API/URL)-Interface.
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developer.chrome.com/blog/urlsearchparams/)
