---
title: "CSS: escape() statische Methode"
short-title: escape()
slug: Web/API/CSS/escape_static
l10n:
  sourceCommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{APIRef("CSSOM")}}

Die **`CSS.escape()`** statische Methode gibt eine Zeichenkette zurück, die die übergebene Zeichenkette maskiert enthält, hauptsächlich zur Verwendung als Teil eines CSS-Selektors.

## Syntax

```js-nolint
CSS.escape(str)
```

### Parameter

- `str`
  - : Die Zeichenkette, die maskiert werden soll.

### Rückgabewert

Die maskierte Zeichenkette.

## Beispiele

### Grundlegende Ergebnisse

<!-- Hinweis: die {} müssen dreifach-escaped werden, einmal für Yari -->

```js-nolint
CSS.escape(".foo#bar"); // "\\.foo\\#bar"
CSS.escape("()[]{}"); // "\\(\\)\\[\\]\\\{\\\}"
CSS.escape('--a'); // "--a"
CSS.escape(0); // "\\30 ", der Unicode-Codepunkt von '0' ist 30
CSS.escape('\0'); // "\ufffd", das Unicode-ERSATZ-ZEICHEN
```

### Verwendung im Kontext

Um eine Zeichenkette zur Verwendung als Teil eines Selektors zu maskieren, kann die Methode `escape()` verwendet werden:

```js
const element = document.querySelector(`#${CSS.escape(id)} > img`);
```

Die `escape()`-Methode kann auch zum Maskieren von Zeichenketten verwendet werden, obwohl sie Zeichen maskiert, die nicht unbedingt maskiert werden müssen:

```js
const element = document.querySelector(`a[href="#${CSS.escape(fragment)}"]`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{DOMxRef("CSS")}} Interface, in welchem sich diese statische Methode befindet.
- [Ein Polyfill für CSS.escape](https://github.com/mathiasbynens/CSS.escape/blob/master/css.escape.js)
