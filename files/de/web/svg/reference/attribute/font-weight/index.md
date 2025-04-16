---
title: font-weight
slug: Web/SVG/Reference/Attribute/font-weight
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das **`font-weight`** Attribut bezieht sich auf die Fettigkeit oder Leichtigkeit der Glyphen, die zum Rendern des Textes verwendet werden, relativ zu anderen Schriften in derselben Schriftfamilie.

> [!NOTE]
> Als Präsentationsattribut hat `font-weight` auch ein entsprechendes CSS-Property: {{cssxref("font-weight")}}. Wenn beide angegeben sind, hat das CSS-Property Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
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

## Verwendungshinweise

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

Für eine Beschreibung der Werte verweisen wir auf die [CSS `font-weight`](/de/docs/Web/CSS/font-weight#values) Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("font-weight")}} Eigenschaft
