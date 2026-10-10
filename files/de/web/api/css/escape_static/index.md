---
title: "CSS: Statische Methode escape()"
short-title: escape()
slug: Web/API/CSS/escape_static
l10n:
  sourceCommit: 47b1321d6cac5c7093583162c4cf73e015cc4905
---

{{APIRef("CSSOM")}}

Die statische Methode **`CSS.escape()`** gibt einen String zurück, der den als Parameter übergebenen String in maskierter Form enthält. Sie wird hauptsächlich zur Verwendung als Teil eines CSS-Selektors eingesetzt.

## Syntax

```js-nolint
CSS.escape(str)
```

### Parameter

- `str`
  - : Der zu maskierende String.

### Rückgabewert

Der maskierte String.

## Beispiele

### Grundlegende Ergebnisse

<!-- Hinweis: Die {} müssen dreifach maskiert werden, einmal für Yari -->

```js-nolint
CSS.escape(".foo#bar"); // "\\.foo\\#bar"
CSS.escape("()[]{}"); // "\\(\\)\\[\\]\\\{\\\}"
CSS.escape('--a'); // "--a"
CSS.escape(0); // "\\30 ", the Unicode code point of '0' is 30
CSS.escape('\0'); // "\ufffd", the Unicode REPLACEMENT CHARACTER
```

### Verwendung im Kontext

Mit der Methode `escape()` können Sie einen String für die Verwendung als Teil eines Selektors maskieren:

```js
const element = document.querySelector(`#${CSS.escape(id)} > img`);
```

Mit der Methode `escape()` können Sie auch Strings maskieren. Dabei maskiert sie allerdings auch Zeichen, die nicht zwingend maskiert werden müssen:

```js
const element = document.querySelector(`a[href="#${CSS.escape(fragment)}"]`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface [`CSS`](/de/docs/Web/API/CSS), zu dem diese statische Methode gehört.
