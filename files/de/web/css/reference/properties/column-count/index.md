---
title: column-count
slug: Web/CSS/Reference/Properties/column-count
l10n:
  sourceCommit: 04defe50e601cf53adde40c4bd652a7a4e6eae55
---

Die **`column-count`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt den Inhalt eines Elements in die angegebene Anzahl von Spalten auf.

Die {{cssxref("columns")}} Kurzform-Eigenschaft kann verwendet werden, um die Werte für `column-count`, {{cssxref("column-height")}} und {{cssxref("column-width")}} in einer einzigen Deklaration festzulegen.

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
  - : Die Anzahl der Spalten wird durch andere CSS-Eigenschaften, wie z.B. {{cssxref("column-width")}}, bestimmt.
- {{cssxref("&lt;integer&gt;")}}
  - : Ist ein strikt positiver {{cssxref("&lt;integer&gt;")}} und beschreibt die ideale Anzahl von Spalten, in die der Inhalt des Elements aufgeteilt werden soll. Wenn die {{cssxref("column-width")}} ebenfalls auf einen Nicht-`auto` Wert gesetzt ist, gibt sie lediglich die maximal zulässige Anzahl an Spalten an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aufteilung eines Absatzes in drei Spalten

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

- {{cssxref("column-height")}}
- {{cssxref("column-width")}}
- {{cssxref("columns")}} Kurzform
- {{CSSXref("column-rule-color")}}, {{CSSXref("column-rule-style")}}, {{CSSXref("column-rule-width")}}, {{CSSXref("column-rule")}} Kurzform
- [Lernen: Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout) (Lernen Layout)
- [Grundlegende Konzepte von Multicol](/de/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
