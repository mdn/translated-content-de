---
title: repeatCount
slug: Web/SVG/Reference/Attribute/repeatCount
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Das **`repeatCount`**-Attribut gibt an, wie oft eine Animation ausgeführt wird.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
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
<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="1s"
      repeatCount="5" />
  </rect>
  <rect x="120" y="0" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="1s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample("Example", "220", "150")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("number")}} | <code>indefinite</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : Dieser Wert legt die Anzahl der Wiederholungen fest. Er kann auch Teilwiederholungen in Form von Bruchwerten umfassen. Ein Bruchwert beschreibt einen Teil der einfachen Dauer. Werte müssen größer als `0` sein.
- `indefinite`
  - : Dieser Wert bedeutet, dass die Animation unendlich oft wiederholt wird (d.h. bis das Dokument endet).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
