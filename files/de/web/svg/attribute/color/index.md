---
title: color
slug: Web/SVG/Attribute/color
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

Das **`color`** Attribut wird verwendet, um einen potenziellen indirekten Wert `currentcolor` für die Attribute {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}} und {{SVGAttr("lighting-color")}} bereitzustellen.

> [!NOTE]
> Als Präsentationsattribut kann `color` als CSS-Eigenschaft verwendet werden. Siehe [CSS color](/de/docs/Web/CSS/color) für weitere Informationen.

Als Präsentationsattribut kann es auf jedes Element angewendet werden, aber wie oben erwähnt, hat es keine direkte Wirkung auf SVG-Elemente.

## Anwendungsnotizen

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
      <td>Hängt vom User-Agent ab</td>
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

- CSS {{cssxref("color")}} Eigenschaft
