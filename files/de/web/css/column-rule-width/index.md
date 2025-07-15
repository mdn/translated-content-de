---
title: column-rule-width
slug: Web/CSS/column-rule-width
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`column-rule-width`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Breite der Linie fest, die zwischen den Spalten in einem Mehrspalten-Layout gezogen wird.

{{InteractiveExample("CSS Demo: column-rule-width")}}

```css interactive-example-choice
column-rule-width: thin;
```

```css interactive-example-choice
column-rule-width: medium;
```

```css interactive-example-choice
column-rule-width: thick;
```

```css interactive-example-choice
column-rule-width: 12px;
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
/* Keyword values */
column-rule-width: thin;
column-rule-width: medium;
column-rule-width: thick;

/* <length> values */
column-rule-width: 1px;
column-rule-width: 2.5em;

/* Global values */
column-rule-width: inherit;
column-rule-width: initial;
column-rule-width: revert;
column-rule-width: revert-layer;
column-rule-width: unset;
```

Die Eigenschaft `column-rule-width` wird als einzelner `<'border-width'>`-Wert angegeben.

### Werte

- `<'border-width'>`
  - : Ist ein Schlüsselwort, das durch {{ cssxref("border-width") }} definiert wird und die Breite der Linie beschreibt. Es kann entweder ein {{cssxref("&lt;length&gt;")}} oder eines der Schlüsselwörter `thin`, `medium` oder `thick` sein.

## Formaler Hintergrund

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine dicke Spaltenlinie setzen

#### HTML

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-width`
  property is used to change the width of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: solid;
  column-rule-width: thick;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_a_thick_column_rule")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erlernen: Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule-style")}}
- {{CSSXref("column-rule-color")}}
- {{CSSXref("column-rule")}}
