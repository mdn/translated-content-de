---
title: "CSS: escape() statische Methode"
short-title: escape()
slug: Web/API/CSS/escape_static
l10n:
  sourceCommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{APIRef("CSSOM")}}

Die statische Methode **`CSS.escape()`** gibt einen String zurück, der den übergebenen String in entkommener Form enthält, hauptsächlich zur Verwendung als Teil eines CSS-Selectors.

## Syntax

```js-nolint
CSS.escape(str)
```

### Parameter

- `str`
  - : Der zu entkommende String.

### Rückgabewert

Der entkommene String.

## Beispiele

### Grundlegende Ergebnisse

<!-- Note: the {} need to be triple-escaped, once for Yari -->

```js-nolint
CSS.escape(".foo#bar"); // "\\.foo\\#bar"
CSS.escape("()[]{}"); // "\\(\\)\\[\\]\\\{\\\}"
CSS.escape('--a'); // "--a"
CSS.escape(0); // "\\30 ", the Unicode code point of '0' is 30
CSS.escape('\0'); // "\ufffd", the Unicode REPLACEMENT CHARACTER
```

### Anwendungsbeispiele im Kontext

Um einen String zur Verwendung als Teil eines Selectors zu entkommen, kann die Methode `escape()` verwendet werden:

```js
const element = document.querySelector(`#${CSS.escape(id)} > img`);
```

Die Methode `escape()` kann auch zum Entkommen von Strings verwendet werden, obwohl sie Zeichen entkommt, die nicht unbedingt entkommen werden müssen:

```js
const element = document.querySelector(`a[href="#${CSS.escape(fragment)}"]`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`CSS`](/de/docs/Web/API/CSS) Interface, in dem sich diese statische Methode befindet.
- [Ein Polyfill für CSS.escape](https://github.com/mathiasbynens/CSS.escape/blob/master/css.escape.js)
