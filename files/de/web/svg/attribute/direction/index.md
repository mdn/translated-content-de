---
title: direction
slug: Web/SVG/Attribute/direction
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`direction`**-Attribut legt die inline-basierte Richtung eines {{SVGElement("text")}}- oder {{SVGElement("tspan")}}-Elements fest. Es definiert die Start- und Endpunkte einer Textzeile, wie sie von den Eigenschaften {{SVGAttr("text-anchor")}} und {{SVGAttr("inline-size")}} verwendet werden. Es kann auch die Richtung beeinflussen, in der Zeichen positioniert werden, wenn der Wert der {{SVGAttr("unicode-bidi")}}-Eigenschaft entweder `embed` oder `bidi-override` ist.

Es gilt nur für Glyphen, die senkrecht zur inline-basierten Richtung ausgerichtet sind, was den üblichen Fall von horizontal ausgerichtetem lateinischen oder arabischen Text sowie den Fall von schmalen lateinischen oder arabischen Zeichen umfasst, die um 90 Grad im Uhrzeigersinn relativ zu einer von oben nach unten verlaufenden inline-basierten Richtung gedreht sind.

In vielen Fällen liefert der bidirektionale Unicode-Algorithmus automatisch das gewünschte Ergebnis, sodass dieses Attribut in solchen Fällen nicht angegeben werden muss. Für andere Fälle, wie z. B. bei der Verwendung von Recht-zu-Links-Sprachen, kann es ausreichen, das `direction`-Attribut zum äußersten {{SVGElement("svg")}}-Element hinzuzufügen, sodass diese Richtung an alle Textelemente vererbt wird:

> [!NOTE]
> Als Präsentationsattribut hat `direction` auch ein entsprechendes CSS-Eigenschafts-Pendant: {{cssxref("direction")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

## Hinweise zur Verwendung

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

- CSS-Eigenschaft {{cssxref("direction")}}
