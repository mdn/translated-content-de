---
title: repeatCount
slug: Web/SVG/Attribute/repeatCount
l10n:
  sourceCommit: 54eb3a678b4d4cbc94588d2234103e74dfa063a0
---

--- 
title: "repeatCount" 
slug: Web/SVG/Attribute/repeatCount 
page-type: svg-attribute 
browser-compat: svg.elements.animate.repeatCount 
---

{{SVGRef}}

Das **`repeatCount`** Attribut gibt an, wie oft eine Animation durchgeführt wird.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

{{EmbedLiveSample("Beispiel", "220", "150")}}

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
      <th scope="row">Animationsfähig</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : Dieser Wert spezifiziert die Anzahl der Wiederholungen. Er kann Teilwiederholungen enthalten, die als Bruchwerte ausgedrückt werden. Ein Bruchwert beschreibt einen Teil der einfachen Dauer. Die Werte müssen größer als `0` sein.
- `indefinite`
  - : Dieser Wert gibt an, dass die Animation unbegrenzt wiederholt wird (d.h. bis das Dokument endet).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
