---
title: column-rule
slug: Web/CSS/Reference/Properties/column-rule
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`column-rule`** [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) der [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Breite, den Stil und die Farbe der Linie fest, die zwischen den Spalten in einem Mehrspalten-Layout gezogen wird.

{{InteractiveExample("CSS Demo: column-rule")}}

```css interactive-example-choice
column-rule: dotted;
```

```css interactive-example-choice
column-rule: solid 6px;
```

```css interactive-example-choice
column-rule: solid blue;
```

```css interactive-example-choice
column-rule: thick inset blue;
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

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{Cssxref("column-rule-color")}}
- {{Cssxref("column-rule-style")}}
- {{Cssxref("column-rule-width")}}

## Syntax

```css
column-rule: dotted;
column-rule: solid 8px;
column-rule: solid blue;
column-rule: thick inset blue;

/* Global values */
column-rule: inherit;
column-rule: initial;
column-rule: revert;
column-rule: revert-layer;
column-rule: unset;
```

### Werte

Die `column-rule`-Eigenschaft wird als ein, zwei oder drei der unten aufgeführten Werte in beliebiger Reihenfolge angegeben.

- `<'column-rule-width'>`
  - : Ist ein {{cssxref("&lt;length&gt;")}} oder eines der drei Schlüsselwörter, `thin`, `medium` oder `thick`. Siehe {{cssxref("border-width")}} für Details.
- `<'column-rule-style'>`
  - : Siehe {{cssxref("border-style")}} für mögliche Werte und Details.
- `<'column-rule-color'>`
  - : Ist ein {{cssxref("&lt;color&gt;")}}-Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel 1

```css
/* Same as "medium dotted currentColor" */
p.foo {
  column-rule: dotted;
}

/* Same as "medium solid blue" */
p.bar {
  column-rule: solid blue;
}

/* Same as "8px solid currentColor" */
p.baz {
  column-rule: solid 8px;
}

p.abc {
  column-rule: thick inset blue;
}
```

### Beispiel 2

#### HTML

```html
<p class="content-box">
  This is a bunch of text split into three columns. Take note of how the
  `column-rule` property is used to adjust the style, width, and color of the
  rule that appears between the columns.
</p>
```

#### CSS

```css
.content-box {
  padding: 0.3em;
  background: #ffff77;
  column-count: 3;
  column-rule: inset 2px #3333ff;
}
```

#### Ergebnis

{{EmbedLiveSample('Example_2')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule-style")}}
- {{CSSXref("column-rule-width")}}
- {{CSSXref("column-rule-color")}}
