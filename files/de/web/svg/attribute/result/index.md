---
title: result
slug: Web/SVG/Attribute/result
l10n:
  sourceCommit: c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{SVGRef}}

Das Attribut **`result`** definiert den zugewiesenen Namen für diese Filterprimitiv. Wenn es angegeben ist, können die Grafiken, die aus der Verarbeitung dieses Filterprimitivs resultieren, von einem nachfolgenden Filterprimitiv innerhalb desselben {{SVGElement("filter")}}-Elementes durch ein {{SVGAttr("in")}}-Attribut referenziert werden. Wenn kein Wert bereitgestellt wird, steht die Ausgabe nur für die Wiederverwendung als impliziter Eingang in das nächste Filterprimitiv zur Verfügung, sofern dieses Filterprimitiv keinen Wert für sein `in`-Attribut liefert.

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

## Anwendungshinweise

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
  - : Dieser Wert ist ein {{cssxref("custom-ident")}} und definiert den Namen für das Filterprimitiv. Er ist nur innerhalb eines gegebenen {{SVGElement("filter")}}-Elements von Bedeutung und hat daher nur lokalen Geltungsbereich. Es ist zulässig, dass dieselbe `<filter-primitive-reference>` mehrfach innerhalb desselben `<filter>`-Elements erscheint. Beim Referenzieren wird dieser Wert das nächste vorhergehende Filterprimitiv mit dem angegebenen Ergebnis verwenden.

## Spezifikationen

{{Specifications}}
