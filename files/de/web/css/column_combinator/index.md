---
title: Spalten-Kombinator
slug: Web/CSS/Column_combinator
l10n:
  sourceCommit: 7fa9b134e7a886b47bd8c6e3135ba329ee0ddf09
---

{{CSSRef}} {{SeeCompatTable}}

Der **Spalten-Kombinator** (`||`) wird zwischen zwei CSS-Selektoren platziert. Er matched nur die Elemente, die vom zweiten Selektor erfasst werden und zu den Spaltenelementen gehören, die vom ersten erfasst werden.

```css
/* Tabellenzellen, die zur "selected" Spalte gehören */
col.selected||td {
  background: gray;
}
```

## Syntax

```css-nolint
/* Der Leerraum um den || Kombinator ist optional, aber empfohlen. */
column-selector || cell-selector {
  /* Stil-Eigenschaften */
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

{{Compat}}

## Siehe auch

- {{HTMLElement("col")}}
- {{HTMLElement("colgroup")}}
- {{CSSxRef("grid")}}
- {{CSSxRef(":nth-of-type")}}
- {{CSSxRef(":nth-last-of-type")}}
