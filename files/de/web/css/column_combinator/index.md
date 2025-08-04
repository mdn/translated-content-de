---
title: Spaltenkombinator
slug: Web/CSS/Column_combinator
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

{{SeeCompatTable}}

Der **Spaltenkombinator** (`||`) wird zwischen zwei CSS-Selektoren platziert. Er erfasst nur diejenigen Elemente, die durch den zweiten Selektor übereinstimmen und zu den Spaltenelementen gehören, die durch den ersten übereinstimmen.

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

Derzeit wird dieses Feature von keinem Browser unterstützt.

## Siehe auch

- {{HTMLElement("col")}}
- {{HTMLElement("colgroup")}}
- {{CSSxRef("grid")}}
- {{CSSxRef(":nth-of-type")}}
- {{CSSxRef(":nth-last-of-type")}}
- [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) Modul
