---
title: column-rule-width
slug: Web/CSS/column-rule-width
l10n:
  sourceCommit: 489dbd4d8e2e099733d3bb04ad3f97678c54ac8e
---

{{CSSRef}}

Die **`column-rule-width`**-Eigenschaft in [CSS](/de/docs/Web/CSS) legt die Breite der Linie fest, die zwischen Spalten in einem Mehrspalten-Layout gezeichnet wird.

{{EmbedInteractiveExample("pages/css/column-rule-width.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
column-rule-width: thin;
column-rule-width: medium;
column-rule-width: thick;

/* <Längen>-Werte */
column-rule-width: 1px;
column-rule-width: 2.5em;

/* Globale Werte */
column-rule-width: inherit;
column-rule-width: initial;
column-rule-width: revert;
column-rule-width: revert-layer;
column-rule-width: unset;
```

Die `column-rule-width`-Eigenschaft wird als einzelner `<'border-width'>` Wert angegeben.

### Werte

- `<'border-width'>`
  - : Ist ein Schlüsselwort definiert durch {{ cssxref("border-width") }}, das die Breite der Linie beschreibt. Es kann entweder eine {{cssxref("&lt;length&gt;")}} oder eines der Schlüsselwörter `thin`, `medium` oder `thick` sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine dicke Spaltenlinie setzen

#### HTML

```html
<p>
  Dies ist ein Absatz von Text, der in drei Spalten aufgeteilt ist. Die
  `column-rule-width`-Eigenschaft wird verwendet, um die Breite der Linie zu
  ändern, die zwischen den Spalten gezeichnet wird. Finden Sie das nicht
  wunderbar?
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

- [Mehrspalten-Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule-style")}}
- {{CSSXref("column-rule-color")}}
- {{CSSXref("column-rule")}}
