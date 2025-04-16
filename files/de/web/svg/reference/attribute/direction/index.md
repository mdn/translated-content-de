---
title: direction
slug: Web/SVG/Reference/Attribute/direction
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das **`direction`**-Attribut gibt die Inline-Basis-Richtung eines {{SVGElement("text")}} oder {{SVGElement("tspan")}} Elements an. Es definiert die Start- und Endpunkte einer Textzeile, die von den {{SVGAttr("text-anchor")}}- und {{SVGAttr("inline-size")}}-Eigenschaften verwendet werden. Es kann auch die Richtung beeinflussen, in der Zeichen positioniert werden, wenn der Wert der {{SVGAttr("unicode-bidi")}}-Eigenschaft entweder `embed` oder `bidi-override` ist.

Es gilt nur für Glyphen, die senkrecht zur Inline-Basis-Richtung orientiert sind, was den üblichen Fall von horizontal orientiertem lateinischen oder arabischen Text umfasst sowie den Fall von schmalen lateinischen oder arabischen Zeichen, die um 90 Grad im Uhrzeigersinn zu einer von oben nach unten verlaufenden Inline-Basis-Richtung gedreht sind.

In vielen Fällen liefert der bidirektionale Unicode-Algorithmus automatisch das gewünschte Ergebnis, sodass dieses Attribut in diesen Fällen nicht angegeben werden muss. In anderen Fällen, wie bei der Verwendung von Rechts-nach-Links-Sprachen, kann es ausreichen, das `direction`-Attribut dem äußersten {{SVGElement("svg")}}-Element hinzuzufügen und diese Richtung an alle Textelemente zu vererben:

> [!NOTE]
> Als Präsentationsattribut hat `direction` auch ein entsprechendes CSS-Property: {{cssxref("direction")}}. Wenn beide angegeben sind, hat das CSS-Property Vorrang.

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

- CSS {{cssxref("direction")}} Eigenschaft
