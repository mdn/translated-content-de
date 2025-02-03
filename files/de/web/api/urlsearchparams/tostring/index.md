---
title: "URLSearchParams: toString() Methode"
short-title: toString()
slug: Web/API/URLSearchParams/toString
l10n:
  sourceCommit: bfe3107430ad0646713b57262e02625a2e155fd4
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`toString()`**-Methode der [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Schnittstelle gibt eine Abfragezeichenfolge zurück, die für die Verwendung in einer URL geeignet ist.

> [!NOTE]
> Diese Methode gibt die Abfragezeichenfolge ohne das Fragezeichen zurück. Dies unterscheidet sich von [`Location.search`](/de/docs/Web/API/Location/search), [`HTMLAnchorElement.search`](/de/docs/Web/API/HTMLAnchorElement/search) und [`URL.search`](/de/docs/Web/API/URL/search), die alle das Fragezeichen enthalten.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein Zeichenfolge, ohne das Fragezeichen. Gibt eine leere Zeichenfolge zurück, wenn keine Suchparameter festgelegt wurden. Zeichen im [`application/x-www-form-urlencoded` percent-encode set](https://url.spec.whatwg.org/#application-x-www-form-urlencoded-percent-encode-set) (das alle Codepunkte außer ASCII-Alphanumerik, `*`, `-`, `.`, und `_` enthält) werden {{Glossary("Percent-encoding", "percent-codiert")}}, und U+0020 SPACE wird als `+` kodiert.

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

- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle.
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developer.chrome.com/blog/urlsearchparams/)
