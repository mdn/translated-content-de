---
title: to
slug: Web/SVG/Reference/Attribute/to
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`to`** gibt den Endwert des Attributs an, das während der Animation verändert wird.

Der Wert des Attributs ändert sich zwischen dem Wert des Attributs {{SVGAttr("from")}} und diesem Wert.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## animate, animateMotion, animateTransform

Bei {{SVGElement("animate")}}, {{SVGElement("animateMotion")}} und {{SVGElement("animateTransform")}} gibt `to` den Endwert der Animation an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;value></code></td>
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

Der genaue Werttyp dieses Attributs hängt vom Wert des Attributs ab, das animiert wird.

Wenn über das Attribut {{SVGAttr("values")}} eine Liste von Werten definiert ist, wird das Attribut `to` ignoriert.

## set

Beim Element {{SVGElement("set")}} gibt `to` den Wert an, den das Attribut während der Laufzeit des Elements hat.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;value></code></td>
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

Der genaue Werttyp dieses Attributs hängt vom Wert des Attributs ab, das animiert wird.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="width"
      fill="freeze"
      from="100"
      to="150"
      dur="3s" />
  </rect>
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Spezifikationen

{{Specifications}}
