---
title: direction
slug: Web/SVG/Attribute/direction
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`direction`**-Attribut gibt die Inline-Basisrichtung eines {{SVGElement("text")}}- oder {{SVGElement("tspan")}}-Elements an. Es definiert die Start- und Endpunkte einer Textzeile, wie sie von den Eigenschaften {{SVGAttr("text-anchor")}} und {{SVGAttr("inline-size")}} verwendet werden. Es kann auch die Richtung beeinflussen, in der Zeichen positioniert werden, wenn der Wert der {{SVGAttr("unicode-bidi")}}-Eigenschaft entweder `embed` oder `bidi-override` ist.

Es gilt nur für Glyphen, die senkrecht zur Inline-Basisrichtung orientiert sind, was den üblichen Fall von horizontal ausgerichtetem lateinischem oder arabischem Text und den Fall von schmale Zelle lateinischen oder arabischen Zeichen umfasst, die um 90 Grad im Uhrzeigersinn relativ zu einer von oben nach unten verlaufenden Inline-Basisrichtung gedreht sind.

In vielen Fällen liefert der bidirektionale Unicode-Algorithmus automatisch das gewünschte Ergebnis, sodass dieses Attribut in diesen Fällen nicht angegeben werden muss. Für andere Fälle, wie z.B. bei der Verwendung von Rechts-nach-Links-Sprachen, kann es ausreichend sein, das `direction`-Attribut zum äußersten {{SVGElement("svg")}}-Element hinzuzufügen und diese Richtung alle Textelemente erben zu lassen:

> [!NOTE]
> Als Präsentationsattribut kann `direction` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie in der CSS {{cssxref("direction")}}.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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

- {{cssxref("direction")}}
