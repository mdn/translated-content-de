---
title: cx
slug: Web/SVG/Attribute/cx
l10n:
  sourceCommit: 29a5380c100ee4ca462db3690ad4065a9d23895c
---

{{SVGRef}}

Das **`cx`** Attribut definiert die x-Achsen-Koordinate eines Mittelpunktes.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("radialGradient")}}

> [!NOTE]
> Als _Geometrieeigenschaft_ kann {{cssxref("cx")}} auch als CSS-Eigenschaft für `<circle>` und `<ellipse>` verwendet werden.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <radialGradient cx="25%" id="myGradient">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cx="50" cy="50" r="45" />
  <ellipse cx="150" cy="50" rx="45" ry="25" />
  <rect x="205" y="5" width="90" height="90" fill="url(#myGradient)" />
</svg>
```

{{EmbedLiveSample("Example", 100, 100)}}

## circle

Für {{SVGElement('circle')}} definiert `cx` die x-Achsen-Koordinate des Mittelpunktes der Form.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("length-percentage")}}</td>
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

> [!NOTE]
> Die x-Achsen-Koordinate des Mittelpunktes des `<circle>` kann auch mit der {{cssxref("cx")}} _Geometrieeigenschaft_ definiert werden. Wenn im CSS festgelegt, überschreibt der `cx`-Wert der Eigenschaft den `cx`-Attributwert.

## ellipse

Für {{SVGElement('ellipse')}} definiert `cx` die x-Achsen-Koordinate des Mittelpunktes der Form.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("length-percentage")}}</td>
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

> [!NOTE]
> Die x-Achsen-Koordinate des Mittelpunktes der `<ellipse>` kann auch mit der {{cssxref("cx")}} _Geometrieeigenschaft_ definiert werden. Wenn im CSS festgelegt, überschreibt der `cx`-Wert der Eigenschaft den `cx`-Attributwert.

## radialGradient

Für {{SVGElement('radialGradient')}} definiert `cx` die x-Achsen-Koordinate des Endkreises für den radialen Verlauf.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("length-percentage")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>50%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 34 10" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient cx="0" id="myGradient000">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cx="50%" id="myGradient050">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cx="100%" id="myGradient100">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>
  </defs>

  <rect
    x="1"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient000)"
    stroke="black" />
  <rect
    x="13"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient050)"
    stroke="black" />
  <rect
    x="25"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient100)"
    stroke="black" />
</svg>
```

{{EmbedLiveSample('radialGradient', 150, '100%')}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{SVGAttr("cy")}}
- {{SVGAttr("r")}}
- {{SVGAttr("rx")}}
- {{SVGAttr("ry")}}
- Geometrieeigenschaften: {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}