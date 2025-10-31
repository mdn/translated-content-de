---
title: empty-cells
slug: Web/CSS/Reference/Properties/empty-cells
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`empty-cells`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Rahmen und Hintergründe um {{htmlelement("table")}}-Zellen angezeigt werden, die keinen sichtbaren Inhalt haben.

{{InteractiveExample("CSS Demo: empty-cells")}}

```css interactive-example-choice
empty-cells: show;
```

```css interactive-example-choice
empty-cells: hide;
```

```html interactive-example
<section class="default-example" id="default-example">
  <table class="transition-all" id="example-element">
    <tr>
      <th>Client Name</th>
      <th>Age</th>
    </tr>
    <tr>
      <td></td>
      <td>25</td>
    </tr>
    <tr>
      <td>Louise Q.</td>
      <td></td>
    </tr>
    <tr>
      <td>Owen B.</td>
      <td></td>
    </tr>
    <tr>
      <td>Stan L.</td>
      <td>71</td>
    </tr>
  </table>
</section>
```

```css interactive-example
th,
td {
  border: 2px solid #aa1199;
  padding: 0.25rem 0.5rem;
}
```

Diese Eigenschaft hat nur eine Wirkung, wenn die Eigenschaft {{cssxref("border-collapse")}} auf `separate` gesetzt ist.

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

Die Eigenschaft `empty-cells` wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `show`
  - : Rahmen und Hintergründe werden wie in normalen Zellen gezeichnet.
- `hide`
  - : Es werden keine Rahmen oder Hintergründe gezeichnet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Leere Tabellenzellen anzeigen und ausblenden

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
- [Lernen: Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
- [CSS-Tabellen](/de/docs/Web/CSS/CSS_table) Modul
