---
title: column-count
slug: Web/CSS/column-count
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
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
  - : Ist eine strikt positive {{cssxref("&lt;integer&gt;")}}, die die ideale Anzahl der Spalten beschreibt, in die der Inhalt des Elements aufgeteilt wird. Wenn auch {{cssxref("column-width")}} auf einen anderen Wert als `auto` gesetzt ist, gibt es lediglich die maximal erlaubte Anzahl von Spalten an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen Absatz in drei Spalten aufteilen

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
- [Erlernen: Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout) (Learn Layout)
- [Grundkonzepte des Multicol](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
