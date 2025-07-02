---
title: to
slug: Web/SVG/Reference/Attribute/to
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

Das **`to`**-Attribut gibt den Endwert des Attributs an, das während der Animation geändert wird.

Der Wert des Attributs wird sich zwischen dem Wert des {{SVGAttr("from")}}-Attributs und diesem Wert ändern.

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

## animate, animateMotion, animateTransform

Für {{SVGElement("animate")}}, {{SVGElement("animateMotion")}} und {{SVGElement("animateTransform")}} gibt `to` den Endwert der Animation an.

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

Der genaue Werttyp für dieses Attribut hängt vom Wert des Attributs ab, das animiert wird.

Wenn eine Liste von Werten über das {{SVGAttr("values")}}-Attribut definiert ist, wird das `to`-Attribut ignoriert.

## set

Für das {{SVGElement("set")}}-Element gibt `to` den Wert für das Attribut während der Dauer des Elements an.

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

Der genaue Werttyp für dieses Attribut hängt vom Wert des Attributs ab, das animiert wird.

## Spezifikationen

{{Specifications}}
