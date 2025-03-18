---
title: direction
slug: Web/SVG/Reference/Attribute/direction
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`direction`**-Attribut spezifiziert die Inline-Basisrichtung eines {{SVGElement("text")}} oder {{SVGElement("tspan")}} Elements. Es definiert die Start- und Endpunkte einer Textzeile, wie sie von den {{SVGAttr("text-anchor")}} und {{SVGAttr("inline-size")}} Eigenschaften verwendet werden. Es kann auch die Richtung beeinflussen, in der Zeichen positioniert werden, wenn der Wert der {{SVGAttr("unicode-bidi")}} Eigenschaft entweder `embed` oder `bidi-override` ist.

Es gilt nur für Glyphen, die senkrecht zur Inline-Basisrichtung ausgerichtet sind, was den üblichen Fall von horizontal ausgerichtetem lateinischem oder arabischem Text und den Fall von schmalen lateinischen oder arabischen Zeichen umfasst, die im Uhrzeigersinn um 90 Grad relativ zu einer von oben nach unten verlaufenden Inline-Basisrichtung gedreht sind.

In vielen Fällen liefert der bidirektionale Unicode-Algorithmus automatisch das gewünschte Ergebnis, sodass dieses Attribut in diesen Fällen nicht angegeben werden muss. Für andere Fälle, wie zum Beispiel beim Einsatz von Sprachen, die von rechts nach links gelesen werden, kann es ausreichen, das `direction`-Attribut dem äußersten {{SVGElement("svg")}} Element hinzuzufügen und es von dort auf alle Textelemente vererben zu lassen:

> [!NOTE]
> Als Präsentationsattribut hat `direction` auch ein entsprechendes CSS-Attribut: {{cssxref("direction")}}. Wenn beide angegeben sind, hat das CSS-Attribut Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("textPath")}}
- {{SVGElement("text")}}
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
<svg
  viewBox="0 0 600 72"
  xmlns="http://www.w3.org/2000/svg"
  direction="rtl"
  lang="fa">
  <text x="300" y="50" text-anchor="middle" font-size="36">
    داستان SVG 1.1 SE طولا ني است.
  </text>
</svg>
```

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>ltr</code> | <code>rtl</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>ltr</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("direction")}} Eigenschaft
