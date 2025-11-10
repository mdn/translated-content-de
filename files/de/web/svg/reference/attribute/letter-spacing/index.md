---
title: letter-spacing
slug: Web/SVG/Reference/Attribute/letter-spacing
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`letter-spacing`**-Attribut steuert den Abstand zwischen Textzeichen.

Wenn der Attributwert eine einheitenlose Zahl ist (wie `128`), behandelt der Browser diesen Wert als ein {{cssxref("length")}} im aktuellen Benutzerkoordinatensystem.

Wenn der Attributwert eine Einheitskennung hat, wie `.25em` oder `1%`, wandelt der Browser das \<length> in seinen entsprechenden Wert im aktuellen Benutzerkoordinatensystem um.

> [!NOTE]
> Als Präsentationsattribut hat `letter-spacing` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("letter-spacing")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## Beispiele

### Steuerung des Buchstabenabstands in SVG

```html
<svg viewBox="0 0 400 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" letter-spacing="2">Bigger letter-spacing</text>
  <text x="200" y="20" letter-spacing="-0.5">Smaller letter-spacing</text>
</svg>
```

{{EmbedLiveSample}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>normal</code> | {{cssxref("length")}}</td>
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

Für eine Beschreibung der Werte, lesen Sie bitte die [CSS `letter-spacing`](/de/docs/Web/CSS/Reference/Properties/letter-spacing#values) Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("letter-spacing")}}-Eigenschaft
