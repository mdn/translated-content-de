---
title: column-count
slug: Web/CSS/column-count
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`column-count`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt den Inhalt eines Elements in die angegebene Anzahl von Spalten auf.

{{InteractiveExample("CSS Demo: column-count")}}

```css interactive-example-choice
column-count: 2;
```

```css interactive-example-choice
column-count: 3;
```

```css interactive-example-choice
column-count: 4;
```

```css interactive-example-choice
column-count: auto;
column-width: 8rem;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 100%;
  text-align: left;
}
```

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
  - : Ist eine streng positive {{cssxref("&lt;integer&gt;")}}, die die ideale Anzahl von Spalten beschreibt, in die der Inhalt des Elements aufgeteilt wird. Wenn die {{cssxref("column-width")}} ebenfalls auf einen nicht-`auto` Wert gesetzt ist, gibt es lediglich die maximal zulässige Anzahl von Spalten an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen Absatz über drei Spalten aufteilen

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
- [Lernen: Mehrspaltiges Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout) (Lernlayout)
- [Grundlagen von Multicol](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
