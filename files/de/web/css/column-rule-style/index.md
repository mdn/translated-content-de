---
title: column-rule-style
slug: Web/CSS/column-rule-style
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`column-rule-style`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Stil der Linie fest, die zwischen Spalten in einem Mehrspalten-Layout gezeichnet wird.

{{EmbedInteractiveExample("pages/css/column-rule-style.html")}}

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

Die `column-rule-style`-Eigenschaft wird als einzelner `<'border-style'>`-Wert angegeben.

### Werte

- `<'border-style'>`
  - : Ist ein Schlüsselwort, das durch {{ cssxref("border-style") }} definiert wird und den Stil der Trennung beschreibt. Die Formatierung muss im Sinne des Kollaps-Grenzmodells interpretiert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine gestrichelte Spaltentrennung festlegen

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

- [Erlernen: Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule")}}
- {{CSSXref("column-rule-width")}}
- {{CSSXref("column-rule-color")}}
