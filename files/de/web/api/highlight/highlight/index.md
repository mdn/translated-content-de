---
title: "Highlight: Konstruktor Highlight()"
short-title: Highlight()
slug: Web/API/Highlight/Highlight
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("CSS Custom Highlight API")}}

Der **`Highlight()`**-Konstruktor gibt ein neu erstelltes [`Highlight`](/de/docs/Web/API/Highlight)-Objekt zurück, das eine Sammlung von [`Range`](/de/docs/Web/API/Range)-Objekten enthalten kann, die mithilfe der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) gestylt werden sollen.

## Syntax

```js-nolint
new Highlight()
new Highlight(range)
new Highlight(range1, range2, /* …, */ rangeN)
```

### Parameter

- `range1`, …, `rangeN` {{optional_inline}}
  - : Ein oder mehrere anfängliche [`Range`](/de/docs/Web/API/Range)-Objekte, die zum neuen Highlight hinzugefügt werden sollen.

### Rückgabewert

Ein neues `Highlight`-Objekt.

## Beispiele

Der folgende Beispielcode demonstriert, wie man ein leeres Highlight-Objekt erstellt und dann Bereiche hinzufügt:

```js
const highlight = new Highlight();
highlight.add(range1);
highlight.add(range2);
```

Der folgende Beispielcode zeigt, wie man ein neues Highlight-Objekt erstellt und beim Erstellen Bereiche hinzufügt:

```js
const highlight = new Highlight(range1, range2);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: Die Zukunft der Texthervorhebung im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
