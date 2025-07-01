---
title: column-rule-color
slug: Web/CSS/column-rule-color
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`column-rule-color`**-Eigenschaft in [CSS](/de/docs/Web/CSS) legt die Farbe der Linie fest, die zwischen Spalten in einem Mehrspalten-Layout gezeichnet wird.

{{InteractiveExample("CSS Demo: column-rule-color")}}

```css interactive-example-choice
column-rule-color: red;
```

```css interactive-example-choice
column-rule-color: rgb(48 125 222);
```

```css interactive-example-choice
column-rule-color: hsl(120 80% 40% / 0.6);
```

```css interactive-example-choice
column-rule-color: currentcolor;
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
  columns: 3;
  column-rule: solid;
  text-align: left;
}
```

## Syntax

```css
/* <color> values */
column-rule-color: red;
column-rule-color: rgb(192 56 78);
column-rule-color: transparent;
column-rule-color: hsl(0 100% 50% / 60%);

/* Global values */
column-rule-color: inherit;
column-rule-color: initial;
column-rule-color: revert;
column-rule-color: revert-layer;
column-rule-color: unset;
```

Die Eigenschaft `column-rule-color` wird als einzelner `<color>`-Wert angegeben.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe der Linie, die die Spalten trennt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer blauen Spaltenlinie

#### HTML

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-color`
  property is used to change the color of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: solid;
  column-rule-color: blue;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_a_blue_column_rule")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, und {{cssxref("caret-color")}}
