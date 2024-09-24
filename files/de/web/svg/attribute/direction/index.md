---
title: direction
slug: Web/SVG/Attribute/direction
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`direction`**-Attribut gibt die Inline-Basisrichtung eines {{SVGElement("text")}}- oder {{SVGElement("tspan")}}-Elements an. Es definiert die Start- und Endpunkte einer Textzeile, wie sie von den Eigenschaften {{SVGAttr("text-anchor")}} und {{SVGAttr("inline-size")}} verwendet werden. Es kann auch die Richtung beeinflussen, in der Zeichen positioniert werden, wenn der Wert der Eigenschaft {{SVGAttr("unicode-bidi")}} entweder `embed` oder `bidi-override` ist.

Es gilt nur für Glyphen, die senkrecht zur Inline-Basisrichtung orientiert sind, was den üblichen Fall von horizontal orientiertem lateinischen oder arabischen Text und den Fall von schmalzelligen lateinischen oder arabischen Zeichen einschließt, die um 90 Grad im Uhrzeigersinn relativ zu einer von oben nach unten verlaufenden Inline-Basisrichtung gedreht sind.

In vielen Fällen liefert der bidirektionale Unicode-Algorithmus automatisch das gewünschte Ergebnis, sodass dieses Attribut in diesen Fällen nicht spezifiziert werden muss. Für andere Fälle, wie bei der Verwendung von Sprachen, die von rechts nach links laufen, kann es ausreichend sein, dem äußersten {{SVGElement("svg")}}-Element das `direction`-Attribut hinzuzufügen und diese Richtung an alle Textelemente zu vererben:

> [!NOTE]
> Als Präsentationsattribut kann `direction` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie unter CSS {{cssxref("direction")}}.

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

- {{cssxref("direction")}}
