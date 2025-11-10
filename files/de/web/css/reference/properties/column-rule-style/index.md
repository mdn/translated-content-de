---
title: column-rule-style
slug: Web/CSS/Reference/Properties/column-rule-style
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`column-rule-style`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Stil der Linie fest, die in einem Mehrspaltenlayout zwischen den Spalten gezogen wird.

{{InteractiveExample("CSS Demo: column-rule-style")}}

```css interactive-example-choice
column-rule-style: none;
```

```css interactive-example-choice
column-rule-style: dotted;
```

```css interactive-example-choice
column-rule-style: solid;
```

```css interactive-example-choice
column-rule-style: double;
```

```css interactive-example-choice
column-rule-style: ridge;
column-rule-color: #8888ff;
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
/* <'border-style'> values */
column-rule-style: none;
column-rule-style: hidden;
column-rule-style: dotted;
column-rule-style: dashed;
column-rule-style: solid;
column-rule-style: double;
column-rule-style: groove;
column-rule-style: ridge;
column-rule-style: inset;
column-rule-style: outset;

/* Global values */
column-rule-style: inherit;
column-rule-style: initial;
column-rule-style: revert;
column-rule-style: revert-layer;
column-rule-style: unset;
```

Die `column-rule-style`-Eigenschaft wird als ein einzelner `<'border-style'>`-Wert angegeben.

### Werte

- `<'border-style'>`
  - : Ist ein Schlüsselwort, das durch {{ cssxref("border-style") }} definiert wird und den Stil der Linie beschreibt. Die Gestaltung muss wie im zusammenfallenden Randmodell interpretiert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen eines gestrichelten Spaltentrichters

#### HTML

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-style`
  property is used to change the style of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: dashed;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_a_dashed_column_rule') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Mehrspaltenlayout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule")}}
- {{CSSXref("column-rule-width")}}
- {{CSSXref("column-rule-color")}}
