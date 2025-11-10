---
title: Spalten-Kombinator
slug: Web/CSS/Reference/Selectors/Column_combinator
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Der **Spalten-Kombinator** (`||`) wird zwischen zwei CSS-Selektoren platziert. Er trifft nur auf diejenigen Elemente zu, die vom zweiten Selektor erfasst werden und zu den Spaltenelementen gehören, die vom ersten Selektor erfasst werden.

```css
/* Table cells that belong to the "selected" column */
col.selected||td {
  background: gray;
}
```

## Syntax

```css-nolint
/* The white space around the || combinator is optional but recommended. */
column-selector || cell-selector {
  /* style properties */
}
```

## Beispiele

### HTML

```html
<table border="1">
  <colgroup>
    <col span="2" />
    <col class="selected" />
  </colgroup>
  <tbody>
    <tr>
      <td>A</td>
      <td>B</td>
      <td>C</td>
    </tr>

    <tr>
      <td colspan="2">D</td>
      <td>E</td>
    </tr>
    <tr>
      <td>F</td>
      <td colspan="2">G</td>
    </tr>
  </tbody>
</table>
```

### CSS

```css
col.selected||td {
  background: gray;
  color: white;
  font-weight: bold;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit wird dieses Feature von keinen Browsern unterstützt.

## Siehe auch

- {{HTMLElement("col")}}
- {{HTMLElement("colgroup")}}
- {{CSSxRef("grid")}}
- {{CSSxRef(":nth-of-type")}}
- {{CSSxRef(":nth-last-of-type")}}
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
