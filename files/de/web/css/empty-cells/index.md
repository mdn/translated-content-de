---
title: empty-cells
slug: Web/CSS/empty-cells
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`empty-cells`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Rahmen und Hintergründe um {{htmlelement("table")}} Zellen angezeigt werden, die keinen sichtbaren Inhalt haben.

{{EmbedInteractiveExample("pages/css/empty-cells.html")}}

Diese Eigenschaft hat nur eine Wirkung, wenn die {{cssxref("border-collapse")}} Eigenschaft auf `separate` gesetzt ist.

## Syntax

```css
/* Keyword values */
empty-cells: show;
empty-cells: hide;

/* Global values */
empty-cells: inherit;
empty-cells: initial;
empty-cells: revert;
empty-cells: revert-layer;
empty-cells: unset;
```

Die Eigenschaft `empty-cells` wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `show`
  - : Rahmen und Hintergründe werden wie bei normalen Zellen gezeichnet.
- `hide`
  - : Keine Rahmen oder Hintergründe werden gezeichnet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Leere Tabellenzellen anzeigen und verbergen

#### HTML

```html
<table class="table_1">
  <tr>
    <td>Moe</td>
    <td>Larry</td>
  </tr>
  <tr>
    <td>Curly</td>
    <td></td>
  </tr>
</table>
<br />
<table class="table_2">
  <tr>
    <td>Moe</td>
    <td>Larry</td>
  </tr>
  <tr>
    <td>Curly</td>
    <td></td>
  </tr>
</table>
```

#### CSS

```css
.table_1 {
  empty-cells: show;
}

.table_2 {
  empty-cells: hide;
}

td,
th {
  border: 1px solid gray;
  padding: 0.5rem;
}
```

#### Ergebnis

{{ EmbedLiveSample('Showing_and_hiding_empty_table_cells', '100%', '200') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border-collapse")}}
- [Tabellen stylen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
- [CSS table](/de/docs/Web/CSS/CSS_table) Modul
