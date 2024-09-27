---
title: color
slug: Web/SVG/Attribute/color
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`color`**-Attribut wird verwendet, um einen potenziellen indirekten Wert, `currentcolor`, für die Attribute {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}} und {{SVGAttr("lighting-color")}} bereitzustellen.

> [!NOTE]
> Als Präsentationsattribut kann `color` als CSS-Eigenschaft verwendet werden. Siehe [CSS color](/de/docs/Web/CSS/color) für weitere Informationen.

Als Präsentationsattribut kann es auf jedes Element angewendet werden, hat jedoch, wie oben erwähnt, keinen direkten Effekt auf SVG-Elemente.

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
