---
title: stroke-miterlimit
slug: Web/SVG/Attribute/stroke-miterlimit
l10n:
  sourceCommit: 4d2346118b6ef233ce9a2b91b95a0295ebe145e2
---

{{SVGRef}}

Das Attribut **`stroke-miterlimit`** ist ein Präsentationsattribut, das ein Limit für das Verhältnis der Länge der Schräge zur {{ SVGAttr("stroke-width") }} definiert, die verwendet wird, um eine Schrägenverbindung zu zeichnen. Wenn das Limit überschritten wird, wird die Verbindung von einer Schräge zu einer Fase geändert.

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
  <!-- Impact of the default miter limit -->
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

  <!-- Impact of the smallest miter limit (1) -->
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

  <!-- Impact of a large miter limit (8) -->
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

  <!-- the following pink lines highlight the position of the path for each stroke -->
  <path
    stroke="pink"
    fill="none"
    stroke-width="0.05"
    d="M1, 9 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3
      M1,19 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3
      M1,29 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 400)}}

Wenn sich zwei Liniensegmente in einem scharfen Winkel treffen und `miter`-Verbindungen für {{ SVGAttr("stroke-linejoin") }} festgelegt wurden, kann es möglich sein, dass die Schräge weit über die Dicke der die Pfadlinie überziehenden Linie hinausgeht. Das Verhältnis von `stroke-miterlimit` wird verwendet, um zu definieren, wann das Limit überschritten ist; in diesem Fall wird die Verbindung von einer Schräge zu einer Fase geändert.

Das Verhältnis der Schrägenlänge (Abstand zwischen der äußeren Spitze und der inneren Ecke der Schräge) zu {{ SVGAttr("stroke-width") }} steht in direktem Zusammenhang mit dem Winkel (Theta) zwischen den Segmenten im Benutzerraum durch die Formel:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mstyle displaystyle="true"><mi>stroke-miterlimit</mi><mo>=</mo><mfrac><mrow><mi>miterLength</mi></mrow><mrow><mi>stroke-width</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mrow><mi>sin</mi><mrow><mo>(</mo><mfrac><mrow><mo>θ</mo></mrow><mrow><mn>2</mn></mrow></mfrac><mo>)</mo></mrow></mrow></mrow></mfrac></mstyle><annotation encoding="TeX">\text{stroke-miterlimit} = \frac{\text{miterLength}}{\text{stroke-width}} = \frac{1}{\sin\left(\frac{\theta}{2}\right)}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Zum Beispiel: Ein Schrägenlimit von 1.414 wandelt Schrägen in Fasen um, wenn der Winkel weniger als 90 Grad beträgt, ein Limit von 4.0 wandelt sie bei einem Winkel von weniger als etwa 29 Grad um, und ein Limit von 10.0 wandelt sie bei einem Winkel von weniger als etwa 11.5 Grad um.

## Verwendungskontext

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
