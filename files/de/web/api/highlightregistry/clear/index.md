---
title: "HighlightRegistry: clear()-Methode"
short-title: clear()
slug: Web/API/HighlightRegistry/clear
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("CSS Custom Highlight API")}}

Die **`clear()`**-Methode der [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Schnittstelle entfernt alle in der `HighlightRegistry` registrierten [`Highlight`](/de/docs/Web/API/Highlight)-Objekte.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Map.clear()")}}.

## Syntax

```js-nolint
clear()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Codeausschnitt registriert zwei Highlight-Objekte im Registry und löscht dann das Registry:

```js
const customHighlight1 = new Highlight(range1, range2);
const customHighlight2 = new Highlight(range3, range4, range5);

CSS.highlights.set("custom-highlight-1", customHighlight1);
CSS.highlights.set("custom-highlight-2", customHighlight2);

console.log(CSS.highlights.size); // 2

CSS.highlights.clear();
console.log(CSS.highlights.size); // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
