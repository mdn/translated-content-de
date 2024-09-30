---
title: "CSS: escape() statische Methode"
short-title: escape()
slug: Web/API/CSS/escape_static
l10n:
  sourceCommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{APIRef("CSSOM")}}

Die **`CSS.escape()`** statische Methode gibt einen
String zurück, der den übergebenen, escaped String enthält, hauptsächlich zur
Verwendung als Teil eines CSS-Selektors.

## Syntax

```js-nolint
CSS.escape(str)
```

### Parameter

- `str`
  - : Der zu escapende String.

### Rückgabewert

Der escapte String.

## Beispiele

### Grundlegende Ergebnisse

<!-- Hinweis: die {} müssen dreifach escaped werden, einmal für Yari -->

```js-nolint
CSS.escape(".foo#bar"); // "\\.foo\\#bar"
CSS.escape("()[]{}"); // "\\(\\)\\[\\]\\\{\\\}"
CSS.escape('--a'); // "--a"
CSS.escape(0); // "\\30 ", the Unicode code point of '0' is 30
CSS.escape('\0'); // "\ufffd", the Unicode REPLACEMENT CHARACTER
```

### Verwendung im Kontext

Um einen String für die Verwendung als Teil eines Selektors zu escapen, kann die `escape()` Methode verwendet werden:

```js
const element = document.querySelector(`#${CSS.escape(id)} > img`);
```

Die `escape()` Methode kann auch für das Escapen von Strings verwendet werden, obwohl sie Zeichen escaped, die nicht zwingend escapet werden müssten:

```js
const element = document.querySelector(`a[href="#${CSS.escape(fragment)}"]`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`CSS`](/de/docs/Web/API/CSS) Interface, in dem sich diese statische Methode befindet.
- [Ein Polyfill für die CSS.escape](https://github.com/mathiasbynens/CSS.escape/blob/master/css.escape.js)
