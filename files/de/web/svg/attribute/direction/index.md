---
title: direction
slug: Web/SVG/Attribute/direction
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`direction`**-Attribut legt die Inline-Basisrichtung eines {{SVGElement("text")}}- oder {{SVGElement("tspan")}}-Elements fest. Es definiert die Start- und Endpunkte einer Textzeile, wie sie von den Eigenschaften {{SVGAttr("text-anchor")}} und {{SVGAttr("inline-size")}} verwendet werden. Es kann auch die Richtung beeinflussen, in der Zeichen positioniert werden, wenn der Wert der {{SVGAttr("unicode-bidi")}}-Eigenschaft entweder `embed` oder `bidi-override` ist.

Es gilt nur für Glyphen, die senkrecht zur Inline-Basisrichtung ausgerichtet sind. Dazu zählt der übliche Fall von horizontal ausgerichtetem lateinischem oder arabischem Text und der Fall von schmalen lateinischen oder arabischen Zeichen, die relativ zur Inline-Basisrichtung von oben nach unten um 90 Grad im Uhrzeigersinn gedreht sind.

In vielen Fällen liefert der bidirektionale Unicode-Algorithmus automatisch das gewünschte Ergebnis, sodass dieses Attribut in diesen Fällen nicht angegeben werden muss. In anderen Fällen, wie z.B. bei der Verwendung von Sprachen, die von rechts nach links geschrieben werden, kann es ausreichen, das `direction`-Attribut dem äußersten {{SVGElement("svg")}}-Element hinzuzufügen und diese Richtung auf alle Textelemente vererben zu lassen:

> [!NOTE]
> Als Präsentationsattribut kann `direction` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie unter CSS {{cssxref("direction")}}.

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
