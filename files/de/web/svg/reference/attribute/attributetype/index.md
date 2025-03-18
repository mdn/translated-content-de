---
title: attributeType
slug: Web/SVG/Reference/Attribute/attributeType
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das **`attributeType`** Attribut gibt den Namensraum an, in dem das Zielattribut und seine zugehörigen Werte definiert sind.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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

## Verwendungshinweise

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
  - : Dieser Wert gibt an, dass der Wert von {{SVGAttr("attributeName")}} der Name eines XML-Attributs ist, das als animierbar im Standard-XML-Namensraum für das Zielelement definiert ist.
- `auto`
  - : Dieser Wert gibt an, dass die Implementierung versuchen sollte, {{SVGAttr("attributeName")}} einem Attribut für das Zielelement zuzuordnen. Benutzeragenten durchsuchen zuerst die Liste der CSS-Eigenschaften nach einem übereinstimmenden Eigenschaftsnamen, und wenn keiner gefunden wird, durchsuchen sie den Standard-XML-Namensraum für das Element.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
