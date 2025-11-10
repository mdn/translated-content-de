---
title: result
slug: Web/SVG/Reference/Attribute/result
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`result`**-Attribut definiert den zugeordneten Namen für diese Filter-Primitive. Wenn es angegeben wird, können Grafiken, die aus der Verarbeitung dieser Filter-Primitive resultieren, durch ein {{SVGAttr("in")}}-Attribut an einer nachfolgenden Filter-Primitive innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden. Wenn kein Wert angegeben ist, wird die Ausgabe nur zur Wiederverwendung als impliziter Eingang der nächsten Filter-Primitive zur Verfügung stehen, wenn diese Filter-Primitive keinen Wert für ihr `in`-Attribut bereitstellt.

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

  <circle cx="100" cy="100" r="100" filter="url(#displacementFilter)" />
</svg>
```

{{EmbedLiveSample("Example", 220, 220)}}

## Nutzungshinweise

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
  - : Dieser Wert ist ein {{cssxref("custom-ident")}} und definiert den Namen für die Filter-Primitive. Er ist nur innerhalb eines bestimmten {{SVGElement("filter")}}-Elements sinnvoll und hat daher nur lokalen Geltungsbereich. Es ist legal, dass derselbe `<filter-primitive-reference>`-Wert mehrfach innerhalb desselben `<filter>`-Elements erscheint. Bei der Referenzierung verwendet dieser Wert die nächst vorhergehende Filter-Primitive mit dem angegebenen Ergebnis.

## Spezifikationen

{{Specifications}}
