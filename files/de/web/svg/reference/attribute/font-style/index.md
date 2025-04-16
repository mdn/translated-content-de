---
title: font-style
slug: Web/SVG/Reference/Attribute/font-style
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das **`font-style`**-Attribut gibt an, ob der Text in einer normalen, kursiven oder schrägen Schriftart gerendert werden soll.

> [!NOTE]
> Als Präsentationsattribut hat `font-style` auch ein entsprechendes CSS-Eigenschaft: {{cssxref("font-style")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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
<svg viewBox="0 0 250 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-style="normal">Normal font style</text>
  <text x="150" y="20" font-style="italic">Italic font style</text>
</svg>
```

{{EmbedLiveSample("Example", "250", "30")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>normal</code> | <code>italic</code> | <code>oblique</code></td>
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

Für eine Beschreibung der Werte beziehen Sie sich bitte auf die [CSS `font-style`](/de/docs/Web/CSS/font-style#values)-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("font-style")}} Eigenschaft
