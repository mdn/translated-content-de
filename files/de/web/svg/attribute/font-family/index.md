---
title: font-family
slug: Web/SVG/Attribute/font-family
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`font-family`**-Attribut gibt an, welche Schriftfamilie zur Darstellung des Textes verwendet wird. Es wird als priorisierte Liste von Schriftfamiliennamen und/oder generischen Schriftfamiliennamen angegeben.

> [!NOTE]
> Als Präsentationsattribut hat `font-family` auch ein entsprechendes CSS-Property: {{cssxref("font-family")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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
  <text y="20" font-family="Arial, Helvetica, sans-serif">Sans serif</text>
  <text x="100" y="20" font-family="monospace">Monospace</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "30")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>Siehe {{cssxref("font-family", "", "#formal_syntax")}}</td>
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

Für eine Beschreibung der Werte lesen Sie bitte die [`font-family`](/de/docs/Web/CSS/font-family#values)-Eigenschaft in CSS.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("font-family")}}-Eigenschaft
