---
title: column-rule-style
slug: Web/CSS/column-rule-style
l10n:
  sourceCommit: 489dbd4d8e2e099733d3bb04ad3f97678c54ac8e
---

{{CSSRef}}

Die **`column-rule-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Stil der Linie fest, die zwischen Spalten in einem Mehrspaltenlayout gezeichnet wird.

{{EmbedInteractiveExample("pages/css/column-rule-style.html")}}

## Syntax

```css
/* <'border-style'> Werte */
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

/* Globale Werte */
column-rule-style: inherit;
column-rule-style: initial;
column-rule-style: revert;
column-rule-style: revert-layer;
column-rule-style: unset;
```

Die Eigenschaft `column-rule-style` wird als einzelner `<'border-style'>` Wert angegeben.

### Werte

- `<'border-style'>`
  - : Ist ein durch {{ cssxref("border-style") }} definierter Schlüsselwortwert, der den Stil der Regel beschreibt. Das Styling muss wie im zusammenbrechenden Rahmenmodell interpretiert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine gestrichelte Spaltenregel setzen

#### HTML

```html
<p>
  Dies ist ein Text, der in drei Spalten aufgeteilt ist. Die
  `column-rule-style` Eigenschaft wird verwendet, um den Stil der Linie
  zu ändern, die zwischen den Spalten gezeichnet wird. Finden Sie das
  nicht wunderbar?
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

- [Mehrspalten-Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule")}}
- {{CSSXref("column-rule-width")}}
- {{CSSXref("column-rule-color")}}
