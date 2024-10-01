---
title: column-span
slug: Web/CSS/column-span
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}

Die **`column-span`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es, dass ein Element über alle Spalten hinweg spannt, wenn ihr Wert auf `all` gesetzt ist.

{{EmbedInteractiveExample("pages/css/column-span.html")}}

Ein Element, das über mehr als eine Spalte spannt, wird als **spannendes Element** bezeichnet.

## Syntax

```css
/* Keyword values */
column-span: none;
column-span: all;

/* Global values */
column-span: inherit;
column-span: initial;
column-span: revert;
column-span: revert-layer;
column-span: unset;
```

Die `column-span`-Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `none`
  - : Das Element spannt nicht über mehrere Spalten.
- `all`
  - : Das Element spannt über alle Spalten. Inhalt im normalen Fluss, der vor dem Element erscheint, wird automatisch über alle Spalten ausgeglichen, bevor das Element erscheint. Das Element etabliert einen neuen Blockformatierungskontext.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen Überschrift über Spalten spannen lassen

In diesem Beispiel wird die Überschrift so gestaltet, dass sie über alle Spalten des Artikels spannt.

#### HTML

```html
<article>
  <h2>Header spanning all of the columns</h2>
  <p>
    The h2 should span all the columns. The rest of the text should be
    distributed among the columns.
  </p>
  <p>
    This is a bunch of text split into three columns using the CSS `columns`
    property. The text is equally distributed over the columns.
  </p>
  <p>
    This is a bunch of text split into three columns using the CSS `columns`
    property. The text is equally distributed over the columns.
  </p>
  <p>
    This is a bunch of text split into three columns using the CSS `columns`
    property. The text is equally distributed over the columns.
  </p>
  <p>
    This is a bunch of text split into three columns using the CSS `columns`
    property. The text is equally distributed over the columns.
  </p>
</article>
```

#### CSS

```css
article {
  columns: 3;
}

h2 {
  column-span: all;
}
```

#### Ergebnis

{{EmbedLiveSample('Making_a_heading_span_columns', 'auto', 260)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spalten spannen und ausbalancieren](/de/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns)
- {{Glossary("Inline-level_content", "Inline-Level-Elemente")}}
- [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement)
