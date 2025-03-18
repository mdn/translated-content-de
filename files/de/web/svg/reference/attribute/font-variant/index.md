---
title: font-variant
slug: Web/SVG/Reference/Attribute/font-variant
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`font-variant`**-Attribut gibt an, ob der Text unter Verwendung von Variationen der {{Glossary("glyph", "Glyphen")}} der Schriftart gerendert werden soll.

> [!NOTE]
> Als Präsentationsattribut hat `font-variant` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("font-variant")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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
<svg viewBox="0 0 250 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-variant="normal">Normal text</text>
  <text x="100" y="20" font-variant="small-caps">Small-caps text</text>
</svg>
```

{{EmbedLiveSample("Example", "250", "30")}}

## Nutzungshinweise

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

Für eine Beschreibung der Werte, siehe bitte die [CSS `font-variant`](/de/docs/Web/CSS/font-variant#values) Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("font-variant")}} Eigenschaft
