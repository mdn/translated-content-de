---
title: Ergebnis
slug: Web/SVG/Attribute/result
l10n:
  sourceCommit: c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{SVGRef}}

Das **`result`**-Attribut definiert den zugewiesenen Namen für diese Filterprimitive. Wenn es angegeben ist, können Grafiken, die aus der Verarbeitung dieser Filterprimitive resultieren, durch ein {{SVGAttr("in")}}-Attribut an einer nachfolgenden Filterprimitive innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden. Wenn kein Wert angegeben wird, ist der Ausgang nur für eine Wiederverwendung als impliziter Eingang in die nächste Filterprimitive verfügbar, falls diese Filterprimitive keinen Wert für ihr `in`-Attribut bereitstellt.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDropShadow")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.05"
      numOctaves="2"
      result="turbulence" />
    <feDisplacementMap
      in2="turbulence"
      in="SourceGraphic"
      scale="50"
      xChannelSelector="R"
      yChannelSelector="G" />
  </filter>

  <circle cx="100" cy="100" r="100" style="filter: url(#displacementFilter)" />
</svg>
```

{{EmbedLiveSample("Example", 220, 220)}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;filter-primitive-reference></code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<filter-primitive-reference>`
  - : Dieser Wert ist ein {{cssxref("custom-ident")}} und definiert den Namen für die Filterprimitive. Er ist nur innerhalb eines gegebenen {{SVGElement("filter")}}-Elements sinnvoll und hat daher nur einen lokalen Umfang. Es ist zulässig, dass derselbe `<filter-primitive-reference>` mehrmals innerhalb desselben `<filter>`-Elements auftaucht. Bei Referenzierung verwendet dieser Wert die nächstliegende vorhergehende Filterprimitive mit dem gegebenen Ergebnis.

## Spezifikationen

{{Specifications}}
