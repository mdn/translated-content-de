---
title: font-variant
slug: Web/SVG/Reference/Attribute/font-variant
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das Attribut **`font-variant`** gibt an, ob der Text mit Varianten der {{Glossary("glyph", "Glyphen")}} der Schriftart dargestellt werden soll.

> [!NOTE]
> Als Präsentationsattribut hat `font-variant` auch eine entsprechende CSS-Eigenschaft: {{cssxref("font-variant")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## Beispiele

### SVG-Schriftvarianten steuern

```html
<svg viewBox="0 0 250 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-variant="normal">Normal text</text>
  <text x="100" y="20" font-variant="small-caps">Small-caps text</text>
</svg>
```

{{EmbedLiveSample("controlling_svg_font_variations")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <p>
          <code>normal</code> | <code>none</code> | [
          <code>&#x3C;common-lig-values></code> ||
          <code>&#x3C;discretionary-lig-values></code> ||
          <code>&#x3C;historical-lig-values></code> ||
          <code>&#x3C;contextual-alt-values></code> ||
          <code>stylistic( &#x3C;feature-value-name> )</code> ||
          <code>historical-forms</code> ||
          <code>styleset( &#x3C;feature-value-name># )</code> ||
          <code>character-variant( &#x3C;feature-value-name># )</code> ||
          <code>swash( &#x3C;feature-value-name> )</code> ||
          <code>ornaments( &#x3C;feature-value-name> )</code> ||
          <code>annotation( &#x3C;feature-value-name> )</code> || [
          <code>small-caps</code> | <code>all-small-caps</code> |
          <code>petite-caps</code> | <code>all-petite-caps</code> |
          <code>unicase</code> | <code>titling-caps</code> ] ||
          <code>&#x3C;numeric-figure-values></code> ||
          <code>&#x3C;numeric-spacing-values></code> ||
          <code>&#x3C;numeric-fraction-values></code> || <code>ordinal</code> ||
          <code>slashed-zero</code> ||
          <code>&#x3C;east-asian-variant-values></code> ||
          <code>&#x3C;east-asian-width-values></code> || <code>ruby</code> ]
        </p>
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

Eine Beschreibung der Werte finden Sie unter der [CSS-Eigenschaft `font-variant`](/de/docs/Web/CSS/Reference/Properties/font-variant#values).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Eigenschaft {{cssxref("font-variant")}}
