---
title: stroke-miterlimit
slug: Web/SVG/Attribute/stroke-miterlimit
l10n:
  sourceCommit: 4d2346118b6ef233ce9a2b91b95a0295ebe145e2
---

{{SVGRef}}

Das **`stroke-miterlimit`** Attribut ist ein Präsentationsattribut, das ein Limit für das Verhältnis der Gehrungslänge zur {{ SVGAttr("stroke-width") }} festlegt, die verwendet wird, um eine Gehrungsverbindung zu zeichnen. Wenn das Limit überschritten wird, wird die Verbindung von einer Gehrung zu einer Fase konvertiert.

> [!NOTE]
> Als Präsentationsattribut kann `stroke-miterlimit` als CSS-Eigenschaft verwendet werden. Siehe {{cssxref('stroke-miterlimit')}} für mehr Informationen.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tref')}}
- {{SVGElement('tspan')}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 38 30" xmlns="http://www.w3.org/2000/svg">
  <!-- Wirkung des Standard-Gehrungslimits -->
  <path
    stroke="black"
    fill="none"
    stroke-linejoin="miter"
    id="p1"
    d="M1,9 l7   ,-3 l7   ,3
       m2,0 l3.5 ,-3 l3.5 ,3
       m2,0 l2   ,-3 l2   ,3
       m2,0 l0.75,-3 l0.75,3
       m2,0 l0.5 ,-3 l0.5 ,3" />

  <!-- Wirkung des kleinsten Gehrungslimits (1) -->
  <path
    stroke="black"
    fill="none"
    stroke-linejoin="miter"
    stroke-miterlimit="1"
    id="p2"
    d="M1,19 l7   ,-3 l7   ,3
       m2, 0 l3.5 ,-3 l3.5 ,3
       m2, 0 l2   ,-3 l2   ,3
       m2, 0 l0.75,-3 l0.75,3
       m2, 0 l0.5 ,-3 l0.5 ,3" />

  <!-- Wirkung eines großen Gehrungslimits (8) -->
  <path
    stroke="black"
    fill="none"
    stroke-linejoin="miter"
    stroke-miterlimit="8"
    id="p3"
    d="M1,29 l7   ,-3 l7   ,3
       m2, 0 l3.5 ,-3 l3.5 ,3
       m2, 0 l2   ,-3 l2   ,3
       m2, 0 l0.75,-3 l0.75,3
       m2, 0 l0.5 ,-3 l0.5 ,3" />

  <!-- die folgenden pinken Linien heben die Position des Pfades für jeden Strich hervor -->
  <path
    stroke="pink"
    fill="none"
    stroke-width="0.05"
    d="M1, 9 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3
      M1,19 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3
      M1,29 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
</svg>
```

{{EmbedLiveSample("Beispiel", '100%', 400)}}

Wenn sich zwei Liniensegmente in einem scharfen Winkel treffen und `miter`-Verbindungen für {{ SVGAttr("stroke-linejoin") }} angegeben wurden, kann es möglich sein, dass sich die Gehrung weit über die Dicke der Linie, die den Pfad umrandet, hinaus erstreckt. Das `stroke-miterlimit`-Verhältnis wird verwendet, um zu definieren, wann das Limit überschritten wird. Wenn dies der Fall ist, wird die Verbindung von einer Gehrung zu einer Fase konvertiert.

Das Verhältnis von Gehrungslänge (Abstand zwischen der äußeren Spitze und der inneren Ecke der Gehrung) zur {{ SVGAttr("stroke-width") }} steht in direktem Zusammenhang mit dem Winkel (Theta) zwischen den Segmenten im Benutzerrraum durch die Formel:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mstyle displaystyle="true"><mi>stroke-miterlimit</mi><mo>=</mo><mfrac><mrow><mi>miterLength</mi></mrow><mrow><mi>stroke-width</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mrow><mi>sin</mi><mrow><mo>(</mo><mfrac><mrow><mo>θ</mo></mrow><mrow><mn>2</mn></mrow></mfrac><mo>)</mo></mrow></mrow></mrow></mfrac></mstyle><annotation encoding="TeX">\text{stroke-miterlimit} = \frac{\text{miterLength}}{\text{stroke-width}} = \frac{1}{\sin\left(\frac{\theta}{2}\right)}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Zum Beispiel konvertiert ein Gehrungslimit von 1.414 Gehrungen zu Fasen für Theta kleiner als 90 Grad, ein Limit von 4.0 konvertiert sie für Theta kleiner als ungefähr 29 Grad, und ein Limit von 10.0 konvertiert sie für Theta kleiner als ungefähr 11.5 Grad.

## Nutzungskontext

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>4</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Der Wert von `stroke-miterlimit` muss größer oder gleich 1 sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
