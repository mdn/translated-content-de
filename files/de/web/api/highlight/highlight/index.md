---
title: "Highlight: Highlight() Konstruktor"
short-title: Highlight()
slug: Web/API/Highlight/Highlight
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSS Custom Highlight API")}}

Der **`Highlight()`** Konstruktor gibt ein neu erstelltes [`Highlight`](/de/docs/Web/API/Highlight) Objekt zurück, das eine Sammlung von [`Range`](/de/docs/Web/API/Range) Objekten enthalten kann, die mit der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) gestaltet werden können.

## Syntax

```js-nolint
new Highlight()
new Highlight(range)
new Highlight(range1, range2, /* …, */ rangeN)
```

### Parameter

- `range1`, …, `rangeN` {{optional_inline}}
  - : Eine oder mehrere anfängliche [`Range`](/de/docs/Web/API/Range) Objekte, die dem neuen Highlight hinzugefügt werden sollen.

### Rückgabewert

Ein neues `Highlight` Objekt.

## Beispiele

Der folgende Beispielcode zeigt, wie man ein leeres Highlight-Objekt erstellt und dann Bereiche hinzufügt:

```js
const highlight = new Highlight();
highlight.add(range1);
highlight.add(range2);
```

Der folgende Beispielcode zeigt, wie man ein neues Highlight-Objekt erstellt und während der Instanziierung Bereiche hinzufügt:

```js
const highlight = new Highlight(range1, range2);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API](/de/docs/Web/CSS/Guides/Custom_highlight_API) Modul
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
