---
title: "Highlight: Highlight() Konstruktor"
short-title: Highlight()
slug: Web/API/Highlight/Highlight
l10n:
  sourceCommit: a2d0346638937e9c92c500dcb568803778e8354e
---

{{APIRef("CSS Custom Highlight API")}}

Der **`Highlight()`** Konstruktor gibt ein neu erstelltes [`Highlight`](/de/docs/Web/API/Highlight)-Objekt zurück, das eine Sammlung von [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Objekten enthalten kann, die mithilfe der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) gestylt werden können.

## Syntax

```js-nolint
new Highlight()
new Highlight(range)
new Highlight(range1, range2, /* …, */ rangeN)
```

### Parameter

- `range1`, …, `rangeN` {{optional_inline}}
  - : Eine oder mehrere anfängliche [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Objekte, die im neuen Highlight hinzugefügt werden sollen.

### Rückgabewert

Ein neues `Highlight`-Objekt.

## Beispiele

Der folgende Code zeigt, wie man ein leeres Highlight-Objekt erstellt und dann Bereiche hinzufügt:

```js
const highlight = new Highlight();
highlight.add(range1);
highlight.add(range2);
```

Der folgende Code zeigt, wie man ein neues Highlight-Objekt erstellt und während der Instanziierung Bereiche hinzufügt:

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
