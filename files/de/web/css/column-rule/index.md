---
title: column-rule
slug: Web/CSS/column-rule
l10n:
  sourceCommit: 9e521726ed1d605756b73a788eaa55498d540821
---

{{CSSRef}}

Die **`column-rule`** [Kurzform](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite, den Stil und die Farbe der Linie fest, die in einem Mehrspalten-Layout zwischen den Spalten gezogen wird.

{{EmbedInteractiveExample("pages/css/column-rule.html")}}

## Bestandteil-Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{Cssxref("column-rule-color")}}
- {{Cssxref("column-rule-style")}}
- {{Cssxref("column-rule-width")}}

## Syntax

```css
column-rule: dotted;
column-rule: solid 8px;
column-rule: solid blue;
column-rule: thick inset blue;

/* Globale Werte */
column-rule: inherit;
column-rule: initial;
column-rule: revert;
column-rule: revert-layer;
column-rule: unset;
```

### Werte

Die `column-rule` Eigenschaft wird als einer, zwei oder drei der unten aufgeführten Werte in beliebiger Reihenfolge angegeben.

- `<'column-rule-width'>`
  - : Ist eine {{cssxref("&lt;length&gt;")}} oder eines der drei Schlüsselwörter, `thin`, `medium`, oder `thick`. Siehe {{cssxref("border-width")}} für Details.
- `<'column-rule-style'>`
  - : Siehe {{cssxref("border-style")}} für mögliche Werte und Details.
- `<'column-rule-color'>`
  - : Ist ein {{cssxref("&lt;color&gt;")}} Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel 1

```css
/* Entspricht "medium dotted currentcolor" */
p.foo {
  column-rule: dotted;
}

/* Entspricht "medium solid blue" */
p.bar {
  column-rule: solid blue;
}

/* Entspricht "8px solid currentcolor" */
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
  background: #ff7;
  column-count: 3;
  column-rule: inset 2px #33f;
}
```

#### Ergebnis

{{EmbedLiveSample('Example_2')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mehrspaltiges Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule-style")}}
- {{CSSXref("column-rule-width")}}
- {{CSSXref("column-rule-color")}}