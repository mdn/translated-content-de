---
title: attributeType
slug: Web/SVG/Reference/Attribute/attributeType
l10n:
  sourceCommit: 8f0171397993605739530a8d32f24a804d06f882
---

Das **`attributeType`**-Attribut spezifiziert den Namensraum, in dem das Zielattribut und seine zugehörigen Werte definiert sind.

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
  - : Dieser Wert gibt an, dass der Wert von {{SVGAttr("attributeName")}} der Name einer als animierbar definierten CSS-Eigenschaft ist.
- `XML`
  - : Dieser Wert gibt an, dass der Wert von {{SVGAttr("attributeName")}} der Name eines XML-Attributs ist, das im Standard-XML-Namensraum für das Ziel-Element als animierbar definiert ist.
- `auto`
  - : Dieser Wert gibt an, dass die Implementierung {{SVGAttr("attributeName")}} mit einem Attribut für das Ziel-Element abgleichen sollte. Benutzeragenten durchsuchen zunächst die Liste der CSS-Eigenschaften nach einem übereinstimmenden Eigenschaftsnamen. Wenn keine gefunden wird, wird der Standard-XML-Namensraum für das Element durchsucht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
