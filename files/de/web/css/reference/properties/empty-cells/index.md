---
title: "`empty-cells` CSS property"
short-title: empty-cells
slug: Web/CSS/Reference/Properties/empty-cells
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`empty-cells`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Ränder und Hintergründe um {{htmlelement("table")}}-Zellen erscheinen, die keinen sichtbaren Inhalt haben.

Diese Eigenschaft hat nur Auswirkungen, wenn die {{cssxref("border-collapse")}}-Eigenschaft auf `separate` gesetzt ist.

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
    <tbody>
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
    </tbody>
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

Die `empty-cells`-Eigenschaft wird als eines der unten aufgelisteten Schlüsselwortwerte angegeben.

### Werte

- `show`
  - : Ränder und Hintergründe werden wie bei normalen Zellen gezeichnet.
- `hide`
  - : Keine Ränder oder Hintergründe werden gezeichnet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Leere Tabellenzellen zeigen und verstecken

#### HTML

```html
<table class="table_1">
  <tbody>
    <tr>
      <td>Moe</td>
      <td>Larry</td>
    </tr>
    <tr>
      <td>Curly</td>
      <td></td>
    </tr>
  </tbody>
</table>
<br />
<table class="table_2">
  <tbody>
    <tr>
      <td>Moe</td>
      <td>Larry</td>
    </tr>
    <tr>
      <td>Curly</td>
      <td></td>
    </tr>
  </tbody>
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
- [CSS-Tabelle](/de/docs/Web/CSS/Guides/Table) Modul
