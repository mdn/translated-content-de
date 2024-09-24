---
title: "URLSearchParams: toString()-Methode"
short-title: toString()
slug: Web/API/URLSearchParams/toString
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`toString()`**-Methode der {{domxref("URLSearchParams")}}-Schnittstelle gibt einen Abfragestring zurück, der für die Verwendung in einer URL geeignet ist.

> [!NOTE]
> Diese Methode gibt den Abfragestring ohne Fragezeichen zurück. Dies unterscheidet sich von [`Location.search`](/de/docs/Web/API/Location/search), [`HTMLAnchorElement.search`](/de/docs/Web/API/HTMLAnchorElement/search) und [`URL.search`](/de/docs/Web/API/URL/search), die alle das Fragezeichen einschließen.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String ohne das Fragezeichen. (Gibt einen leeren String zurück, wenn keine Abfrageparameter festgelegt wurden.)

## Beispiele

```js
const url = new URL("https://example.com?foo=1&bar=2");
const params = new URLSearchParams(url.search);

// Fügt einen zweiten foo-Parameter hinzu.
params.append("foo", 4);
console.log(params.toString()); // Gibt 'foo=1&bar=2&foo=4' aus
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("URL")}}-Schnittstelle.
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developer.chrome.com/blog/urlsearchparams/)
