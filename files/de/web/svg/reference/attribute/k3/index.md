---
title: k3
slug: Web/SVG/Reference/Attribute/k3
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`k3`**-Attribut definiert einen der Werte, der innerhalb der `arithmetic`-Operation der {{SVGElement("feComposite")}}-Filterprimitive verwendet wird.

Die Pixelzusammensetzung wird mit der folgenden Formel berechnet:

```js
result = k1 * i1 * i2 + k2 * i1 + k3 * i2 + k4;
```

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feComposite")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="composite1" x="0" y="0" width="100%" height="100%">
    <feComposite
      in2="SourceGraphic"
      operator="arithmetic"
      k1="1"
      k2="0"
      k3="1"
      k4="0" />
  </filter>
  <filter id="composite2" x="0" y="0" width="100%" height="100%">
    <feComposite
      in2="SourceGraphic"
      operator="arithmetic"
      k1="1"
      k2="0"
      k3="10"
      k4="0" />
  </filter>

  <image
    href="mdn.svg"
    x="0"
    y="0"
    width="200"
    height="200"
    filter="url(#composite1)" />
  <image
    href="mdn.svg"
    x="220"
    y="0"
    width="200"
    height="200"
    filter="url(#composite2)" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
