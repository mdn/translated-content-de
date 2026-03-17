---
title: result
slug: Web/SVG/Reference/Attribute/result
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

Das **`result`**-Attribut definiert den zugewiesenen Namen für diesen Filter-Primitive. Wenn angegeben, können Grafiken, die aus der Verarbeitung dieses Filter-Primitive resultieren, von einem {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filter-Primitive innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden. Wenn kein Wert angegeben wird, ist die Ausgabe nur für die Wiederverwendung als implizite Eingabe in das nächste Filter-Primitive verfügbar, wenn dieses Filter-Primitive keinen Wert für sein `in`-Attribut angibt.

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

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;filter-primitive-reference></code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<filter-primitive-reference>`
  - : Dieser Wert ist ein {{cssxref("custom-ident")}} und definiert den Namen für das Filter-Primitive. Er ist nur innerhalb eines gegebenen {{SVGElement("filter")}}-Elements sinnvoll und hat daher nur lokale Gültigkeit. Es ist legal, dass derselbe `<filter-primitive-reference>` mehrmals innerhalb desselben `<filter>`-Elements erscheint. Wenn referenziert, verwendet dieser Wert das nächstliegende vorhergehende Filter-Primitive mit dem angegebenen Resultat.

## Spezifikationen

{{Specifications}}
