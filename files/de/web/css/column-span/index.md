---
title: column-span
slug: Web/CSS/column-span
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}

Die **`column-span`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem Element, sich über alle Spalten zu erstrecken, wenn der Wert auf `all` gesetzt ist.

{{EmbedInteractiveExample("pages/css/column-span.html")}}

Ein Element, das sich über mehr als eine Spalte erstreckt, wird als **spanning element** bezeichnet.

## Syntax

```css
/* Schlüsselwortwerte */
column-span: none;
column-span: all;

/* Globale Werte */
column-span: inherit;
column-span: initial;
column-span: revert;
column-span: revert-layer;
column-span: unset;
```

Die `column-span` Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `none`
  - : Das Element erstreckt sich nicht über mehrere Spalten.
- `all`
  - : Das Element erstreckt sich über alle Spalten. Inhalt, der sich im normalen Fluss befindet und vor dem Element erscheint, wird automatisch über alle Spalten verteilt, bevor das Element erscheint. Das Element bildet einen neuen Blockformatierungskontext.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Überschrift über Spalten erstrecken

In diesem Beispiel wird die Überschrift so gestaltet, dass sie sich über alle Spalten des Artikels erstreckt.

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

- [Spanning and balancing columns](/de/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns)
- [Inline-level elements](/de/docs/Glossary/Inline-level_content)
- {{domxref("HTMLSpanElement")}}
