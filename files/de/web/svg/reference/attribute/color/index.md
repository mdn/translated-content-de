---
title: color
slug: Web/SVG/Reference/Attribute/color
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **`color`** Attribut wird verwendet, um einen potenziellen indirekten Wert, `currentColor`, für die Attribute {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}} und {{SVGAttr("lighting-color")}} bereitzustellen.

> [!NOTE]
> Als Präsentationsattribut hat `color` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("color")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Technisch gesehen kann `color` auf jedes Element angewendet werden, aber es hat keine direkte Auswirkung auf SVG-Elemente.

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
      <td>Hängt vom Benutzeragenten ab</td>
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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("color")}} Eigenschaft
