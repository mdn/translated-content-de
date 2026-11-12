---
title: color
slug: Web/SVG/Reference/Attribute/color
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`color`** wird verwendet, um für die Attribute {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}} und {{SVGAttr("lighting-color")}} einen potenziellen indirekten Wert, `currentColor`, bereitzustellen.

> [!NOTE]
> Als Präsentationsattribut hat `color` auch eine entsprechende CSS-Eigenschaft: {{cssxref("color")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Technisch gesehen kann `color` auf jedes Element angewendet werden, hat aber keine direkte Auswirkung auf SVG-Elemente.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <g color="green">
    <rect width="50" height="50" fill="currentColor" />
    <circle
      r="25"
      cx="70"
      cy="70"
      stroke="currentColor"
      fill="none"
      stroke-width="5" />
  </g>
</svg>
```

{{EmbedLiveSample("Example", "100%", "110")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code><a href="/de/docs/Web/CSS/Reference/Values/color_value">&#x3C;color></a></code>
        | <code>inherit</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>Hängt vom User-Agent ab</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Eigenschaft {{cssxref("color")}}
