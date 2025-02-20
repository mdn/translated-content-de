---
title: font-weight
slug: Web/SVG/Attribute/font-weight
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`font-weight`**-Attribut bezieht sich auf die Stärke oder Leichtigkeit der Glyphen, die zum Rendern des Textes verwendet werden, relativ zu anderen Schriftarten in der gleichen Schriftfamilie.

> [!NOTE]
> Als Präsentationsattribut hat `font-weight` auch ein entsprechendes CSS-Attribut: {{cssxref("font-weight")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-weight="normal">Normal text</text>
  <text x="100" y="20" font-weight="bold">Bold text</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "30")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>normal</code> | <code>bold</code> | <code>bolder</code> |
        <code>lighter</code> | {{cssxref("number")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Für eine Beschreibung der Werte konsultieren Sie bitte die [CSS `font-weight`](/de/docs/Web/CSS/font-weight#values)-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("font-weight")}}-Eigenschaft
