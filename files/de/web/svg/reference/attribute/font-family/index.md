---
title: font-family
slug: Web/SVG/Reference/Attribute/font-family
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`font-family`**-Attribut gibt an, welche Schriftfamilie zur Darstellung des Textes verwendet wird. Es wird als priorisierte Liste von Schriftfamiliennamen und/oder generischen Familiennamen angegeben.

> [!NOTE]
> Als Präsentationsattribut hat `font-family` auch ein entsprechendes CSS-Property: {{cssxref("font-family")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## Beispiele

### Steuerung der SVG-Schriftfamilie

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-family="Arial, Helvetica, sans-serif">Sans serif</text>
  <text x="100" y="20" font-family="monospace">Monospace</text>
</svg>
```

{{EmbedLiveSample}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>Siehe {{cssxref("font-family", "", "#formal_syntax")}}</td>
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

Für eine Beschreibung der Werte, lesen Sie bitte die [CSS `font-family`](/de/docs/Web/CSS/Reference/Properties/font-family#values) Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("font-family")}} Eigenschaft
