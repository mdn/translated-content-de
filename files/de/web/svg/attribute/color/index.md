---
title: color
slug: Web/SVG/Attribute/color
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`color`**-Attribut wird verwendet, um einen potenziellen indirekten Wert, `currentcolor`, für die Attribute {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}} und {{SVGAttr("lighting-color")}} bereitzustellen.

> [!NOTE]
> Als Präsentationsattribut hat `color` auch ein entsprechendes CSS-Eigenschafts-Pendant: {{cssxref("color")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Technisch gesehen kann `color` auf jedes Element angewendet werden, hat jedoch keine direkte Auswirkung auf SVG-Elemente.

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code><a href="/de/docs/Web/CSS/color_value">&#x3C;color></a></code>
        | <code>inherit</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>Abhängig vom User-Agent</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

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
    <rect width="50" height="50" fill="currentcolor" />
    <circle
      r="25"
      cx="70"
      cy="70"
      stroke="currentcolor"
      fill="none"
      stroke-width="5" />
  </g>
</svg>
```

{{EmbedLiveSample("Example", "100%", "110")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("color")}}-Eigenschaft
