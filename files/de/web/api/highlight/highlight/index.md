---
title: "Highlight: Highlight() Konstruktor"
short-title: Highlight()
slug: Web/API/Highlight/Highlight
l10n:
  sourceCommit: 4dc98c2d0eb29d966d217605a5c49565dbb3ca76
---

{{APIRef("CSS Custom Highlight API")}}

Der **`Highlight()`** Konstruktor gibt ein neu erstelltes [`Highlight`](/de/docs/Web/API/Highlight)-Objekt zurück, das eine Sammlung von [`Range`](/de/docs/Web/API/Range)-Objekten enthalten kann, die mit der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) gestylt werden können.

## Syntax

```js-nolint
new Highlight()
new Highlight(range)
new Highlight(range1, range2, /* …, */ rangeN)
```

### Parameter

- `range1`, …, `rangeN` {{optional_inline}}
  - : Ein oder mehrere anfängliche [`Range`](/de/docs/Web/API/Range)-Objekte, die dem neuen Highlight hinzugefügt werden sollen.

### Rückgabewert

Ein neues `Highlight`-Objekt.

## Beispiele

Der unten stehende Beispielcode zeigt, wie man ein leeres Highlight-Objekt erstellt und dann Bereiche hinzufügt:

```js
const highlight = new Highlight();
highlight.add(range1);
highlight.add(range2);
```

Der unten stehende Beispielcode zeigt, wie man ein neues Highlight-Objekt erstellt und während der Instanziierung Bereiche hinzufügt:

```js
const highlight = new Highlight(range1, range2);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: Die Zukunft des Textbereichs-Hervorhebens im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
