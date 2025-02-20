---
title: attributeType
slug: Web/SVG/Attribute/attributeType
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{SVGRef}}{{Deprecated_Header}}

Das Attribut **`attributeType`** gibt den Namensraum an, in dem das Zielattribut und seine zugehörigen Werte definiert sind.

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

## Hinweise zur Verwendung

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
  - : Dieser Wert gibt an, dass die Implementierung das {{SVGAttr("attributeName")}} mit einem Attribut für das Ziel-Element abgleichen sollte. User Agents durchsuchen zunächst die Liste der CSS-Eigenschaften nach einem passenden Eigenschaftsnamen. Wenn keiner gefunden wird, durchsuchen sie den Standard-XML-Namensraum für das jeweilige Element.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
