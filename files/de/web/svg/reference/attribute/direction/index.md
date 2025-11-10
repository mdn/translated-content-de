---
title: direction
slug: Web/SVG/Reference/Attribute/direction
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

Das **`direction`**-Attribut gibt die Inline-Basisrichtung eines {{SVGElement("text")}}- oder {{SVGElement("tspan")}}-Elements an. Es definiert die Start- und Endpunkte einer Textzeile, wie sie von den Eigenschaften {{SVGAttr("text-anchor")}} und {{cssxref("inline-size")}} verwendet werden. Es kann auch die Richtung beeinflussen, in der Zeichen positioniert werden, wenn der Wert der {{SVGAttr("unicode-bidi")}}-Eigenschaft entweder `embed` oder `bidi-override` ist.

Es gilt nur für Glyphen, die senkrecht zur Inline-Basisrichtung ausgerichtet sind, was den üblichen Fall von horizontal ausgerichtetem lateinischem oder arabischem Text und den Fall von schmalen lateinischen oder arabischen Zeichen umfasst, die im Uhrzeigersinn um 90 Grad relativ zu einer von oben nach unten verlaufenden Inline-Basisrichtung gedreht sind.

In vielen Fällen liefert der bidirektionale Unicode-Algorithmus automatisch das gewünschte Ergebnis, sodass dieses Attribut in diesen Fällen nicht angegeben werden muss. Für andere Fälle, wie zum Beispiel bei der Verwendung von Sprachen, die von rechts nach links gelesen werden, kann es ausreichend sein, das `direction`-Attribut zum äußeren {{SVGElement("svg")}}-Element hinzuzufügen, und diese Richtung allen Textelementen vererben zu lassen:

> [!NOTE]
> Als Präsentationsattribut hat `direction` auch ein entsprechendes CSS-Property: {{cssxref("direction")}}. Wenn beides angegeben ist, hat das CSS-Property Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("textPath")}}
- {{SVGElement("text")}}
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

## Verwendungshinweise

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

- CSS {{cssxref("direction")}}-Eigenschaft
