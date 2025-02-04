---
title: font-style
slug: Web/SVG/Attribute/font-style
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

Das **`font-style`** Attribut gibt an, ob der Text in normaler, kursiver oder schräger Schriftart dargestellt werden soll.

> [!NOTE]
> Als Präsentationsattribut kann `font-style` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie in der CSS-Eigenschaft {{cssxref("font-style")}}.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
<svg viewBox="0 0 250 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-style="normal">Normal font style</text>
  <text x="150" y="20" font-style="italic">Italic font style</text>
</svg>
```

{{EmbedLiveSample("Example", "250", "30")}}

## Verwendungshinweise

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

Für eine Beschreibung der Werte verweisen wir auf die [CSS `font-style`](/de/docs/Web/CSS/font-style#values) Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("font-style")}} Eigenschaft
