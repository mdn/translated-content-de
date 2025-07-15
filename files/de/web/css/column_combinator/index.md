---
title: Column-Kombinator
slug: Web/CSS/Column_combinator
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Der **column-Kombinator** (`||`) wird zwischen zwei CSS-Selektoren platziert. Er stimmt nur mit jenen Elementen überein, die durch den zweiten Selektor beschrieben werden und zu den Spaltenelementen gehören, die durch den ersten Selektor beschrieben werden.

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

Derzeit hat kein Browser dieses Feature implementiert.

## Siehe auch

- {{HTMLElement("col")}}
- {{HTMLElement("colgroup")}}
- {{CSSxRef("grid")}}
- {{CSSxRef(":nth-of-type")}}
- {{CSSxRef(":nth-last-of-type")}}
