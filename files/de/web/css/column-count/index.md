---
title: column-count
slug: Web/CSS/column-count
l10n:
  sourceCommit: f30eb42442f75f493ebb5ff1f119abf263592d54
---

{{CSSRef}}

Die **`column-count`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt den Inhalt eines Elements in die angegebene Anzahl von Spalten auf.

{{EmbedInteractiveExample("pages/css/column-count.html")}}

## Syntax

```css
/* Keyword value */
column-count: auto;

/* <integer> value */
column-count: 3;

/* Global values */
column-count: inherit;
column-count: initial;
column-count: revert;
column-count: revert-layer;
column-count: unset;
```

### Werte

- `auto`
  - : Die Anzahl der Spalten wird durch andere CSS-Eigenschaften bestimmt, wie z.B. {{cssxref("column-width")}}.
- {{cssxref("&lt;integer&gt;")}}
  - : Ist ein streng positiver {{cssxref("&lt;integer&gt;")}}, der die ideale Anzahl von Spalten beschreibt, in die der Inhalt des Elements aufgeteilt wird. Wenn die {{cssxref("column-width")}} ebenfalls auf einen Wert ungleich `auto` gesetzt ist, gibt sie lediglich die maximal zulässige Anzahl von Spalten an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen Absatz auf drei Spalten aufteilen

#### HTML

```html
<p class="content-box">
  This is a bunch of text split into three columns using the CSS
  <code>column-count</code>
  property. The text is equally distributed over the columns.
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
}
```

#### Ergebnis

{{EmbedLiveSample('Splitting_a_paragraph_across_three_columns', 'auto', 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("column-width")}}, {{CSSXref("columns")}} Kurzschreibweise
- {{CSSXref("column-rule-color")}}, {{CSSXref("column-rule-style")}}, {{CSSXref("column-rule-width")}}, {{CSSXref("column-rule")}} Kurzschreibweise
- [Mehrspalten-Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout) (Layout lernen)
- [Grundkonzepte von Multicol](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
