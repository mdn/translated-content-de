---
title: attributeType
slug: Web/SVG/Attribute/attributeType
l10n:
  sourceCommit: 54eb3a678b4d4cbc94588d2234103e74dfa063a0
---

{{SVGRef}}{{Deprecated_Header}}

Das **`attributeType`** Attribut gibt den Namensraum an, in dem das Zielattribut und seine zugehörigen Werte definiert sind.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("animate")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="5s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample("Example", "400", "250")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>CSS</code> | <code>XML</code> | <code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `CSS`
  - : Dieser Wert gibt an, dass der Wert von {{SVGAttr("attributeName")}} der Name einer CSS-Eigenschaft ist, die als animierbar definiert ist.
- `XML`
  - : Dieser Wert gibt an, dass der Wert von {{SVGAttr("attributeName")}} der Name eines XML-Attributs ist, das als animierbar im Standard-XML-Namensraum für das Ziel-Element definiert ist.
- `auto`
  - : Dieser Wert gibt an, dass die Implementierung {{SVGAttr("attributeName")}} mit einem Attribut für das Ziel-Element vergleichen sollte. Benutzeragenten durchsuchen zuerst die Liste der CSS-Eigenschaften nach einem übereinstimmenden Eigenschaftsnamen und durchsuchen bei Nichterfolg den Standard-XML-Namensraum des Elements.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [SMIL-Animations-Spezifikation](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AccumulateAttribute)
