---
title: column-rule-width
slug: Web/CSS/column-rule-width
l10n:
  sourceCommit: 489dbd4d8e2e099733d3bb04ad3f97678c54ac8e
---

{{CSSRef}}

Die **`column-rule-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite der Linie fest, die zwischen Spalten in einem Mehrspalten-Layout gezeichnet wird.

{{EmbedInteractiveExample("pages/css/column-rule-width.html")}}

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

Die Eigenschaft `column-rule-width` wird als ein einzelner `<'border-width'>` Wert angegeben.

### Werte

- `<'border-width'>`
  - : Dies ist ein Schlüsselwort, das durch {{ cssxref("border-width") }} definiert wird und die Breite der Linie beschreibt. Es kann entweder eine {{cssxref("&lt;length&gt;")}} sein oder eines der Schlüsselwörter `thin`, `medium` oder `thick`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer dicken Spaltenlinie

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

- [Mehrspalten-Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule-style")}}
- {{CSSXref("column-rule-color")}}
- {{CSSXref("column-rule")}}
