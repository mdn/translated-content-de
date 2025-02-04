---
title: direction
slug: Web/SVG/Attribute/direction
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

Das **`direction`**-Attribut gibt die inline-basierte Richtung eines {{SVGElement("text")}}- oder {{SVGElement("tspan")}}-Elements an. Es definiert die Start- und Endpunkte einer Textzeile, wie sie von den {{SVGAttr("text-anchor")}}- und {{SVGAttr("inline-size")}}-Eigenschaften verwendet werden. Es kann auch die Richtung beeinflussen, in der Zeichen positioniert werden, wenn der Wert der {{SVGAttr("unicode-bidi")}}-Eigenschaft entweder `embed` oder `bidi-override` ist.

Es gilt nur für Glyphen, die senkrecht zur inline-basierten Richtung ausgerichtet sind, was den üblichen Fall von horizontal ausgerichtetem lateinischen oder arabischen Text und den Fall von schmalzelligen lateinischen oder arabischen Zeichen umfasst, die um 90 Grad im Uhrzeigersinn gedreht sind in Bezug auf eine von oben nach unten verlaufende inline-basierte Richtung.

In vielen Fällen erzeugt der bidirektionale Unicode-Algorithmus automatisch das gewünschte Ergebnis, sodass dieses Attribut in diesen Fällen nicht angegeben werden muss. In anderen Fällen, wie zum Beispiel bei der Verwendung von rechts-nach-links Sprachen, kann es ausreichend sein, das `direction`-Attribut zum äußersten {{SVGElement("svg")}}-Element hinzuzufügen, und es dieser Richtung erlauben, auf alle Textelemente zu erben:

> [!NOTE]
> Als ein Präsentationsattribut kann `direction` als eine CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie unter CSS {{cssxref("direction")}}.

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
